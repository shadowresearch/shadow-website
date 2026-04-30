import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Intelligence | Shadow",
  description:
    "News intelligence, SEO data, keyword research, and GEO audits. 200,000+ sources. Structured, analyzable outputs.",
  alternates: {
    canonical: "/intelligence",
  },
  openGraph: {
    title: "Research & Intelligence | Shadow",
    description:
      "News intelligence, SEO data, keyword research, and GEO audits. 200,000+ sources. Structured, analyzable outputs.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Intelligence | Shadow",
    description:
      "News intelligence, SEO data, keyword research, and GEO audits. 200,000+ sources. Structured, analyzable outputs.",
  },
};

const sections = [
  {
    label: "News Intelligence",
    heading: "Never miss a story that matters",
    body: "Shadow scans 200K+ news sources in real time, clusters related stories, profiles the journalists covering them, and evaluates source credibility, so your team always knows what's being said, by whom, and whether it matters.",
    details: [
      {
        title: "Story Clustering",
        description:
          "Shadow groups related articles into coherent narratives, surfacing the signal beneath the noise. Track how stories develop over time and spot emerging angles before they go mainstream.",
      },
      {
        title: "Journalist Profiles",
        description:
          "Every reporter in Shadow's database comes with a beat map, outlet history, recent coverage, and tone indicators. Know who to pitch before you write a single line.",
      },
      {
        title: "Source Evaluation",
        description:
          "Not all coverage is equal. Shadow scores sources by domain authority, editorial reach, and audience relevance, so you can prioritize placements that actually move the needle.",
      },
    ],
  },
  {
    label: "SEO Intelligence",
    heading: "Keyword research built for PR teams",
    body: "Shadow pulls real search volume, difficulty, and competitive data so your content strategy is grounded in what people are actually searching for, not just what sounds good in a brief.",
    details: [
      {
        title: "Keyword Research",
        description:
          "Enter a topic or brand and Shadow returns a full keyword landscape, search volume, trend data, related queries, and content gaps your clients can own.",
      },
      {
        title: "Keyword Difficulty",
        description:
          "Shadow scores difficulty against your client's domain authority and existing content, giving you a realistic picture of what's winnable and what's out of reach.",
      },
    ],
  },
  {
    label: "GEO Audits",
    heading: "Is your client showing up in AI answers?",
    body: "Generative Engine Optimization is the new frontier of earned media. Shadow audits how your clients appear, or don't, in ChatGPT, Perplexity, Google AI Overview, and other AI-generated responses, then surfaces the gaps.",
    details: [
      {
        title: "AI Presence Audit",
        description:
          "Shadow runs structured queries across major AI engines and documents how (and whether) your client appears in the answers, by topic, by competitor comparison, by category.",
      },
      {
        title: "Gap Analysis",
        description:
          "Once Shadow has the baseline, it identifies which topics and questions your client is missing from, and what content or coverage would help close those gaps.",
      },
    ],
  },
  {
    label: "Competitive Monitoring",
    heading: "Watch the competition so your clients don't have to",
    body: "Shadow tracks competitor coverage, share of voice, and narrative positioning continuously, and surfaces the changes that matter before your clients notice them.",
    details: [
      {
        title: "Share of Voice",
        description:
          "Track how much of the category conversation your client owns versus competitors, across news, social, and search, updated weekly.",
      },
      {
        title: "Narrative Shifts",
        description:
          "Shadow alerts you when a competitor's positioning changes, when a new story frame emerges, or when a narrative your client owns starts drifting toward a rival.",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Know everything before your clients ask
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow monitors 200K+ news sources, tracks journalist beats,
            evaluates keyword opportunities, and audits your clients&apos;
            presence in AI-generated answers, continuously, automatically, and
            in full context.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.label} className="px-4 md:px-8 pb-12 md:pb-20">
          <div className="rounded-3xl bg-card overflow-hidden">
            <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                    {section.body}
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  {section.details.map((detail) => (
                    <div key={detail.title}>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {detail.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See what Shadow already knows about your space
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll pull live intelligence on your
              clients&apos; category before the call.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore Media
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
