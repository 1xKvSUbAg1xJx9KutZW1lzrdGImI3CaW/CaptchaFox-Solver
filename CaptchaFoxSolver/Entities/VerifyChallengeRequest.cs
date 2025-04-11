using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class VerifyChallengeRequest
{
    [JsonPropertyName("sk")] public required string SiteKey { get; set; }
    [JsonPropertyName("mv")] public required int[] CursorPositions { get; set; }
    [JsonPropertyName("t")] public required float Time { get; set; }
    [JsonPropertyName("p")] public required float Solution { get; set; }
    [JsonPropertyName("h")] public required string HParam { get; set; }
    [JsonPropertyName("cs")] public required Dictionary<string, object> Heuristics { get; set; }
    [JsonPropertyName("k")] public required uint PoWSolution { get; set; }
    [JsonPropertyName("type")] public required string Type { get; set; }
    [JsonPropertyName("host")] public required string Host { get; set; }
}