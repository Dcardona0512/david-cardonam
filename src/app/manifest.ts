import type { MetadataRoute } from "next";

import { getContent, site } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  const content = getContent("es");

  return {
    name: `${site.name} — ${content.hero.headline}`,
    short_name: site.name.split(" ")[0],
    description: content.meta.description,
    start_url: "/es",
    display: "standalone",
    background_color: "#08080c",
    theme_color: "#08080c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
