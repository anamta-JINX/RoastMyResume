function StatCard({ label, value, detail, tone = "fire" }) {
  const toneClasses =
    tone === "heal"
      ? "border-heal-mint/25 bg-heal-mint/10 text-heal-mint"
      : "border-roast-red/30 bg-roast-red/10 text-roast-orange";

  return (
    <article className={`rounded-2xl border p-5 ${toneClasses}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-80">
        {label}
      </p>

      <div className="mt-3 font-bebas text-5xl leading-none">{value}</div>

      <p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p>
    </article>
  );
}

function ActivityItem({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-roast-red/15 text-xl">
        {icon}
      </div>

      <div>
        <h3 className="font-bebas text-2xl uppercase tracking-[0.05em] text-roast-cream">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-zinc-500">{text}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <section
      id="dashboard"
      className="mt-10 w-full max-w-4xl scroll-mt-24 rounded-2xl border border-white/10 bg-black/35 p-6 text-left shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
        Dashboard
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="font-bebas text-5xl uppercase leading-none tracking-[0.04em] text-roast-cream sm:text-6xl">
            Roast control room.
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            A clean overview of resume damage, healing progress, premium status,
            and LinkedIn share activity. Later, this can become a real user
            dashboard with login and saved reports.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <StatCard
              label="Roast level"
              value="3"
              detail="Savage, Brutal, and Make Me Bleed are active."
            />

            <StatCard
              label="Premium"
              value="ON"
              detail="Healing Journey download flow is connected."
              tone="heal"
            />

            <StatCard
              label="Exports"
              value="2"
              detail="DOCX and PDF download options are available."
              tone="heal"
            />

            <StatCard
              label="LinkedIn"
              value="1"
              detail="Preview and share flow is connected."
            />
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-roast-red">
            Recent activity
          </p>

          <div className="mt-5 space-y-4">
            <ActivityItem
              icon="🔥"
              title="Roast Engine"
              text="Groq backend is ready to generate brutal structured JSON feedback."
            />

            <ActivityItem
              icon="🌿"
              title="Heal Mode"
              text="Role and company-based resume rewriting is connected."
            />

            <ActivityItem
              icon="💳"
              title="Premium Gate"
              text="Download is locked behind Healing Journey premium token."
            />

            <ActivityItem
              icon="🔗"
              title="LinkedIn Share"
              text="Post preview, copy text, and LinkedIn share opening are ready."
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Dashboard;