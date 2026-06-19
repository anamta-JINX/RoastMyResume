import { useState } from "react";

import PageLayout from "../components/PageLayout.jsx";
import RoastPanel from "../components/RoastPanel.jsx";
import RoastResult from "../components/RoastResult.jsx";

function Roast() {
  const [roastResult, setRoastResult] = useState(null);

  function scrollToResult() {
    setTimeout(() => {
      const section = document.getElementById("roast-result");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  }

  function handleRoastComplete(result) {
    setRoastResult(result);
    scrollToResult();
  }

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-10">
          <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
            Dedicated roast lab
          </div>

          <h1 className="font-bebas text-[clamp(70px,11vw,130px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
            Roast your
            <span className="text-fire-glow block text-roast-red">
              resume properly.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
            Upload your PDF or DOCX resume, choose Savage, Brutal, or Make Me
            Bleed, then get a structured roast with score, biggest problems,
            section damage report, fixes, final verdict, and LinkedIn share
            content.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-roast-red/25 bg-roast-red/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
              Level 01
            </p>
            <h2 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
              Savage
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Funny, sarcastic, and sharp enough to make weak bullets sweat.
            </p>
          </div>

          <div className="rounded-2xl border border-roast-red/35 bg-roast-red/15 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
              Level 02
            </p>
            <h2 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
              Brutal
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Mean, direct, recruiter-style honesty for resumes pretending to be
              stronger than they are.
            </p>
          </div>

          <div className="rounded-2xl border border-roast-orange/45 bg-roast-orange/10 p-5 shadow-[0_0_40px_rgba(194,59,34,0.18)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
              Level 03
            </p>
            <h2 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
              Make Me Bleed
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Maximum professional humiliation. No self-harm content, just your
              resume getting cooked like it applied with confidence it did not
              earn.
            </p>
          </div>
        </div>

        <RoastPanel onRoastComplete={handleRoastComplete} />

        <RoastResult roastResult={roastResult} />
      </section>
    </PageLayout>
  );
}

export default Roast;