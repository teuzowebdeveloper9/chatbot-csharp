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
  }
}