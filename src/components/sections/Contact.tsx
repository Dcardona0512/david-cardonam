import { ArrowUpRight, Download } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SocialIcon, socialNames } from "@/components/ui/SocialIcon";
import { site, socials } from "@/content/shared";
import type { Content } from "@/content/types";

/**
 * No form, by choice: a form is a thing that can silently fail, and a recruiter
 * who wants to reach you would rather have your address than a text box. Big
 * unambiguous links, the email visible as text, and the CV one more time —
 * because the CV is what a lot of visitors came for.
 */
export function Contact({
  content,
  resumeHref,
}: {
  content: Content;
  resumeHref: string;
}) {
  const links = [...socials];

  if (site.whatsapp) {
    links.push({
      id: "whatsapp",
      href: `https://wa.me/${site.whatsapp}`,
      label: socialNames.whatsapp,
    });
  }

  return (
    <Section
      id="contact"
      eyebrow={content.contact.eyebrow}
      heading={content.contact.heading}
      intro={content.contact.intro}
    >
      <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <RevealItem as="li" key={link.id}>
            <a
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="glass group flex items-center gap-4 rounded-card p-5 transition-colors hover:border-accent/40 hover:bg-accent/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:border-accent/40">
                <SocialIcon id={link.id} size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-step-0 font-medium">
                  {socialNames[link.id]}
                </span>
                <span className="block truncate font-mono text-step--1 text-text-muted">
                  {link.label}
                </span>
              </span>
              <ArrowUpRight
                size={17}
                aria-hidden
                className="shrink-0 text-text-faint transition-colors group-hover:text-accent"
              />
            </a>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink href={resumeHref} download size="lg">
          <Download size={17} aria-hidden />
          {content.contact.ctaResume}
        </ButtonLink>
        <CopyEmail
          email={site.email}
          label={content.contact.copyEmail}
          copiedLabel={content.contact.copiedEmail}
        />
      </Reveal>
    </Section>
  );
}
