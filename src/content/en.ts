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
    title: `${site.name} — Junior Web Developer`,
    description:
      "Junior web developer focused on React, Next.js and TypeScript. Portfolio with live projects, source code and a downloadable résumé.",
    keywords: [
      "junior web developer",
      "React",
      "Next.js",
      "TypeScript",
      "frontend developer",
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
    headline: "Junior Web Developer",
    pitch:
      "I spent five years in customer support and now I build web interfaces with React, Next.js and TypeScript. I bring something a bootcamp doesn't teach: listening to the user before writing the first line of code.",
    location: "Madrid, Spain · Remote or hybrid",
    ctaProjects: "View projects",
    ctaResume: "Download résumé",
    scrollHint: "Scroll to see my work",
  },
  projects: {
    eyebrow: "Projects",
    heading: "Code you can review today",
    intro:
      "Every project solves a real problem, is deployed, and has open source code. I'd rather show three things you can open and try than list ten that don't exist.",
    demoLabel: "Live demo",
    repoLabel: "Source code",
    demoUnavailable: "Demo coming soon",
    repoUnavailable: "Private repo",
    outcomeLabel: "Outcome",
    roleLabel: "My role",
    items: {
      "proyecto-1": {
        name: "TODO: Project 1 name",
        summary:
          "TODO: the problem it solves, in one sentence. Example: local shops had no way to manage bookings without paying a monthly subscription.",
        outcome:
          "TODO: one measurable result. Example: used by 3 real businesses, handling 400+ bookings since launch.",
        role:
          "TODO: what you built. Example: full design, frontend and API; database modelled from scratch.",
      },
      "proyecto-2": {
        name: "TODO: Project 2 name",
        summary: "TODO: the problem it solves, in one sentence.",
        outcome:
          "TODO: one measurable result. Example: cut load time from 4.1s to 0.8s by optimising images and queries.",
      },
      "proyecto-3": {
        name: "TODO: Project 3 name",
        summary: "TODO: the problem it solves, in one sentence.",
        outcome:
          "TODO: one measurable result. Example: 100% test coverage on business logic and a 98 mobile Lighthouse score.",
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
    },
  },
  about: {
    eyebrow: "About",
    heading: "From customer support to building the product",
    paragraphs: [
      "TODO: where you came from. Example: for five years I resolved customer issues at a logistics company. My job was turning a confused problem into something actionable, fast.",
      "TODO: what brought you to development. Example: I automated the reports we built by hand every week using spreadsheets and scripts. Saving the team two hours turned into wanting to understand how software gets built end to end.",
      "TODO: the transferable skill you bring. Example: I ask the awkward questions before I start coding, I write so someone else can follow it, and I've worked to real deadlines.",
    ],
    photoAlt: `Portrait of ${site.name}`,
    lookingFor:
      "TODO: what you're looking for. Example: my first frontend role on a team that reviews code and does mentoring.",
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
      bootcamp: {
        title: "TODO: Full-Stack Web Development Bootcamp",
        organization: "TODO: School name",
        highlights: [
          "TODO: a concrete number. Example: 800 hours of intensive training in JavaScript, React, Node.js and PostgreSQL.",
          "TODO: an achievement. Example: final project selected among the top 3 of a 45-student cohort.",
        ],
      },
      "cert-1": {
        title: "TODO: Certification name",
        organization: "TODO: Issuing body",
        highlights: ["TODO: what it certifies, in one line."],
      },
      "trabajo-anterior": {
        title: "TODO: Your previous role",
        organization: "TODO: Company name",
        highlights: [
          "TODO: achievement with a number. Example: managed a 200-client portfolio with 96% satisfaction.",
          "TODO: transferable achievement. Example: automated the team's weekly report, saving 8 hours of manual work a month.",
        ],
      },
      "formacion-previa": {
        title: "TODO: Your earlier education",
        organization: "TODO: University or institution",
        highlights: ["TODO: only if it adds something. Otherwise delete this entry from shared.ts."],
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
