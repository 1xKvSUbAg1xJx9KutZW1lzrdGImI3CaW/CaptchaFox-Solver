using CaptchaFoxSolver.Entities;
using CaptchaFoxSolver.Exceptions;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;
using System.Net;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;

namespace CaptchaFoxSolver;

public sealed class FoxSolver : IDisposable
{
    private readonly HttpClientHandler _hand;
    private readonly HttpClient _cl;

    public FoxSolver()
    {
        _hand = new HttpClientHandler();
        _cl = new HttpClient(_hand);
    }

    public void SetProxy(string proxy)
    {
        var proxyUri = new Uri(proxy);

        _hand.Proxy = new WebProxy(proxyUri.Scheme + "://" + proxyUri.Host + ":" + proxyUri.Port + proxyUri.PathAndQuery);
        if(!string.IsNullOrEmpty(proxyUri.UserInfo))
        {
            var parts = proxyUri.UserInfo.Split(':');
            _hand.Proxy.Credentials = new NetworkCredential(parts[0], parts[1]);
        }
    }

    public async Task<string> SolveAsync(string siteUrl, string siteKey)
    {
        var siteUri = new Uri(siteUrl);

        _cl.DefaultRequestHeaders.Add("Referer", siteUri.GetLeftPart(UriPartial.Authority));
        _cl.DefaultRequestHeaders.Add("Origin", siteUri.GetLeftPart(UriPartial.Authority));

        foreach (var header in Program.Config.Headers)
            _cl.DefaultRequestHeaders.Add(header.Key, header.Value);

        var hParam = await FetchHParamAsync(siteUri, siteKey);
        var taskDetails = await FetchChallengeAsync(siteKey, siteUri.Host, hParam);
        if (taskDetails.Type != "slide")
            throw new UnimplementedTaskException($"task \"{taskDetails.Type}\" is not implemented");

        hParam = taskDetails.HParam;

        //index 0 does not seem important
        var powPrefix = taskDetails.PoWDetails[1].GetString()!; //prefix
        var powDifficulty = Convert.ToInt32(taskDetails.PoWDetails[2].GetString()!, 2); //base 2

        var powSolution = Task.Run(() => ComputePoWSolution(Encoding.UTF8.GetBytes(powPrefix), powDifficulty));
        var imageSolution = ComputeImageSolutionAsync(taskDetails.Challenge.Background);

        await Task.WhenAll(powSolution, imageSolution);

        float solveTime = Random.Shared.NextSingle() * 1.5f + 1.25f;

        //y first, then x
        List<int> cursorPositions = new List<int>();

        //from my sample size of n = 1 its 44 steps per second
        //also add some jitter
        int stepCount = (int)(solveTime * Program.Config.CursorStepsPerSecond) + Random.Shared.Next(-10, 25);
        for (int i = 0; i < stepCount + 1; i++)
        {
            Vector2 point = Vector2.Zero;

            point = new Vector2(await imageSolution * (i / (float)stepCount), MathF.Sin(i / (float)stepCount * MathF.PI * Program.Config.CursorYFrequency) * Program.Config.CursorYAmplitude);

            if(point != Vector2.Zero)
            {
                cursorPositions.Add((int)point.Y);
                cursorPositions.Add((int)point.X);
            }
        }

        using var verifyResp = await _cl.PostAsync("https://api.captchafox.com/captcha/verify", new FoxStreamContent<VerifyChallengeRequest>(new VerifyChallengeRequest
        {
            HParam = hParam,
            Heuristics = GetHeuristics("https://" + siteUri.Host),
            Host = siteUri.Host,
            PoWSolution = await powSolution,
            Type = taskDetails.Type,
            Solution = await imageSolution,
            Time = MathF.Round(solveTime, 2),
            CursorPositions = cursorPositions.TakeLast(80).ToArray(),
            SiteKey = siteKey
        }));

        if(!verifyResp.IsSuccessStatusCode)
            throw new InvalidSolutionException();

        var verificationResponse = (await verifyResp.Content.ReadFromJsonAsync<CaptchaVerifyResponse>())!;
        if (!verificationResponse.Solved)
            throw new InvalidSolutionException();

        return verificationResponse.Token!;
    }

    private async Task<int> ComputeImageSolutionAsync(string challengeImageDataUri)
    {
        var samplePoints = new List<float>();

        var imageSplit = challengeImageDataUri.Split(',');
        using var captchaImage = Image.Load<Rgba32>(Convert.FromBase64String(string.Join(',', imageSplit[1..imageSplit.Length])));
        for (int i = 0; i < Program.Config.SampleN; i++)
        {
            var sampleX = i / Program.Config.SampleN * captchaImage.Width;
            if (captchaImage[(int)sampleX, captchaImage.Height / 2].A > 100)
                samplePoints.Add(sampleX);
        }

        return (int)Math.Round(samplePoints.Sum() / samplePoints.Count() / captchaImage.Width * Program.Config.ChallengeWidth);
    }

    private async Task<ChallengeResponse> FetchChallengeAsync(string siteKey, string hostName, string hParam)
    {
        using var newChallangeResp = await _cl.PostAsync("https://api.captchafox.com/captcha/" + siteKey + "/challenge", new FoxStreamContent<NewChallengeRequest>(new NewChallengeRequest
        {
            Language = "en",
            HParam = hParam,
            Heuristics = GetHeuristics("https://" + hostName),
            Host = hostName,
            PoWSolution = 0,
            Type = "slide"
        }));
        return (await newChallangeResp.Content.ReadFromJsonAsync<ChallengeResponse>())!;
    }

    private Dictionary<string, object> GetHeuristics(string siteUrl)
    {
        var cpy = Program.Heuristics.ToDictionary();
        cpy["CF0148"] = siteUrl;


        return cpy;
    }

    private async Task<string> FetchHParamAsync(Uri siteUri, string siteKey)
    {
        using var getConfigResp = await _cl.GetAsync("https://api.captchafox.com/captcha/" + siteKey + "/config?site=" + siteUri.GetLeftPart(UriPartial.Authority));
        if (!getConfigResp.IsSuccessStatusCode)
            throw new ConfigFetchingException();
        var hParam = (await getConfigResp.Content.ReadFromJsonAsync<SiteKeyConfig>())!.HParam;
        return hParam;
    }

    private unsafe uint ComputePoWSolution(Span<byte> hashPrefix, int difficulty)
    {
        uint depth = 0;

        //uint.MaxValue = 4294967295, which is 10 digits
        //still waiting for a constexpr equivelant in .net :/
        Span<byte> workSet = stackalloc byte[hashPrefix.Length + 10];
        Span<byte> outputBuffer = stackalloc byte[256 / 8];

        hashPrefix.CopyTo(workSet);

        fixed (byte* workPtr = workSet)
        {
            while (true)
            {
                int digits = (int)(Math.Floor(Math.Log10(depth)) + 1);
                if (depth == 0) 
                    digits = 1;

                for (int i = digits - 1; i >= 0; i--)
                    *(uint*)(workPtr + hashPrefix.Length + (digits - 1 - i)) = 48 + (uint)(depth / Math.Pow(10, i)) % 10;

                //false if destination is too small to hold the calculated hash, true otherwise.
                if (!SHA256.TryHashData(new ReadOnlySpan<byte>(workPtr, hashPrefix.Length + digits), outputBuffer, out _))
                    throw new IndexOutOfRangeException();

                int pos = 0;
                for (; pos < difficulty; pos++)
                {
                    if ((pos % 2 == 0 ? (outputBuffer[pos / 2] >> 4) : (outputBuffer[pos / 2] & 0x0F)) != 0)
                        break;
                }

                if (pos == difficulty)
                    return depth;

                depth++;
            }
        }
    }

    public void Dispose()
    {
        _cl.Dispose();
    }
}
