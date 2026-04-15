import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";
import { caseStudies } from "./_data";

export const metadata: Metadata = {
  title: "Case Studies | Shadow",
  description:
    "See how communications teams are using Shadow to transform the way they research, produce, and deliver their work.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Shadow",
    description:
      "See how communications teams are using Shadow to transform the way they research, produce, and deliver their work.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Shadow",
    description:
      "See how communications teams are using Shadow to transform the way they research, produce, and deliver their work.",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
        <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
          <div className="max-w-3xl">
            <span className="text-xs font-sans text-primary tracking-widest">
              Case Studies
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight">
              Real teams. Real work.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              See how communications teams are using Shadow to transform the way
              they research, produce, and deliver their work.
            </p>
          </div>
        </section>
      </GlassSection>

      {/* Case study list */}
      {caseStudies.map((study) => (
        <section key={study.slug} className="border-b border-border">
          <div className="grid md:grid-cols-2">
            <div className="px-6 md:px-16 py-16">
              <span className="text-xs font-sans text-muted-foreground tracking-widest">
                {study.descriptor}
              </span>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground leading-tight">
                {study.headline}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {study.summary}
              </p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all"
              >
                Read case study
              </Link>
            </div>
            <div className="flex flex-col justify-center px-6 md:px-16 py-16">
              {study.stats.map((stat, j) => (
                <div
                  key={stat.label}
                  className={`py-6 ${j < study.stats.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="text-3xl font-heading font-semibold text-foreground tabular-nums">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        heading="Your team could be next"
        body="Book a demo and see how Shadow would work for your team and your clients."
        primaryLabel="Book a demo"
        secondaryLabel="Learn about Shadow"
        secondaryHref="/about"
      />
    </div>
  );
}
