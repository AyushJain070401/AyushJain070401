"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">
          <GraduationCap size={14} /> Education
        </span>
        <h2 className="section-title">Where I learned the fundamentals.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="glass mt-10 grid gap-6 rounded-xl p-8 md:grid-cols-[1fr_auto] md:items-center"
      >
        <div>
          <h3 className="text-lg font-semibold text-ink">{education.degree}</h3>
          <div className="mt-2 text-sm text-accent">{education.institution}</div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-dim">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {education.location}
            </span>
            <span className="text-ink-faint">·</span>
            <span className="font-mono text-xs">
              {education.start} — {education.end}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-accent/30 bg-accent/5 px-5 py-3">
          <div className="text-3xl font-semibold text-accent-glow">
            {education.cgpa.split(" ")[0]}
          </div>
          <div className="text-xs uppercase tracking-wider text-ink-dim">
            CGPA
            <div className="text-ink">out of 10</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
