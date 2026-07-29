import { site } from "./shared";
import type { Content } from "./types";

/**
 * English content. Mirrors `es.ts` key for key — TypeScript enforces that, so
 * if you add a field in one language the build fails until you add it in both.
 *
 * ⚠️ TODO(you): translate your own Spanish copy here rather than machine
 * translating it. International recruiters read this version.
 */
const en: Content = {
  meta: {
    title: `${site.name} — Vibe Coder`,
    description:
      // TODO(David): add "and a downloadable résumé" once the PDF is in place.
      "Vibe Coder based in Cali, Colombia. I build web interfaces with HTML, CSS and AI tooling. Portfolio with projects and open source code.",
    keywords: [
      "vibe coder",
      "web development",
      "HTML",
      "CSS",
      "AI-assisted development",
      "Cali Colombia",
      "portfolio",
    ],
  },
  nav: {
    projects: "Projects",
    skills: "Tech",
    about: "About",
    timeline: "Background",
    contact: "Contact",
    skipToContent: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Change language",
    primaryLabel: "Main navigation",
  },
  hero: {
    availability: "Open to new opportunities",
    name: site.name,
    headline: "Vibe Coder",
    // ⚠️ TODO(David): keep this in sync with the Spanish pitch once you rewrite it.
    pitch:
      "I build web interfaces by pairing HTML and CSS fundamentals with AI tooling to move fast, from idea to deploy. HTML-certified by Platzi and learning in public: everything I build ends up shipped, with the source open.",
    location: "Cali, Colombia · Remote or hybrid",
    ctaProjects: "View projects",
    ctaResume: "Download résumé",
    scrollHint: "Scroll to see my work",
  },
  projects: {
    eyebrow: "Projects",
    heading: "Code you can review today",
    intro:
      "I'd rather show one thing you can open and try than list ten that don't exist. Here's what I've built, with the source in the open.",
    demoLabel: "Live demo",
    repoLabel: "Source code",
    demoUnavailable: "Demo coming soon",
    repoUnavailable: "Private repo",
    outcomeLabel: "Outcome",
    roleLabel: "My role",
    items: {
      "proyecto-1": {
        name: "TODO: Your project name",
        summary:
          "TODO: the problem it solves, in one sentence — the problem, not a feature list.",
        outcome:
          "TODO: one measurable result. If nobody uses it yet, measure something real anyway: a Lighthouse score, a load time, works-without-JavaScript. An honest number beats an adjective.",
        role:
          "TODO: what you did and what you used to do it. Being explicit about AI assistance builds more trust than hiding it — what matters is that you understand the code you ship.",
      },
    },
  },
  skills: {
    eyebrow: "Tech",
    heading: "What I use and what I'm learning",
    intro:
      "I keep what I'm confident in separate from what I'm still studying. If it's under “Solid”, I can defend it in a technical interview.",
    solidLabel: "Solid",
    learningLabel: "Learning",
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend & data",
      tools: "Tooling",
      ai: "AI & workflow",
    },
  },
  about: {
    eyebrow: "About",
    // TODO(David): swap for your real transition, e.g. "From [your trade] to code".
    heading: "Learning to build, in public",
    paragraphs: [
      "TODO: where you came from — what your job or trade was before code. This is the most important paragraph on the page: it turns \"no experience\" into \"I bring something else\".",
      "TODO: what brought you to development. The first thing you built or automated, and why it hooked you.",
      "TODO: the transferable skill you bring. Client-facing work, time management, attention to detail, working under pressure — name it and say where you learned it.",
    ],
    photoAlt: `Portrait of ${site.name}`,
    lookingFor:
      "TODO: what you're looking for. Example: my first junior frontend role, on a team that reviews code and does mentoring.",
  },
  timeline: {
    eyebrow: "Background",
    heading: "Education & experience",
    intro:
      "I include the non-technical experience on purpose: it's where I learned to work with people, deadlines and shifting priorities.",
    present: "Present",
    kinds: {
      work: "Experience",
      education: "Education",
      certification: "Certification",
    },
    verifyLabel: "Verify",
    items: {
      // Verified from the diploma PDF.
      "cert-html-platzi": {
        title: "HTML Course",
        organization: "Platzi",
        highlights: [
          "15 hours of theory and practice covering semantic structure, forms and basic accessibility.",
          "Credential 68a24eb2-3601-4c5f-90c5-b645f4dcdb86, verifiable on the public Platzi profile.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk",
    intro:
      "I'm open to junior roles, internships and collaborations. I reply within 24 hours.",
    copyEmail: "Copy email",
    copiedEmail: "Copied!",
    ctaResume: "Download résumé (PDF)",
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS",
    rights: "All rights reserved",
    backToTop: "Back to top",
  },
};

export default en;
