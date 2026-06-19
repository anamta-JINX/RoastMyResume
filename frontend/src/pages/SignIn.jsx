import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";

function SignIn() {
  return (
    <PageLayout>
      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl items-center px-5 py-12 sm:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
              Welcome back
            </div>

            <h1 className="font-bebas text-[clamp(70px,10vw,120px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
              Sign In.
              <span className="text-fire-glow block text-roast-red">
                Face the fire.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
              Access your roast history, healed resumes, LinkedIn posts, and
              premium download status. Your resume’s crimes are waiting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <h2 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
              Login
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Demo UI for now. Backend auth can be added after pages are ready.
            </p>

            <form className="mt-7 space-y-5">
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
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10"
                />
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-zinc-500">
                  <input type="checkbox" className="accent-roast-red" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-bold text-roast-orange transition hover:text-[#ff8b5c]"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-roast-red px-6 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e0441f] hover:shadow-[0_8px_30px_rgba(194,59,34,0.4)]"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-zinc-500">
              New here?{" "}
              <Link
                to="/signup"
                className="font-bold text-roast-orange transition hover:text-[#ff8b5c]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default SignIn;