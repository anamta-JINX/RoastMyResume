import { env } from "../config/env.js";

function safeString(value = "") {
  return String(value || "").trim();
}

export function buildLinkedInShareText(roastData = {}) {
  const title = safeString(roastData.title) || "My resume got roasted";

  const summary =
    safeString(roastData.summaryRoast) ||
    safeString(roastData.finalVerdict) ||
    "I ran my resume through RoastMyResume and it humbled me professionally.";

  const score =
    roastData.overallScore !== undefined && roastData.overallScore !== null
      ? `Resume score: ${roastData.overallScore}/100`
      : "";

  return [
    `🔥 ${title}`,
    "",
    summary,
    "",
    score,
    "",
    "I got roasted by RoastMyResume — painful, funny, and honestly useful.",
    "#RoastMyResume #ResumeReview #CareerGrowth #LinkedIn"
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildLinkedInShareUrl({ text = "", appUrl = "" }) {
  const cleanAppUrl = safeString(appUrl) || "https://www.linkedin.com";

  const params = new URLSearchParams({
    url: cleanAppUrl
  });

  const shareUrl = `${env.linkedinShareUrl}?${params.toString()}`;

  return {
    shareUrl,
    copiedText: safeString(text)
  };
}

export function createLinkedInSharePayload(roastData = {}) {
  const text = buildLinkedInShareText(roastData);

  return buildLinkedInShareUrl({
    text,
    appUrl: "https://roastmyresume.app"
  });
}