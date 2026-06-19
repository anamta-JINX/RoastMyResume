import { useRef, useState } from "react";

import {
  createMockCheckoutApi,
  downloadHealedResumeApi,
  healResumeApi
} from "../api/resumeApi.js";
import { ACCEPTED_RESUME_TYPES } from "../utils/constants.js";

function HealMeSection() {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [targetRole, setTargetRole] = useState("");
  const [targetCompany, setTargetCompany] = useState("");
  const [tone, setTone] = useState("professional");

  const [healResult, setHealResult] = useState(null);
  const [isHealing, setIsHealing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    setError("");
    setStatus("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const isValidFile =
      file.name.toLowerCase().endsWith(".pdf") ||
      file.name.toLowerCase().endsWith(".docx");

    if (!isValidFile) {
      setSelectedFile(null);
      setError("Only PDF and DOCX resumes are allowed.");
      return;
    }

    setSelectedFile(file);
  }

  async function handleHealSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setStatus("");
      setIsHealing(true);

      const response = await healResumeApi({
        file: selectedFile,
        targetRole,
        targetCompany,
        tone
      });

      setHealResult(response.data);
      setStatus("Resume healed. Premium download is ready to unlock.");
    } catch (apiError) {
      setError(apiError.message || "Something went wrong while healing.");
    } finally {
      setIsHealing(false);
    }
  }

  async function handleDownload(format) {
    if (!healResult) return;

    try {
      setError("");
      setStatus("");
      setIsDownloading(true);

      await createMockCheckoutApi();

      const result = await downloadHealedResumeApi({
        healedResume: healResult,
        format
      });

      setStatus(`Downloaded ${result.fileName}`);
    } catch (apiError) {
      setError(apiError.message || "Download failed.");
    } finally {
      setIsDownloading(false);
    }
  }

  const improvedResume = healResult?.improvedResume || {};
  const keywords = Array.isArray(healResult?.atsKeywords)
    ? healResult.atsKeywords
    : [];

  return (
    <section
      id="heal-me"
      className="mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-heal-mint/25 bg-[radial-gradient(circle_at_12%_10%,rgba(126,255,198,0.14),transparent_35%),linear-gradient(145deg,rgba(7,24,22,0.94),rgba(5,10,16,0.96))] p-6 text-left shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-4 inline-flex rounded-full border border-heal-mint/30 bg-heal-mint/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
        Healing journey
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="font-bebas text-5xl uppercase leading-none tracking-[0.04em] text-[#ecfff8] sm:text-6xl">
            Heal the damage.
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#c9eee4]">
            After the fire comes the repair. Upload your resume, choose the role
            and company, and Heal Me mode rewrites it into a stronger,
            role-focused version.
          </p>

          <form onSubmit={handleHealSubmit} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                Resume file
              </label>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-28 w-full flex-col items-center justify-center rounded-xl border border-dashed border-heal-mint/35 bg-black/25 px-5 py-6 text-center transition hover:border-heal-mint/70 hover:bg-heal-mint/10"
              >
                <span className="text-3xl">🌿</span>

                <span className="mt-2 font-bebas text-2xl uppercase tracking-[0.06em] text-[#ecfff8]">
                  {selectedFile ? selectedFile.name : "Upload resume to heal"}
                </span>

                <span className="mt-1 text-xs text-[#95bdb3]">
                  PDF or DOCX only.
                </span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_RESUME_TYPES}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                  Target role
                </label>

                <input
                  value={targetRole}
                  onChange={(event) => setTargetRole(event.target.value)}
                  placeholder="AI Intern, Frontend Developer..."
                  className="w-full rounded-xl border border-heal-mint/20 bg-black/35 px-4 py-3 text-sm text-[#ecfff8] outline-none transition placeholder:text-[#72958c] focus:border-heal-mint/60 focus:ring-4 focus:ring-heal-mint/10"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                  Target company
                </label>

                <input
                  value={targetCompany}
                  onChange={(event) => setTargetCompany(event.target.value)}
                  placeholder="Google, Systems Ltd, Remote startup..."
                  className="w-full rounded-xl border border-heal-mint/20 bg-black/35 px-4 py-3 text-sm text-[#ecfff8] outline-none transition placeholder:text-[#72958c] focus:border-heal-mint/60 focus:ring-4 focus:ring-heal-mint/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                Tone
              </label>

              <select
                value={tone}
                onChange={(event) => setTone(event.target.value)}
                className="w-full rounded-xl border border-heal-mint/20 bg-black/35 px-4 py-3 text-sm text-[#ecfff8] outline-none transition focus:border-heal-mint/60 focus:ring-4 focus:ring-heal-mint/10"
              >
                <option value="professional">Professional</option>
                <option value="confident">Confident</option>
                <option value="internship-ready">Internship-ready</option>
                <option value="ats-focused">ATS-focused</option>
              </select>
            </div>

            {error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            {status ? (
              <div className="rounded-lg border border-heal-mint/25 bg-heal-mint/10 px-4 py-3 text-sm text-[#c9eee4]">
                {status}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isHealing || !selectedFile}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-heal-mint via-heal-soft to-heal-blue px-8 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-[#04130f] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(126,255,198,0.24)] active:scale-95 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
            >
              {isHealing ? "Healing..." : "🌿 Heal My Resume"}
            </button>
          </form>
        </div>

        <aside className="rounded-xl border border-heal-mint/20 bg-black/25 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
            Premium export
          </p>

          <h3 className="mt-3 font-bebas text-4xl uppercase tracking-[0.04em] text-[#ecfff8]">
            Healing Journey
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#a8cfc5]">
            Preview the healed resume for free. Downloading the polished PDF or
            DOCX is the premium feature.
          </p>

          <div className="mt-5 rounded-xl border border-heal-mint/20 bg-heal-mint/10 p-4">
            <p className="text-sm font-bold text-[#ecfff8]">
              Included in premium:
            </p>

            <ul className="mt-3 space-y-2 text-sm text-[#b8ded5]">
              <li>🌿 ATS-focused rewrite</li>
              <li>✨ Role/company targeting</li>
              <li>📄 DOCX export</li>
              <li>🧾 PDF export</li>
            </ul>
          </div>

          {healResult ? (
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleDownload("docx")}
                disabled={isDownloading}
                className="rounded-md bg-heal-mint px-4 py-3 text-sm font-extrabold text-[#04130f] transition hover:-translate-y-0.5"
              >
                DOCX
              </button>

              <button
                type="button"
                onClick={() => handleDownload("pdf")}
                disabled={isDownloading}
                className="rounded-md border border-heal-mint/35 bg-white/[0.03] px-4 py-3 text-sm font-extrabold text-heal-mint transition hover:border-heal-mint/70"
              >
                PDF
              </button>
            </div>
          ) : null}
        </aside>
      </div>

      {healResult ? (
        <div className="mt-8 rounded-2xl border border-heal-mint/20 bg-black/25 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
            Healed preview
          </p>

          <h3 className="mt-3 font-bebas text-4xl uppercase tracking-[0.04em] text-[#ecfff8]">
            {improvedResume.headline || "Improved resume headline"}
          </h3>

          {healResult.overallDiagnosis ? (
            <p className="mt-3 text-sm leading-7 text-[#c9eee4]">
              {healResult.overallDiagnosis}
            </p>
          ) : null}

          {improvedResume.summary ? (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
                Summary
              </p>

              <p className="mt-2 text-sm leading-7 text-[#c9eee4]">
                {improvedResume.summary}
              </p>
            </div>
          ) : null}

          {keywords.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-heal-mint/25 bg-heal-mint/10 px-3 py-1 text-xs font-bold text-heal-mint"
                >
                  {keyword}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default HealMeSection;