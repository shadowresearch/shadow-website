import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
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
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Case Studies
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            See how communications teams are using Shadow to transform the way
            they research, produce, and deliver their work.
          </p>
        </div>
      </section>

      {/* ━━━ Case studies ━━━ */}
      {caseStudies.map((study, i) => (
        <Fragment key={study.slug}>
          {i > 0 && (
            <div className="px-4 md:px-8" aria-hidden="true">
              <div className="max-w-[1360px] mx-auto px-8 md:px-16">
                <hr className="border-t border-border/40" />
              </div>
            </div>
          )}
          <section className="px-4 md:px-8 pb-12 md:pb-20">
            <div className="rounded-3xl bg-card overflow-hidden">
              <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {study.descriptor}
                </p>
                <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                      {study.headline}
                    </h2>
                    <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
                      {study.summary}
                    </p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                    >
                      Read case study
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-serif text-[clamp(2rem,3vw,2.75rem)] text-foreground leading-none tabular-nums tracking-tight">
                          {stat.value}
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ))}

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Your team could be next.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and see how Shadow would work for your team and your
              clients.
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
                Learn about Shadow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
