/**
 * Shape of every piece of content on the site.
 *
 * Language-independent facts (URLs, dates, image paths, tech stacks) live in
 * `shared.ts` and are keyed by id. Translatable prose lives in `es.ts` / `en.ts`
 * and is keyed by the *same* ids. That split is deliberate: a link or a date
 * should exist in exactly one place, so the two languages can never drift.
 */

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/* -------------------------------------------------------------------------- */
/* Language-independent data                                                  */
/* -------------------------------------------------------------------------- */

export type SkillLevel = "solid" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  skills: Skill[];
}

export interface ProjectMeta {
  id: string;
  /** Tech shown as badges on the card. Keep to 3–5 — more reads as noise. */
  stack: string[];
  /** Live, working deployment. `null` renders a disabled state, never a dead link. */
  demoUrl: string | null;
  /** Public source. `null` renders a disabled state. */
  repoUrl: string | null;
  /** Path under /public. 16:9 works best with the card layout. */
  image: string | null;
  /** Pulls the project to the top and gives it a wider card. */
  featured?: boolean;
}

export type TimelineKind = "work" | "education" | "certification";

export interface TimelineMeta {
  id: string;
  kind: TimelineKind;
  /** ISO `YYYY-MM`. Drives sorting, so it must be accurate. */
  start: string;
  /** ISO `YYYY-MM`, or `null` for "current". */
  end: string | null;
  /** Certificate verification URL, or company/school site. */
  url?: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "email" | "whatsapp" | "twitter" | "website";
  /** Full href, including `mailto:` / `https://wa.me/...`. */
  href: string;
  /** Shown next to the icon, e.g. the handle or the address itself. */
  label: string;
  /**
   * Overrides the default display name for this `id`. Needed when `website` is
   * used for a specific service — "Platzi" is far more useful to a recruiter
   * than the generic "Web".
   */
  name?: string;
}

/* -------------------------------------------------------------------------- */
/* Translatable content                                                       */
/* -------------------------------------------------------------------------- */

export interface ProjectCopy {
  name: string;
  /** The problem it solves, in one sentence. Not a feature list. */
  summary: string;
  /** One measurable result. This is what a recruiter actually remembers. */
  outcome: string;
  /** What *you* built, for projects where that isn't obvious. */
  role?: string;
}

export interface TimelineCopy {
  /** Job title, degree name, or certificate name. */
  title: string;
  /** Company, school, or issuer. */
  organization: string;
  /** 1–2 achievements. Numbers beat adjectives. */
  highlights: string[];
}

export interface Content {
  meta: {
    title: string;
    description: string;
    /** Comma-free keyword list for the `keywords` meta tag. */
    keywords: string[];
  };
  nav: {
    projects: string;
    skills: string;
    about: string;
    timeline: string;
    contact: string;
    skipToContent: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    /** Accessible name for the <nav> landmark. */
    primaryLabel: string;
  };
  hero: {
    /** Small line above the name, e.g. "Open to opportunities". */
    availability: string;
    name: string;
    /** Target role. Rendered as the visual headline. */
    headline: string;
    /** The career-change sentence: where you came from, what you build now. */
    pitch: string;
    location: string;
    ctaProjects: string;
    ctaResume: string;
    scrollHint: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    demoLabel: string;
    repoLabel: string;
    demoUnavailable: string;
    repoUnavailable: string;
    outcomeLabel: string;
    roleLabel: string;
    items: Record<string, ProjectCopy>;
  };
  skills: {
    eyebrow: string;
    heading: string;
    intro: string;
    solidLabel: string;
    learningLabel: string;
    /** Group id → display name. */
    groups: Record<string, string>;
  };
  about: {
    eyebrow: string;
    heading: string;
    /** 3–4 short paragraphs. The transition narrative.  */
    paragraphs: string[];
    photoAlt: string;
    /** Short "what I'm looking for" line, rendered as a callout. */
    lookingFor: string;
  };
  timeline: {
    eyebrow: string;
    heading: string;
    intro: string;
    present: string;
    kinds: Record<TimelineKind, string>;
    verifyLabel: string;
    items: Record<string, TimelineCopy>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    copyEmail: string;
    copiedEmail: string;
    ctaResume: string;
  };
  footer: {
    builtWith: string;
    rights: string;
    backToTop: string;
  };
}
