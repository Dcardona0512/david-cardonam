import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The root has no content of its own — every page lives under a locale.
      // A permanent redirect keeps link equity on /es and avoids the need for
      // proxy/middleware just to pick a default language.
      { source: "/", destination: "/es", permanent: true },
    ];
  },
};

export default nextConfig;
