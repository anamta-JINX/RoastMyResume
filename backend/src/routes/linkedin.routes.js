import express from "express";

import {
  createLinkedInShare,
  previewLinkedInPost
} from "../controllers/linkedin.controller.js";
import { asyncHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.post("/share", asyncHandler(createLinkedInShare));
router.post("/preview", asyncHandler(previewLinkedInPost));

export default router;