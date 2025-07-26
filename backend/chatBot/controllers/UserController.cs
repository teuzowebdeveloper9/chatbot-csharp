using Microsoft.AspNetCore.Mvc;
using backend.chatbot.models;
using backend.chatbot.data;
using backend.chatbot.DTOs;

namespace backend.chatbot.controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UserController : ControllerBase
  {
    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> PostAsync(
      [FromServices] AppContextPostgres context,
      [FromBody] CreateUserDto userCreate)
  }
}