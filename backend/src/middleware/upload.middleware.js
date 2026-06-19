import multer from "multer";
import path from "path";
import fs from "fs";

import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

const uploadDir = path.join(process.cwd(), "src", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const allowedMimeTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

const allowedExtensions = [".pdf", ".docx"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const safeName = file.originalname
      .replace(extension, "")
      .replace(/[^a-zA-Z0-9]/g, "-")
      .toLowerCase();

    cb(null, `${Date.now()}-${safeName}${extension}`);
  }
});

function fileFilter(req, file, cb) {
  const extension = path.extname(file.originalname).toLowerCase();

  const isValidMimeType = allowedMimeTypes.includes(file.mimetype);
  const isValidExtension = allowedExtensions.includes(extension);

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
  storage,
  fileFilter,
  limits: {
    fileSize: env.maxFileSizeMb * 1024 * 1024
  }
}).single("resume");