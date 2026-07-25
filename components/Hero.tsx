"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown
} from "lucide-react";
import { profile } from "@/lib/data";

const rotatingPhrases = [
  "multi-tenant AI platforms",
  "production GenAI apps",
  "open-source MCP servers",
  "real-time voice AI"
];

export function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPhraseIdx((p) => (p + 1) % rotatingPhrases.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg mask-radial" />

      {/* Animated blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(var(--accent-soft) / 0.22), rgb(var(--accent-soft) / 0.04), transparent 70%)"
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[460px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.18), rgba(99,102,241,0.04), transparent 70%)"
        }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[380px] w-[480px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(var(--accent) / 0.18), transparent 70%)"
        }}
        animate={{ scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_1fr]">
          {/* LEFT: copy + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-glow"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="whitespace-nowrap font-serif italic font-normal gradient-text">
                {profile.name}.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-medium tracking-tight sm:text-[1.75rem] lg:text-3xl"
            >
              <span className="text-ink-dim">I build</span>
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingPhrases[phraseIdx]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block font-serif text-[1.15em] font-normal italic leading-none bg-gradient-to-r from-accent-glow via-accent to-indigo-400 bg-clip-text text-transparent"
                  >
                    {rotatingPhrases[phraseIdx]}
                  </motion.span>
                </AnimatePresence>
                <span className="font-serif italic text-ink-dim">.</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim"
            >
              Full Stack Developer with 2.5+ years building scalable,
              optimized software — from self-serve LLM deployment platforms
              to GenAI applications running on government portals. I&apos;ve
              also shipped custom CMMS systems, payment gateways, and more,
              engineered for performance at scale. Open-source maintainer of
              NPM packages and MCP servers used by the developer community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all hover:bg-accent-glow"
              >
                See my work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-tint/[0.02] px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                Get in touch
              </a>
              <a
                href={profile.links.resume}
                className="inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-ink-dim transition-colors hover:text-ink"
              >
                Download resume →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-5 text-sm text-ink-dim"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-accent" /> {profile.location}
              </span>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Mail size={14} /> {profile.email}
              </a>
            </motion.div>
          </div>

          {/* RIGHT: terminal card */}
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <Terminal />
          </motion.aside>
        </div>

        {/* Stat tiles */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="glass rounded-lg p-4 transition-colors">
              <div className="text-2xl font-semibold text-ink">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-ink-dim">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14 flex flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.a>
      </div>

      <div className="hairline mx-auto max-w-6xl" />
    </section>
  );
}

function Terminal() {
  const Line = ({
    prompt,
    children
  }: {
    prompt?: string;
    children: React.ReactNode;
  }) => (
    <div className="flex gap-2">
      {prompt && <span className="select-none text-accent">{prompt}</span>}
      <span>{children}</span>
    </div>
  );

  return (
    <div
      className="relative rounded-xl border border-line bg-bg-card/80 shadow-2xl shadow-accent/5 backdrop-blur"
      style={{
        boxShadow:
          "0 0 0 1px rgb(var(--accent) / 0.06), 0 30px 80px -20px rgb(var(--accent-soft) / 0.25), 0 8px 24px -12px rgba(0,0,0,0.6)"
      }}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{
          background:
            "linear-gradient(140deg, rgb(var(--accent) / 0.18), transparent 40%, rgba(99,102,241,0.12))",
          mask: "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMask:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: 1
        }}
      />

      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 text-center font-mono text-[11px] text-ink-faint">
          ayush@portfolio — zsh
        </div>
        <div className="h-3 w-3" />
      </div>

      {/* Terminal body */}
      <div className="space-y-1.5 p-5 font-mono text-[12.5px] leading-relaxed text-ink-dim">
        <Line prompt="$">
          <span className="text-ink">whoami</span>
        </Line>
        <Line>
          <span className="text-ink">ayush.jain</span>{" "}
          <span className="text-ink-faint">— Full-Stack Engineer</span>
        </Line>

        <div className="h-2" />

        <Line prompt="$">
          <span className="text-ink">cat</span> current/focus.txt
        </Line>
        <Line>
          <span className="text-accent-glow">→</span> Multi-tenant AI/ML
          platforms
        </Line>
        <Line>
          <span className="text-accent-glow">→</span> Self-serve LLM deployment
        </Line>
        <Line>
          <span className="text-accent-glow">→</span> Production voice AI
        </Line>
        <Line>
          <span className="text-accent-glow">→</span> Open-source MCP servers
        </Line>

        <div className="h-2" />

        <Line prompt="$">
          <span className="text-ink">uptime</span>
        </Line>
        <Line>
          <span className="text-ink">2.5+ years</span>{" "}
          <span className="text-ink-faint">@ Katonic AI</span>
        </Line>
        <Line>
          <span className="text-ink">80+ developers</span>{" "}
          <span className="text-ink-faint">on my OSS</span>
        </Line>

        <div className="h-2" />

        <Line prompt="$">
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block h-[14px] w-[8px] translate-y-[2px] bg-accent"
          />
        </Line>
      </div>
    </div>
  );
}
