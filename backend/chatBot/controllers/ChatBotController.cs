using Microsoft.AspNetCore.Mvc;
using backend.chatbot.DTOs;
using backend.chatbot.services;
using backend.chatbot.models;


namespace backend.chatbot.controllers
{
  [ApiController]
  [Route("api/chat")]
  public class ChatBotController : ControllerBase
  {
    private readonly ChatBotService chatBotService;


    public ChatBotController(ChatBotService chatBotService)
    {
      this.chatBotService = chatBotService;
    }

    [HttpPost("create-session")]
    public async Task<IActionResult> CreateSession([FromBody] CreateSessionDto createSessionDto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      try
      {
        var chatSession = await chatBotService.createChatSessionAsync(createSessionDto);
        return Created($"/api/chat/session/{chatSession.Id}", chatSession);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }
    [HttpPost("{sessionId}/chat/messages")]
    public async Task<IActionResult> PostMessage([FromRoute] string sessionId, [FromBody] string userMessage)
    {
      if (string.IsNullOrWhiteSpace(userMessage))
        return BadRequest("User message cannot be empty");

      try
      {
        var chatSession = await chatBotService.sendMessageAsync(sessionId, userMessage);
        return Ok(chatSession);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }
    [HttpGet("chats/message/{userId}")]
    public async Task<ActionResult<List<ChatSession>>> SearchChatById(int userId)
    {
      try
      {
        var chats = await chatBotService.SearchChatAsync(userId);

        if (chats == null || !chats.Any())
          return NotFound($"no chat with one user with id {userId}");

        return Ok(chats);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Erro interno: {ex.Message}");
      }
    }
    [HttpGet("session/{sessionId}/messages")]
    public async Task<ActionResult<List<Message>>> GetMessagesFromSession(string sessionId)
    {
      try
      {
        var messages = await chatBotService.GetMessagesFromSessionAsync(sessionId);
        if (messages == null)
          return NotFound("Chat session not found");

        return Ok(messages);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Erro interno: {ex.Message}");
      }
    }


  }

}