import LinkedInButton from "./LinkedInButton.jsx";

function ProblemCard({ item, index }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-bebas text-2xl uppercase tracking-[0.05em] text-roast-cream">
          {String(index + 1).padStart(2, "0")} — {item.problem || "Problem"}
        </h3>

        <span className="rounded-full border border-roast-red/30 bg-roast-red/10 px-3 py-1 text-xs font-bold text-roast-orange">
          cooked
        </span>
      </div>

      <p className="text-sm leading-7 text-zinc-400">{item.roast}</p>

      {item.fix ? (
        <div className="mt-4 rounded-lg border border-roast-orange/20 bg-roast-orange/10 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
            Fix it
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.fix}</p>
        </div>
      ) : null}
    </article>
  );
}

function SectionRoast({ title, text }) {
  if (!text) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
        {title}
      </p>

      <p className="mt-2 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function RoastResult({ roastResult }) {
  if (!roastResult) return null;

  const biggestProblems = Array.isArray(roastResult.biggestProblems)
    ? roastResult.biggestProblems
    : [];

  const sectionRoasts = roastResult.sectionRoasts || {};

  return (
    <section
      id="roast-result"
      className="mt-8 w-full max-w-4xl rounded-2xl border border-roast-orange/30 bg-black/40 p-6 text-left shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-4 inline-flex rounded-full border border-roast-orange/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
        Roast complete
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_180px]">
        <div>
          <h2 className="font-bebas text-5xl uppercase leading-none tracking-[0.04em] text-roast-cream sm:text-6xl">
            {roastResult.title || "Your resume got cooked."}
          </h2>

          <p className="mt-4 text-base leading-8 text-zinc-300">
            {roastResult.summaryRoast ||
              "The AI roasted your resume, but the summary was missing from the response."}
          </p>
        </div>

        <div className="rounded-xl border border-roast-red/30 bg-roast-red/10 p-5 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
            Resume score
          </p>

          <div className="mt-3 font-bebas text-7xl leading-none text-roast-red">
            {roastResult.overallScore ?? "??"}
          </div>

          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
            out of 100
          </p>
        </div>
      </div>

      {biggestProblems.length ? (
        <div className="mt-8">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-red">
            Biggest problems
          </p>

          <div className="grid gap-4">
            {biggestProblems.map((item, index) => (
              <ProblemCard
                key={`${item.problem || "problem"}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-red">
          Section damage report
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <SectionRoast title="Summary" text={sectionRoasts.summary} />
          <SectionRoast title="Skills" text={sectionRoasts.skills} />
          <SectionRoast
            title="Experience / Projects"
            text={sectionRoasts.experience}
          />
          <SectionRoast title="Education" text={sectionRoasts.education} />
          <SectionRoast title="Formatting" text={sectionRoasts.formatting} />
        </div>
      </div>

      {roastResult.finalVerdict ? (
        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-roast-red">
            Final verdict
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {roastResult.finalVerdict}
          </p>
        </div>
      ) : null}

      <LinkedInButton roastResult={roastResult} />
    </section>
  );
}

export default RoastResult;