import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Every section shares this frame: a mono eyebrow, an h2, an optional intro,
 * then content. Consistent vertical rhythm here is most of what makes the page
 * feel designed rather than assembled.
 *
 * `scroll-mt` offsets the sticky header so anchor jumps don't hide the heading.
 */
export function Section({
  id,
  eyebrow,
  heading,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-step-3 font-semibold tracking-tight text-balance"
          >
            {heading}
          </h2>
          {intro ? (
            <p className="mt-4 text-step-0 text-text-muted text-pretty">{intro}</p>
          ) : null}
        </Reveal>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
