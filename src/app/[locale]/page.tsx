import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { getContent, isLocale, site, socials } from "@/content";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  // Null until the CV PDFs exist; every CV button hides itself in that case.
  const resumeHref = site.resume?.[locale] ?? null;

  /**
   * Structured data so search engines model the page as a person rather than a
   * generic document. `sameAs` is what links this page to your GitHub and
   * LinkedIn profiles in Google's knowledge graph.
   */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/${locale}`,
    email: site.email,
    jobTitle: content.hero.headline,
    description: content.meta.description,
    knowsAbout: content.meta.keywords,
    sameAs: socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  };

  return (
    <>
      <ScrollProgress />
      <Header locale={locale} content={content} resumeHref={resumeHref} />

      <main id="main">
        <Hero content={content} resumeHref={resumeHref} />
        <Projects content={content} />
        <Skills content={content} />
        <About content={content} />
        <Timeline content={content} locale={locale} />
        <Contact content={content} resumeHref={resumeHref} />
      </main>

      <Footer content={content} name={site.name} />

      <script
        type="application/ld+json"
        // Static, author-controlled object — no user input reaches this.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
