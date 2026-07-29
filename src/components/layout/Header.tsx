"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import type { Content, Locale } from "@/content/types";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["projects", "skills", "about", "timeline", "contact"] as const;

export function Header({
  locale,
  content,
  resumeHref,
}: {
  locale: Locale;
  content: Content;
  /** Null when no CV PDF exists yet — the button is omitted rather than broken. */
  resumeHref: string | null;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection([...SECTION_IDS]);

  const links = SECTION_IDS.map((id) => ({ id, label: content.nav[id] }));

  // Only used to switch the header between transparent and frosted, so a
  // passive listener with a boolean is enough — no per-pixel state.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu, and we lock body scroll while it's open so
  // the page behind doesn't move under the overlay.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        {/* inline-flex + vertical padding, so the padding actually enlarges the
            hit area. An inline <a> ignores it and stays a 17px-tall target,
            which fails WCAG 2.5.8 (24×24 minimum). Same for every link below. */}
        <a
          href={`/${locale}#top`}
          className="inline-flex items-center py-2 font-mono text-step-0 font-medium tracking-tight"
        >
          <span className="text-accent">&lt;</span>
          {content.hero.name.split(" ")[0]}
          <span className="text-accent"> /&gt;</span>
        </a>

        <nav aria-label={content.nav.primaryLabel} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "relative inline-flex items-center rounded-full px-3 py-2 text-step--1 transition-colors",
                    active === link.id
                      ? "text-accent"
                      : "text-text-muted hover:text-text",
                  )}
                >
                  {link.label}
                  {active === link.id ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher
            current={locale}
            label={content.nav.languageLabel}
            className="hidden sm:flex"
          />
          {resumeHref ? (
            <ButtonLink
              href={resumeHref}
              download
              size="sm"
              className="hidden sm:inline-flex"
            >
              {content.hero.ctaResume}
            </ButtonLink>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.nav.menuClose : content.nav.menuOpen}
            className="glass rounded-full p-2.5 text-text md:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu. Kept out of the DOM when closed so its links can't be
          reached by Tab while invisible. */}
      {open ? (
        <div
          id="mobile-menu"
          className="glass border-t border-line md:hidden"
        >
          <nav aria-label={content.nav.primaryLabel} className="shell py-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? "true" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-step-0 transition-colors",
                      active === link.id
                        ? "bg-accent/10 text-accent"
                        : "text-text-muted hover:bg-surface-2 hover:text-text",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
              <LocaleSwitcher current={locale} label={content.nav.languageLabel} />
              {resumeHref ? (
                <ButtonLink href={resumeHref} download size="sm">
                  {content.hero.ctaResume}
                </ButtonLink>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
