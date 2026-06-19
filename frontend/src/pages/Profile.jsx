import { useState } from "react";

import PageLayout from "../components/PageLayout.jsx";

const initialProfile = {
  fullName: "",
  headline: "",
  location: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  portfolio: "",
  targetRole: "",
  targetCompanies: "",
  about: "",
  skills: "",
  experience: "",
  projects: "",
  education: "",
  certifications: ""
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
        {label}
      </span>
      {children}
    </label>
  );
}

function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setSaved(false);

    setProfile((current) => ({
      ...current,
      [field]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10";

  const textareaClass =
    "min-h-32 w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-roast-cream outline-none transition placeholder:text-zinc-600 focus:border-roast-orange/60 focus:ring-4 focus:ring-roast-red/10";

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="mb-8">
          <div className="mb-4 inline-flex rounded-full border border-roast-red/30 bg-roast-red/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-roast-orange">
            LinkedIn-style profile
          </div>

          <h1 className="font-bebas text-[clamp(60px,9vw,110px)] uppercase leading-[0.86] tracking-[0.03em] text-roast-cream">
            Build your
            <span className="text-fire-glow block text-roast-red">
              career profile.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            Add your professional details like LinkedIn: headline, about,
            skills, projects, experience, education, links, and target roles.
            Later, this data can be used to heal resumes more accurately.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8"
          >
            <h2 className="font-bebas text-5xl uppercase tracking-[0.04em] text-roast-cream">
              Professional details
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  value={profile.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  placeholder="Anam Ghafoor"
                  className={inputClass}
                />
              </Field>

              <Field label="Professional headline">
                <input
                  value={profile.headline}
                  onChange={(event) =>
                    updateField("headline", event.target.value)
                  }
                  placeholder="AI/ML Engineer | React Developer"
                  className={inputClass}
                />
              </Field>

              <Field label="Location">
                <input
                  value={profile.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                  placeholder="Lahore, Pakistan"
                  className={inputClass}
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  value={profile.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Phone">
                <input
                  value={profile.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="+92..."
                  className={inputClass}
                />
              </Field>

              <Field label="Target role">
                <input
                  value={profile.targetRole}
                  onChange={(event) =>
                    updateField("targetRole", event.target.value)
                  }
                  placeholder="AI Intern, Frontend Developer..."
                  className={inputClass}
                />
              </Field>

              <Field label="LinkedIn URL">
                <input
                  value={profile.linkedin}
                  onChange={(event) =>
                    updateField("linkedin", event.target.value)
                  }
                  placeholder="https://linkedin.com/in/..."
                  className={inputClass}
                />
              </Field>

              <Field label="GitHub URL">
                <input
                  value={profile.github}
                  onChange={(event) =>
                    updateField("github", event.target.value)
                  }
                  placeholder="https://github.com/..."
                  className={inputClass}
                />
              </Field>

              <Field label="Portfolio URL">
                <input
                  value={profile.portfolio}
                  onChange={(event) =>
                    updateField("portfolio", event.target.value)
                  }
                  placeholder="https://yourportfolio.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Target companies">
                <input
                  value={profile.targetCompanies}
                  onChange={(event) =>
                    updateField("targetCompanies", event.target.value)
                  }
                  placeholder="Google, Systems Ltd, Arbisoft..."
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-5 space-y-5">
              <Field label="About">
                <textarea
                  value={profile.about}
                  onChange={(event) => updateField("about", event.target.value)}
                  placeholder="Write a LinkedIn-style professional summary..."
                  className={textareaClass}
                />
              </Field>

              <Field label="Skills">
                <textarea
                  value={profile.skills}
                  onChange={(event) =>
                    updateField("skills", event.target.value)
                  }
                  placeholder="React, Node.js, Express, Python, ML, GenAI..."
                  className={textareaClass}
                />
              </Field>

              <Field label="Experience">
                <textarea
                  value={profile.experience}
                  onChange={(event) =>
                    updateField("experience", event.target.value)
                  }
                  placeholder="Add internships, freelance work, volunteer roles, society roles..."
                  className={textareaClass}
                />
              </Field>

              <Field label="Projects">
                <textarea
                  value={profile.projects}
                  onChange={(event) =>
                    updateField("projects", event.target.value)
                  }
                  placeholder="Add your best projects with tech stack and impact..."
                  className={textareaClass}
                />
              </Field>

              <Field label="Education">
                <textarea
                  value={profile.education}
                  onChange={(event) =>
                    updateField("education", event.target.value)
                  }
                  placeholder="Degree, university, semester/year, relevant coursework..."
                  className={textareaClass}
                />
              </Field>

              <Field label="Certifications">
                <textarea
                  value={profile.certifications}
                  onChange={(event) =>
                    updateField("certifications", event.target.value)
                  }
                  placeholder="Coursera, Google, Microsoft, IBM, freeCodeCamp..."
                  className={textareaClass}
                />
              </Field>
            </div>

            {saved ? (
              <div className="mt-6 rounded-lg border border-heal-mint/25 bg-heal-mint/10 px-4 py-3 text-sm text-heal-mint">
                Profile saved in frontend state. Backend database connection can
                be added later.
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-7 w-full rounded-md bg-roast-red px-6 py-4 font-bebas text-2xl uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#e0441f] hover:shadow-[0_8px_30px_rgba(194,59,34,0.4)] sm:w-auto"
            >
              Save Profile
            </button>
          </form>

          <aside className="h-fit rounded-2xl border border-white/10 bg-black/45 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <div className="rounded-2xl border border-roast-red/25 bg-[radial-gradient(circle_at_20%_0%,rgba(194,59,34,0.22),transparent_45%),rgba(255,255,255,0.03)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-roast-red/35 bg-roast-red/15 font-bebas text-5xl text-roast-orange shadow-[0_0_35px_rgba(194,59,34,0.25)]">
                  {(profile.fullName || "A").charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="font-bebas text-4xl uppercase leading-none tracking-[0.04em] text-roast-cream">
                    {profile.fullName || "Your Name"}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-zinc-500">
                    {profile.headline || "Professional headline appears here"}
                  </p>
                </div>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-roast-red/70 to-transparent" />

              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {profile.location || "Not added yet"}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                    Target role
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {profile.targetRole || "Not added yet"}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-red">
                    Target companies
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {profile.targetCompanies || "Not added yet"}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-heal-mint">
                    Heal mode readiness
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    The more details you add, the more accurately Heal Me can
                    tailor your resume for your target roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-roast-orange">
                Professional tip
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Add real projects, real tools, real outcomes, and measurable
                impact. “Hardworking student” is not a personality trait on a
                resume — it is the default setting.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}

export default Profile;