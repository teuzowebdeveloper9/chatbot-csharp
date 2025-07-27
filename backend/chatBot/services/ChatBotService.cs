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
      _chatSessions = chatSessions;
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
    public async Task<ChatSession> sendMessageAsync(string sessionId, string stringUserMessage)
    {
      var session = await _chatSessions
                          .Find(s => s.Id == sessionId)
                          .FirstOrDefaultAsync();

      if (session == null)
        throw new Exception("Session not found");

      string prompt = PromptCreator.CreatePrompt(session.Bot.Context, stringUserMessage);

      string botResponse = await _geminiApiClient.GenerateContentAsync(prompt);

      var userMsg = new Message
      {
        Role = "user",
        Content = stringUserMessage
      };

      var botMsg = new Message
      {
        Role = "bot",
        Content = botResponse
      };

      var update = Builders<ChatSession>.Update.PushEach(s => s.Messages, new[] { userMsg, botMsg });

      await _chatSessions.UpdateOneAsync(s => s.Id == sessionId, update);

      session.Messages.Add(userMsg);
      session.Messages.Add(botMsg);
      return session;
    }


  }
}
