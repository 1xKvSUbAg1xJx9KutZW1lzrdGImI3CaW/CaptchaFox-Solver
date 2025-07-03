
using System.Net;
using System.Reflection.PortableExecutable;
using System.Text;
using System.Text.Json;

namespace CaptchaFoxSolver;

public class TlsClientWrapper : HttpClientHandler
{
    private readonly string _sessionId = Guid.NewGuid().ToString();
    private readonly HttpClient _cl = new HttpClient();

    public TlsClientWrapper()
        => _cl.DefaultRequestHeaders.Add("x-api-key", "my-auth-key-1");

    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var headers = request.Headers.ToDictionary(x => x.Key, x=>string.Join(' ', x.Value));

        if(request.Content != null)
        {
            foreach (var header in request.Content.Headers)
                headers[header.Key] = string.Join(' ', header.Value);
        }

        string? proxyUrl = null;

        if (UseProxy && Proxy is WebProxy proxy)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(proxy.Address!.Scheme + "://");
            if (proxy.Credentials is NetworkCredential credentials)
                sb.Append(credentials.UserName + ":" + credentials.Password + "@");
            sb.Append(proxy.Address.Host);
            sb.Append(":" + proxy.Address.Port);


            proxyUrl = sb.ToString();
        }

        using var resp = await _cl.PostAsJsonAsync("http://127.0.0.1:8080/api/forward", new
        {
            withRandomTLSExtensionOrder = false,
            tlsClientIdentifier= "firefox_135",
            requestUrl = request.RequestUri!.ToString(),
            requestMethod = request.Method.Method.ToUpper(),
            headers,
            proxyUrl,
            isByteRequest = request.Content != null,
            withDefaultCookieJar = true,
            sessionid = _sessionId,
            requestBody = request.Content == null ? null : Convert.ToBase64String(await request.Content.ReadAsByteArrayAsync())
        });

        var json = await resp.Content.ReadFromJsonAsync<JsonElement>();

        //Console.WriteLine(json.GetProperty("body").GetString()!);

        return new HttpResponseMessage {
            Content = new StringContent(json.GetProperty("body").GetString()!),
            StatusCode = (HttpStatusCode)json.GetProperty("status").GetInt32()!
        };
    }
}
