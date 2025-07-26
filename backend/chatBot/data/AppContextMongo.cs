using backend.chatbot.models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace backend.chatbot.data
{
  public class AppContextMongo
  {
    private readonly IMongoDatabase database;

    public AppContextMongo(IConfiguration configuration)
    {
      string connectionString = "mongodb://teuzo:teuzo123@localhost:27017";
      var client = new MongoClient(connectionString);
      database = client.GetDatabase("chatbotdb");
    }

    public IMongoDatabase GetDatabase()
    {
      return database;
    }

    public IMongoCollection<ChatSession> ChatSessions => database.GetCollection<ChatSession>("chatSessions");

  }
}
