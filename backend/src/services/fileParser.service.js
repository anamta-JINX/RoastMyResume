import path from "path";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import ApiError from "../utils/ApiError.js";
import {
  cleanText,
  isTextTooShort,
  limitText
} from "../utils/cleanText.js";

export function getFileExtension(fileName = "") {
  return path.extname(fileName).toLowerCase();
}

async function parsePdf(buffer) {
  const data = await pdfParse(buffer);

  return data.text || "";
}

async function parseDocx(buffer) {
  const result = await mammoth.extractRawText({
    buffer
  });

  return result.value || "";
}

export async function parseResumeFile(file) {
  if (!file) {
    throw new ApiError(
      400,
      "Resume file is required."
    );
  }

  if (!file.buffer) {
    throw new ApiError(
      400,
      "The uploaded resume could not be read."
    );
  }

  const extension = getFileExtension(
    file.originalname
  );

  let extractedText = "";

  if (extension === ".pdf") {
    extractedText = await parsePdf(file.buffer);
  } else if (extension === ".docx") {
    extractedText = await parseDocx(file.buffer);
  } else {
    throw new ApiError(
      400,
      "Unsupported file type. Upload PDF or DOCX only."
    );
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
