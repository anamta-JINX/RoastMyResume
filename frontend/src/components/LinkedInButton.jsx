import { useState } from "react";

import {
  createLinkedInPreviewApi,
  createLinkedInShareApi
} from "../api/resumeApi.js";

function LinkedInButton({ roastResult }) {
  const [isLoading, setIsLoading] = useState(false);
  const [previewText, setPreviewText] = useState("");
  const [status, setStatus] = useState("");

  async function handlePreview() {
    if (!roastResult) return;

    try {
      setIsLoading(true);
      setStatus("");

      const response = await createLinkedInPreviewApi(roastResult);

      setPreviewText(response.data.text);
      setStatus("LinkedIn post preview ready.");
    } catch (error) {
      setStatus(error.message || "Could not create LinkedIn preview.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleShare() {
    if (!roastResult) return;

    try {
      setIsLoading(true);
      setStatus("");

      const response = await createLinkedInShareApi(roastResult);
      const textToCopy = response.data.copiedText || previewText;

      if (textToCopy) {
        await navigator.clipboard.writeText(textToCopy);
      }

      window.open(response.data.shareUrl, "_blank", "noopener,noreferrer");

      setPreviewText(textToCopy);
      setStatus("Copied roast post text and opened LinkedIn.");
    } catch (error) {
      setStatus(error.message || "Could not open LinkedIn share.");
    } finally {
      setIsLoading(false);
    }
  }

  if (!roastResult) return null;

  return (
    <div className="mt-8 rounded-2xl border border-[#0A66C2]/35 bg-[#0A66C2]/10 p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7ab7ff]">
            Add to LinkedIn
          </p>

          <h3 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
            Turn the roast into content.
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
            Preview the LinkedIn post, copy it, then open LinkedIn sharing.
            Direct auto-posting needs LinkedIn OAuth approval, so this version
            keeps it safe and simple.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={handlePreview}
            disabled={isLoading}
            className="rounded-md border border-[#7ab7ff]/30 bg-white/[0.03] px-5 py-3 text-sm font-bold text-[#b9dcff] transition hover:border-[#7ab7ff]/60 hover:bg-[#0A66C2]/20"
          >
            Preview Post
          </button>

          <button
            type="button"
            onClick={handleShare}
            disabled={isLoading}
            className="rounded-md bg-[#0A66C2] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0b74df]"
          >
            {isLoading ? "Preparing..." : "Add to LinkedIn"}
          </button>
        </div>
      </div>

      {status ? (
        <p className="mt-4 rounded-lg border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-300">
          {status}
        </p>
      ) : null}

      {previewText ? (
        <div className="mt-5 rounded-xl border border-white/10 bg-black/35 p-4">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#7ab7ff]">
            LinkedIn preview
          </p>

          <pre className="whitespace-pre-wrap break-words font-barlow text-sm leading-7 text-zinc-300">
            {previewText}
          </pre>
        </div>
      ) : null}
    </div>
  );
}

export default LinkedInButton;