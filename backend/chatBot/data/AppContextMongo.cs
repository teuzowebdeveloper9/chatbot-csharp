using backend.chatbot.models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace backend.chatbot.data
{
  public class AppContextMongo
  {
    private readonly ImongoDatabase database;

    public AppContextMongo(Iconfiguration configuration)
    {
      string connetionString = "mongodb://teuzo:teuzo123@localhost:27017";
      var Client = new MongoClient(connetionString);
      database = Client.GetDatabase("chatbotdb");
    }
  }
}