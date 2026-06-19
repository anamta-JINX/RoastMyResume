import { Link } from "react-router-dom";

import HealMeSection from "../components/HealMeSection.jsx";
import PageLayout from "../components/PageLayout.jsx";

function Heal() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-heal-mint/30 bg-heal-mint/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
              Healing Journey
            </div>

            <h1 className="font-bebas text-[clamp(70px,11vw,130px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
              Fix what the
              <span className="block text-heal-mint">roast exposed.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
              Upload your resume again, enter your target role and company, and
              Heal Me will rewrite your resume into a cleaner, stronger, more
              recruiter-ready version. Downloads are part of Healing Journey
              premium.
            </p>
          </div>

          <div className="rounded-2xl border border-heal-mint/25 bg-heal-mint/10 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
              Premium note
            </p>

            <h2 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
              Download locked
            </h2>

            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Resume healing can generate the improved content. PDF/DOCX export
              uses the premium token from the Payment page.
            </p>

            <Link
              to="/payment"
              className="mt-5 inline-flex rounded-md bg-heal-mint px-5 py-3 font-bebas text-xl uppercase tracking-[0.08em] text-[#04130f] transition hover:-translate-y-0.5 hover:bg-heal-soft"
            >
              Unlock Premium
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="font-bebas text-5xl text-heal-mint">01</p>
            <h3 className="mt-2 font-bold text-roast-cream">
              Upload your resume
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Use the same PDF or DOCX file that got roasted.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="font-bebas text-5xl text-heal-mint">02</p>
            <h3 className="mt-2 font-bold text-roast-cream">
              Add role and company
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Tell the app what job you are targeting so the rewrite is focused.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="font-bebas text-5xl text-heal-mint">03</p>
            <h3 className="mt-2 font-bold text-roast-cream">
              Export healed resume
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Download the improved resume as DOCX or PDF after premium unlock.
            </p>
          </div>
        </div>

        <HealMeSection />
      </section>
    </PageLayout>
  );
}

export default Heal;