import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { env } from "./config/env.js";
import roastRoutes from "./routes/roast.routes.js";
import healRoutes from "./routes/heal.routes.js";
import downloadRoutes from "./routes/download.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import linkedinRoutes from "./routes/linkedin.routes.js";
import {
  errorHandler,
  notFoundHandler
} from "./middleware/error.middleware.js";

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 80,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Your resume is not that urgent. Try again in a bit."
  }
});

app.use("/api", apiLimiter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    app: "RoastMyResume",
    message: "Backend is alive. Your resume is already nervous."
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    service: "RoastMyResume API",
    environment: env.nodeEnv
  });
});

app.use("/api/roast", roastRoutes);
app.use("/api/heal", healRoutes);
app.use("/api/download", downloadRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/linkedin", linkedinRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;