"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view, for the nav's active indicator.
 *
 * Uses a single IntersectionObserver over all sections rather than a scroll
 * listener, so there's no per-frame work on the main thread. When several
 * sections overlap the viewport we pick the one closest to the top, which
 * matches what the reader perceives as "the section I'm in".
 *
 * The effect depends on the joined ids rather than the array itself, so callers
 * can pass a fresh array literal without re-creating the observer every render.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Ignore the band under the sticky header, and only count a section once
        // it occupies a meaningful slice of the viewport.
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
