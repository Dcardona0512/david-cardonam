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
   * ⚠️ TODO: update this the moment the first Vercel deploy finishes.
   * Vercel assigns the subdomain from the project name, so this guess is
   * probably wrong — and this value feeds the canonical URLs, hreflang, the
   * sitemap and every OG tag, so a stale value breaks SEO silently.
   */
  url: "https://david-cardona.vercel.app",
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
  /**
   * ⚠️ TODO(David): GitHub is missing because the link wasn't included in the
   * message. Not guessing it — a wrong handle here either 404s or, worse,
   * points a recruiter at a stranger's profile. Add it as:
   *   { id: "github", href: "https://github.com/<usuario>", label: "@<usuario>" },
   *
   * LinkedIn is worth adding too; it's usually the first thing a recruiter
   * checks after the CV.
   */
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
 * ⚠️ TODO(David): this list is deliberately conservative. The only thing with
 * evidence behind it right now is the Platzi HTML course, so HTML is the single
 * `solid` entry. Everything else is marked `learning`, and anything you don't
 * actually touch should be deleted rather than left here.
 *
 * Resist the urge to promote things to `solid` to fill the column. The whole
 * reason this section is credible is that the split is honest — a recruiter who
 * asks one question about a `solid` skill you can't defend stops reading. An
 * short honest list beats a long unverifiable one.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    skills: [
      { name: "HTML", level: "solid" }, // certified — Platzi, jun 2026
      { name: "CSS", level: "learning" },
      { name: "JavaScript", level: "learning" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git & GitHub", level: "learning" },
      { name: "Vercel", level: "learning" },
    ],
  },
  /**
   * A group for the AI-assisted workflow, since that's what "Vibe Coder" means
   * in practice and it's a real, current skill worth naming. Replace these with
   * the tools you actually use day to day, and delete the group if you'd rather
   * not lead with it.
   */
  {
    id: "ai",
    skills: [
      { name: "Claude Code", level: "learning" }, // TODO: confirm your tools
      { name: "ChatGPT", level: "learning" },
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
   * ⚠️ TODO(David): one entry, because you said you have one repo — but I never
   * got the GitHub link, so `repoUrl` is still null and the card shows
   * "Repo privado" instead of a button. Fill in `repoUrl`, `stack` and `image`
   * and this becomes the strongest section on the page.
   *
   * `demoUrl` matters more than the repo for a non-technical recruiter: if the
   * project can be deployed to Vercel too, do it — a link they can click and
   * use beats any description.
   */
  {
    id: "proyecto-1",
    stack: ["HTML", "CSS"], // TODO: the real stack
    demoUrl: null, // TODO: deploy it and paste the URL
    repoUrl: null, // TODO: https://github.com/<usuario>/<repo>
    image: null, // TODO: "/projects/proyecto-1.png" (16:9, ≥1280px wide)
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
   * ⚠️ TODO(David): add your work history and earlier education here. Include
   * non-technical jobs — for a career changer that's where the transferable
   * skills come from, and an empty timeline reads as "no history" rather than
   * "career changer". Copy this shape, then write the matching text in
   * es.ts / en.ts under the same id:
   *
   * { id: "trabajo-anterior", kind: "work", start: "2019-03", end: "2024-12" },
   * { id: "formacion-previa", kind: "education", start: "2015-09", end: "2019-06" },
   */
];

/** Newest first. Certifications sort by their single month. */
export const sortedTimeline = [...timeline].sort((a, b) =>
  (b.end ?? "9999-12").localeCompare(a.end ?? "9999-12"),
);
