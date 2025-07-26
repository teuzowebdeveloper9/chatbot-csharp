using System.ComponentModel.DataAnnotations;

namespace backend.chatbot.DTOs
{
  public class CreateSessionDto
  {
    [Required(ErrorMessage = "USER ID is required")]
    public int UserId { get; set; }
    [Required(ErrorMessage = "Bot name is required")]
    [StringLength(100, ErrorMessage = "Bot name cannot be longer than 100 characters")]
    public string Name { get; set; } = string.Empty;
    [Required(ErrorMessage = "Bot context is required")]
    public string Context { get; set; } = string.Empty;
  }
}