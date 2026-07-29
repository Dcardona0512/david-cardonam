import type { Transition, Variants } from "motion/react";

/**
 * Shared motion vocabulary. Every animation on the site comes from here, so the
 * whole page moves with one rhythm instead of each component inventing its own.
 *
 * Only `transform` and `opacity` are animated — those are the two properties
 * the compositor can handle without triggering layout, which is what keeps the
 * scroll smooth on a mid-range phone.
 *
 * Reduced motion is handled at the component level (see `Reveal`), not here,
 * so these variants stay pure data.
 */

export const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Parent wrapper that releases its children one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Same, but slower — for lists of 3–4 large cards. */
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

/**
 * Viewport config shared by every scroll reveal. `once: true` matters: a
 * portfolio that re-animates every time you scroll back up feels broken.
 * The negative bottom margin fires the animation slightly before the element
 * is fully in view, so it reads as already-there rather than late.
 */
export const revealViewport = { once: true, margin: "0px 0px -12% 0px" } as const;
