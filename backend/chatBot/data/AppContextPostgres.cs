using Microsoft.EntityFrameworkCore;
using backend.chatbot.models;

namespace backend.chatbot.data
{
  public class AppContextPostgres : DbContext
  {
    public AppContextPostgres(DbContextOptions<AppContextPostgres> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseNpgsql(
        "Host=localhost;Port=5432;Username=teuzo;Password=teuzo123;Database=chatbotdb"
      );
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>()
      .HasIndex(u => u.Email)
      .IsUnique();


      modelBuilder.Entity<User>()
        .Property(u => u.Name)
        .IsRequired()
        .HasMaxLength(100);

      modelBuilder.Entity<User>()
        .Property(u => u.Email)
        .IsRequired()
        .HasMaxLength(100);

      modelBuilder.Entity<User>()
        .Property(u => u.Password)
        .IsRequired()
        .HasMaxLength(100);
    }
  }
}