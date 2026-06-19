import express from "express";

import { getRoastLevels, roastResume } from "../controllers/roast.controller.js";
import { uploadResume } from "../middleware/upload.middleware.js";
import { asyncHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.get("/levels", asyncHandler(getRoastLevels));

router.post(
  "/",
  uploadResume,
  asyncHandler(roastResume)
);

export default router;