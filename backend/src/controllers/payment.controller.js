export async function createMockCheckout(req, res) {
  const plan = req.body.plan || "healing_journey";

  res.status(200).json({
    success: true,
    message: "Mock checkout created. Replace this with Stripe/JazzCash/EasyPaisa later.",
    data: {
      plan,
      premiumToken: "healing-journey-unlocked",
      note: "Use this token in x-premium-token header to unlock resume download during development."
    }
  });
}

export async function verifyMockPayment(req, res) {
  const token = req.body.token;

  const isValid = token === "healing-journey-unlocked";

  res.status(isValid ? 200 : 401).json({
    success: isValid,
    premiumUnlocked: isValid,
    message: isValid
      ? "Healing Journey premium unlocked."
      : "Invalid premium token."
  });
}