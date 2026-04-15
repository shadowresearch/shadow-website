import type { Metadata } from "next";
import { CapabilitySection } from "../_components/CapabilitySection";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";

export const metadata: Metadata = {
  title: "Pipeline & Operations | Shadow",
  description:
    "Client pipeline management, onboarding, proposals, agreements, and invoicing. Every operational workflow in one platform.",
  alternates: {
    canonical: "/pipeline",
  },
  openGraph: {
    title: "Pipeline & Operations | Shadow",
    description:
      "Client pipeline management, onboarding, proposals, agreements, and invoicing. Every operational workflow in one platform.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipeline & Operations | Shadow",
    description:
      "Client pipeline management, onboarding, proposals, agreements, and invoicing. Every operational workflow in one platform.",
  },
};

const agents = [
  {
    title: "Inbound Triage",
    description:
      "New media requests, journalist inquiries, and inbound opportunities are automatically categorized, prioritized, and surfaced to the right team member.",
  },
  {
    title: "Daily Media Digests",
    description:
      "Shadow scans the news every morning and sends each client a curated digest of what's relevant to their brand, category, and competitors.",
  },
  {
    title: "Weekly Market Scans",
    description:
      "Automated weekly intelligence reports covering industry trends, competitor moves, and emerging narratives — delivered without being asked.",
  },
  {
    title: "Coverage Reports",
    description:
      "Shadow tracks all earned coverage, formats it into a polished report, and sends it to clients on whatever cadence you set.",
  },
  {
    title: "Intelligence Dossiers",
    description:
      "Deep-dive research packages on companies, markets, or individuals — assembled automatically from news, filings, and public data.",
  },
  {
    title: "AI Visibility",
    description:
      "Shadow audits how your clients appear across ChatGPT, Gemini, Perplexity, and Claude — then produces GEO-optimized content to improve citation rates and AI search visibility.",
  },
];

export default function PipelinePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
      <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-sans text-primary tracking-widest">
            Pipeline &amp; Operations
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            Run the business. Not just the campaigns.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow manages your client pipeline, onboarding, proposals, and
            invoicing — and runs autonomous agents in the background so
            your team never has a cold start.
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

      {/* Client Management */}
      <CapabilitySection
        label="Client Management"
        heading="From first inquiry to fully onboarded"
        body="Shadow manages your entire client lifecycle — tracking prospects through your pipeline, generating intake questionnaires, and onboarding new clients with the documentation and context they need to feel in good hands from day one."
        details={[
          {
            title: "Inbound Pipeline",
            description:
              "Prospects enter Shadow's pipeline from any source. Shadow tracks their stage, generates follow-up tasks, and surfaces context for every conversation so your team never goes in blind.",
          },
          {
            title: "Onboarding",
            description:
              "When a client signs, Shadow generates onboarding documents, intake questionnaires, and kickoff materials automatically — calibrated to the engagement scope and client category.",
          },
        ]}
        accent="uv"
      />

      {/* Business Operations */}
      <CapabilitySection
        label="Business Operations"
        heading="Proposals, agreements, and invoices — handled"
        body="Shadow generates the business documents your agency needs to close and manage engagements — scoped to the client, branded to your agency, and ready in minutes."
        details={[
          {
            title: "Proposals & Agreements",
            description:
              "Shadow generates scoped proposals — with service descriptions, deliverables, timelines, and pricing — based on the client context in your pipeline. Agreements follow the same playbook.",
          },
          {
            title: "Invoicing",
            description:
              "Track engagement values, generate invoice documentation, and maintain a clear record of what's been billed and what's outstanding — without a separate finance tool.",
          },
        ]}
        reversed
        accent="uv"
      />

      {/* Autonomous Agents */}
      <section className="border-b border-border">
        <div className="px-6 md:px-16 py-16">
          <span className="text-xs font-sans text-primary tracking-widest">
            Autonomous Agents
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground leading-tight">
            Pre-built comms agents ready to go
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
            Shadow ships with a library of autonomous agents that run when you need them to.
          </p>
        </div>

        <div className="px-6 md:px-16 pb-16">
        {[agents.slice(0, 3), agents.slice(3, 6)].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {row.map((agent) => (
              <div
                key={agent.title}
                className="py-8 pr-8"
              >
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">
                  {agent.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        ))}
        </div>
      </section>

      <CTASection
        heading="See Shadow run your operations"
        body="We'll walk through the full client lifecycle — from pipeline to autonomous workflows — in a live demo."
        primaryLabel="Book a demo"
        secondaryLabel="Explore Customers"
        secondaryHref="/case-studies"
      />
    </div>
  );
}
