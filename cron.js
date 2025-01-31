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

const backendUrl = "provide_backend_api_endpoint_that_is_provided_by_rendor";

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
