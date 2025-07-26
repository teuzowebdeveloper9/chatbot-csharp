using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace backend.chatbot.models
{
  public class ChatSession
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;

    [BsonElement("UserId")]
    public int UserId { get; set; }
    [BsonElement("bot")]
    public BotInfo Bot { get; set; }

    [BsonElement("Messages")]
    public List<Message> Messages { get; set; } = new List<Message>();
    [BsonElement("createdAt")]
    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

  }
  public class BotInfo
  {
    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("context")]
    public string Context { get; set; }

  }
  public class Message
  {
    [BsonElement("role")]
    public string Role { get; set; }

    [BsonElement("content")]
    public string Content { get; set; }
  }
}
