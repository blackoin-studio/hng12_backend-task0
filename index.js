const express = require("express");
const cors = require("cors");
const job = require("./cron");

const app = express();
const PORT = process.env.PORT || 5000;
job.start;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "uriellexa99@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/blackoin-studio/hng12_backend-task0",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
