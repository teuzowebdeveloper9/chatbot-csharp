using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace backend.chatbot.data
{



  public class AppContextPostgresFactory : IDesignTimeDbContextFactory<AppContextPostgres>
  {
    public AppContextPostgres CreateDbContext(string[] args)
    {
      var optionsBuilder = new DbContextOptionsBuilder<AppContextPostgres>();
      optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Username=teuzo;Password=teuzo123;Database=chatbotdb");

      return new AppContextPostgres(optionsBuilder.Options);
    }
  }

}
