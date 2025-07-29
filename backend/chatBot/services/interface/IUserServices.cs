using backend.chatbot.DTOs;
using backend.chatbot.models;

namespace backend.chatbot.services
{
  public interface IUserService
  {
    Task<User> RegisterUserAsync(CreateUserDto dto);
    Task<User?> LoginUserAsync(LoginUserDto dto);
    Task<User?> DeleteUserAsync(DeleteUserDto dto);
  }
}