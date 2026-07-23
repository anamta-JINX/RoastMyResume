import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["GROQ_MODEL"];

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const env = {
  port: Number(process.env.PORT) || 5000,

  nodeEnv: process.env.NODE_ENV || "development",

  clientUrl:
    process.env.CLIENT_URL || "http://localhost:5173",

  groqApiKey: process.env.GROQ_API_KEY || "",

  groqModel: process.env.GROQ_MODEL,

  maxFileSizeMb:
    Number(process.env.MAX_FILE_SIZE_MB) || 4,

  devUnlockPremium:
    process.env.DEV_UNLOCK_PREMIUM === "true",

  linkedinShareUrl:
    process.env.LINKEDIN_SHARE_URL ||
    "https://www.linkedin.com/sharing/share-offsite/"
};
