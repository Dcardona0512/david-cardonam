import { ExternalLink, FolderGit2, Lock, TrendingUp } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/content/shared";
import type { Content, ProjectMeta } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Preview area of a card. Falls back to a generated gradient panel when no
 * screenshot exists yet, so the layout is identical with or without assets —
 * an empty portfolio still looks finished while you gather the images.
 */
function Preview({
  image,
  name,
  alt,
  featured,
}: {
  image: string | null;
  name: string;
  alt?: string;
  featured: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image}
        // Fall back to the name only if no description was written; the alt
        // should say what the screenshot shows, not repeat the heading above it.
        alt={alt ?? name}
        width={1280}
        height={720}
        // Explicit sizes so the browser doesn't download the full-width file for
        // a 400px slot on mobile. The shell is 72rem wide, so a featured card
        // spans ~1112px and a regular one ~544px.
        sizes={
          featured
            ? "(min-width: 1024px) 1112px, 100vw"
            : "(min-width: 1024px) 544px, 100vw"
        }
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="grid-lines flex h-full w-full items-center justify-center bg-surface-2"
    >
      <span className="font-mono text-step-3 font-semibold text-text-faint/50">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

/** A demo/repo link, or an explicit unavailable state. Never a dead link. */
function ProjectLink({
  href,
  label,
  unavailableLabel,
  icon,
}: {
  href: string | null;
  label: string;
  unavailableLabel: string;
  icon: React.ReactNode;
}) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 text-step--1 text-text-faint">
        <Lock size={14} aria-hidden />
        {unavailableLabel}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-step--1 font-medium text-text transition-colors hover:text-accent"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({
  meta,
  content,
}: {
  meta: ProjectMeta;
  content: Content;
}) {
  const copy = content.projects.items[meta.id];
  if (!copy) return null;

  const featured = Boolean(meta.featured);

  return (
    <RevealItem
      as="li"
      className={cn(
        "ring-gradient group glass flex flex-col overflow-hidden rounded-card transition-colors duration-300 hover:border-line-strong",
        // Featured cards span both columns but keep the image on top rather than
        // beside the text. A side-by-side layout gives the image a tall, narrow
        // half-column, and `object-cover` then crops a wide screenshot down to a
        // vertical sliver — useless for a dashboard or any landscape capture.
        featured && "lg:col-span-2",
      )}
    >
      <span
        aria-hidden
        className="ring-gradient-on opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative aspect-video shrink-0 overflow-hidden border-b border-line">
        <Preview
          image={meta.image}
          name={copy.name}
          alt={copy.imageAlt}
          featured={featured}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-step-2 font-semibold tracking-tight">{copy.name}</h3>
        <p className="mt-2.5 text-text-muted text-pretty">{copy.summary}</p>

        {copy.role ? (
          <p className="mt-4 text-step--1 text-text-muted">
            <span className="font-mono text-text-faint uppercase">
              {content.projects.roleLabel}:
            </span>{" "}
            {copy.role}
          </p>
        ) : null}

        {/* The outcome gets its own visual slot on purpose — it's the line that
            turns "I built a thing" into "I built a thing that worked". */}
        <div className="mt-5 rounded-xl border border-accent/25 bg-accent/[0.06] p-4">
          <p className="eyebrow flex items-center gap-1.5 text-[0.68rem]">
            <TrendingUp size={13} aria-hidden />
            {content.projects.outcomeLabel}
          </p>
          <p className="mt-1.5 text-step--1 text-text">{copy.outcome}</p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {meta.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <ProjectLink
            href={meta.demoUrl}
            label={content.projects.demoLabel}
            unavailableLabel={content.projects.demoUnavailable}
            icon={<ExternalLink size={14} aria-hidden />}
          />
          <ProjectLink
            href={meta.repoUrl}
            label={content.projects.repoLabel}
            unavailableLabel={content.projects.repoUnavailable}
            icon={<FolderGit2 size={14} aria-hidden />}
          />
        </div>
      </div>
    </RevealItem>
  );
}

export function Projects({ content }: { content: Content }) {
  // Featured first, otherwise keep the order declared in shared.ts.
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <Section
      id="projects"
      eyebrow={content.projects.eyebrow}
      heading={content.projects.heading}
      intro={content.projects.intro}
    >
      <RevealGroup
        as="ul"
        slow
        className="grid gap-6 lg:grid-cols-2"
      >
        {ordered.map((meta) => (
          <ProjectCard key={meta.id} meta={meta} content={content} />
        ))}
      </RevealGroup>
    </Section>
  );
}
