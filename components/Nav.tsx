"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { basePath } from "@/lib/basePath";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="relative grid h-8 w-8 overflow-hidden rounded-md border border-accent/30 bg-accent/10">
            <Image
              src={`${basePath}/avatar.jpeg`}
              alt={profile.name}
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </span>
          <span className="text-ink">{profile.name.split(" ")[0]}</span>
          <span className="text-ink-faint">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-1.5 text-sm text-ink-dim transition-colors hover:bg-tint/[0.04] hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-dim transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent-glow transition-colors hover:bg-accent/20"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink-dim"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-ink-dim hover:bg-tint/[0.04] hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-medium text-accent-glow"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
