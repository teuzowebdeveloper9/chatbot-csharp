# High Capital ChatBot Project

## Table of Contents

-[screenshots](#screenshots)

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Backend](#backend)
  - [Databases](#databases)
  - [Data Models](#data-models)
  - [Authentication](#authentication)
  - [API and Routes](#api-and-routes)
- [Frontend](#frontend)
  - [Routing and Navigation](#routing-and-navigation)
  - [UI and State Management](#ui-and-state-management)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Technical Decisions](#technical-decisions)
- [Additional Notes](#additional-notes)

---

## screenshots

<img width="1348" height="634" alt="image" src="https://github.com/user-attachments/assets/476fe79a-0c70-4058-94c2-f7eefaaca0b8" />
<img width="1347" height="634" alt="image" src="https://github.com/user-attachments/assets/eada4196-c81f-4ec4-aadb-5f67486c3a8a" />
<img width="1344" height="624" alt="image" src="https://github.com/user-attachments/assets/f58004ae-0c00-4c86-96aa-7214b28f45d0" />
- Here I used a lot of a recent course I took

<img width="1355" height="633" alt="image" src="https://github.com/user-attachments/assets/b0fe855c-6371-4c87-b0ae-c3c3fc2276bd" />
<img width="1348" height="624" alt="image" src="https://github.com/user-attachments/assets/a3e93ce3-d19e-4c68-9334-c41118d351b1" />
<img width="1366" height="663" alt="image" src="https://github.com/user-attachments/assets/7a50e550-86cc-4841-ae61-762aa6833850" />
- in the black box of this hamburger menu the names are brought from the backend coming from a fetch that is done in a useEffect that is done before the page loads I used this to avoid fields without data in the interface if you click it takes you to the chat

<img width="1355" height="286" alt="image" src="https://github.com/user-attachments/assets/99a98645-e0da-4ede-b140-4ffadf6ef8f7" />
- the url id is the same as the one that comes from the backend and it is shown in the interface of all chats

<img width="957" height="129" alt="image" src="https://github.com/user-attachments/assets/a6e66826-429e-42b8-86ad-08985db15f85" />
- When you log in you get this cookie that will be responsible for guiding your routing through pages controlled by a context called authContext

<img width="1347" height="677" alt="image" src="https://github.com/user-attachments/assets/739866d4-dc4d-4013-82c3-8727b5c2e3ac" />

# mobile

-I had a different experience for all types of screens

<img width="492" height="612" alt="image" src="https://github.com/user-attachments/assets/3159f92d-f009-4044-8437-a881983bd206" />
<img width="231" height="468" alt="image" src="https://github.com/user-attachments/assets/c1b4d8d0-a546-4632-a501-b36dcd5bcdbd" />
<img width="1024" height="224" alt="image" src="https://github.com/user-attachments/assets/1a1b1007-4023-466b-8643-7f9eacf90ec0" />
<img width="212" height="454" alt="image" src="https://github.com/user-attachments/assets/14b4f0b2-1d1a-42fa-9296-edc2a12995a5" />
<img width="208" height="450" alt="image" src="https://github.com/user-attachments/assets/0da92cab-2092-4d98-9133-09bd48a37f9a" />
<img width="209" height="444" alt="image" src="https://github.com/user-attachments/assets/e2b83a8f-79f1-4a7c-862c-cd109b164a5a" />
<img width="206" height="448" alt="image" src="https://github.com/user-attachments/assets/2656ee03-2d76-4b46-ba04-fc4a3f10d488" />

- database

<img width="970" height="511" alt="image" src="https://github.com/user-attachments/assets/5157d9d7-63ae-4828-ac93-acdcd149e600" />
<img width="1356" height="685" alt="image" src="https://github.com/user-attachments/assets/c1320e6d-2e5c-448a-adc6-bdb7cd19b0b8" />

## Project Overview

This project is a chatbot application developed as a technical test for High Capital. It consists of a backend built with C# and .NET, and a frontend built with React and Next.js. The system supports user registration, login, and chat interactions with AI-powered bots.

The backend uses two databases:

- **PostgreSQL (SQL)** for managing users and clients via Entity Framework Core.
- **MongoDB (NoSQL)** for storing chat sessions, including chat context, bot information, and messages.

Both databases run inside Docker containers for easy deployment and management.

---

## Technologies Used

- **Backend:**
  - C# with .NET 7+
  - Entity Framework Core (for PostgreSQL)
  - MongoDB.Driver (official MongoDB driver for .NET)
  - BCrypt.Net (for password hashing)
  - Docker (for running PostgreSQL and MongoDB)
- **Frontend:**
  - React 18+
  - Next.js (App Router strategy)
  - Shadcn UI (component library)
  - Axios (for HTTP requests)
  - Browser cookies (for authentication persistence)
- **AI Model:**
  - Gemini Flash 2.5 (used as chatbot model reference)

---

## Architecture

The system is divided into two main parts:

- **Backend:** Handles user management, authentication, and chat session persistence.
- **Frontend:** Provides a modern UI with dark theme, chat navigation, and user authentication.

---

## Backend

### Databases

- **PostgreSQL:** Used to store user data securely. Entity Framework Core manages migrations and data access.
- **MongoDB:** Used to store chat sessions flexibly, including:
  - Chat context
  - Bot details (name, context)
  - Messages array (user and assistant roles)
  - Creation timestamp

Example MongoDB document structure for a chat session:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "userId": "d6e88b84-f6fc-4c0d-9362-0cc6d7c5f171",
  "bot": {
    "name": "Consultor de Finanças",
    "context": "Você é um especialista em investimentos"
  },
  "messages": [
    { "role": "user", "content": "Qual melhor investimento hoje?" },
    { "role": "assistant", "content": "Renda fixa com CDI alto." }
  ],
  "createdAt": "2025-07-26T14:00:00Z"
}
```

## Data Models

# User Entity: Contains user information such as name, email, and hashed password.

# ChatSession Entity: Maps to MongoDB documents storing chat context and messages.

## Authentication

- Passwords are hashed using BCrypt.Net for security.
- User login status is maintained via browser cookies.
- The user ID stored in cookies is used to filter chat sessions and authorize chat usage.

## API and Routes

- The backend exposes RESTful endpoints for:

## User registration

# User login

- Creating, fetching, and deleting chat sessions
- A .http file is included in the backend project to help understand and test API routes.

## Unit Tests

### UserController Tests

The project includes unit tests for the UserController using xUnit and Moq. These tests ensure the correct behavior of the user registration process.

#### Test Case: Register_DeveRetornarCreated_QuandoUsuarioEhCriado

This test verifies that the `Register` method in the `UserController` returns a `CreatedResult` with a status code of 201 when a user is successfully created.

**Test Setup:**

- Uses Moq to create a mock `IUserService`
- Creates a `CreateUserDto` with sample user data
- Sets up the mock service to return a `User` object when `RegisterUserAsync` is called

**Test Execution:**

- Calls the `Register` method on the `UserController` with the sample DTO
- Asserts that the result is a `CreatedResult`
- Verifies that the status code of the result is 201 (Created)

**Technologies Used:**

- xUnit for test framework
- Moq for mocking dependencies
- Microsoft.AspNetCore.Mvc for controller-related types

This test ensures that the user registration process works correctly and returns the expected result when a new user is created successfully.

# Frontend

- Routing and Navigation
- Built with Next.js using the App Router strategy.
- Dynamic routes are implemented using folder names with square brackets [] to handle variable parameters (e.g., chat IDs).
- This routing strategy simplifies fetching and displaying chat messages based on URL parameters.

## UI and State Management

- Uses Shadcn UI for fast and consistent component styling.
- Implements a dark theme for modern look and feel.
- React context is used to manage user authentication state and pass the user ID throughout the app.
- Axios is used for making HTTP requests to the backend API.
- Cookies are used to persist user login sessions securely.
- prettier to keep my code readable with my npm run prettier script
- I used useEmbla to make a beautiful, functional, and responsive carousel

## Running the Project

# Prerequisites

- Docker installed and running
- .NET SDK installed
- Node.js and npm/yarn installed

# Steps

Start databases with Docker:

## The project includes Docker configurations to run PostgreSQL and MongoDB containers.

Run Backend:

```bash
cd backend
dotnet run
```

# Run Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Usage

- Register a new user via the frontend.
- Login to access the chat interface.
- Create and navigate between chat sessions.
- Chat messages and context are saved in MongoDB.
- User data is securely stored in PostgreSQL.
- Technical Decisions

## Why MongoDB?

MongoDB was chosen for its flexibility in storing chat session data with varying message arrays and bot contexts. This flexibility allows easy extension of chat features without schema migrations.

## Why PostgreSQL?

PostgreSQL provides strong relational data support for user management, ensuring data integrity and security.

## Password Security:

Passwords are hashed with BCrypt and stored securely. Authentication state is maintained with cookies to prevent unauthorized chat access.

# Frontend Routing:

Next.js dynamic routing with [param] folders simplifies chat session navigation and data fetching.

## Additional Notes

- The project was inspired and guided by a recent course, which helped implement modern UI and routing concepts.
- The AI chatbot model referenced is Gemini Flash 2.5.
- The backend .http file can be used to explore and test API endpoints manually.
- The project was developed as a technical test for High Capital and references the company in the frontend UI.

### Desenvolvido por

- [@teuzowebdeveloper9](https://github.com/teuzowebdeveloper9)
