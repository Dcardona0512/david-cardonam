import { ArrowRight, Download, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { SocialIcon, socialNames } from "@/components/ui/SocialIcon";
import { socials } from "@/content/shared";
import type { Content } from "@/content/types";

/**
 * The 15-second test: a recruiter should leave this screen knowing what you do,
 * where you are, that you're available, and with the CV already one click away.
 * Everything below the fold is evidence for the claim made here.
 *
 * This is a pure server component with no `Reveal` wrappers on purpose — see the
 * `.hero-stagger` note in globals.css. The entrance animation is CSS, so the
 * hero paints and animates without waiting for hydration.
 */
export function Hero({
  content,
  resumeHref,
}: {
  content: Content;
  resumeHref: string;
}) {
  const { hero } = content;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center pt-24 pb-16"
    >
      <div className="shell">
        <div className="hero-stagger max-w-3xl">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-step--1 text-accent">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {hero.availability}
            </p>
          </div>

          <div>
            {/* The name is the page's only h1; the role is styled larger but is
                a paragraph, because it is not the document's title. */}
            <h1
              id="hero-heading"
              className="mt-6 font-mono text-step-1 font-normal tracking-tight text-text-muted"
            >
              {hero.name}
            </h1>
            <p className="mt-2 text-step-4 leading-[1.05] font-semibold tracking-tight text-balance">
              <span className="text-gradient">{hero.headline}</span>
            </p>
          </div>

          <div>
            <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-text-muted text-pretty">
              {hero.pitch}
            </p>
          </div>

          <div>
            <p className="mt-6 inline-flex items-center gap-2 text-step--1 text-text-faint">
              <MapPin size={15} aria-hidden />
              {hero.location}
            </p>
          </div>

          <div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#projects" size="lg">
                {hero.ctaProjects}
                <ArrowRight size={17} aria-hidden />
              </ButtonLink>
              <ButtonLink href={resumeHref} download variant="secondary" size="lg">
                <Download size={17} aria-hidden />
                {hero.ctaResume}
              </ButtonLink>
            </div>
          </div>

          <div>
            <ul className="mt-10 flex items-center gap-1">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    aria-label={socialNames[social.id]}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex rounded-full border border-line p-3 text-text-muted transition-colors hover:border-accent/40 hover:bg-accent/[0.07] hover:text-accent"
                  >
                    <SocialIcon id={social.id} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center font-mono text-[0.7rem] tracking-[0.2em] text-text-faint uppercase sm:flex"
        >
          {hero.scrollHint}
        </p>
      </div>
    </section>
  );
}
