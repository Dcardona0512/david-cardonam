import { Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { sortedTimeline } from "@/content/shared";
import type { Content, Locale, TimelineKind } from "@/content/types";
import { formatMonth } from "@/lib/utils";

const kindIcons: Record<TimelineKind, typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

/**
 * One chronological list for work, education and certifications rather than
 * three separate sections. A career changer's story reads better interleaved:
 * it shows the old job and the new training overlapping in time.
 */
export function Timeline({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  return (
    <Section
      id="timeline"
      eyebrow={content.timeline.eyebrow}
      heading={content.timeline.heading}
      intro={content.timeline.intro}
    >
      <RevealGroup as="ol" className="relative space-y-3">
        {/* The rail. Decorative, and hidden on mobile where the indent would
            eat too much of a 375px screen. */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[1.375rem] hidden w-px bg-line sm:block"
        />

        {sortedTimeline.map((item) => {
          const copy = content.timeline.items[item.id];
          if (!copy) return null;

          const Icon = kindIcons[item.kind];
          const start = formatMonth(item.start, locale);
          const end = item.end
            ? formatMonth(item.end, locale)
            : content.timeline.present;
          // A certification happens at a point in time, not over a range.
          const period =
            item.kind === "certification" || item.start === item.end
              ? end
              : `${start} — ${end}`;

          return (
            <RevealItem
              as="li"
              key={item.id}
              className="relative sm:pl-14"
            >
              <span
                aria-hidden
                className="glass absolute top-6 left-0 hidden h-11 w-11 items-center justify-center rounded-full text-accent sm:flex"
              >
                <Icon size={18} />
              </span>

              <div className="glass rounded-card p-6 transition-colors hover:border-line-strong">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-mono text-[0.7rem] tracking-widest text-accent uppercase">
                    {content.timeline.kinds[item.kind]}
                  </p>
                  <p className="font-mono text-[0.72rem] text-text-faint">
                    <time dateTime={item.start}>{period}</time>
                  </p>
                </div>

                <h3 className="mt-2.5 text-step-1 font-semibold tracking-tight">
                  {copy.title}
                </h3>
                <p className="mt-0.5 text-step--1 text-text-muted">
                  {copy.organization}
                </p>

                {copy.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {copy.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="relative pl-4 text-step--1 text-text-muted text-pretty before:absolute before:top-[0.6em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-step--1 font-medium text-text transition-colors hover:text-accent"
                  >
                    <ExternalLink size={14} aria-hidden />
                    {content.timeline.verifyLabel}
                  </a>
                ) : null}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
