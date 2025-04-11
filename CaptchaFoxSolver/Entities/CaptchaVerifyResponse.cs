using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class CaptchaVerifyResponse
{
    [JsonPropertyName("solved")] public bool Solved { get; set; }
    [JsonPropertyName("token")] public string? Token { get; set; }
    [JsonPropertyName("ttl")] public int? Ttl { get; set; }
}
