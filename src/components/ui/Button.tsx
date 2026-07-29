import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-200 " +
  "motion-safe:hover:-translate-y-0.5 active:translate-y-0 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Accent as a background needs a dark foreground to clear 4.5:1.
  primary:
    "bg-accent text-on-accent hover:bg-accent-strong shadow-[0_0_0_0_var(--accent-glow)] hover:shadow-[0_8px_30px_-6px_var(--accent-glow)]",
  secondary:
    "glass text-text hover:border-line-strong hover:bg-surface-2",
  ghost: "text-text-muted hover:text-text hover:bg-surface-2",
};

const sizes = {
  sm: "px-4 py-2 text-step--1",
  md: "px-5 py-2.5 text-step-0",
  lg: "px-7 py-3.5 text-step-0",
};

type SharedProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SharedProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

/**
 * Same visuals as `Button`, rendered as an anchor. External hrefs and file
 * downloads use a plain `<a>`; internal routes go through `next/link` so they
 * get prefetching and client-side navigation.
 */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  download,
  ...props
}: SharedProps & ComponentProps<"a"> & { href: string }) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternal = href.startsWith("/") && !download;

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={classes}
      download={download}
      // Only add rel="noopener" where it means something — on links that open
      // a new tab. Adding target="_blank" to a same-tab download would be wrong.
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
