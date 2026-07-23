import multer from "multer";
import path from "path";
import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

const allowedMimeTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

const allowedExtensions = [".pdf", ".docx"];

function fileFilter(req, file, cb) {
  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  const isValidMimeType =
    allowedMimeTypes.includes(file.mimetype);

  const isValidExtension =
    allowedExtensions.includes(extension);

  if (!isValidMimeType || !isValidExtension) {
    return cb(
      new ApiError(
        400,
        "Only PDF and DOCX resume files are allowed. Upload .pdf or .docx only."
      )
    );
  }

  cb(null, true);
}

export const uploadResume = multer({
  storage: multer.memoryStorage(),

  fileFilter,

  limits: {
    fileSize:
      env.maxFileSizeMb * 1024 * 1024
  }
}).single("resume");
