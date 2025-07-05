using CaptchaFoxSolver.Entities;
using CaptchaFoxSolver.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CaptchaFoxSolver.Controllers;

[ApiController]
[Route("[controller]")]
public class SolverController : ControllerBase
{
    private readonly FoxSolver _solver;

    public SolverController(FoxSolver solver)
        => _solver = solver;

    [HttpPost]
    public async Task<IActionResult> SolveAsync([FromHeader] string? authorization = null, ApiSolveRequest? payload = null)
    {
        if (Program.Config.RequireAuthorization && authorization != Program.Config.AuthorizationToken)
            throw new InvalidAuthorizationException();

        if (payload == null)
            throw new InvalidRequestException("missing request body");
        if (string.IsNullOrEmpty(payload.WebsiteUrl))
            throw new InvalidRequestException("missing \"website_url\" in json body");
        if (string.IsNullOrEmpty(payload.CaptchaKey))
            throw new InvalidRequestException("missing \"captcha_key\" in json body");
        if (string.IsNullOrEmpty(payload.UserAgent))
            throw new InvalidRequestException("missing \"user_agent\" in json body");
        if (Program.Config.RequireProxies && string.IsNullOrEmpty(payload.ProxyUrl))
            throw new InvalidRequestException("server enforces proxy requirement, include \"proxy_url\" in json body");

        try
        {
            var queueWait = Stopwatch.StartNew();
            await Program.Limiter.WaitAsync();
            queueWait.Stop();

            var sw = Stopwatch.StartNew();
            if (!string.IsNullOrEmpty(payload.ProxyUrl))
                _solver.SetProxy(payload.ProxyUrl);
            var solution = await _solver.SolveAsync(payload.WebsiteUrl, payload.CaptchaKey, payload.UserAgent);
            sw.Stop();

            return Ok(new
            {
                time = Math.Round(sw.Elapsed.TotalSeconds, 2),
                solution,
                SemaphoreTime = Math.Round(queueWait.Elapsed.TotalSeconds, 2)
            });
        }
        finally { Program.Limiter.Release(); }
    }
}