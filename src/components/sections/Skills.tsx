import { Badge } from "@/components/ui/Badge";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/content/shared";
import type { Content } from "@/content/types";

/**
 * Deliberately no percentage bars or star ratings. "React 87%" is unfalsifiable
 * and reads as filler to anyone technical. A binary solid/learning split is a
 * claim you can actually stand behind in an interview, and being open about the
 * "learning" column is what makes the "solid" column believable.
 */
export function Skills({ content }: { content: Content }) {
  return (
    <Section
      id="skills"
      eyebrow={content.skills.eyebrow}
      heading={content.skills.heading}
      intro={content.skills.intro}
    >
      <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const solid = group.skills.filter((skill) => skill.level === "solid");
          const learning = group.skills.filter((skill) => skill.level === "learning");

          return (
            <RevealItem
              as="li"
              key={group.id}
              className="glass rounded-card p-6 transition-colors hover:border-line-strong"
            >
              <h3 className="font-mono text-step--1 tracking-widest text-text-faint uppercase">
                {content.skills.groups[group.id] ?? group.id}
              </h3>

              {solid.length > 0 ? (
                <div className="mt-5">
                  <p className="text-[0.7rem] font-medium tracking-wide text-accent uppercase">
                    {content.skills.solidLabel}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {solid.map((skill) => (
                      <li key={skill.name}>
                        <Badge tone="accent">{skill.name}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {learning.length > 0 ? (
                <div className="mt-5">
                  <p className="text-[0.7rem] font-medium tracking-wide text-text-faint uppercase">
                    {content.skills.learningLabel}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {learning.map((skill) => (
                      <li key={skill.name}>
                        <Badge tone="outline">{skill.name}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
