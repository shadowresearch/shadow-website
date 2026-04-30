import type { Metadata } from "next";
import Link from "next/link";
import { SubscribeForm } from "./_components/SubscribeForm";
import { TopicList } from "./_components/TopicList";

export const metadata: Metadata = {
  title:
    "Shadow Reports | Narrative Intelligence Across the Beats Comms Teams Cover",
  description:
    "Weekly narrative intelligence reports across the categories communications and media teams track most: technology and AI, business and markets, policy, energy, health, consumer, workforce, and geopolitics.",
  alternates: {
    canonical: "/reports",
  },
  openGraph: {
    title:
      "Shadow Reports | Narrative Intelligence Across the Beats Comms Teams Cover",
    description:
      "Weekly narrative intelligence reports across the categories communications and media teams track most: technology and AI, business and markets, policy, energy, health, consumer, workforce, and geopolitics.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shadow Reports | Narrative Intelligence Across the Beats Comms Teams Cover",
    description:
      "Weekly narrative intelligence reports across the categories communications and media teams track most.",
  },
};

interface Report {
  slug: string;
  edition: string;
  date: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

interface Topic {
  id: string;
  name: string;
  description: string;
  reports: Report[];
}

const TOPICS: Topic[] = [
  {
    id: "technology-ai",
    name: "Technology & AI",
    description:
      "Agentic AI, generative AI, foundation models, infrastructure, and the next wave of consumer technology.",
    reports: [
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
    ],
  },
  {
    id: "business-markets",
    name: "Business & Markets",
    description:
      "Earnings cycles, deals, IPOs, layoffs, and the financial narratives moving through the business press.",
    reports: [],
  },
  {
    id: "policy-regulation",
    name: "Policy & Regulation",
    description:
      "AI policy, antitrust, trade, data and privacy regulation, and how Washington and Brussels are reshaping the operating environment.",
    reports: [],
  },
  {
    id: "energy-climate",
    name: "Energy & Climate",
    description:
      "The energy transition, climate disclosure, and how sustainability narratives are forming across industries.",
    reports: [],
  },
  {
    id: "health-life-sciences",
    name: "Health & Life Sciences",
    description:
      "Biotech, pharma, public health, and the science narratives shaping policy and consumer behavior.",
    reports: [],
  },
  {
    id: "consumer-brand",
    name: "Consumer & Brand",
    description:
      "Retail, DTC, lifestyle, sport, and the cultural narratives that define modern brand positioning.",
    reports: [],
  },
  {
    id: "workforce-future-of-work",
    name: "Workforce & Future of Work",
    description:
      "Labor markets, productivity, hiring, return-to-office, and AI's compounding impact on jobs.",
    reports: [],
  },
  {
    id: "geopolitics-security",
    name: "Geopolitics & Security",
    description:
      "Defense, cyber, supply chains, and the geopolitical narratives moving through policy and business coverage.",
    reports: [],
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] gap-x-10 lg:gap-x-20 gap-y-10 items-start">
            <div>
              <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
                Narrative intelligence reports.
              </h1>
              <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
                Weekly signals, monthly roundups, and quarterly reports,
                covering the narrative landscape across media, search, and AI
                visibility.
              </p>
            </div>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* ━━━ Topics ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-12 md:py-16">
            <TopicList topics={TOPICS} />
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
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

