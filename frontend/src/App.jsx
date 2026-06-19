import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.jsx";
import Heal from "./pages/Heal.jsx";
import Home from "./pages/Home.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import Roast from "./pages/Roast.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function PlaceholderPage({ title, subtitle }) {
  return (
    <main className="min-h-screen bg-roast-black px-5 py-28 text-roast-cream">
      <section className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/40 p-8">
        <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
          Page setup
        </div>

        <h1 className="font-bebas text-6xl uppercase tracking-[0.04em] text-roast-cream">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          {subtitle}
        </p>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/roast" element={<Roast />} />
      <Route path="/heal" element={<Heal />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="*"
        element={
          <PlaceholderPage
            title="404"
            subtitle="This page does not exist. Even the URL needs a resume makeover."
          />
        }
      />
    </Routes>
  );
}

export default App;