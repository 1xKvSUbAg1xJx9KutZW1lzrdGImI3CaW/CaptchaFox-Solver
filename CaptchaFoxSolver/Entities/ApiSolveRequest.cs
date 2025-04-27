namespace CaptchaFoxSolver.Entities;

public class ApiSolveRequest
{
    public string? WebsiteUrl { get; set; }
    public string? CaptchaKey { get; set; }
    public string? ProxyUrl { get; set; }
}
