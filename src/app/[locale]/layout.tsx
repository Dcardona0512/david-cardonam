import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { GlowBackground } from "@/components/ui/GlowBackground";
import { getContent } from "@/content";
import { isLocale, locales, site } from "@/content";

import "../globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

/** Both locales are prerendered at build time — the site ships as static HTML. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const content = getContent(locale);
  const url = `${site.url}/${locale}`;

  return {
    metadataBase: new URL(site.url),
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: url,
      // hreflang, so Google serves the right language and the two versions
      // aren't treated as duplicate content.
      languages: {
        es: `${site.url}/es`,
        en: `${site.url}/en`,
        "x-default": `${site.url}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url,
      siteName: site.name,
      title: content.meta.title,
      description: content.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // generateStaticParams only emits valid locales, but a request for /fr would
  // otherwise render an empty shell — 404 instead.
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);

  return (
    <html lang={locale} className={`${display.variable} ${mono.variable}`}>
      <body>
        {/* Scroll reveals start at opacity:0, which Motion serialises into the
            server HTML. Without JavaScript nothing would ever fade in, so the
            page would render blank. This forces every reveal visible in that
            case — the text is already in the HTML, it just needs unhiding. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-4 py-2 font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          {content.nav.skipToContent}
        </a>
        <GlowBackground />
        {children}
      </body>
    </html>
  );
}
