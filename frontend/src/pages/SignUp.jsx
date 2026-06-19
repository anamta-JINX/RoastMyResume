import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";

function SignUp() {
  return (
    <PageLayout>
      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center px-5 py-12 sm:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <h1 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
              Create Account
            </h1>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              Demo signup UI for now. Later we can connect this to real auth,
              JWT, Google login, and saved resume reports.
            </p>

            <form className="mt-7 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                    First name
                  </label>

                  <input
                    type="text"
                    placeholder="Anam"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                    Last name
                  </label>

                  <input
                    type="text"
                    placeholder="Ghafoor"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
                  Main goal
                </label>

                <select className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10">
                  <option value="internship">Get an internship</option>
                  <option value="job">Get a job</option>
                  <option value="linkedin">Improve LinkedIn profile</option>
                  <option value="resume">Fix resume quality</option>
                </select>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-500">
                <input type="checkbox" className="mt-1 accent-roast-red" />
                <span>
                  I understand RoastMyResume may roast my resume brutally, but
                  safely, without protected-trait attacks or self-harm content.
                </span>
              </label>

              <button
                type="button"
                className="w-full rounded-md bg-roast-red px-6 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e0441f] hover:shadow-[0_8px_30px_rgba(194,59,34,0.4)]"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-roast-orange transition hover:text-[#ff8b5c]"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
              Join the roast
            </div>

            <h2 className="font-bebas text-[clamp(70px,10vw,120px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
              Build your
              <span className="text-fire-glow block text-roast-red">
                career comeback.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
              Create a profile, save your resume roasts, improve your resume
              through Heal Me mode, and export polished files when Healing
              Journey premium is unlocked.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-roast-red/25 bg-roast-red/10 p-5">
                <p className="font-bebas text-4xl text-roast-orange">01</p>
                <p className="mt-1 text-sm font-bold text-roast-cream">
                  Save roast history
                </p>
              </div>

              <div className="rounded-xl border border-heal-mint/25 bg-heal-mint/10 p-5">
                <p className="font-bebas text-4xl text-heal-mint">02</p>
                <p className="mt-1 text-sm font-bold text-roast-cream">
                  Export healed resumes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default SignUp;