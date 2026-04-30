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
      {
        slug: "ai-infrastructure-stack",
        edition: "Edition 1",
        date: "April 2026",
        title: "AI Infrastructure Stack Narrative Report",
        description:
          "Seven layers of the AI stack mapped as narrative environments. Energy and chips lead application narratives by 60 to 90 days. Two propagation events are in active transit right now.",
        stats: [
          { label: "Stack layers", value: "7" },
          { label: "Active signals", value: "23" },
          { label: "Propagation lag", value: "60–90d" },
        ],
      },
    ],
  },
  {
    id: "marketing-communications",
    name: "Marketing & Communications",
    description:
      "Agency positioning, AI visibility, GEO, and the narratives reshaping how PR, comms, and marketing services compete.",
    reports: [
      {
        slug: "pr-comms-agency",
        edition: "Edition 1",
        date: "April 2026",
        title: "PR & Comms Agency Narrative Intelligence",
        description:
          "13,200+ articles, 60 GEO queries, and 44 keywords across the PR/comms agency category. GEO is the open lane; Edelman owns AI visibility; AI Adoption has already peaked.",
        stats: [
          { label: "Articles (6mo)", value: "13.2K" },
          { label: "Narratives", value: "8" },
          { label: "GEO queries", value: "60" },
        ],
      },
      {
        slug: "agency-sector",
        edition: "Edition 1",
        date: "April 2026",
        title: "The Agency Industry Under the Microscope",
        description:
          "272 tier-1 articles across the agency holdco sector. WPP runs at 44.8% negative sentiment; Omnicom at 26.6%. Same forces, opposite frames. February 2026 was the inflection.",
        stats: [
          { label: "Tier-1 articles", value: "272" },
          { label: "Holdcos", value: "5" },
          { label: "Narratives", value: "5" },
        ],
      },
    ],
  },
  {
    id: "consumer-brand",
    name: "Consumer & Brand",
    description:
      "Retail, DTC, lifestyle, sport, and the cultural narratives that define modern brand positioning.",
    reports: [
      {
        slug: "consumer-brand",
        edition: "Baseline Edition",
        date: "April 2026",
        title: "Consumer & Brand Narrative Report",
        description:
          "28,382 articles across 6 narratives. Creator and DTC coverage dominate the press, but Tariff Brand Identity commands the highest AI engine visibility on just 10% of media volume.",
        stats: [
          { label: "Articles (28d)", value: "28,382" },
          { label: "Narratives", value: "6" },
          { label: "Peak AI mentions", value: "87" },
        ],
      },
    ],
  },
  {
    id: "workforce-future-of-work",
    name: "Workforce & Future of Work",
    description:
      "Labor markets, productivity, hiring, return-to-office, and AI's compounding impact on jobs.",
    reports: [
      {
        slug: "workforce-future-of-work",
        edition: "Baseline Edition",
        date: "April 2026",
        title:
          "Workforce & Future of Work: Baseline Narrative Report",
        description:
          "21,606 articles across 5 narratives. Displacement writes 45% of the press, but the AI Productivity Paradox dominates AI engines and White Collar Compression dominates buyer CPC.",
        stats: [
          { label: "Articles (28d)", value: "21,606" },
          { label: "Narratives", value: "5" },
          { label: "Peak CPC", value: "$29.08" },
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
      <section className="px-6 md:px-12 lg:px-20 flex items-start relative">
        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-8 md:px-16 lg:px-24 pb-16 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-x-10 lg:gap-x-12 gap-y-10 items-start">
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
      <section className="px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16">
            <TopicList topics={TOPICS} />
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
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

