using Microsoft.AspNetCore.Mvc;
using backend.chatbot.models;
using backend.chatbot.data;
using backend.chatbot.DTOs;
using BCrypt.Net;
using Microsoft.EntityFrameworkCore;

namespace backend.chatbot.controllers
{
  [ApiController]
  [Route("api/users")]
  public class UserController : ControllerBase
  {
    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> PostAsync(
      [FromServices] AppContextPostgres context,
      [FromBody] CreateUserDto userCreate)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      try
      {
        string PasswordHash = BCrypt
        .Net
        .BCrypt
        .HashPassword(userCreate.Password);

        var User = new User
        {
          Name = userCreate.Name,
          Email = userCreate.Email,
          Password = PasswordHash
        };

        var Entry = await context.Users.AddAsync(User);
        await context.SaveChangesAsync();

        var SavedUser = Entry.Entity;

        return Created(
          $"/api/user/{SavedUser.Id}", SavedUser
        );
      }
      catch (Exception e)
      {
        return StatusCode(500, e.Message);
      }
    }
    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> LoginAsync([FromServices] AppContextPostgres context,
      [FromBody] LoginUserDto userLogin)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      try
      {
        var User = await context
        .Users
        .FirstOrDefaultAsync(U => U.Email == userLogin.Email);

        if (User == null)
          return NotFound("User not found");

        bool PasswordMatch = BCrypt
                             .Net
                             .BCrypt
                             .Verify(userLogin.Password, User.Password);

        if (!PasswordMatch) return Unauthorized("Invalid password");

        return Ok(User);
      }
      catch (Exception e)
      {
        return StatusCode(500, e.Message);
      }
    }
  }
}