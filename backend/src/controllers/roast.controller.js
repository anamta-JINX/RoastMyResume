import fs from "fs/promises";

import { parseResumeFile } from "../services/fileParser.service.js";
import {
  buildRoastPrompt,
  getAllowedRoastLevels,
  normalizeRoastLevel
} from "../services/roastPrompt.service.js";
import { generateJsonFromGroq } from "../services/groq.service.js";

async function deleteUploadedFile(filePath) {
  if (!filePath) return;

  try {
    await fs.unlink(filePath);
  } catch {
    // Ignore cleanup errors so the main API response does not fail.
  }
}

export async function getRoastLevels(req, res) {
  res.status(200).json({
    success: true,
    levels: getAllowedRoastLevels(),
    displayLevels: [
      {
        id: "savage",
        label: "Savage",
        description: "Funny, sharp, and sarcastic."
      },
      {
        id: "brutal",
        label: "Brutal",
        description: "Very direct and painfully honest."
      },
      {
        id: "make_me_bleed",
        label: "Make Me Bleed",
        description: "Maximum roast intensity, still career-focused."
      }
    ]
  });
}

export async function roastResume(req, res) {
  let uploadedFilePath = req.file?.path;

  try {
    const roastLevel = normalizeRoastLevel(req.body.level);
    const resumeText = await parseResumeFile(req.file);

    const prompt = buildRoastPrompt({
      resumeText,
      level: roastLevel
    });

    const roastResult = await generateJsonFromGroq(prompt);

    res.status(200).json({
      success: true,
      message: "Resume roasted successfully.",
      data: roastResult
    });
  } finally {
    await deleteUploadedFile(uploadedFilePath);
  }
}