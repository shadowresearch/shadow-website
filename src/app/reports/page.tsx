import type { Metadata } from "next";
import Link from "next/link";
import { GlassSection } from "../_components/GlassSection";

export const metadata: Metadata = {
  title: "Reports | Shadow",
  description:
    "Data-driven intelligence reports on narrative cycles, media trends, and market positioning. Published monthly by Shadow.",
  alternates: {
    canonical: "/reports",
  },
  openGraph: {
    title: "Reports | Shadow",
    description:
      "Data-driven intelligence reports on narrative cycles, media trends, and market positioning. Published monthly by Shadow.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reports | Shadow",
    description:
      "Data-driven intelligence reports on narrative cycles, media trends, and market positioning. Published monthly by Shadow.",
  },
};

const reports = [
  {
    slug: "consumer-ai-narrative-cycles",
    edition: "Edition 1",
    date: "April 2026",
    title: "Narrative Cycle Intelligence: Consumer AI",
    description:
      "39 months of continuous media data across 200,000+ sources. Seven narratives tracked from emergence to dominance. The cycles are compressing — and the next one is already accelerating.",
    stats: [
      { label: "Sources tracked", value: "200K+" },
      { label: "Months of data", value: "39" },
      { label: "Narratives mapped", value: "7" },
    ],
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col">
      <GlassSection>
        <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-sans text-primary tracking-widest">
              Reports
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
              Intelligence reports, published monthly
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Each edition of Shadow&apos;s Narrative Cycle Intelligence series
              tracks how media narratives evolve within a category — and what
              that means for companies trying to position themselves.
            </p>
          </div>
        </section>
      </GlassSection>

      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group block border border-border rounded-lg p-8 md:p-10 transition-colors hover:border-primary/40 hover:bg-muted/20"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">
                    {report.edition}
                  </span>
                  <span>&middot;</span>
                  <span>{report.date}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                  {report.title}
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
                  {report.description}
                </p>
                <div className="mt-6 flex gap-8">
                  {report.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm font-medium text-primary">
                  Read the full report &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
