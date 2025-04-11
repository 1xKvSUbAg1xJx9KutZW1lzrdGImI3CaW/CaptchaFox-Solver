namespace CaptchaFoxSolver.Entities;

public class ApiSolveRequest
{
    public required string WebsiteUrl { get; set; }
    public required string CaptchaKey { get; set; }
    public string? ProxyUrl { get; set; }
}
