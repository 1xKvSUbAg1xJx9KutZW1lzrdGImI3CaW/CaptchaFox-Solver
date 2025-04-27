using CaptchaFoxSolver.Entities;
using System;
using System.Security.Cryptography;
using System.Text.Json;

namespace CaptchaFoxSolver;

public class Program
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
    public static SolverConfig Config;
    public static readonly Dictionary<string, object> Heuristics = JsonSerializer.Deserialize<Dictionary<string, object>>(File.ReadAllText("Heuristics.json"))!;
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.

    public static void Main(string[] args)
    {
        if (!File.Exists("Config.json"))
        {
            Console.WriteLine("Modify 'Config.json' to your liking and start the program again");

            Config = new SolverConfig
            {
                AuthorizationToken = string.Join("", RandomNumberGenerator.GetHexString(64, true).Select(x => Random.Shared.NextSingle() > .5 ? char.ToUpper(x) : x)),
                Host = "http://*:5462",
                Headers = new()
                {
                    { "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0" }
                },
                ChallengeWidth = 243,
                SampleN = 50,
                CursorStepsPerSecond = 44,
                CursorYFrequency = 1.5f,
                CursorYAmplitude = 5f,
                RequireAuthorization = true,
                RequireProxies = false
            };
            File.WriteAllText("Config.json", JsonSerializer.Serialize(Config, new JsonSerializerOptions { WriteIndented = true}));

            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();

            Environment.Exit(0);
        }
        else Config = JsonSerializer.Deserialize<SolverConfig>(File.ReadAllText("Config.json"))!;

        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddScoped<FoxSolver>();
        builder.Services.AddControllers(opts =>
        {
            opts.Filters.Add<ExceptionReadabilityFilter>();
        }).AddJsonOptions(opts =>
        {
            opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower;
            opts.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
            opts.JsonSerializerOptions.WriteIndented = true;
        });

        var app = builder.Build();

        if(app.Environment.IsProduction())
            app.UseHttpsRedirection();

        app.MapControllers();

        app.Logger.LogWarning("Repository available at https://github.com/1xKvSUbAg1xJx9KutZW1lzrdGImI3CaW/CaptchaFox-Solver");
        app.Logger.LogWarning("Remember to star the repository or to send a donation :)");
        app.Logger.LogWarning("Issues about anything other than the solver will be closed" + Environment.NewLine + Environment.NewLine + Environment.NewLine);

        app.Run(Config.Host);
    }
}
