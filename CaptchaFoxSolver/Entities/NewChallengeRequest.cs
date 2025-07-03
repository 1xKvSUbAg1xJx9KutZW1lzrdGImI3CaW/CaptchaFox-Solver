using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class NewChallengeRequest
{
    [JsonPropertyName("lng")] public required string Language { get; set; }
    [JsonPropertyName("h")] public required string HParam { get; set; }
    [JsonPropertyName("cs")] public required OrderedDictionary<string, object> Heuristics { get; set; }
    [JsonPropertyName("host")] public required string Host { get; set; }
    [JsonPropertyName("k")] public required int PoWSolution { get; set; }
    [JsonPropertyName("type")] public required string Type { get; set; }
}
