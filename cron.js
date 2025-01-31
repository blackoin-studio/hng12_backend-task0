const cron = require("cron");
const https = require("https");
const winston = require("winston");
const path = require("path");

// Configure logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, "cron.log") }),
  ],
});

const backendUrl = "https://hng12-backend-task0-k8qq.onrender.com";

// ping backend
const pingBackend = () => {
  logger.info("Attempting to restart server...");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        logger.info("Server restarted successfully.");
      } else {
        logger.error(
          `Failed to restart server. Status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      logger.error(`Error during restart: ${err.message}`);
    });
};

// Cron job to execute every 14 minutes
const job = new cron.CronJob("*/14 * * * *", pingBackend);

module.exports = { job };
