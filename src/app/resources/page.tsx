import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";
import {
  resources,
  resourceCategories,
  getResourcesByCategory,
} from "./_data/resources";

export const metadata: Metadata = {
  title: "Shadow Resources | Guides, Frameworks, and Analysis for PR and Communications Teams",
  description:
    "Comprehensive guides on PR operating systems, AI workflow automation, media monitoring, competitive intelligence, reporting, and more for communications teams.",
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
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
      <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-sans text-primary tracking-widest">
            Resources
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            Built for communications teams
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Guides, frameworks, and analysis for PR and communications
            professionals — from strategy to operations to AI adoption.
          </p>
          <p className="mt-3 text-sm text-muted-foreground font-mono">
            {resources.length} resources
          </p>
        </div>
      </section>
      </GlassSection>

      {/* Resources by category */}
      {resourceCategories.map((category) => {
        const categoryResources = getResourcesByCategory(category);
        if (categoryResources.length === 0) return null;
        // Build rows of 3
        const rows: typeof categoryResources[] = [];
        for (let i = 0; i < categoryResources.length; i += 3) {
          rows.push(categoryResources.slice(i, i + 3));
        }
        return (
          <section key={category}>
            <div className="px-8 py-6 border-b border-border">
              <h2 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground">
                {category}
              </h2>
            </div>
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-border">
                {row.map((resource, colIdx) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className={`group flex flex-col gap-2 px-6 py-6 hover:bg-muted/20 transition-colors ${colIdx < 2 ? "border-r border-border" : ""}`}
                  >
                    <h3 className="font-heading font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </Link>
                ))}
                {/* Fill empty cells in last row */}
                {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div key={`empty-${i}`} className={`${row.length + i < 2 ? "border-r border-border" : ""}`} />
                ))}
              </div>
            ))}
          </section>
        );
      })}

      <CTASection
        heading="See Shadow in action"
        body="The best way to understand Shadow is to see it work on your actual clients and categories."
        primaryLabel="Book a demo"
        secondaryLabel="Meet the team"
        secondaryHref="/about"
      />
    </div>
  );
}
