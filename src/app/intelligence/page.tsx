import type { Metadata } from "next";
import { CapabilitySection } from "../_components/CapabilitySection";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";

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

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
      <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-sans text-primary tracking-widest">
            Research &amp; Intelligence
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            Know everything before your clients ask
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow monitors 200K+ news sources, tracks journalist beats,
            evaluates keyword opportunities, and audits your clients&apos; presence
            in AI-generated answers — continuously, automatically, and in full
            context.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-14 w-full">
          </div>
        </div>
      </section>
      </GlassSection>

      {/* News Intelligence */}
      <CapabilitySection
        label="News Intelligence"
        heading="Never miss a story that matters"
        body="Shadow scans 200K+ news sources in real time, clusters related stories, profiles the journalists covering them, and evaluates source credibility — so your team always knows what's being said, by whom, and whether it matters."
        details={[
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
              "Not all coverage is equal. Shadow scores sources by domain authority, editorial reach, and audience relevance — so you can prioritize placements that actually move the needle.",
          },
        ]}
        accent="uv"
      />

      {/* SEO Intelligence */}
      <CapabilitySection
        label="SEO Intelligence"
        heading="Keyword research built for PR teams"
        body="Shadow pulls real search volume, difficulty, and competitive data so your content strategy is grounded in what people are actually searching for — not just what sounds good in a brief."
        details={[
          {
            title: "Keyword Research",
            description:
              "Enter a topic or brand and Shadow returns a full keyword landscape — search volume, trend data, related queries, and content gaps your clients can own.",
          },
          {
            title: "Keyword Difficulty",
            description:
              "Shadow scores difficulty against your client's domain authority and existing content, giving you a realistic picture of what's winnable and what's out of reach.",
          },
        ]}
        reversed
        accent="uv"
      />

      {/* GEO Audits */}
      <CapabilitySection
        label="GEO Audits"
        heading="Is your client showing up in AI answers?"
        body="Generative Engine Optimization is the new frontier of earned media. Shadow audits how your clients appear — or don't — in ChatGPT, Perplexity, Google AI Overview, and other AI-generated responses, then surfaces the gaps."
        details={[
          {
            title: "AI Presence Audit",
            description:
              "Shadow runs structured queries across major AI engines and documents how (and whether) your client appears in the answers — by topic, by competitor comparison, by category.",
          },
          {
            title: "Gap Analysis",
            description:
              "Once Shadow has the baseline, it identifies which topics and questions your client is missing from — and what content or coverage would help close those gaps.",
          },
        ]}
        accent="uv"
      />

      {/* Competitive Monitoring */}
      <CapabilitySection
        label="Competitive Monitoring"
        heading="Watch the competition so your clients don't have to"
        body="Shadow tracks competitor coverage, share of voice, and narrative positioning continuously — and surfaces the changes that matter before your clients notice them."
        details={[
          {
            title: "Share of Voice",
            description:
              "Track how much of the category conversation your client owns versus competitors, across news, social, and search — updated weekly.",
          },
          {
            title: "Narrative Shifts",
            description:
              "Shadow alerts you when a competitor's positioning changes, when a new story frame emerges, or when a narrative your client owns starts drifting toward a rival.",
          },
        ]}
        reversed
        accent="uv"
      />

      <CTASection
        heading="See what Shadow already knows about your space"
        body="Book a demo and we'll pull live intelligence on your clients' category before the call."
        primaryLabel="Book a demo"
        secondaryLabel="Explore Media"
        secondaryHref="/media"
      />
    </div>
  );
}
