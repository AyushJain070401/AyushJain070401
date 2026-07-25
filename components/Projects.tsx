"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Package, Lock } from "lucide-react";
import { projects } from "@/lib/data";

type Category = "All" | "AI/ML" | "Developer Tools" | "Library" | "Product";
const categories: Category[] = [
  "All",
  "AI/ML",
  "Developer Tools",
  "Library",
  "Product"
];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const featuredCount = useMemo(
    () => projects.filter((p) => p.featured).length,
    []
  );
  const openSourceCount = useMemo(
    () => projects.filter((p) => p.links.github).length,
    []
  );

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
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
            03 — Projects
          </span>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              <span className="font-serif text-[1.1em] font-normal italic text-accent-glow">
                Selected
              </span>{" "}
              work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
              A mix of production platforms shipped at Katonic AI and
              open-source packages used by the community. The numbers tell the
              story.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              <span className="text-ink">{projects.length}</span>
              <span>projects</span>
              <span>·</span>
              <span className="text-accent">{featuredCount}</span>
              <span>featured</span>
              <span>·</span>
              <span className="text-ink">{openSourceCount}</span>
              <span>open-source</span>
            </div>
            <a
              href="https://github.com/ayushjain070401"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-line bg-tint/[0.02] px-3 py-1.5 text-xs font-medium text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
            >
              <Github size={13} />
              All on GitHub
              <ArrowUpRight
                size={12}
                className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 flex flex-wrap items-center gap-1.5 rounded-xl border border-line bg-bg-card/60 p-1.5 backdrop-blur"
      >
        {categories.map((c) => {
          const isActive = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? "bg-accent/15 text-accent-glow shadow-[inset_0_0_0_1px_rgb(var(--accent)_/_0.25)]"
                  : "text-ink-dim hover:bg-tint/[0.04] hover:text-ink"
              }`}
            >
              {c}
              <span
                className={`rounded-md px-1.5 py-px font-mono text-[10px] ${
                  isActive
                    ? "bg-accent/20 text-accent-glow"
                    : "bg-tint/[0.04] text-ink-faint"
                }`}
              >
                {counts[c] ?? 0}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              layout
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-bg-card p-6 transition-all duration-300 ${
                p.featured
                  ? "border-accent/20 hover:border-accent/50"
                  : "border-line hover:border-accent/40"
              }`}
            >
              {/* Featured corner glow */}
              {p.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgb(var(--accent) / 0.22), transparent 70%)"
                  }}
                />
              )}

              {/* Hover radial glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(520px circle at 50% 0%, rgb(var(--accent) / 0.08), transparent 60%)"
                }}
              />

              {/* Top hairline on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgb(var(--accent) / 0.6), transparent)"
                }}
              />

              <header className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                    {p.featured && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent-glow">
                        Featured
                      </span>
                    )}
                    {p.company && (
                      <span
                        title={`Closed source · ${p.company}`}
                        className="inline-flex items-center gap-1 rounded-full border border-line bg-tint/[0.02] px-2 py-0.5 font-mono text-[10px] text-ink-dim"
                      >
                        <Lock size={9} className="text-accent" />
                        {p.company}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-ink-dim">{p.tagline}</p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="grid h-8 w-8 place-items-center rounded-md border border-line text-ink-dim transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {p.links.npm && (
                    <a
                      href={p.links.npm}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="NPM"
                      className="grid h-8 w-8 place-items-center rounded-md border border-line text-ink-dim transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <Package size={14} />
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live"
                      className="grid h-8 w-8 place-items-center rounded-md border border-line text-ink-dim transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </header>

              <p className="relative mt-4 text-sm leading-relaxed text-ink-dim">
                {p.description}
              </p>

              <ul className="relative mt-4 mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-ink-dim"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <footer className="relative mt-auto flex flex-wrap items-center gap-1.5 border-t border-line pt-4">
                <span className="mr-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                  Stack
                </span>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-tint/[0.02] px-2.5 py-0.5 font-mono text-[11px] text-ink-dim transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {s}
                  </span>
                ))}
              </footer>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-line py-12 text-center text-sm text-ink-faint">
          No projects in this category yet.
        </div>
      )}
    </section>
  );
}
