using HtmlAgilityPack;
using Microsoft.AspNetCore.Components.Web;
using SixLabors.ImageSharp.Metadata;
using System;
using System.Numerics;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using UAParser;

namespace CaptchaFoxSolver;

public class HeuristicGenerator
{
    private static readonly string[] _availableLanguages = ["en-US", "en-GB", "zh-CN", "ja-JP", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI",
"en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH",
"en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK",
"en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB",
"en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY",
"en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE",
"en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR",
"en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT",
"en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL",
"en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN",
"en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE",
"en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ",
"en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG"];
    private static readonly Vector2[] _availableResolutions = [
        new(1920, 1080),
        new(1440, 900),
        new(2560, 1440),
        new(3840, 2160),
        new(1280, 720),
        new(1360, 768),
        new(1600, 900)
    ];
    private static float[] _pxRatios = [1, 1.25f, 1.5f, 2.5f, 1.75f];
    private static readonly Dictionary<int, MethodInfo> _methods = new();
    private static byte[] _coreCountOptions = [16, 8, 12, 4];
    private static string[] _windowProperties;
    private static string[] _documentProperties;
    private static string[] _navigatorProperties;

    private static AvailableGpu[] _gpus;

    private UAParser.ClientInfo _clientInfo;
    private Uri _path;
    private bool _isBrave;
    private string _userAgent;
    private bool _isChromium;
    private bool _lightTheme;
    private byte _coreCount;
    private AvailableGpu _gpu;
    private string _language;
    private Vector2 _resolution;
    private Vector2 _resolutionJitter;
    private float _pxRatio;

    public HeuristicGenerator(Uri path, string userAgent)
    {
        _path = path;
        _userAgent = userAgent;
        _clientInfo = UAParser.Parser.GetDefault().Parse(_userAgent);
        _isBrave = userAgent.Contains("Brave/");
        _isChromium = _clientInfo.UA.Family == "Chrome";
        _lightTheme = Random.Shared.NextSingle() > .5;

        _language = _availableLanguages[Random.Shared.Next(_availableLanguages.Length)];
        _language = "en-GB";

        _coreCount = _coreCountOptions[Random.Shared.Next(_coreCountOptions.Length)];

        _resolution = _availableResolutions[Random.Shared.Next(_availableResolutions.Length)];
        _pxRatio = _pxRatios[Random.Shared.Next(_pxRatios.Length)];
        _resolutionJitter = new Vector2(Random.Shared.Next(500), Random.Shared.Next(500));

        _gpu = _gpus[Random.Shared.Next(_gpus.Length)];
    }

    public async Task<OrderedDictionary<string, object>> GenerateHeuristicAsync()
    {
        var syntheticHeuristics = new OrderedDictionary<string, object>();

        foreach(var method in _methods.OrderBy(x =>x.Key))
        {
            var key = "CF" + method.Key.ToString().PadLeft(4, '0');

            if (method.Value.GetCustomAttribute<AsyncStateMachineAttribute>() != null)
                syntheticHeuristics.Add(key, await (Task<string[]>)method.Value.Invoke(this, null)!);
            else
                syntheticHeuristics.Add(key, method.Value.Invoke(this, null)!);
        }

        File.WriteAllText("sneed.txt", JsonSerializer.Serialize(syntheticHeuristics));

        return syntheticHeuristics;
    }

    [HeuristicIndex(100), HeuristicIndex(105)]
    private bool AlwaysFalse()
        => false;

    [HeuristicIndex(101)]
    private bool IsLightMode()
        => _lightTheme;

    [HeuristicIndex(102)]
    private object RecursionTest()
    {
        int depth = 10000 + Random.Shared.Next(20000);

        return new
        {
            depth = depth,
            msg = "too much recursion",
            name = "InternalError",
            length = depth - Random.Shared.Next(6000)
        };
    }

    [HeuristicIndex(103)]
    private bool WidthGreaterThanMinusOne()
        => true;

    [HeuristicIndex(104)]
    private bool IsWindowProcessDefined()
        => false;

    [HeuristicIndex(106)]
    private /*object*/ long DeviceMemory()
        => /*_isChromium ? 8 :*/ /*false*/ DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    [HeuristicIndex(107)]
    private object OsCpu()
    {
        if (_isChromium)
            return false;
        var match = Regex.Match(_userAgent, @"Mozilla\/5.0 \(([a-zA-Z0-9 ;.]{0,}); rv");
        return match.Groups[1].Value;
    }

    [HeuristicIndex(108)]
    private int GetCoreCount()
        => /*_coreCount*/ Random.Shared.Next(-5, 5) * 60;

    [HeuristicIndex(109)]
    private bool DeviceMotionEventsDefined()
        => false;

    [HeuristicIndex(110)]
    private object GetNotificationSettings()
        => new { state = "prompt", permission = "default" };

    [HeuristicIndex(111)]
    private string[] GetNavigatorLanguages()
        => [_language, "en"];

    [HeuristicIndex(112)]
    private bool SharedArrayBuffersAvailable()
        => false;

    [HeuristicIndex(113)]
    private bool WebdriverAvailable()
        => false;

    [HeuristicIndex(114)]
    private string[] GetWebGLDeviceInfo()
    {
        List<string> gpuVendorOut = new();

        if (_isChromium)
            gpuVendorOut.Add("Google Inc. (NVIDIA)");
        else gpuVendorOut.Add("Mozilla");

        gpuVendorOut.Add(_gpu.Render);

        if (_isChromium)
        {
            gpuVendorOut.Add("WebKit");
            gpuVendorOut.Add("WebKit WebGL");
            gpuVendorOut.Add("WebGL 1.0 (OpenGL ES 2.0 Chromium)");
        }
        else gpuVendorOut.Add("WebGL 1.0");

        return gpuVendorOut.ToArray();
    }

    [HeuristicIndex(115)]
    private string GetUserAgentString()
        => _userAgent;

    //TODO: might only work on chrome
    [HeuristicIndex(116)]
    private object GetUserAgentData()
    {
        if (!_isChromium)
            return false;

        return new
        {
            brands = new object[] {
                new
                {
                    brand = "Google Chrome",
                    version = _clientInfo.UA.Major
                },
                new
                {
                    brand = "Chromium",
                    version = _clientInfo.UA.Major
                },
                new
                {
                    brand = "Not/A)Brand",
                    version = 24
                }
            },
            mobile = false,
            platform = _clientInfo.OS.Family
        };
    }

    [HeuristicIndex(117)]
    private string GetNavigatorVendor()
        => _isChromium ? "Google Inc." : "";

    //TODO: anything other than windows
    [HeuristicIndex(118)]
    private string GetNavigatorPlatform()
        => "Win32";

    [HeuristicIndex(119)]
    private string GetProductSub()
        => _isChromium ? "20030107" : "20100101";

    [HeuristicIndex(120)]
    private object GetScreenParameters()
        => new
        {
            width = (int)_resolution.X,
            height = (int)_resolution.Y,
            availW = (int)_resolution.X,
            availH = (int)_resolution.Y - 30,
            clrDepth = 24,
            pxDepth = 24,
            pxRatio = Math.Round(_pxRatio, 2),
            outerW = (int)_resolution.X - (int)_resolutionJitter.X,
            outerH = (int)_resolution.Y - (int)_resolutionJitter.Y
        };

    [HeuristicIndex(121)]
    private string[] GetWebglRenderInfo()
        => [_gpu.Vendor, _gpu.Render];

    [HeuristicIndex(122)]
    private object CanPlayCodecs()
        => new { ogg = "", h264 = "probably", webm = "probably" };

    [HeuristicIndex(123)]
    private bool WeirdChromeCheck()
        => !_isChromium;

    [HeuristicIndex(124)]
    private string[] ListPlugins()
        => ["PDF Viewer:Portable Document Format:internal-pdf-viewer", "Chrome PDF Viewer:Portable Document Format:internal-pdf-viewer", "Chromium PDF Viewer:Portable Document Format:internal-pdf-viewer", "Microsoft Edge PDF Viewer:Portable Document Format:internal-pdf-viewer", "WebKit built-in PDF:Portable Document Format:internal-pdf-viewer"];

    [HeuristicIndex(125)]
    private bool NoTamperingPluginArray()
        => true;

    [HeuristicIndex(126)]
    private string[] GetFormattedMimes()
        => ["Portable Document Format~application/pdf~pdf", "Portable Document Format~text/pdf~pdf"];

    [HeuristicIndex(127)]
    private bool MimeIntegrityCheck()
        => true;

    [HeuristicIndex(128)]
    private string GetWindowCloseCode()
        => "function close() {\n    [native code]\n}";

    [HeuristicIndex(129)]
    private string GetExternalWindow()
        => "[object External]";

    [HeuristicIndex(130)]
    private string[] GetWindowProperties()
        => _windowProperties.OrderBy(x => Random.Shared.NextSingle()).Take(2000).ToArray();

    [HeuristicIndex(131)]
    private string[] GetDocumentProperties()
        => _documentProperties.OrderBy(x => Random.Shared.NextSingle()).ToArray();

    [HeuristicIndex(132)]
    private string[] GetNavigatorProperties()
        => _navigatorProperties.OrderBy(x => Random.Shared.NextSingle()).ToArray();

    [HeuristicIndex(133)]
    private async Task<string[]> GetHtmlPropsAsync()
    {
        using var cl = new HttpClient();
        using var resp = await cl.GetAsync(_path.ToString());
        var doc = new HtmlDocument();
        doc.LoadHtml(await resp.Content.ReadAsStringAsync());

        var attr = doc.DocumentNode.Descendants("html").FirstOrDefault()?.Attributes.Select(x => x.Name).ToArray() ?? [];
        
       return attr;
    }
        //=> ["data-beasties-container"];

    [HeuristicIndex(134)]
    private string IsChromiumIframeCheck()
        => _isChromium ? "object" : "undefined";

    [HeuristicIndex(135)]
    private bool IFrameContentWindow()
        => false;

    [HeuristicIndex(136)]
    private int GetEvalNativeLength()
        => _isChromium ? 33 : 37;

    [HeuristicIndex(137)]
    private bool FunctionToSsringExistsOnObject()
        => false;

    [HeuristicIndex(138)]
    private bool GoofyMobileCheck()
        => false;

    [HeuristicIndex(139)]
    private bool OpenIndexDbErrorHasError()
        => false;

    [HeuristicIndex(140)]
    private bool IsOpenDatabaseDefined()
        => false;

    [HeuristicIndex(141)]
    private bool IsIncognito()
        => false;

    [HeuristicIndex(143), HeuristicIndex(142)]
    private bool NavigatorPluginsIntact()
        => true;

    [HeuristicIndex(144)]
    private bool[] FirstPluginsSame()
        => [true, true];

    [HeuristicIndex(145)]
    private string GetAppVersion()
    {
        if (_isChromium)
            return _userAgent.Split("Mozilla/")[1];
        return $"5.0 ({_clientInfo.OS.Family})";
    }

    [HeuristicIndex(146)]
    private bool IsBrave()
        => _isBrave;

    [HeuristicIndex(147)]
    private bool IsMobile()
        => false;

    [HeuristicIndex(148)]
    private string LocationAndPath()
        => _path.Scheme + "://" + _path.Host + _path.AbsolutePath;

    static HeuristicGenerator()
    {
        var gpus = new List<AvailableGpu>();
        foreach(var gpu in File.ReadAllLines("gpus.txt"))
        {
            var parts = gpu.Split('~');
            gpus.Add(new AvailableGpu(parts[0], parts[1]));
        }

        _navigatorProperties = File.ReadAllLines("navigator.txt");
        _documentProperties = File.ReadAllLines("document.txt");
        _windowProperties = File.ReadAllLines("window.txt");

        _gpus = gpus.ToArray();

        foreach(var method in typeof(HeuristicGenerator).GetMethods(BindingFlags.NonPublic | BindingFlags.Public | BindingFlags.Instance))
        {
            var heuristics = method.GetCustomAttributes<HeuristicIndexAttribute>();
            if (heuristics == null || heuristics.FirstOrDefault() == null)
                continue;
            foreach (var heuristic in heuristics)
                _methods.Add(heuristic.Index, method);
        }
    }
}

[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
public class HeuristicIndexAttribute : Attribute
{
    public readonly int Index;
    public HeuristicIndexAttribute(int index)
        => Index = index;
}

record AvailableGpu(string Vendor, string Render);