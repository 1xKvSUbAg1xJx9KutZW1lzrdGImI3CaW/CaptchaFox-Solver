using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Text.Json;

namespace CaptchaFoxSolver.Controllers;

[Route("[controller]")]
[ApiController]
public class InfoController : ControllerBase
{
    private static EventHandler? UpdateReceived;

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(GetState());
    }

    [HttpGet("stream")]
    public async Task GetStreamAsync()
    {
        try
        {
            HttpContext.Response.Headers.Append("Content-Type", "text/event-stream");
            await WritePayloadAsync();
#pragma warning disable CS8622 // Nullability of reference types in type of parameter doesn't match the target delegate (possibly because of nullability attributes).
            UpdateReceived += WritePayload;
#pragma warning restore CS8622 // Nullability of reference types in type of parameter doesn't match the target delegate (possibly because of nullability attributes).

            await Task.Delay(-1, HttpContext.RequestAborted);
        }
        catch { }
        finally
        {
#pragma warning disable CS8622 // Nullability of reference types in type of parameter doesn't match the target delegate (possibly because of nullability attributes).
            UpdateReceived -= WritePayload;
#pragma warning restore CS8622 // Nullability of reference types in type of parameter doesn't match the target delegate (possibly because of nullability attributes).
        }

        void WritePayload(object ___, object __)
            => _ = WritePayloadAsync();

        async Task WritePayloadAsync()
        {
            await HttpContext.Response.WriteAsync("data: ", HttpContext.RequestAborted);
            await HttpContext.Response.WriteAsync(JsonSerializer.Serialize(GetState()), HttpContext.RequestAborted);
            await HttpContext.Response.WriteAsync(Environment.NewLine + Environment.NewLine, HttpContext.RequestAborted);
            await HttpContext.Response.Body.FlushAsync(HttpContext.RequestAborted);
        }
    }

    public static void DispatchUpdate()
    {
        try
        {
            UpdateReceived?.Invoke(null, null!);
        }
        catch { }
    }

    private object GetState() => new
    {
        current_load = (Program.Config.MaxConcurrency - Program.Limiter.CurrentCount) / (double)Program.Config.MaxConcurrency,
        is_open = !Program.Config.RequireAuthorization,
        last_update = System.IO.File.GetLastWriteTimeUtc(Process.GetCurrentProcess().MainModule.FileName)
    };
}
