import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.port, () => {
  console.log("🔥 RoastMyResume backend started");
  console.log(`🚀 Server running on http://localhost:${env.port}`);
  console.log(`🌍 Environment: ${env.nodeEnv}`);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Promise Rejection:", error);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});