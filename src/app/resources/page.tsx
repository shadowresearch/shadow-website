import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../_components/CTASection";
import {
  resources,
  resourceCategories,
  getResourcesByCategory,
} from "./_data/resources";

export const metadata: Metadata = {
  title: "Resources — Shadow",
  description:
    "Guides, frameworks, and analysis for communications teams.",
  openGraph: {
    title: "Resources — Shadow",
    description:
      "Guides, frameworks, and analysis for communications teams.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
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

      {/* Resources by category */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {resourceCategories.map((category) => {
            const categoryResources = getResourcesByCategory(category);
            if (categoryResources.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-8">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryResources.map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/${resource.slug}`}
                      className="group flex flex-col gap-2 bg-card border border-border rounded-xl px-5 py-5 hover:border-primary/40 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-heading font-semibold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {resource.description}
                      </p>
                      <span className="mt-auto pt-3 text-xs text-primary font-medium group-hover:underline">
                        Read &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

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
