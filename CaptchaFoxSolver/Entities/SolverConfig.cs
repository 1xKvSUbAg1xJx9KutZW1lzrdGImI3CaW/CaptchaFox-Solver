using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class SolverConfig
{
    [JsonPropertyName("host")] public required string Host { get; set; }
    [JsonPropertyName("authorization_token")] public required string AuthorizationToken { get; set; }
    [JsonPropertyName("require_authorization")] public required bool RequireAuthorization { get; set; }
    [JsonPropertyName("require_proxies")] public required bool RequireProxies { get; set; }
    [JsonPropertyName("challenge_width")] public required float ChallengeWidth { get; set; }
    [JsonPropertyName("solver_sample_n")] public required float SampleN { get; set; }
    [JsonPropertyName("vcursor_steps_per_second")] public required float CursorStepsPerSecond { get; set; }
    [JsonPropertyName("vcursor_y_freq")] public required float CursorYFrequency { get; set; }
    [JsonPropertyName("vcursor_y_ampq")] public required float CursorYAmplitude { get; set; }
    [JsonPropertyName("max_concurrency")] public required int MaxConcurrency { get; set; }
}
