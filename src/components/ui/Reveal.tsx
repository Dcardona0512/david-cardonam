"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { fadeInUp, revealViewport, staggerContainer, staggerSlow } from "@/lib/motion";

/**
 * Motion components are declared once, statically. Calling `motion.create()`
 * during render would build a new component type on every render and reset the
 * subtree's state, so the set of allowed wrapper tags is fixed here instead.
 * Need another tag? Add it to both maps.
 */
const MOTION_TAGS = {
  div: motion.div,
  span: motion.span,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
} as const;

const PLAIN_TAGS = {
  div: "div",
  span: "span",
  ul: "ul",
  ol: "ol",
  li: "li",
  p: "p",
} as const;

type Tag = keyof typeof MOTION_TAGS;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  /** Extra delay in seconds, for the rare element that needs to trail. */
  delay?: number;
};

/**
 * Fades an element up as it scrolls into view.
 *
 * This is the single place `prefers-reduced-motion` is honoured: when the user
 * has asked for less motion we render a plain element with no transform and no
 * transition, so nothing moves and nothing fades in late. Every animated part
 * of the site routes through `Reveal` / `RevealGroup` for exactly this reason.
 */
export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = PLAIN_TAGS[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const Motion = MOTION_TAGS[as];

  return (
    <Motion
      data-reveal
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Motion>
  );
}

/**
 * Parent for a list whose children should appear one after another. Pair with
 * `RevealItem` on each child; the stagger timing lives on this parent.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
  slow = false,
}: RevealProps & { slow?: boolean }) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = PLAIN_TAGS[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const Motion = MOTION_TAGS[as];

  return (
    <Motion
      data-reveal
      className={className}
      variants={slow ? staggerSlow : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </Motion>
  );
}

/** A child of `RevealGroup`. Inherits its timing from the parent's stagger. */
export function RevealItem({ children, className, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Plain = PLAIN_TAGS[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const Motion = MOTION_TAGS[as];

  return (
    <Motion data-reveal className={className} variants={fadeInUp}>
      {children}
    </Motion>
  );
}
