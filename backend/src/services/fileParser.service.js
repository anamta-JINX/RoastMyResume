import fs from "fs/promises";
import path from "path";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

import ApiError from "../utils/ApiError.js";
import { cleanText, isTextTooShort, limitText } from "../utils/cleanText.js";

export function getFileExtension(filePath = "") {
  return path.extname(filePath).toLowerCase();
}

async function parsePdf(filePath) {
  const fileBuffer = await fs.readFile(filePath);
  const data = await pdfParse(fileBuffer);

  return data.text || "";
}

async function parseDocx(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });

  return result.value || "";
}

export async function parseResumeFile(file) {
  if (!file) {
    throw new ApiError(400, "Resume file is required.");
  }

  const extension = getFileExtension(file.originalname || file.path);

  let extractedText = "";

  if (extension === ".pdf") {
    extractedText = await parsePdf(file.path);
  } else if (extension === ".docx") {
    extractedText = await parseDocx(file.path);
  } else {
    throw new ApiError(400, "Unsupported file type. Upload PDF or DOCX only.");
  }

  const cleanedText = cleanText(extractedText);

  if (isTextTooShort(cleanedText)) {
    throw new ApiError(
      400,
      "Could not read enough text from this resume. Try uploading a clearer PDF or DOCX file."
    );
  }

  return limitText(cleanedText, 12000);
}