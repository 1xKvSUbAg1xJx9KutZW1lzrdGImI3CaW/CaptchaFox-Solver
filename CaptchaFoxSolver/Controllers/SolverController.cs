using CaptchaFoxSolver.Entities;
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
    public async Task<IActionResult> SolveAsync([FromHeader] string authorization, ApiSolveRequest payload)
    {
        if (authorization != Program.Config.AuthorizationToken)
            return Unauthorized();

        var sw = Stopwatch.StartNew();
        if (!string.IsNullOrEmpty(payload.ProxyUrl))
            _solver.SetProxy(payload.ProxyUrl);
        var solution = await _solver.SolveAsync(payload.WebsiteUrl, payload.CaptchaKey);
        sw.Stop();

        return Ok(new
        {
            time = Math.Round(sw.Elapsed.TotalSeconds, 2),
            solution
        });
    }
}