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
    <div className="flex flex-col">
      <div className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-sans text-primary tracking-widest">
            Reports
          </span>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
            Intelligence reports, published monthly
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Each edition of Shadow&apos;s Narrative Cycle Intelligence series
            tracks how media narratives evolve within a category and what
            that means for companies trying to position themselves.
          </p>

          <div className="mt-10 mb-10 border-t border-border" />

          <div className="flex flex-col gap-6">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/${report.slug}`}
                className="group block border-b border-border pb-8 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">
                    {report.edition}
                  </span>
                  <span>&middot;</span>
                  <span>{report.date}</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                  {report.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {report.description}
                </p>
                <div className="mt-4 flex gap-6">
                  {report.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-base font-semibold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
