import type { Metadata } from "next";
import { CapabilitySection } from "../_components/CapabilitySection";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";

export const metadata: Metadata = {
  title: "Content & Strategy: Shadow",
  description:
    "Messaging frameworks, press releases, website copy, and executive thought leadership — Shadow produces SOP-governed deliverables at scale.",
};

export default function ContentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Content &amp; Strategy
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            On-brand. On-brief. On time.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow produces messaging frameworks, press materials, website copy,
            and thought leadership — governed by client SOPs so every deliverable
            sounds like the brand, not like a language model.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-14 w-full">
          </div>
        </div>
      </section>
      </GlassSection>

      {/* Strategic Foundations */}
      <CapabilitySection
        label="Strategic Foundations"
        heading="Strategy before content. Always."
        body="Shadow builds the strategic layer first — messaging architecture, narrative positioning, and go-to-market strategy — so every piece of content that follows is coherent, differentiated, and grounded in real market context."
        details={[
          {
            title: "Master Messaging",
            description:
              "Shadow synthesizes brand positioning, competitive landscape, and audience research into a master messaging document that anchors all downstream content — from press releases to CEO keynotes.",
          },
          {
            title: "Narrative Frameworks",
            description:
              "Beyond messaging, Shadow builds narrative arcs for campaigns, product launches, and thought leadership programs — ensuring your client has a story that builds over time, not just individual hits.",
          },
          {
            title: "GTM Strategy",
            description:
              "For launches and major moments, Shadow develops full go-to-market communications strategies: timing, channel sequencing, announcement hierarchy, and spokesperson guidance.",
          },
        ]}
        accent="uv"
      />

      {/* Content Production */}
      <CapabilitySection
        label="Content Production"
        heading="Every deliverable your agency produces — automated"
        body="Shadow produces the full range of agency deliverables. Not generic drafts — outputs shaped by your client's SOPs, voice guidelines, and strategic context, ready for light editing rather than heavy rewriting."
        details={[
          {
            title: "Press Materials",
            description:
              "Press releases, media advisories, pitches, backgrounders, and fact sheets — all produced in your client's voice, anchored to the current news cycle, and formatted to editorial standards.",
          },
          {
            title: "Website Copy",
            description:
              "Homepage messaging, product pages, about sections, and blog posts — written to reflect the brand's voice, keyword strategy, and competitive positioning.",
          },
          {
            title: "Awards & Events",
            description:
              "Award submissions, speaker abstracts, event descriptions, and recap copy — Shadow handles the high-volume, time-consuming content that eats agency capacity.",
          },
          {
            title: "Executive Thought Leadership",
            description:
              "Op-eds, LinkedIn posts, keynote narratives, and interview briefs — written in the executive's voice, trained on their existing content and speaking patterns.",
          },
        ]}
        reversed
        accent="uv"
      />

      <CTASection
        heading="See what Shadow produces for your clients"
        body="Book a demo and we'll show you a live content workflow — from brief to deliverable — for a client in your space."
        primaryLabel="Book a demo"
        secondaryLabel="Explore Pipeline"
        secondaryHref="/pipeline"
      />
    </div>
  );
}
