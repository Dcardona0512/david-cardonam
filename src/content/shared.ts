import type { Locale, ProjectMeta, SkillGroup, SocialLink, TimelineMeta } from "./types";

/**
 * Language-independent content. Everything here is a fact, not prose.
 *
 * ⚠️ TODO(you): every value marked TODO is placeholder data. Replace it and the
 * site is done — no component needs to change.
 */

export const site = {
  // TODO: your real name.
  name: "Tu Nombre Apellido",
  // TODO: the domain you'll point at Vercel. Used for canonical URLs + OG tags.
  url: "https://tunombre.dev",
  // TODO: your contact email.
  email: "tucorreo@ejemplo.com",
  // TODO: full E.164 number, digits only, no "+". Leave "" to hide WhatsApp.
  whatsapp: "",
  /**
   * CV files, per language. Drop the PDFs at these exact paths under /public.
   * If you only have one, point both keys at it.
   */
  resume: {
    es: "/cv/cv-es.pdf",
    en: "/cv/cv-en.pdf",
  } satisfies Record<Locale, string>,
  /**
   * Profile photo at /public/profile/avatar.jpg (square, ≥600px).
   * Leave `null` and the About section renders a typographic monogram instead.
   */
  photo: null as string | null,
} as const;

export const socials: SocialLink[] = [
  // TODO: replace the handles below with yours.
  { id: "github", href: "https://github.com/tuusuario", label: "@tuusuario" },
  { id: "linkedin", href: "https://linkedin.com/in/tuusuario", label: "/in/tuusuario" },
  { id: "email", href: `mailto:${site.email}`, label: site.email },
];

/**
 * Skills, grouped. `solid` = you can be interviewed on it today.
 * `learning` = you're actively studying it. Being explicit about the line
 * between the two is what makes a junior profile credible.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    skills: [
      { name: "JavaScript", level: "solid" },
      { name: "TypeScript", level: "solid" },
      { name: "HTML", level: "solid" },
      { name: "CSS", level: "solid" },
      { name: "SQL", level: "learning" },
      { name: "Python", level: "learning" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { name: "React", level: "solid" },
      { name: "Next.js", level: "solid" },
      { name: "Tailwind CSS", level: "solid" },
      { name: "Accesibilidad (WCAG)", level: "learning" },
      { name: "Testing Library", level: "learning" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Node.js", level: "solid" },
      { name: "REST APIs", level: "solid" },
      { name: "PostgreSQL", level: "learning" },
      { name: "Prisma", level: "learning" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git & GitHub", level: "solid" },
      { name: "Figma", level: "solid" },
      { name: "Vercel", level: "solid" },
      { name: "Docker", level: "learning" },
    ],
  },
];

/**
 * Projects. Keep 2–4. A project with no repo and no demo is not evidence —
 * either ship it or leave it off. `null` links render as an explicit
 * "not available" state rather than a button that goes nowhere.
 */
export const projects: ProjectMeta[] = [
  {
    id: "proyecto-1",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    demoUrl: null, // TODO
    repoUrl: null, // TODO
    image: null, // TODO: "/projects/proyecto-1.png" (16:9, ≥1280px wide)
    featured: true,
  },
  {
    id: "proyecto-2",
    stack: ["React", "Node.js", "Express"],
    demoUrl: null, // TODO
    repoUrl: null, // TODO
    image: null, // TODO
  },
  {
    id: "proyecto-3",
    stack: ["JavaScript", "CSS", "API REST"],
    demoUrl: null, // TODO
    repoUrl: null, // TODO
    image: null, // TODO
  },
];

/**
 * Work history, education and certifications in one list — rendered as a
 * single chronological timeline. Include non-technical jobs: for a career
 * changer they're the source of the transferable skills.
 *
 * Dates are ISO `YYYY-MM`; `end: null` means "current".
 */
export const timeline: TimelineMeta[] = [
  {
    id: "bootcamp",
    kind: "education",
    start: "2025-01",
    end: "2025-09",
  },
  {
    id: "cert-1",
    kind: "certification",
    start: "2025-06",
    end: "2025-06",
    // url: "https://...",  // TODO: verification link, if the issuer gives one
  },
  {
    id: "trabajo-anterior",
    kind: "work",
    start: "2019-03",
    end: "2024-12",
  },
  {
    id: "formacion-previa",
    kind: "education",
    start: "2015-09",
    end: "2019-06",
  },
];

/** Newest first. Certifications sort by their single month. */
export const sortedTimeline = [...timeline].sort((a, b) =>
  (b.end ?? "9999-12").localeCompare(a.end ?? "9999-12"),
);
