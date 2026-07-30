import { Target } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/shared";
import type { Content } from "@/content/types";
import { initials } from "@/lib/utils";

/**
 * The transition narrative. For a career changer this section does the work
 * that a decade of job titles does for someone else: it explains why the
 * previous career is an asset rather than a gap.
 */
export function About({ content }: { content: Content }) {
  return (
    <Section
      id="about"
      eyebrow={content.about.eyebrow}
      heading={content.about.heading}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <Reveal className="max-w-2xl">
          <div className="space-y-5 text-step-0 text-text-muted">
            {content.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex gap-3.5 rounded-card border-l-2 border-accent bg-surface-1/60 p-5">
            <Target size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <p className="text-step-0 text-text text-pretty">
              {content.about.lookingFor}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-first lg:order-last">
          <div className="ring-gradient relative mx-auto aspect-square w-48 overflow-hidden rounded-card border border-line lg:w-full">
            <span aria-hidden className="ring-gradient-on opacity-60" />
            {site.photo ? (
              <Image
                src={site.photo}
                alt={content.about.photoAlt}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 288px, 192px"
                className="h-full w-full object-cover"
              />
            ) : (
              // Typographic monogram so the layout is complete before you add a
              // photo. Decorative, hence aria-hidden — the name is already in h1.
              <div
                aria-hidden
                className="flex h-full w-full items-center justify-center bg-surface-2"
              >
                <span className="text-gradient font-mono text-step-4 font-bold">
                  {initials(site.name)}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
