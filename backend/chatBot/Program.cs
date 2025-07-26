using backend.chatbot.data;
using backend.chatbot.services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<UserService>();

builder.Services.AddHttpClient();

builder.Services.AddControllers();

builder.Services.AddDbContext<AppContextPostgres>();

builder.Services.AddSingleton<AppContextMongo>();

var apiKey = "AIzaSyDzvqMpVCpPvjTEH21y786AuScb6aj5ydU";

builder.Services.AddSingleton(new GeminiApiClient(new HttpClient(), apiKey));

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();


var app = builder.Build();

app.MapControllers();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
