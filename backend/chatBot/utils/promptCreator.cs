namespace backend.chatbot.utils
{
  public static class PromptCreator
  {
    public static string CreatePrompt(string context, string userMessage)
    {
      if (string.IsNullOrEmpty(context) || string.IsNullOrEmpty(userMessage))
      {
        throw new ArgumentException("Context and user message cannot be null or empty");
      }

      return $"you you must help the user with what he needs and he will give him a context of what to do here => {context} \n\n and this is the user's current problem, help him with this, always respond in the language the user sends the message => {userMessage}";
    }
  }
}