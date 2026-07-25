"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { publication } from "@/lib/data";

export function Publication() {
  return (
    <section id="publication" className="section">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">
          <BookOpen size={14} /> Writing
        </span>
        <h2 className="section-title">Published work.</h2>
      </motion.div>

      <motion.a
        href={publication.url}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="group mt-10 flex flex-col overflow-hidden rounded-xl border border-line bg-bg-card transition-all hover:border-accent/40"
      >
        <div className="relative grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-accent">
              {publication.publisher}
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-ink">
              {publication.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">
              {publication.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent transition-colors group-hover:text-accent-glow">
              Read the deep-dive
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          <div className="hidden h-32 w-32 shrink-0 place-items-center rounded-2xl border border-accent/30 bg-accent/5 md:grid">
            <BookOpen size={42} className="text-accent" />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
