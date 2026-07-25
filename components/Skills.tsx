"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
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
            04 — Stack
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The tools I{" "}
          <span className="font-serif text-[1.1em] font-normal italic text-accent-glow">
            reach for
          </span>
          .
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
          From Kubernetes manifests to React components — full-stack, top to
          bottom.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-bg-card p-6 transition-all duration-300 hover:border-accent/40"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(420px circle at 50% 0%, rgb(var(--accent) / 0.10), transparent 60%)"
              }}
            />
            <div className="relative flex items-center justify-between">
              <h3 className="text-base font-semibold text-ink">{g.title}</h3>
              <span className="font-mono text-[11px] text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-tint/[0.02] px-3 py-1 font-mono text-[11px] text-ink-dim transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
