import express from "express";

import { downloadHealedResume } from "../controllers/download.controller.js";
import { requirePremium } from "../middleware/premium.middleware.js";
import { asyncHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.post(
  "/healed-resume",
  requirePremium,
  asyncHandler(downloadHealedResume)
);

export default router;