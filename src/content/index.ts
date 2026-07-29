import en from "./en";
import es from "./es";
import type { Content, Locale } from "./types";

const dictionaries: Record<Locale, Content> = { es, en };

/** The whole site's copy for one language. Server- and client-safe. */
export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export * from "./shared";
export * from "./types";
