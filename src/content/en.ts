import { site } from "./shared";
import type { Content } from "./types";

/**
 * English content. Mirrors `es.ts` key for key — TypeScript enforces that, so
 * if you add a field in one language the build fails until you add it in both.
 *
 * International recruiters read this version, so keep it hand-written: translate
 * changes from `es.ts` deliberately rather than running them through a machine.
 */
const en: Content = {
  meta: {
    title: `${site.name} — Junior Web Developer`,
    description:
      // TODO(David): add "and a downloadable résumé" once the PDF is in place.
      "Junior web developer in Cali, Colombia. Working commercial airline pilot moving into web development. I build applications with Next.js, TypeScript and Supabase. Portfolio with a project in production and open source code.",
    keywords: [
      "junior web developer",
      "Next.js",
      "TypeScript",
      "Supabase",
      "React",
      "frontend developer",
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
    headline: "Junior Web Developer",
    // Present tense: David is a working pilot moving into development, not a
    // former one. Keep this in sync with the Spanish pitch.
    pitch:
      "I'm a commercial airline pilot in Colombia, and I want to work in web development. I build applications with Next.js, TypeScript and Supabase, and I bring one thing from the cockpit that matters just as much here: follow the procedure, check every detail before takeoff, and decide with the information you actually have.",
    location: "Cali, Colombia · Remote or hybrid",
    ctaProjects: "View projects",
    ctaResume: "Download résumé",
    scrollHint: "Scroll to see my work",
  },
  projects: {
    eyebrow: "Projects",
    heading: "Code you can review today",
    intro:
      "One real project, deployed, with the source open. You can open it, use it and read how it's built — I'd rather show that than list ten that don't exist.",
    demoLabel: "Live demo",
    repoLabel: "Source code",
    demoUnavailable: "Demo coming soon",
    repoUnavailable: "Private repo",
    outcomeLabel: "Outcome",
    roleLabel: "My role",
    items: {
      "la-53": {
        name: "Autoservicios La 53",
        summary:
          "A neighbourhood supermarket was taking orders over WhatsApp and tracking stock by hand. I built an online store with cash-on-delivery checkout and an admin panel that brings catalogue, stock and orders together in one place.",
        outcome:
          // TODO(David): swap for hard numbers once the shop has been using it —
          // products loaded, orders handled, months in use. One concrete figure
          // outweighs a feature list.
          "Deployed and running: public storefront with cart and cash-on-delivery checkout, admin panel with authentication, point of sale with camera-based barcode scanning, low-stock alerts and sales reports.",
        role:
          "I built all of it: the Postgres data model with Row Level Security, authentication, image uploads, the storefront and the admin panel. I work with AI assistants to move quickly, and I review and understand every part before calling it done.",
        imageAlt:
          "Admin dashboard showing the business summary: product count, pending orders, monthly sales and profit, a list of recent orders and low-stock alerts.",
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
    heading: "From the cockpit to web development",
    paragraphs: [
      "I'm a commercial airline pilot in Colombia. Flying isn't improvising: it's a checklist before every takeoff, procedures you follow even when you're in a hurry, and decisions you have to make with the information available and no room for \"we'll see\".",
      "I wanted to learn something different, and web development gave me what I like about flying without the ceiling: I can build a whole thing from scratch, break it, understand why it broke, and put it back up the same day. Both halves hooked me — the part you see and the part holding it up underneath.",
      "I'm still flying while I make this move, and from aviation I bring the habit of verifying before calling something good, a tolerance for the boring procedures that prevent big problems, and the reflex of taking real responsibility for what I hand over.",
    ],
    photoAlt: `${site.name} in an aircraft cockpit, wearing an aviation headset`,
    lookingFor:
      "I'm looking for my first junior web developer role, on a team that reviews code and does mentoring. I'm based in Cali and open to both remote and hybrid.",
  },
  timeline: {
    eyebrow: "Background",
    heading: "Education & experience",
    intro:
      "I include my work as a pilot on purpose: it's where I learned — and am still learning — to work with procedures, real pressure and responsibility for the outcome.",
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
      // ⚠️ TODO(David): add the airline in `organization` and your total flight
      // hours as the first highlight — see the note in es.ts.
      "piloto-comercial": {
        title: "Commercial Airline Pilot",
        organization: "Commercial aviation · Colombia",
        highlights: [
          "Operating under strict procedures and checklists, with direct responsibility for safety on board.",
          "Decision-making with incomplete information and under time pressure, coordinating with crew and air traffic control.",
        ],
      },
      "formacion-aeronautica": {
        title: "TODO: Licence or aviation training",
        organization: "TODO: institution",
        highlights: ["TODO: only if it adds something; otherwise delete this entry."],
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
