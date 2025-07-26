using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace backend.chatbot.utils
{
  public class GeminiApiClient
  {
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public GeminiApiClient(HttpClient httpClient, string apiKey)
    {
      _httpClient = httpClient;
      _apiKey = apiKey;
    }

    public async Task<string> GenerateContentAsync(string text)
    {
      var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

      var requestBody = new
      {
        contents = new[]
          {
                    new
                    {
                        parts = new[]
                        {
                            new { text = text }
                        }
                    }
                }
      };

      var json = JsonSerializer.Serialize(requestBody);

      using var requestMessage = new HttpRequestMessage(HttpMethod.Post, url);
      requestMessage.Headers.Add("X-goog-api-key", _apiKey);
      requestMessage.Content = new StringContent(json, Encoding.UTF8, "application/json");

      var response = await _httpClient.SendAsync(requestMessage);

      response.EnsureSuccessStatusCode();

      var responseContent = await response.Content.ReadAsStringAsync();

      return responseContent;
    }
  }
}
