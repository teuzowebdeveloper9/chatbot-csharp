using Xunit;
using Moq;
using backend.chatbot.controllers;
using backend.chatbot.services;
using backend.chatbot.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.chatbot.models;

namespace units.tests.controllers
{
  public class UserControllerTests
  {
    [Fact]
    public async Task Register_DeveRetornarCreated_QuandoUsuarioEhCriado()
    {

      var userServiceMock = new Mock<IUserService>();

      var dto = new CreateUserDto
      {
        Name = "Teuzo",
        Email = "teuzo@example.com",
        Password = "123456"
      };

      var userRetornado = new User
      {
        Id = 1,
        Name = dto.Name,
        Email = dto.Email
      };

      userServiceMock.Setup(s => s.RegisterUserAsync(dto))
                     .ReturnsAsync(userRetornado);

      var controller = new UserController(userServiceMock.Object);


      var result = await controller.Register(dto);


      var createdResult = Assert.IsType<CreatedResult>(result);
      Assert.Equal(201, createdResult.StatusCode);
    }
  }
}
