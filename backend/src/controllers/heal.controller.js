import fs from "fs/promises";

import { parseResumeFile } from "../services/fileParser.service.js";
import { buildHealPrompt } from "../services/healPrompt.service.js";
import { generateJsonFromGroq } from "../services/groq.service.js";

async function deleteUploadedFile(filePath) {
  if (!filePath) return;

  try {
    await fs.unlink(filePath);
  } catch {
    // Ignore cleanup errors.
  }
}

export async function healResume(req, res) {
  let uploadedFilePath = req.file?.path;

  try {
    const resumeText = await parseResumeFile(req.file);

    const targetRole = req.body.targetRole || "";
    const targetCompany = req.body.targetCompany || "";
    const tone = req.body.tone || "professional";

    const prompt = buildHealPrompt({
      resumeText,
      targetRole,
      targetCompany,
      tone
    });

    const healResult = await generateJsonFromGroq(prompt);

    res.status(200).json({
      success: true,
      message: "Resume healed successfully. Download is locked behind premium.",
      premiumRequired: true,
      data: healResult
    });
  } finally {
    await deleteUploadedFile(uploadedFilePath);
  }
}