namespace backend.chatbot.utils
{
  public static class PasswordHasher
  {
    public static string HashPassword(string password)
    {
      if (string.IsNullOrEmpty(password))
      {
        throw new ArgumentException("Password cannot be null or empty", nameof(password));
      }


      return BCrypt.Net.BCrypt.HashPassword(password);
    }
    public static bool VerifyPassword(string password, string hashedPassword)
    {
      if (string.IsNullOrEmpty(password) || string.IsNullOrEmpty(hashedPassword))
      {
        throw new ArgumentException("Password and hashed password cannot be null or empty");
      }

      return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
    }
  }
}