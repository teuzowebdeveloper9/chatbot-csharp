using Xunit;
using Moq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.chatbot.controllers;
using backend.chatbot.services;
using backend.chatbot.DTOs;
using backend.chatbot.models;

namespace backend.chatbot.tests
{
  public class ChatBotControllerTests
  {
    private readonly Mock<ChatBotService> _mockService;
    private readonly ChatBotController _controller;

    public ChatBotControllerTests()
    {
      _mockService = new Mock<ChatBotService>();
      _controller = new ChatBotController(_mockService.Object);
    }

    [Fact]
    public async Task CreateSession_ReturnsCreated_WhenValid()
    {

      var dto = new CreateSessionDto { UserName = "Teuzo" };
      var session = new ChatSession { Id = "123", UserName = "Teuzo" };

      _mockService
        .Setup(s => s.createChatSessionAsync(dto))
        .ReturnsAsync(session);


      var result = await _controller.CreateSession(dto);


      var createdResult = Assert.IsType<CreatedResult>(result);
      Assert.Equal($"/api/chat/session/{session.Id}", createdResult.Location);
      Assert.Equal(session, createdResult.Value);
    }

    [Fact]
    public async Task CreateSession_ReturnsBadRequest_WhenInvalid()
    {

      _controller.ModelState.AddModelError("UserName", "Required");


      var result = await _controller.CreateSession(new CreateSessionDto());


      Assert.IsType<BadRequestObjectResult>(result);
    }

    [Fact]
    public async Task PostMessage_ReturnsOk_WhenValid()
    {

      var sessionId = "123";
      var userMessage = "Oi, tudo bem?";
      var session = new ChatSession { Id = sessionId, UserName = "Teuzo" };

      _mockService
        .Setup(s => s.sendMessageAsync(sessionId, userMessage))
        .ReturnsAsync(session);


      var result = await _controller.PostMessage(sessionId, userMessage);

      var okResult = Assert.IsType<OkObjectResult>(result);
      Assert.Equal(session, okResult.Value);
    }

    [Fact]
    public async Task PostMessage_ReturnsBadRequest_WhenMessageIsEmpty()
    {

      var sessionId = "123";
      var userMessage = "";


      var result = await _controller.PostMessage(sessionId, userMessage);


      Assert.IsType<BadRequestObjectResult>(result);
    }
  }
}
