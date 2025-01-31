# HNG12 Backend - Task 0

## Description

A simple public API that returns an email, current datetime, and GitHub repository URL.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/blackoin-studio/hng12_backend-task0.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   node server.js
   ```

## API Documentation

**Endpoint:** /

**Method:** GET

**Response Format (200 OK)**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Deployment

Deployed at: [https://hng12-backend-task0-k8qq.onrender.com](https://hng12-backend-task0-k8qq.onrender.com)

### Hire Node.js Developers

[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

### 6. Version Control

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 7. Deploy Using Render/Vercel

**For Render:**
- Create an account on Render.
- Create a new web service.
- Connect your GitHub repository.
- Choose Node.js environment.
- Set build command: `npm install`
- Set start command: `node server.js`