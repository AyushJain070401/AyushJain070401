"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-12 bg-gradient-to-r from-transparent via-ink-faint to-ink-faint/60"
          />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink-dim">
            02 — Experience
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Where I&apos;ve{" "}
          <span className="font-serif text-[1.1em] font-normal italic text-accent-glow">
            built
          </span>{" "}
          things.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
          Two and a half years at Katonic AI — grew from intern to one of the
          core engineers behind their multi-tenant SaaS platform.
        </p>
      </motion.div>

      <ol className="relative mt-14 space-y-8 pl-8">
        {/* gradient timeline rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent/40 via-line to-line"
        />

        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${exp.start}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="relative"
          >
            {/* Timeline marker */}
            <span className="absolute -left-[37px] top-3 grid h-4 w-4 place-items-center rounded-full bg-bg ring-1 ring-accent/40">
              {exp.current ? (
                <>
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent/40 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent)_/_0.8)]" />
                </>
              ) : (
                <span className="h-2 w-2 rounded-full bg-accent/70" />
              )}
            </span>

            <div className="group relative overflow-hidden rounded-2xl border border-line bg-bg-card p-6 transition-all duration-300 hover:border-accent/40">
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px circle at 50% 0%, rgb(var(--accent) / 0.08), transparent 60%)"
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-line bg-tint/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-glow">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                          </span>
                          Currently
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-ink">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-glow"
                        >
                          {exp.company}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-accent">{exp.company}</span>
                      )}
                      <span className="text-ink-faint">·</span>
                      <span className="inline-flex items-center gap-1 text-ink-dim">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-md border border-line bg-tint/[0.02] px-2.5 py-1 font-mono text-xs text-ink-dim">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                {/* Impact metric strip */}
                {exp.impact && exp.impact.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                    {exp.impact.map((m) => (
                      <div
                        key={m.label}
                        className="bg-bg-card px-4 py-3"
                      >
                        <div className="font-mono text-sm font-semibold text-accent-glow">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[11px] uppercase tracking-wider text-ink-faint">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul className="mt-6 space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-ink-dim"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                {exp.stack && exp.stack.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-line pt-5">
                    <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      Stack
                    </span>
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-tint/[0.02] px-2.5 py-0.5 font-mono text-[11px] text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
