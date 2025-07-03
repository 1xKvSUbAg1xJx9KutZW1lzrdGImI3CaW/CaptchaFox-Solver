using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CaptchaFoxSolver.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RenderController : ControllerBase
{
    [HttpGet("/")]
    [HttpGet("/solver")]
    public IActionResult ServeSite()
        => File("index.html", "text/html");
}
