"use client";

const items = [
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "Python",
  "Kubernetes",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "FastAPI",
  "Prometheus",
  "Grafana",
  "Loki",
  "MCP",
  "GraphQL",
  "AWS",
  "GCP",
  "Hugging Face"
];

export function StackMarquee() {
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Technology marquee"
      className="relative overflow-hidden border-y border-line/60 bg-bg-soft/40 py-6"
    >
      {/* Edge fades so the loop dissolves into the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent"
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 px-6"
          >
            <span className="font-mono text-sm uppercase tracking-[0.22em] text-ink-faint transition-colors hover:text-ink">
              {item}
            </span>
            <span aria-hidden className="font-mono text-base text-ink-faint/40">
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
