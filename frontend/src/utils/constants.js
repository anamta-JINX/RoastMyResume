export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "/api";

export const ROAST_LEVELS = [
  {
    id: "savage",
    label: "Savage",
    emoji: "🔥",
    description: "Funny, sarcastic, sharp, but still useful."
  },
  {
    id: "brutal",
    label: "Brutal",
    emoji: "💀",
    description: "Painfully honest. Your resume will need emotional support."
  },
  {
    id: "make_me_bleed",
    label: "Make Me Bleed",
    emoji: "🩸",
    description: "Maximum intensity. Still focused on the resume, not personal attacks."
  }
];

export const ACCEPTED_RESUME_TYPES = ".pdf,.docx";

export const PREMIUM_TOKEN = "healing-journey-unlocked";
