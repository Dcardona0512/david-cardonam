import type { Locale, ProjectMeta, SkillGroup, SocialLink, TimelineMeta } from "./types";

/**
 * Language-independent content. Everything here is a fact, not prose.
 *
 * ⚠️ TODO(you): every value marked TODO is placeholder data. Replace it and the
 * site is done — no component needs to change.
 */

export const site = {
  name: "David Cardona Martinez",
  /**
   * The live production URL, verified against the deployment (no hyphen —
   * Vercel assigned `davidcardonam`, not `david-cardonam`).
   *
   * If this ever stops matching the real domain, the site keeps working but
   * silently breaks SEO: it feeds the canonical tag, hreflang, the sitemap and
   * every OG tag, so search engines would index a URL that 404s and link
   * previews would fail to load. Change it here and nowhere else.
   */
  url: "https://davidcardonam.vercel.app",
  email: "dcardona0512@gmail.com",
  // Full E.164 number, digits only, no "+". Left empty, so WhatsApp is hidden.
  whatsapp: "",
  /**
   * CV files, per language.
   *
   * ⚠️ TODO(David): set to `null` until the PDFs actually exist under /public —
   * every "Descargar CV" button hides itself while this is null. That's on
   * purpose: a download button that 404s costs more trust than a missing one.
   *
   * To enable it, drop the files at these paths and uncomment:
   *   resume: { es: "/cv/cv-es.pdf", en: "/cv/cv-en.pdf" },
   * If you only have one PDF, point both keys at it.
   */
  resume: null as Record<Locale, string> | null,
  /**
   * Profile photo at /public/profile/avatar.jpg (square, ≥600px).
   * Leave `null` and the About section renders a typographic monogram instead.
   */
  photo: null as string | null,
} as const;

export const socials: SocialLink[] = [
  {
    id: "github",
    href: "https://github.com/Dcardona0512",
    label: "@Dcardona0512",
  },
  { id: "email", href: `mailto:${site.email}`, label: site.email },
  {
    id: "website",
    name: "Platzi",
    href: "https://platzi.com/@pilotdavid0512827/",
    label: "@pilotdavid0512827",
  },
];

/**
 * Skills, grouped. `solid` = you can be interviewed on it today.
 * `learning` = you're actively studying it.
 *
 * This list is derived from what you've actually shipped, not from a template:
 * everything marked `solid` appears in the la-53 codebase or in the Platzi
 * certification. That's the whole point of the split — a recruiter who asks one
 * question about a `solid` skill you can't defend stops reading, so the honesty
 * of this column is what makes it worth having.
 *
 * ⚠️ Review it once: if anything here feels like more than you'd want to be
 * interviewed on today, move it down to `learning`. That's not a step backwards.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    skills: [
      { name: "HTML", level: "solid" }, // certificado — Platzi, jun 2026
      { name: "CSS", level: "solid" },
      { name: "JavaScript", level: "solid" },
      { name: "TypeScript", level: "learning" },
      { name: "SQL", level: "learning" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { name: "React", level: "solid" },
      { name: "Next.js", level: "solid" }, // App Router en producción
      { name: "Tailwind CSS", level: "solid" },
      { name: "Accesibilidad (WCAG)", level: "learning" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "Supabase", level: "solid" },
      { name: "PostgreSQL", level: "learning" },
      { name: "Auth y RLS", level: "learning" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git & GitHub", level: "solid" },
      { name: "Vercel", level: "solid" },
    ],
  },
  /**
   * The AI-assisted workflow named explicitly. Saying it out loud reads as
   * method; leaving it out and getting asked in an interview reads as evasion.
   * Swap these for the tools you actually use.
   */
  {
    id: "ai",
    skills: [
      { name: "Claude Code", level: "solid" }, // TODO: confirma tus herramientas
      { name: "ChatGPT", level: "solid" },
    ],
  },
];

/**
 * Projects. Keep 2–4. A project with no repo and no demo is not evidence —
 * either ship it or leave it off. `null` links render as an explicit
 * "not available" state rather than a button that goes nowhere.
 */
export const projects: ProjectMeta[] = [
  /**
   * Autoservicios La 53 — github.com/Dcardona0512/la-53
   *
   * Stack and feature list read from the repo, not guessed: Next.js 15 App
   * Router with route groups, Supabase (Postgres + RLS + Auth + Storage),
   * Tailwind v4, and @zxing for barcode scanning. Both the storefront and the
   * admin panel are live and returned 200 when checked.
   *
   * ⚠️ TODO(David): la demo está caída. https://autoservicios-la-53.vercel.app
   * devuelve DEPLOYMENT_NOT_FOUND y tu equipo de Vercel no tiene proyectos, así
   * que ese despliegue ya no existe. Lo dejo en `null` a propósito: la tarjeta
   * muestra «Demo en preparación», que es mejor que mandar a un reclutador a un
   * 404 de Vercel.
   *
   * Vuelve a desplegar la-53 y pega aquí la URL — es lo que más peso tiene de
   * todo el portafolio, porque es lo único que un reclutador puede usar.
   *
   * La captura es el panel de administración. Antes de guardarla se difuminaron
   * dos zonas: el correo de la barra superior y el nombre de una clienta real en
   * «Pedidos recientes» — ese dato es de una tercera persona, no de David.
   * Es 1.99:1 y la tarjeta la recorta a 16:9, pero solo un 5% por lado, así que
   * ni el logo ni el botón «Salir» se pierden.
   */
  {
    id: "la-53",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS"],
    demoUrl: null, // volver a poner la URL cuando la demo esté de nuevo arriba
    repoUrl: "https://github.com/Dcardona0512/la-53", // verificado, 200
    image: "/projects/la-53.png",
    featured: true,
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
  /**
   * Real, verified from the diploma PDF: Platzi "Curso de HTML", approved
   * 24 June 2026, 15 hours. Credential 68a24eb2-3601-4c5f-90c5-b645f4dcdb86.
   * The URL is the public Platzi profile, which is third-party verifiable —
   * better than hosting the PDF yourself, since a recruiter can confirm it
   * without taking your word for it.
   */
  {
    id: "cert-html-platzi",
    kind: "certification",
    start: "2026-06",
    end: "2026-06",
    url: "https://platzi.com/@pilotdavid0512827/",
  },
  /**
   * ⚠️ TODO(David): descomenta esto y pon TUS fechas reales de piloto comercial.
   * Lo dejo comentado a propósito: las fechas se renderizan visibles y ordenan
   * la lista, así que una fecha inventada por mí sería un dato falso en tu
   * portafolio. El texto ya está escrito en es.ts / en.ts con este mismo id.
   *
   * Tu etapa como piloto es la entrada más valiosa de esta sección — un
   * reclutador recuerda «piloto comercial que ahora programa» mucho más que
   * cualquier curso.
   */
  // { id: "piloto-comercial", kind: "work", start: "AAAA-MM", end: "AAAA-MM" },
  //
  // Y si tienes la licencia o la formación aeronáutica, añádela también:
  // { id: "formacion-aeronautica", kind: "education", start: "AAAA-MM", end: "AAAA-MM" },
];

/** Newest first. Certifications sort by their single month. */
export const sortedTimeline = [...timeline].sort((a, b) =>
  (b.end ?? "9999-12").localeCompare(a.end ?? "9999-12"),
);
