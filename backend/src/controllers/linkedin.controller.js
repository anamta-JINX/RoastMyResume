import {
  createLinkedInSharePayload,
  buildLinkedInShareText
} from "../services/linkedin.service.js";

export async function createLinkedInShare(req, res) {
  const roastData = req.body.roastData || {};

  const payload = createLinkedInSharePayload(roastData);

  res.status(200).json({
    success: true,
    message: "LinkedIn share payload created.",
    data: payload
  });
}

export async function previewLinkedInPost(req, res) {
  const roastData = req.body.roastData || {};
  const text = buildLinkedInShareText(roastData);

  res.status(200).json({
    success: true,
    message: "LinkedIn post preview created.",
    data: {
      text
    }
  });
}