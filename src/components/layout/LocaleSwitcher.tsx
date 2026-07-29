"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment of the current path, keeping the rest intact.
 *
 * Rendered as two real links rather than a JS toggle so it works before
 * hydration and so each language is a crawlable URL — which is the whole point
 * of putting the locale in the path.
 */
export function LocaleSwitcher({
  current,
  label,
  className,
}: {
  current: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  function hrefFor(locale: Locale) {
    const segments = pathname.split("/");
    // pathname is always "/<locale>[/...]", so segments[1] is the locale.
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div
      className={cn(
        "glass flex items-center gap-0.5 rounded-full p-0.5",
        className,
      )}
      role="group"
      aria-label={label}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={hrefFor(locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex items-center justify-center rounded-full px-2.5 py-1.5 font-mono text-[0.7rem] uppercase transition-colors",
              active
                ? "bg-accent text-on-accent"
                : "text-text-muted hover:text-text",
            )}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
