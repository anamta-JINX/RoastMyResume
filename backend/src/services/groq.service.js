import Groq from "groq-sdk";

import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

function hasValidGroqKey() {
  return (
    env.groqApiKey &&
    env.groqApiKey !== "paste_your_real_groq_api_key_here" &&
    env.groqApiKey !== "your_groq_api_key_here"
  );
}

function createGroqClient() {
  if (!hasValidGroqKey()) {
    throw new ApiError(
      500,
      "Groq API key is missing. Add your real GROQ_API_KEY in backend/.env"
    );
  }

  return new Groq({
    apiKey: env.groqApiKey
  });
}

function extractJsonFromText(text = "") {
  const cleaned = String(text).trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      throw new ApiError(
        500,
        "AI response was not valid JSON. Try again."
      );
    }

    const possibleJson = cleaned.slice(firstBrace, lastBrace + 1);

    try {
      return JSON.parse(possibleJson);
    } catch {
      throw new ApiError(
        500,
        "AI response JSON could not be parsed. Try again."
      );
    }
  }
}

export async function generateJsonFromGroq(prompt) {
  const groq = createGroqClient();

  const completion = await groq.chat.completions.create({
    model: env.groqModel,
    messages: [
      {
        role: "system",
        content:
          "You are a strict JSON API. Always return valid JSON only. No markdown. No extra text."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.8,
    max_completion_tokens: 1800,
    response_format: {
      type: "json_object"
    }
  });

  const content = completion.choices?.[0]?.message?.content;

  if (!content) {
    throw new ApiError(500, "Groq returned an empty response.");
  }

  return extractJsonFromText(content);
}

export function testJsonParserForGroqService(text) {
  return extractJsonFromText(text);
}