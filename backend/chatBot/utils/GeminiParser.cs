using System.Text.Json;
using System.Text.RegularExpressions;

namespace backend.chatbot.utils
{
  public static class GeminiResponseParser
  {
    public static string ExtractMessage(string jsonResponse)
    {
      try
      {
        using var doc = JsonDocument.Parse(jsonResponse);
        var root = doc.RootElement;

        var text = root
            .GetProperty("candidates")[0]
            .GetProperty("content")
            .GetProperty("parts")[0]
            .GetProperty("text")
            .GetString();

        if (string.IsNullOrWhiteSpace(text))
          return "Resposta vazia.";


        var cleanText = Regex.Replace(text, @"[^\w\d\s]", " ");


        cleanText = Regex.Replace(cleanText, @"\s+", " ");

        return cleanText.Trim();
      }
      catch (Exception ex)
      {
        return $"Erro ao extrair mensagem: {ex.Message}";
      }
    }
  }
}
