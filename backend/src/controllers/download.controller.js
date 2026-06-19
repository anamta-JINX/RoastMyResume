import ApiError from "../utils/ApiError.js";
import {
  createDocxResumeBuffer,
  createPdfResumeBuffer,
  getResumeFileName
} from "../services/resumeBuilder.service.js";

function normalizeFormat(format = "docx") {
  const cleanFormat = String(format).toLowerCase().trim();

  if (cleanFormat === "pdf") return "pdf";
  return "docx";
}

function validateHealedResume(healedResume) {
  if (!healedResume || typeof healedResume !== "object") {
    throw new ApiError(
      400,
      "Healed resume data is required before download."
    );
  }

  const resume = healedResume.improvedResume || healedResume;

  if (!resume.summary && !resume.headline && !resume.skills) {
    throw new ApiError(
      400,
      "Invalid healed resume data. Please heal the resume first."
    );
  }
}

export async function downloadHealedResume(req, res) {
  const format = normalizeFormat(req.body.format);
  const healedResume = req.body.healedResume;

  validateHealedResume(healedResume);

  const fileBuffer =
    format === "pdf"
      ? createPdfResumeBuffer(healedResume)
      : await createDocxResumeBuffer(healedResume);

  const fileName = getResumeFileName(format);

  res.setHeader(
    "Content-Type",
    format === "pdf"
      ? "application/pdf"
      : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );

  res.setHeader(
    "Content-Disposition",
    `attachment; filename="${fileName}"`
  );

  res.send(fileBuffer);
}

export function testDownloadFormat(format) {
  return normalizeFormat(format);
}