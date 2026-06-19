function ProfileCard() {
  return (
    <section
      id="profile"
      className="mt-10 w-full max-w-4xl scroll-mt-24 rounded-2xl border border-white/10 bg-black/35 p-6 text-left shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
        Profile
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
        <aside className="rounded-2xl border border-roast-red/25 bg-[radial-gradient(circle_at_20%_0%,rgba(194,59,34,0.22),transparent_45%),rgba(255,255,255,0.03)] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-roast-red/35 bg-roast-red/15 font-bebas text-5xl text-roast-orange shadow-[0_0_35px_rgba(194,59,34,0.25)]">
              A
            </div>

            <div>
              <h2 className="font-bebas text-4xl uppercase leading-none tracking-[0.04em] text-roast-cream">
                Anam
              </h2>

              <p className="mt-1 text-sm font-semibold text-zinc-500">
                Resume victim #0001
              </p>
            </div>
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-roast-red/70 to-transparent" />

          <div className="mt-6 space-y-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                Current mode
              </p>

              <p className="mt-1 font-bebas text-3xl uppercase tracking-[0.04em] text-roast-cream">
                Make Me Bleed
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                Premium plan
              </p>

              <p className="mt-1 font-bebas text-3xl uppercase tracking-[0.04em] text-heal-mint">
                Healing Journey
              </p>
            </div>
          </div>
        </aside>

        <div>
          <h2 className="font-bebas text-5xl uppercase leading-none tracking-[0.04em] text-roast-cream sm:text-6xl">
            Career damage profile.
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            This card is the user profile area. Later, it can show real saved
            resumes, roast history, best healed resume version, subscription
            status, and LinkedIn share history.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                Saved resumes
              </p>

              <p className="mt-2 font-bebas text-5xl text-roast-red">0</p>

              <p className="mt-1 text-sm text-zinc-500">
                Add auth later to save uploads.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
                Healed versions
              </p>

              <p className="mt-2 font-bebas text-5xl text-heal-mint">0</p>

              <p className="mt-1 text-sm text-zinc-500">
                Exported resumes will appear here later.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
                Profile note
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                No login yet. This is currently a beautiful frontend preview
                card. When we add authentication, this becomes the real user
                dashboard profile section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;