import { ImageResponse } from "next/og";

import { getContent, isLocale, locales, site } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * The card that shows up when the link is pasted into LinkedIn or WhatsApp.
 * Generated rather than designed by hand so it can never fall out of sync with
 * the headline, and so it exists in both languages for free.
 *
 * Note: in Next 16 `params` is a Promise here too. Styling must be inline —
 * Satori supports no external CSS and no CSS variables.
 */
export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = getContent(isLocale(locale) ? locale : "es");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #08080c 0%, #101019 55%, #0d1a1c 100%)",
          color: "#f2f2f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
            color: "#48e5c2",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#48e5c2",
            }}
          />
          {content.hero.availability}
        </div>

        <div style={{ fontSize: 40, color: "#a8a8bb", marginTop: 36 }}>
          {site.name}
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 8,
            letterSpacing: "-0.03em",
            color: "#7af5d8",
          }}
        >
          {content.hero.headline}
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#a8a8bb",
            marginTop: 32,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {content.hero.location}
        </div>

        {/* Accent rule to anchor the composition */}
        <div
          style={{
            width: 180,
            height: 6,
            borderRadius: 999,
            marginTop: 44,
            background: "linear-gradient(90deg, #48e5c2, #7c8cff)",
          }}
        />
      </div>
    ),
    size,
  );
}
