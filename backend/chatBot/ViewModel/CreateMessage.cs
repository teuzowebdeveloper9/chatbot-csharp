using System.ComponentModel.DataAnnotations;

namespace backend.chatbot.DTOs
{
  public class CreateMessageDto
  {
    [Required(ErrorMessage = "message is required")]
    public string UserMessage { get; set; }
  }
}