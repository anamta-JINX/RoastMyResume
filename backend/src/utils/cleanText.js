export function cleanText(text = "") {
  if (typeof text !== "string") return "";

  return text
    .replace(/\r/g, " ")
    .replace(/\t/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ ]{2,}/g, " ")
    .trim();
}

export function limitText(text = "", maxChars = 12000) {
  const cleaned = cleanText(text);

  if (cleaned.length <= maxChars) {
    return cleaned;
  }

  return `${cleaned.slice(0, maxChars)}\n\n[Text trimmed because resume content was too long.]`;
}

export function isTextTooShort(text = "", minChars = 80) {
  return cleanText(text).length < minChars;
}