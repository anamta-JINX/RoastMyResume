import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";

const features = [
  {
    number: "01",
    title: "Upload resume",
    text: "Drop your PDF or DOCX resume into the roast lab."
  },
  {
    number: "02",
    title: "Choose roast level",
    text: "Savage, Brutal, or Make Me Bleed — pick your pain level."
  },
  {
    number: "03",
    title: "Heal the damage",
    text: "Rewrite your resume for your target role and company."
  }
];

const cards = [
  {
    title: "Resume Roast",
    text: "Get a brutally honest report with score, biggest problems, section roasts, quick fixes, and final verdict.",
    link: "/roast",
    button: "Start Roasting",
    tone: "fire"
  },
  {
    title: "Heal Me",
    text: "Turn the roasted resume into a polished, recruiter-ready version for your target role.",
    link: "/heal",
    button: "Fix Resume",
    tone: "heal"
  },
  {
    title: "Profile",
    text: "Build a LinkedIn-style profile so resume healing can become more personalized later.",
    link: "/profile",
    button: "Edit Profile",
    tone: "fire"
  }
];

function Home() {
  return (
    <PageLayout>
      <section className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.75fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
            Roast. Repair. Rise.
          </div>

          <h1 className="font-bebas text-[clamp(80px,13vw,160px)] uppercase leading-[0.82] tracking-[0.03em] text-roast-cream">
            Your resume
            <span className="text-fire-glow block text-roast-red">
              deserves this.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            RoastMyResume reads your resume, exposes the weak parts, gives you
            a brutal but useful report, then helps rebuild your resume through
            Healing Journey premium.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/roast"
              className="rounded-md bg-roast-red px-7 py-4 text-center font-bebas text-2xl uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e0441f] hover:shadow-[0_8px_30px_rgba(194,59,34,0.4)]"
            >
              Roast My Resume
            </Link>

            <Link
              to="/heal"
              className="rounded-md border border-heal-mint/35 bg-heal-mint/10 px-7 py-4 text-center font-bebas text-2xl uppercase tracking-[0.08em] text-heal-mint transition hover:-translate-y-0.5 hover:bg-heal-mint hover:text-[#04130f]"
            >
              Heal Me
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-roast-red/25 bg-[radial-gradient(circle_at_20%_0%,rgba(194,59,34,0.25),transparent_45%),rgba(0,0,0,0.45)] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
          <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
              Resume condition
            </p>

            <h2 className="mt-3 font-bebas text-6xl uppercase leading-none tracking-[0.04em] text-roast-cream">
              Needs fire.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-roast-red/25 bg-roast-red/10 p-4">
                <p className="text-sm font-bold text-roast-cream">
                  “Responsible for multiple tasks”
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Translation: did things. Nobody knows what things.
                </p>
              </div>

              <div className="rounded-xl border border-roast-orange/25 bg-roast-orange/10 p-4">
                <p className="text-sm font-bold text-roast-cream">
                  “Hardworking and passionate”
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Recruiters have seen this sentence more than their own family.
                </p>
              </div>

              <div className="rounded-xl border border-heal-mint/25 bg-heal-mint/10 p-4">
                <p className="text-sm font-bold text-heal-mint">
                  Healed version
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Built a React + Node resume analyzer with PDF/DOCX parsing,
                  AI feedback, and exportable improved resumes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <p className="font-bebas text-5xl leading-none text-roast-red">
                {feature.number}
              </p>

              <h2 className="mt-3 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
                {feature.title}
              </h2>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
            Main pages
          </p>

          <h2 className="mt-2 font-bebas text-6xl uppercase tracking-[0.04em] text-roast-cream">
            Choose your path
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const isHeal = card.tone === "heal";

            return (
              <div
                key={card.title}
                className={`rounded-2xl border p-6 ${
                  isHeal
                    ? "border-heal-mint/25 bg-heal-mint/10"
                    : "border-roast-red/25 bg-roast-red/10"
                }`}
              >
                <h3 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
                  {card.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-zinc-400">
                  {card.text}
                </p>

                <Link
                  to={card.link}
                  className={`mt-5 inline-flex rounded-md px-5 py-3 font-bebas text-xl uppercase tracking-[0.08em] transition hover:-translate-y-0.5 ${
                    isHeal
                      ? "bg-heal-mint text-[#04130f] hover:bg-heal-soft"
                      : "bg-roast-red text-white hover:bg-[#e0441f]"
                  }`}
                >
                  {card.button}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;