"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.links.email,
    Icon: Mail
  },
  {
    label: "GitHub",
    value: "ayushjain070401",
    href: profile.links.github,
    Icon: Github
  },
  {
    label: "LinkedIn",
    value: "ayush-jain-01a967244",
    href: profile.links.linkedin,
    Icon: Linkedin
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone
  }
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(var(--accent) / 0.18), transparent 70%)"
        }}
      />
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="eyebrow">
            <Mail size={14} /> Contact
          </span>
          <h2 className="section-title">Let&apos;s build something.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
            Open to full-time roles, contract work, and interesting open-source
            collaborations. Fastest way to reach me is email — I usually reply
            within a day.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            href={profile.links.email}
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition-all hover:bg-accent-glow"
          >
            Say hello
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
          {channels.map(({ label, value, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-bg-card px-5 py-4 transition-all hover:border-accent/40"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <Icon size={16} />
                </span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-ink-faint">
                    {label}
                  </div>
                  <div className="mt-0.5 text-sm text-ink">{value}</div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
