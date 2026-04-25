import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shadow Reports | Narrative Cycle Intelligence for PR and Communications",
  description:
    "Monthly reports tracking how media narratives evolve across 200,000+ sources. Covers agentic AI, generative AI, embodied AI, and emerging narratives with buyer intent data from Shadow.",
  alternates: {
    canonical: "/reports",
  },
  openGraph: {
    title: "Shadow Reports | Narrative Cycle Intelligence for PR and Communications",
    description:
      "Monthly reports tracking how media narratives evolve across 200,000+ sources. Covers agentic AI, generative AI, embodied AI, and emerging narratives with buyer intent data from Shadow.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Reports | Narrative Cycle Intelligence for PR and Communications",
    description:
      "Monthly reports tracking how media narratives evolve across 200,000+ sources with buyer intent data from Shadow.",
  },
};

const reports = [
  {
    slug: "consumer-ai-narrative-cycles",
    edition: "Edition 1",
    date: "April 2026",
    title: "Narrative Cycle Report: Consumer AI",
    description:
      "39 months of continuous media data across 200,000+ sources. Seven narratives tracked from emergence to dominance. The cycles are compressing, and the next one is already accelerating.",
    stats: [
      { label: "Sources tracked", value: "200K+" },
      { label: "Months of data", value: "39" },
      { label: "Narratives mapped", value: "7" },
    ],
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Intelligence reports, published monthly.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Each edition of Shadow&apos;s Narrative Cycle Intelligence series
            tracks how media narratives evolve within a category and what that
            means for companies trying to position themselves.
          </p>
        </div>
      </section>

      {/* ━━━ Reports list ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <ul className="flex flex-col gap-12">
              {reports.map((report) => (
                <li key={report.slug}>
                  <Link
                    href={`/reports/${report.slug}`}
                    className="block group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-8 lg:gap-16 items-start">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          <span className="text-primary">{report.edition}</span>
                          <span className="mx-2">·</span>
                          <span>{report.date}</span>
                        </p>
                        <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight group-hover:text-primary transition-colors">
                          {report.title}
                        </h2>
                        <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
                          {report.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        {report.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="font-serif text-[clamp(1.5rem,2.25vw,2rem)] text-foreground leading-none tabular-nums tracking-tight">
                              {stat.value}
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Want this analysis for your category?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Shadow runs Narrative Cycle Intelligence across any market. Book a
              demo to see what the data looks like for your clients&apos; space.
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
