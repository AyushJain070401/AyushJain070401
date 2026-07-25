"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const traits = [
  {
    title: "Multi-tenant SaaS",
    body: "Designed tenant managers, usage-based billing, and per-tenant GPU cost tracking that powered Katonic AI's transition from on-prem to cloud SaaS."
  },
  {
    title: "AI/ML platform engineering",
    body: "Built Adaptive Studio (LLM deployment) and AI Studio (GenAI apps) — including embeddable copilot widgets running on a state government portal."
  },
  {
    title: "Open source",
    body: "Author of NPM packages and MCP servers — Msgly (500+ weekly DLs), Lock Vault, and OmniDB (80+ developers) — shipped end-to-end and documented."
  }
];

export function About() {
  return (
    <section id="about" className="section">
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
            01 — About
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          I ship{" "}
          <span className="font-serif text-[1.1em] font-normal italic text-accent-glow">
            platforms
          </span>{" "}
          — not just features.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
          {profile.summary}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {traits.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-xl p-6"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
              <span className="font-mono text-xs">0{i + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-ink">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
