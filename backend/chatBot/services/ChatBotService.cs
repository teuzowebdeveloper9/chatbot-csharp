using backend.chatbot.models;
using backend.chatbot.DTOs;
using MongoDB.Driver;
using backend.chatbot.utils;

namespace backend.chatbot.services
{
  public class ChatBotService
  {
    private readonly GeminiApiClient _geminiApiClient;
    private readonly IMongoCollection<ChatSession> _chatSessions;

    public ChatBotService(GeminiApiClient geminiApiClient, IMongoCollection<ChatSession> chatSessions)
    {
      _geminiApiClient = geminiApiClient;
      _chatSessions = chatSessions; // ✅ usa o parâmetro corretamente
    }

    public async Task<ChatSession> createChatSessionAsync(CreateSessionDto createSessionDto)
    {
      if (createSessionDto == null)
      {
        throw new ArgumentNullException(nameof(createSessionDto), "CreateSessionDto cannot be null");
      }

      var chatSession = new ChatSession
      {
        UserId = createSessionDto.UserId,
        Bot = new BotInfo
        {
          Name = createSessionDto.Name,
          Context = createSessionDto.Context
        },
        CreatedAt = DateTime.UtcNow
      };

      await _chatSessions.InsertOneAsync(chatSession);

      return chatSession;
    }
  }
}
