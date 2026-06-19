import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";

const stats = [
  {
    label: "Resume roasts",
    value: "03",
    detail: "2 brutal, 1 savage",
    tone: "fire"
  },
  {
    label: "Healed resumes",
    value: "02",
    detail: "DOCX + PDF ready",
    tone: "heal"
  },
  {
    label: "Profile strength",
    value: "78%",
    detail: "Add more projects",
    tone: "fire"
  },
  {
    label: "Premium status",
    value: "Demo",
    detail: "Healing Journey unlocked",
    tone: "heal"
  }
];

const activities = [
  {
    title: "Roasted resume for AI Intern role",
    type: "Roast",
    date: "Today",
    status: "Completed"
  },
  {
    title: "Generated healed resume draft",
    type: "Heal",
    date: "Today",
    status: "Ready"
  },
  {
    title: "Updated profile target companies",
    type: "Profile",
    date: "Yesterday",
    status: "Saved"
  },
  {
    title: "Created LinkedIn roast preview",
    type: "LinkedIn",
    date: "Yesterday",
    status: "Drafted"
  }
];

const quickActions = [
  {
    title: "Roast a resume",
    text: "Upload your resume and get a savage, brutal, or maximum roast report.",
    link: "/roast",
    button: "Start Roast",
    tone: "fire"
  },
  {
    title: "Heal your resume",
    text: "Rewrite your resume for a target role and company with a cleaner structure.",
    link: "/heal",
    button: "Heal Me",
    tone: "heal"
  },
  {
    title: "Complete profile",
    text: "Add LinkedIn-style details so the app can personalize your resume fixes.",
    link: "/profile",
    button: "Edit Profile",
    tone: "fire"
  }
];

function StatCard({ stat }) {
  const isHeal = stat.tone === "heal";

  return (
    <div
      className={`rounded-2xl border p-5 ${
        isHeal
          ? "border-heal-mint/25 bg-heal-mint/10"
          : "border-roast-red/25 bg-roast-red/10"
      }`}
    >
      <p
        className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
          isHeal ? "text-heal-mint" : "text-roast-orange"
        }`}
      >
        {stat.label}
      </p>

      <p
        className={`mt-3 font-bebas text-6xl leading-none ${
          isHeal ? "text-heal-mint" : "text-roast-red"
        }`}
      >
        {stat.value}
      </p>

      <p className="mt-2 text-sm text-zinc-500">{stat.detail}</p>
    </div>
  );
}

function DashboardPage() {
  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
              Resume command center
            </div>

            <h1 className="font-bebas text-[clamp(70px,11vw,130px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
              Your resume
              <span className="text-fire-glow block text-roast-red">
                dashboard.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
              Track resume roasts, healed versions, premium status, LinkedIn
              drafts, and profile progress from one clean professional dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-heal-mint/25 bg-heal-mint/10 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
              Current focus
            </p>

            <h2 className="mt-2 font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
              AI Intern Resume
            </h2>

            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Your next best move is to add measurable project results before
              exporting the healed resume.
            </p>

            <Link
              to="/heal"
              className="mt-5 inline-flex rounded-md bg-heal-mint px-5 py-3 font-bebas text-xl uppercase tracking-[0.08em] text-[#04130f] transition hover:-translate-y-0.5 hover:bg-heal-soft"
            >
              Continue Healing
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
                  Activity
                </p>

                <h2 className="mt-2 font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
                  Recent activity
                </h2>
              </div>

              <Link
                to="/roast"
                className="w-fit rounded-full border border-roast-red/30 px-4 py-2 text-sm font-bold text-roast-orange transition hover:bg-roast-red/10"
              >
                New roast
              </Link>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className={`grid gap-3 p-4 text-sm sm:grid-cols-[1fr_90px_90px_90px] ${
                    index !== activities.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <p className="font-semibold text-roast-cream">
                    {activity.title}
                  </p>

                  <p className="text-zinc-500">{activity.type}</p>
                  <p className="text-zinc-500">{activity.date}</p>

                  <p className="font-bold text-heal-mint">{activity.status}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
              Resume health
            </p>

            <h2 className="mt-2 font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
              Progress
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-roast-cream">
                    Formatting
                  </span>
                  <span className="text-heal-mint">82%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-heal-mint" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-roast-cream">Impact</span>
                  <span className="text-roast-orange">54%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[54%] rounded-full bg-roast-orange" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-roast-cream">ATS match</span>
                  <span className="text-heal-mint">71%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[71%] rounded-full bg-heal-mint" />
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-roast-red/25 bg-roast-red/10 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
                Next fix
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Replace weak responsibilities with results. “Worked on ML
                project” tells recruiters nothing. Add tools, dataset, model,
                accuracy, and outcome.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {quickActions.map((action) => {
            const isHeal = action.tone === "heal";

            return (
              <div
                key={action.title}
                className={`rounded-2xl border p-6 ${
                  isHeal
                    ? "border-heal-mint/25 bg-heal-mint/10"
                    : "border-roast-red/25 bg-roast-red/10"
                }`}
              >
                <h3 className="font-bebas text-4xl uppercase tracking-[0.04em] text-roast-cream">
                  {action.title}
                </h3>

                <p className="mt-2 min-h-16 text-sm leading-7 text-zinc-400">
                  {action.text}
                </p>

                <Link
                  to={action.link}
                  className={`mt-5 inline-flex rounded-md px-5 py-3 font-bebas text-xl uppercase tracking-[0.08em] transition hover:-translate-y-0.5 ${
                    isHeal
                      ? "bg-heal-mint text-[#04130f] hover:bg-heal-soft"
                      : "bg-roast-red text-white hover:bg-[#e0441f]"
                  }`}
                >
                  {action.button}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}

export default DashboardPage;