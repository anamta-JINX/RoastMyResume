import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

export function requirePremium(req, res, next) {
  const premiumToken = req.headers["x-premium-token"];

  const isDevUnlocked = env.devUnlockPremium === true;
  const hasDemoPremiumToken = premiumToken === "healing-journey-unlocked";

  if (isDevUnlocked || hasDemoPremiumToken) {
    return next();
  }

  throw new ApiError(
    402,
    "Healing Journey premium is required to download the healed resume."
  );
}