using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class ChallengeResponse
{
    [JsonPropertyName("h")] public required string HParam { get; set; }
    [JsonPropertyName("j")] public required JsonElement[] PoWDetails { get; set; }
    [JsonPropertyName("type")] public required string Type { get; set; }
    [JsonPropertyName("challenge")] public required ChallengeResponseChallengeDetails Challenge { get; set; }
}

public class ChallengeResponseChallengeDetails
{
    [JsonPropertyName("bg")] public required string Background { get; set; }
}