using Microsoft.AspNetCore.Mvc;
using backend.chatbot.DTOs;
using backend.chatbot.services;

namespace backend.chatbot.controllers
{
  [ApiController]
  [Route("api/users")]
  public class UserController : ControllerBase
  {
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
      _userService = userService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] CreateUserDto dto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      try
      {
        var user = await _userService.RegisterUserAsync(dto);
        return Created($"/api/user/{user.Id}", user);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginUserDto dto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      var user = await _userService.LoginUserAsync(dto);
      if (user == null)
        return Unauthorized("E-mail ou senha inválidos");

      return Ok(user);
    }
    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> Delete([FromRoute] DeleteUserDto dto)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      try
      {
        var user = await _userService.DeleteUserAsync(dto);
        if (user == null)
          return NotFound("Usuário não encontrado");

        return NoContent();
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }
  }
}
