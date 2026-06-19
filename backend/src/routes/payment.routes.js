import express from "express";

import {
  createMockCheckout,
  verifyMockPayment
} from "../controllers/payment.controller.js";
import { asyncHandler } from "../middleware/error.middleware.js";

const router = express.Router();

router.post("/checkout", asyncHandler(createMockCheckout));
router.post("/verify", asyncHandler(verifyMockPayment));

export default router;