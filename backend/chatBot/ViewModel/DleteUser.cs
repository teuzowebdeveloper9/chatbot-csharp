using System.ComponentModel.DataAnnotations;

namespace backend.chatbot.DTOs
{
  public class DeleteUserDto
  {
    [Required(ErrorMessage = "User ID is required")]
    public int Id { get; set; }
  }
}