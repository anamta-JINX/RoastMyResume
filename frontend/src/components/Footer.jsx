import { Link } from "react-router-dom";

import BrandLogo from "./BrandLogo.jsx";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_0.7fr_0.7fr]">
        <div>
          <BrandLogo variant="full" size="md" />

          <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
            RoastMyResume brutally reviews weak resumes, then helps rebuild them
            into cleaner, sharper, recruiter-ready versions.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
            Product
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
            <Link to="/roast" className="hover:text-roast-cream">
              Resume Roast
            </Link>
            <Link to="/heal" className="hover:text-roast-cream">
              Heal Me
            </Link>
            <Link to="/payment" className="hover:text-roast-cream">
              Healing Journey
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
            Account
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
            <Link to="/dashboard" className="hover:text-roast-cream">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:text-roast-cream">
              Profile
            </Link>
            <Link to="/signin" className="hover:text-roast-cream">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} RoastMyResume. Roast. Repair. Rise.
      </div>
    </footer>
  );
}

export default Footer;