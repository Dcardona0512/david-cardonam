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
   * David en cabina, con cascos. Es la foto correcta para esta sección: cuenta
   * la transición piloto → desarrollo sin que haya que leer un solo párrafo.
   * Cuadrada, 800px, servida por next/image.
   *
   * Ponlo a `null` y «Sobre mí» vuelve al monograma tipográfico.
   */
  photo: "/profile/avatar.jpg" as string | null,
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
   * El host correcto es `autoserviciosla53` — sin guiones. El README del repo
   * la-53 anuncia `autoservicios-la-53`, que devuelve DEPLOYMENT_NOT_FOUND;
   * arregla ese README, porque un reclutador que lo lea también se estrellará.
   * Verificado: la tienda y /admin/login responden 200 y sirven productos.
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
    demoUrl: "https://autoserviciosla53.vercel.app", // verificado, 200
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
   * Volando desde 2018 y sigue en activo, de ahí `end: null` → «Actualidad».
   * Año sin mes a propósito: David dio el año, y rellenar un mes inventado
   * pondría un dato falso en la página. `formatMonth` admite ambos formatos.
   *
   * Al ordenar por `end`, esta entrada queda la primera: lo primero que lee un
   * reclutador es «piloto comercial, 2018 — Actualidad», que es exactamente el
   * gancho del portafolio.
   */
  { id: "piloto-comercial", kind: "work", start: "2018", end: null },

  // ⚠️ TODO(David): si tienes licencia o formación aeronáutica reglada, añádela.
  // El texto ya está escrito en es.ts / en.ts con este id.
  // { id: "formacion-aeronautica", kind: "education", start: "AAAA-MM", end: "AAAA-MM" },
];

/** Newest first. Certifications sort by their single month. */
export const sortedTimeline = [...timeline].sort((a, b) =>
  (b.end ?? "9999-12").localeCompare(a.end ?? "9999-12"),
);
