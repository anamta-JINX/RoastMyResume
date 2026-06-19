import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import BrandLogo from "./BrandLogo.jsx";

const navLinks = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Roast", to: "/roast" },
  { label: "Heal", to: "/heal" },
  { label: "Profile", to: "/profile" },
  { label: "Payment", to: "/payment" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive
        ? "bg-roast-red text-white shadow-[0_0_24px_rgba(194,59,34,0.35)]"
        : "text-zinc-400 hover:bg-white/5 hover:text-roast-cream"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-roast-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandLogo variant="full" size="sm" />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/signin"
            className="rounded-full px-4 py-2 text-sm font-bold text-zinc-400 transition hover:bg-white/5 hover:text-roast-cream"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-roast-red px-5 py-2 text-sm font-bold text-white transition hover:bg-[#e0441f] hover:shadow-[0_0_24px_rgba(194,59,34,0.35)]"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-roast-cream lg:hidden"
        >
          <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-roast-black/95 px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 px-4 py-3 text-center text-sm font-bold text-zinc-300"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-roast-red px-4 py-3 text-center text-sm font-bold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;