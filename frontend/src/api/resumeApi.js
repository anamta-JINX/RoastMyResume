import { API_BASE_URL, PREMIUM_TOKEN } from "../utils/constants.js";

async function parseApiResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed.");
    }

    return data;
  }

  if (!response.ok) {
    throw new Error("Request failed.");
  }

  return response;
}

export async function roastResumeApi({ file, level }) {
  if (!file) {
    throw new Error("Please upload a PDF or DOCX resume first.");
  }

  const formData = new FormData();
  formData.append("resume", file);
  formData.append("level", level || "savage");

  const response = await fetch(`${API_BASE_URL}/roast`, {
    method: "POST",
    body: formData
  });

  return parseApiResponse(response);
}

export async function healResumeApi({
  file,
  targetRole,
  targetCompany,
  tone
}) {
  if (!file) {
    throw new Error("Please upload a PDF or DOCX resume first.");
  }

  const formData = new FormData();
  formData.append("resume", file);
  formData.append("targetRole", targetRole || "");
  formData.append("targetCompany", targetCompany || "");
  formData.append("tone", tone || "professional");

  const response = await fetch(`${API_BASE_URL}/heal`, {
    method: "POST",
    body: formData
  });

  return parseApiResponse(response);
}

export async function createLinkedInPreviewApi(roastData) {
  const response = await fetch(`${API_BASE_URL}/linkedin/preview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      roastData
    })
  });

  return parseApiResponse(response);
}

export async function createLinkedInShareApi(roastData) {
  const response = await fetch(`${API_BASE_URL}/linkedin/share`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      roastData
    })
  });

  return parseApiResponse(response);
}

export async function createMockCheckoutApi() {
  const response = await fetch(`${API_BASE_URL}/payment/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      plan: "healing_journey"
    })
  });

  return parseApiResponse(response);
}

export async function downloadHealedResumeApi({
  healedResume,
  format = "docx"
}) {
  const response = await fetch(`${API_BASE_URL}/download/healed-resume`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-premium-token": PREMIUM_TOKEN
    },
    body: JSON.stringify({
      format,
      healedResume
    })
  });

  if (!response.ok) {
    let message = "Download failed.";

    try {
      const data = await response.json();
      message = data.message || message;
    } catch {
      // Ignore non-JSON error response.
    }

    throw new Error(message);
  }

  const blob = await response.blob();

  const extension = format === "pdf" ? "pdf" : "docx";
  const fileName = `RoastMyResume-Healed-Resume.${extension}`;

  const downloadUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(downloadUrl);

  return {
    success: true,
    fileName
  };
}