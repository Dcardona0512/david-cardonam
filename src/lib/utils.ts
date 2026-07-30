import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge has no way to know about the custom `text-step-*` font sizes
 * declared in `globals.css`, so out of the box it files them under the
 * *text colour* group. That silently deletes whichever of the two came first:
 * `cn("text-[#04120e]", "text-step-0")` dropped the colour, and
 * `cn("text-step-0", "text-text-muted")` dropped the size.
 *
 * Declaring the scale here puts each class in the right group, so a size and a
 * colour can coexist while two sizes still collapse to the last one.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["step--1", "step-0", "step-1", "step-2", "step-3", "step-4"] },
      ],
    },
  },
});

/** Merge conditional class names, letting later Tailwind classes win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a timeline date as a localised label.
 *
 * Accepts `YYYY-MM` ("mar 2019") or bare `YYYY` ("2019"). The year-only form
 * exists so an entry whose month nobody remembers can stay honest instead of
 * being padded to January — a made-up month renders as fact on the page.
 *
 * The Date is built in UTC to avoid the classic off-by-one-month bug where a
 * negative timezone offset rolls the 1st back into the previous month.
 */
export function formatMonth(iso: string, locale: string) {
  const [year, month] = iso.split("-").map(Number);

  if (month === undefined || Number.isNaN(month)) {
    return String(year);
  }

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

/** Initials for the fallback monogram avatar, e.g. "Ada Lovelace" → "AL". */
export function initials(fullName: string) {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
