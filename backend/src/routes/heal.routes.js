import express from "express";

import { healResume } from "../controllers/heal.controller.js";
import { uploadResume } from "../middleware/upload.middleware.js";
import { asyncHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.post(
  "/",
  uploadResume,
  asyncHandler(healResume)
);

export default router;