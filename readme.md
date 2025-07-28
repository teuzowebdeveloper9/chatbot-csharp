# High Capital ChatBot Project

## Table of Contents

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
- 
### Desenvolvido por

- [@teuzowebdeveloper9](https://github.com/teuzowebdeveloper9)
