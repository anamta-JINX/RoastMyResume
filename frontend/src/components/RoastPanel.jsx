import { useRef, useState } from "react";

import { roastResumeApi } from "../api/resumeApi.js";
import { ACCEPTED_RESUME_TYPES, ROAST_LEVELS } from "../utils/constants.js";

function RoastPanel({ onRoastComplete }) {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("savage");
  const [isRoasting, setIsRoasting] = useState(false);
  const [error, setError] = useState("");

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    setError("");

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

  async function handleRoastSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setIsRoasting(true);

      const response = await roastResumeApi({
        file: selectedFile,
        level: selectedLevel
      });

      onRoastComplete?.(response.data);
    } catch (apiError) {
      setError(apiError.message || "Something went wrong while roasting.");
    } finally {
      setIsRoasting(false);
    }
  }

  return (
    <section
      id="roast-zone"
      className="mt-20 w-full max-w-4xl rounded-2xl border border-roast-red/25 bg-white/[0.03] p-6 text-left shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
        Upload zone
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <h2 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream sm:text-6xl">
            Feed the fire.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Upload your resume as PDF or DOCX, choose how badly you want to be
            humbled, and let the AI roast begin.
          </p>

          <form onSubmit={handleRoastSubmit} className="mt-7 space-y-6">
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                Resume file
              </label>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex min-h-36 w-full flex-col items-center justify-center rounded-xl border border-dashed border-roast-red/35 bg-black/30 px-5 py-8 text-center transition hover:border-roast-orange/70 hover:bg-roast-red/10"
              >
                <span className="text-4xl">📄</span>

                <span className="mt-3 font-bebas text-2xl uppercase tracking-[0.06em] text-roast-cream">
                  {selectedFile ? selectedFile.name : "Drop PDF / DOCX here"}
                </span>

                <span className="mt-1 text-xs text-zinc-500">
                  Click to choose file. Max size follows backend setting.
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

            <div>
              <label className="mb-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                Roast intensity
              </label>

              <div className="grid gap-3 sm:grid-cols-3">
                {ROAST_LEVELS.map((level) => {
                  const isActive = selectedLevel === level.id;

                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setSelectedLevel(level.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        isActive
                          ? "border-roast-orange bg-roast-red/20 shadow-[0_0_28px_rgba(194,59,34,0.22)]"
                          : "border-white/10 bg-white/[0.03] hover:border-roast-red/45 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="text-2xl">{level.emoji}</div>

                      <div className="mt-2 font-bebas text-2xl uppercase tracking-[0.06em] text-roast-cream">
                        {level.label}
                      </div>

                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        {level.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isRoasting || !selectedFile}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-roast-red px-9 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e0441f] hover:shadow-[0_8px_30px_rgba(194,59,34,0.4)] active:scale-95 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
            >
              {isRoasting ? "Roasting..." : "🔥 Roast My Resume"}
            </button>
          </form>
        </div>

        <aside className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-roast-red">
            Warning label
          </p>

          <h3 className="mt-3 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
            This may hurt.
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            RoastMyResume attacks weak bullets, vague skills, messy formatting,
            boring summaries, and fake-sounding corporate fluff. It does not
            attack personal identity or protected traits.
          </p>

          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-roast-red/70 to-transparent" />

          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            <li>🔥 Savage feedback</li>
            <li>💀 Resume score</li>
            <li>🧠 Practical fixes</li>
            <li>🔗 LinkedIn-ready roast post</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default RoastPanel;