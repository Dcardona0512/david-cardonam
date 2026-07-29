"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * Thin accent bar at the very top showing how far down the page you are.
 *
 * Driven by Motion's `useScroll`, which writes straight to the transform
 * without a React re-render per frame. Decorative, so it's hidden from
 * assistive tech — and skipped entirely under reduced motion, where a bar
 * that tracks the scroll is exactly the kind of movement being opted out of.
 */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-gradient-to-r from-accent to-accent-partner"
    />
  );
}
