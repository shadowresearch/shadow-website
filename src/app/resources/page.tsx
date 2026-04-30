import type { Metadata } from "next";
import Link from "next/link";
import {
  resources,
  resourceCategories,
  getResourcesByCategory,
} from "./_data/resources";

export const metadata: Metadata = {
  title: "Shadow Resources | Guides, Frameworks, and Analysis for PR and Communications Teams",
  description:
    "Comprehensive guides on PR operating systems, AI workflow automation, media monitoring, competitive intelligence, reporting, and more for communications teams.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Shadow Resources | Guides, Frameworks, and Analysis for PR and Communications Teams",
    description:
      "Comprehensive guides on PR operating systems, AI workflow automation, media monitoring, competitive intelligence, reporting, and more for communications teams.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Resources | Guides, Frameworks, and Analysis for PR and Communications Teams",
    description:
      "Comprehensive guides on PR operating systems, AI workflow automation, media monitoring, competitive intelligence, reporting, and more for communications teams.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Built for communications teams.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Guides, frameworks, and analysis for PR and communications
            professionals, from strategy to operations to AI adoption.
          </p>
          <p className="mt-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {resources.length} resources
          </p>
        </div>
      </section>

      {/* ━━━ Resources by category ━━━ */}
      {resourceCategories.map((category) => {
        const categoryResources = getResourcesByCategory(category);
        if (categoryResources.length === 0) return null;
        return (
          <section key={category} className="px-4 md:px-8 pb-12 md:pb-20">
            <div className="rounded-3xl bg-card overflow-hidden">
              <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {category}
                </p>
                <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {categoryResources.map((resource) => (
                    <li key={resource.slug}>
                      <Link
                        href={`/resources/${resource.slug}`}
                        className="block group"
                      >
                        <h3 className="font-heading text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See Shadow in action.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              The best way to understand Shadow is to see it work on your actual
              clients and categories.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
