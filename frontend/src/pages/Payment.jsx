import { useState } from "react";
import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout.jsx";
import { createMockCheckoutApi } from "../api/resumeApi.js";

const initialCard = {
  name: "",
  number: "",
  expiry: "",
  cvc: "",
  country: "Pakistan",
  postalCode: ""
};

function formatCardNumber(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) return digits;

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function Payment() {
  const [card, setCard] = useState(initialCard);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState("");
  const [premiumToken, setPremiumToken] = useState("");

  function updateCard(field, value) {
    setStatus("");

    setCard((current) => ({
      ...current,
      [field]: value
    }));
  }

  async function handlePayment(event) {
    event.preventDefault();

    try {
      setIsProcessing(true);
      setStatus("");

      const response = await createMockCheckoutApi();

      setPremiumToken(response.data.premiumToken);
      setStatus(
        "Demo payment successful. Healing Journey premium is unlocked for development."
      );
    } catch (error) {
      setStatus(error.message || "Payment failed.");
    } finally {
      setIsProcessing(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-heal-mint/60 focus:ring-4 focus:ring-heal-mint/10";

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-8">
          <div className="mb-4 inline-flex rounded-full border border-heal-mint/30 bg-heal-mint/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
            Healing Journey Premium
          </div>

          <h1 className="font-bebas text-[clamp(60px,9vw,110px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
            Unlock the
            <span className="block text-heal-mint">career repair kit.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            This is a professional demo payment page. In a real production app,
            use Stripe, JazzCash, EasyPaisa, or another payment provider. Do not
            store raw card numbers in your own database.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <aside className="rounded-2xl border border-heal-mint/25 bg-[radial-gradient(circle_at_20%_0%,rgba(126,255,198,0.16),transparent_45%),rgba(0,0,0,0.45)] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
              Premium plan
            </p>

            <h2 className="mt-3 font-bebas text-6xl uppercase leading-none tracking-[0.04em] text-[#ecfff8]">
              Healing Journey
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#b8ded5]">
              Go from roasted to recruiter-ready. Download healed resumes in
              DOCX or PDF after AI rewrites your resume for your target role and
              company.
            </p>

            <div className="mt-7 rounded-2xl border border-heal-mint/25 bg-black/30 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
                    Demo price
                  </p>

                  <p className="mt-2 font-bebas text-6xl leading-none text-heal-mint">
                    $9
                  </p>
                </div>

                <p className="pb-2 text-sm font-bold text-[#b8ded5]">
                  one-time unlock
                </p>
              </div>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-[#c9eee4]">
              <li>🌿 ATS-focused healed resume</li>
              <li>📄 DOCX export</li>
              <li>🧾 PDF export</li>
              <li>🎯 Role and company targeting</li>
              <li>🔥 Roast report stays visible</li>
            </ul>

            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
                Safety note
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                This demo does not send real card data anywhere. The backend
                only returns a mock premium token.
              </p>
            </div>
          </aside>

          <form
            onSubmit={handlePayment}
            className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8"
          >
            <h2 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
              Card details
            </h2>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              Professional payment form UI. Later, replace these inputs with
              Stripe Elements or your chosen payment provider’s secure checkout.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(194,59,34,0.22),rgba(126,255,198,0.12)),rgba(255,255,255,0.04)] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                    RoastMyResume
                  </p>

                  <p className="mt-1 font-bebas text-3xl uppercase tracking-[0.06em] text-white">
                    Healing Card
                  </p>
                </div>

                <span className="text-3xl">💳</span>
              </div>

              <p className="mt-8 font-mono text-xl tracking-[0.18em] text-white">
                {card.number || "4242 4242 4242 4242"}
              </p>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    Cardholder
                  </p>

                  <p className="mt-1 text-sm font-bold uppercase text-white">
                    {card.name || "YOUR NAME"}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    Expiry
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {card.expiry || "12/30"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                  Name on card
                </span>

                <input
                  value={card.name}
                  onChange={(event) => updateCard("name", event.target.value)}
                  placeholder="Anam Ghafoor"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                  Card number
                </span>

                <input
                  value={card.number}
                  onChange={(event) =>
                    updateCard("number", formatCardNumber(event.target.value))
                  }
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                  className={inputClass}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                    Expiry
                  </span>

                  <input
                    value={card.expiry}
                    onChange={(event) =>
                      updateCard("expiry", formatExpiry(event.target.value))
                    }
                    inputMode="numeric"
                    placeholder="MM/YY"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                    CVC
                  </span>

                  <input
                    value={card.cvc}
                    onChange={(event) =>
                      updateCard(
                        "cvc",
                        event.target.value.replace(/\D/g, "").slice(0, 4)
                      )
                    }
                    inputMode="numeric"
                    placeholder="123"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                    Postal code
                  </span>

                  <input
                    value={card.postalCode}
                    onChange={(event) =>
                      updateCard("postalCode", event.target.value)
                    }
                    placeholder="54000"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-heal-mint">
                  Country
                </span>

                <select
                  value={card.country}
                  onChange={(event) =>
                    updateCard("country", event.target.value)
                  }
                  className={inputClass}
                >
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>United Arab Emirates</option>
                  <option>Canada</option>
                </select>
              </label>
            </div>

            {status ? (
              <div className="mt-6 rounded-lg border border-heal-mint/25 bg-heal-mint/10 px-4 py-3 text-sm text-heal-mint">
                {status}
              </div>
            ) : null}

            {premiumToken ? (
              <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                  Dev premium token
                </p>

                <p className="mt-2 break-all font-mono text-sm text-zinc-300">
                  {premiumToken}
                </p>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isProcessing}
              className="mt-7 w-full rounded-md bg-gradient-to-r from-heal-mint via-heal-soft to-heal-blue px-6 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-[#04130f] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(126,255,198,0.24)] disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isProcessing ? "Processing..." : "Unlock Premium"}
            </button>

            <p className="mt-5 text-center text-sm text-zinc-500">
              Want to heal first?{" "}
              <Link
                to="/heal"
                className="font-bold text-heal-mint transition hover:text-heal-soft"
              >
                Go to Heal Me
              </Link>
            </p>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

export default Payment;