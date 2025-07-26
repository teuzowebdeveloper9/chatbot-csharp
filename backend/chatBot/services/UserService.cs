using backend.chatbot.data;
using backend.chatbot.DTOs;
using backend.chatbot.models;
using backend.chatbot.utils;
using Microsoft.EntityFrameworkCore;

namespace backend.chatbot.services
{
  public class UserService
  {
    private readonly AppContextPostgres context;

    public UserService(AppContextPostgres context)
    {
      this.context = context;
    }

    public async Task<User> RegisterUserAsync(CreateUserDto userCreate)
    {
      var userExists = await context.Users
        .AnyAsync(u => u.Email == userCreate.Email);

      if (userExists)
      {
        throw new ArgumentException("Email already exists");
      }

      var User = new User
      {
        Name = userCreate.Name,
        Email = userCreate.Email,
        Password = BCrypt
                        .Net
                        .BCrypt
                        .HashPassword(userCreate.Password)
      };

      var savedUser = context.Users.Add(User);
      await context.SaveChangesAsync();

      return savedUser.Entity;

    }
    public async Task<User> LoginUserAsync(LoginUserDto userLogin)
    {
      var user = await context.Users
        .FirstOrDefaultAsync(u => u.Email == userLogin.Email);

      if (user == null || !PasswordHasher.VerifyPassword(userLogin.Password, user.Password))
      {
        throw new ArgumentException("Invalid email or password");
      }

      return user;
    }
  }
}