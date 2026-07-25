"use client";

import { profile } from "@/lib/data";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-ink-dim sm:flex-row sm:items-center sm:px-8">
        <div>
          © {year} {profile.name}. Crafted with Next.js, Tailwind, and Framer
          Motion.
        </div>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            github
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            linkedin
          </a>
          <a
            href={profile.links.email}
            className="transition-colors hover:text-ink"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
