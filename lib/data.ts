import { basePath } from "./basePath";

export const profile = {
  name: "Ayush Jain",
  initials: "AJ",
  title: "Full Stack Developer",
  tagline:
    "Full Stack Developer · Multi-Tenant Architecture · AI/ML Platforms · Open Source",
  summary:
    "Full Stack Developer with over 2.5 years of experience building enterprise SaaS platforms from the ground up. Built two core products at Katonic AI — Adaptive Studio (LLM deployment) and AI Studio (GenAI application platform) — serving tenants including an Indian state government portal. Active open-source contributor with multiple NPM packages and MCP servers adopted by the developer community.",
  location: "Indore, India · Remote",
  email: "ayushjain070401@gmail.com",
  phone: "+91 6261761050",
  links: {
    github: "https://github.com/ayushjain070401",
    linkedin: "https://linkedin.com/in/ayush-jain-01a967244",
    email: "mailto:ayushjain070401@gmail.com",
    resume: `${basePath}/AyushJain-Resume.pdf`
  },
  stats: [
    { label: "Years of experience", value: "2.5+" },
    { label: "Production platforms shipped", value: "2" },
    { label: "Open-source packages", value: "8+" },
    { label: "Developers using OmniDB", value: "80+" }
  ]
} as const;

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  current?: boolean;
  bullets: string[];
  stack: string[];
  impact?: { value: string; label: string }[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Katonic AI",
    companyUrl: "https://katonic.ai",
    start: "Jun 2024",
    end: "Present",
    location: "Remote",
    type: "Full-time",
    current: true,
    impact: [
      { value: "2–3h → 0", label: "tenant onboarding" },
      { value: "12h → <1h", label: "incident debug time" },
      { value: "Gov-grade", label: "state portal deployment" }
    ],
    stack: [
      "Kubernetes",
      "Prometheus",
      "Loki",
      "TGI/VLLM",
      "Node.js",
      "React",
      "FastAPI",
      "WebSockets",
      "Hugging Face"
    ],
    bullets: [
      "Built a centralized Tenant Manager that replaced 2–3 hours of manual per-customer setup with automated tenant onboarding, resource provisioning, and billing on a single cluster.",
      "Architected a usage-based billing engine enabling Katonic AI's transition from on-prem to a multi-tenant SaaS model, supporting sub-business onboarding, per-tenant GPU cost tracking, and tiered pricing via Prometheus.",
      "Built Adaptive Studio from scratch — a self-serve LLM deployment platform (TGI/VLLM) enabling tenants to deploy models from Hugging Face or custom datasets on GPU/CPU, powering AI Studio's GenAI apps and the copilot product (ACE).",
      "Developed AI Studio with DS and DevOps teams — a GenAI platform for text, document, audio, and image processing apps, configurable smart copilots with embeddable chatbot widgets, deployed live on an Indian state government portal.",
      "Built an integrated developer environment in AI Studio with on-demand Jupyter/VS Code workspaces, persistent storage (PVC), and one-click app deployment via GitHub/GitLab supporting Streamlit, FastAPI, React, and Node.js.",
      "Implemented Loki-based centralized logging and distributed telemetry across all platform services, reducing incident debugging time from 12+ hours to under 1 hour.",
      "Shipped Groq Orpheus TTS to production — engineered WebSocket lifecycle management and audio streaming for real-time voice AI, and authored the published technical deep-dive and engineering guide."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Katonic AI",
    companyUrl: "https://katonic.ai",
    start: "Feb 2024",
    end: "May 2024",
    location: "Remote",
    type: "Internship",
    stack: ["React.js", "Redux", "Sass/SCSS", "Formik", "Yup"],
    bullets: [
      "Gained deep understanding of the platform architecture while enhancing frontend components using React.js, Redux, and Sass, improving UI consistency and component performance.",
      "Delivered 2–3 UI user stories end-to-end, integrating schema-driven form validation (Formik + Yup) across multiple modules and streamlining data entry workflows."
    ]
  }
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "WebSockets", "JWT", "OAuth 2.0"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Sass/SCSS", "Vite"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Milvus", "Qdrant", "Elasticsearch", "DynamoDB"]
  },
  {
    title: "DevOps & Cloud",
    items: ["Kubernetes", "Docker", "CI/CD", "GitHub Actions", "NVIDIA MIG", "Prometheus", "Grafana", "AWS", "GCP"]
  },
  {
    title: "Tools & Practices",
    items: ["Git", "Linux", "Keycloak", "Microservices", "MCP", "NPM Publishing", "Agile/Scrum"]
  },
  {
    title: "Testing",
    items: ["Jest", "Supertest", "React Testing Library"]
  }
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { github?: string; live?: string; npm?: string; docs?: string };
  category: "AI/ML" | "Developer Tools" | "Infrastructure" | "Library" | "Product";
  featured?: boolean;
  company?: string;
};

export const projects: Project[] = [
  {
    name: "Voiceforge",
    tagline: "AI agent platform — build voice or text agents in 7 steps.",
    description:
      "Production AI agent platform that lets teams stand up voice or text agents with 10+ knowledge connectors, an in-chat copilot UI, Composio for 1000+ MCP integrations, multi-channel deployment, and LLM-based cost tracking with plan-based limits.",
    highlights: [
      "10+ knowledge connectors",
      "Composio · 1000+ MCP integrations",
      "Multi-channel deployment",
      "Plan-based cost tracking"
    ],
    stack: ["Next.js", "Node.js", "WebSockets", "LLMs", "Composio", "MCP"],
    links: {},
    category: "AI/ML",
    featured: true,
    company: "Personal · Agentic Platform"
  },
  {
    name: "Msgly",
    tagline: "Unified messaging library — one API, every channel.",
    description:
      "NPM messaging library that unifies WhatsApp, Telegram, Instagram, Messenger, and LINE behind a single API. Published to NPM with 500+ average weekly downloads.",
    highlights: [
      "500+ weekly downloads",
      "5 channels, one API",
      "TypeScript-first",
      "Webhook + send unification"
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Webhooks",
      "REST APIs",
      "WhatsApp",
      "Telegram",
      "NPM"
    ],
    links: { github: "https://github.com/AyushJain070401/msgly", npm: "https://www.npmjs.com/package/msgly" },
    category: "Library",
    featured: true
  },
  {
    name: "Lock Vault",
    tagline: "Drop-in auth for Node.js — JWT, sessions, 2FA, OAuth.",
    description:
      "Production-grade authentication toolkit for Node.js applications. Bundles JWT, sessions, TOTP/2FA, and OAuth with multi-database support — zero extra dependencies. 500+ downloads in its first month.",
    highlights: [
      "500+ downloads month one",
      "JWT · sessions · TOTP/2FA · OAuth",
      "Multi-database support",
      "Zero peer dependencies"
    ],
    stack: ["TypeScript", "Node.js", "JWT", "Sessions", "TOTP/2FA", "OAuth"],
    links: { github: "https://github.com/AyushJain070401/LockVault" },
    category: "Library",
    featured: true
  },
  {
    name: "OmniDB",
    tagline: "One MCP server. Every database. Secure by default.",
    description:
      "Gives LLMs safe access to 22+ databases (PostgreSQL, MongoDB, Redis, Neo4j, DynamoDB and more) with built-in SQL-injection protection and rate limiting. Adopted by 80+ developers.",
    highlights: [
      "22+ databases",
      "SQL-injection protection",
      "Rate-limited by default",
      "Adopted by 80+ developers"
    ],
    stack: ["TypeScript", "MCP", "PostgreSQL", "MongoDB", "Redis", "Neo4j"],
    links: { github: "https://github.com/AyushJain070401/omnidb-mcp" },
    category: "Developer Tools",
    featured: true
  },
  {
    name: "MAAPS",
    tagline: "Industrial asset management with AI-grounded alerts.",
    description:
      "Industrial asset management system with QR-based tracking and real-time maintenance alerts, monitoring 500+ equipment assets with an AI agent grounded in live operational data.",
    highlights: [
      "500+ equipment assets",
      "QR-based tracking",
      "Real-time alerts",
      "AI agent grounded in live data"
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "LLMs"],
    links: {},
    category: "Product",
    company: "Freelance"
  },
  {
    name: "Code Navigator MCP",
    tagline: "MCP server that indexes your repo for Claude.",
    description:
      "An MCP server that indexes your codebase and gives Claude (or any MCP client) the ability to find the exact files where issues live and apply precise fixes — using only real file content, never guesses.",
    highlights: [
      "Real-content grounding",
      "Drop-in for any MCP client",
      "Precise file targeting",
      "JavaScript-based"
    ],
    stack: ["JavaScript", "Node.js", "MCP", "AST", "Glob"],
    links: { github: "https://github.com/AyushJain070401/code-navigator-mcp" },
    category: "Developer Tools"
  },
  {
    name: "LocalMind",
    tagline: "Browser-native AI productivity suite — 100% on-device.",
    description:
      "An AI productivity suite that runs entirely in the browser. Zero data leaves the device — built for users who want LLM-powered tools without trusting a backend.",
    highlights: [
      "100% on-device inference",
      "Zero data exfiltration",
      "Browser-native runtime",
      "Privacy-first design"
    ],
    stack: ["TypeScript", "WebGPU", "WASM", "IndexedDB", "Web Workers"],
    links: { github: "https://github.com/AyushJain070401/localmind" },
    category: "AI/ML"
  },
  {
    name: "Email Attachment Extractor",
    tagline: "Extract only the real attachments from RFC822 emails.",
    description:
      "Library that extracts only real attachments from raw RFC822 emails — intelligently filtering out signature images, inline images, tracking pixels, and social media logos.",
    highlights: [
      "RFC822-compliant parser",
      "Filters signatures + pixels",
      "Clean attachment surface",
      "Plug-and-play"
    ],
    stack: ["Node.js", "RFC822", "MIME", "Streams"],
    links: { github: "https://github.com/AyushJain070401/Email-Attachment-Extractor" },
    category: "Library"
  }
];

export const publication = {
  title: "Production Voice AI with Groq Orpheus TTS",
  publisher: "Katonic AI Engineering",
  description:
    "Technical deep-dive on shipping Groq Orpheus TTS to production — WebSocket lifecycle management, audio streaming, and the engineering tradeoffs behind real-time voice AI.",
  url: "https://katonic.ai/voice-ai-guide"
};

export const education = {
  degree: "Bachelor of Technology in Computer Science & Information Technology",
  institution: "Acropolis Institute of Technology and Research",
  location: "Indore, India",
  start: "Aug 2019",
  end: "Aug 2023",
  cgpa: "8.4 / 10"
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
] as const;
