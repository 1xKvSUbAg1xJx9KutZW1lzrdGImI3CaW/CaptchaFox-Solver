using System.Text.Json.Serialization;

namespace CaptchaFoxSolver.Entities;

public class SiteKeyConfig
{
    [JsonPropertyName("h")] public required string HParam { get; set; }
}
