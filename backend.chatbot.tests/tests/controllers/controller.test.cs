using Xunit;
using Moq;
using backend.chatbot.controllers;
using backend.chatbot.services;
using backend.chatbot.DTOs;
using backend.chatbot.models;
using Microsoft.AspNetCore.Mvc;

namespace backend.chatbot.tests.controllers
{
  public class UserControllerTests
  {
    private readonly Mock<UserService> _userServiceMock;
    private readonly UserController _controller;

    public UserControllerTests()
    {
      _userServiceMock = new Mock<UserService>();
      _controller = new UserController(_userServiceMock.Object);
    }

    [Fact]
    public async Task Register_ShouldReturnCreated_WhenValidUser()
    {

      var dto = new CreateUserDto
      {
        Name = "Teuzo",
        Email = "teuzo@email.com",
        Password = "123456"
      };

      var expectedUser = new User
      {
        Id = 1,
        Name = dto.Name,
        Email = dto.Email,
        Password = "hashed..."
      };

      _userServiceMock
        .Setup(us => us.RegisterUserAsync(dto))
        .ReturnsAsync(expectedUser);


      var result = await _controller.Register(dto);


      var createdResult = Assert.IsType<CreatedResult>(result);
      var returnedUser = Assert.IsType<User>(createdResult.Value);
      Assert.Equal(expectedUser.Id, returnedUser.Id);
    }
    [Fact]
    public async Task Login_ShouldReturnOk_WhenCredentialsAreValid()
    {

      var dto = new LoginUserDto
      {
        Email = "teuzo@email.com",
        Password = "123456"
      };

      var expectedUser = new User
      {
        Id = 1,
        Name = "Teuzo",
        Email = dto.Email,
        Password = "hashed..."
      };

      _userServiceMock
        .Setup(us => us.LoginUserAsync(dto))
        .ReturnsAsync(expectedUser);


      var result = await _controller.Login(dto);

      var okResult = Assert.IsType<OkObjectResult>(result);
      var returnedUser = Assert.IsType<User>(okResult.Value);
      Assert.Equal(expectedUser.Email, returnedUser.Email);
    }
    [Fact]
    public async Task Delete_ShouldReturnNoContent_WhenUserDeleted()
    {

      var dto = new DeleteUserDto { Id = 1 };

      var deletedUser = new User { Id = dto.Id, Email = "teste@teste.com", Name = "Teuzo" };

      _userServiceMock
        .Setup(us => us.DeleteUserAsync(dto))
        .ReturnsAsync(deletedUser);


      var result = await _controller.Delete(dto);


      Assert.IsType<NoContentResult>(result);
    }


  }
}
