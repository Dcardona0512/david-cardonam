import type { MetadataRoute } from "next";

import { defaultLocale, locales, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((alt) => [alt, `${site.url}/${alt}`]),
      ),
    },
  }));
}
