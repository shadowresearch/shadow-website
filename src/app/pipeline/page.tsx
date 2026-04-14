import type { Metadata } from "next";
import { CapabilitySection } from "../_components/CapabilitySection";
import { CTASection } from "../_components/CTASection";
import { PipelineMockup } from "../_components/mockups/PipelineMockup";

export const metadata: Metadata = {
  title: "Pipeline & Operations: Shadow",
  description:
    "Client pipeline, onboarding, proposals, invoicing, and 40+ autonomous workflows — Shadow runs the operational layer so your team can focus on clients.",
};

const workflows = [
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
    title: "Inbound Triage",
    description:
      "New media requests, journalist inquiries, and inbound opportunities are automatically categorized, prioritized, and surfaced to the right team member.",
  },
  {
    title: "Content Slates",
    description:
      "Shadow generates monthly content calendars — pitches, op-eds, social posts, and events — anchored to your client's strategic narrative and upcoming moments.",
  },
];

export default function PipelinePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Pipeline &amp; Operations
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            Run the business. Not just the campaigns.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow manages your client pipeline, onboarding, proposals, and
            invoicing — and runs 40+ autonomous workflows in the background so
            your team shows up to every client call with something to say.
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
            <PipelineMockup />
          </div>
        </div>
      </section>

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

      {/* Autonomous Workflows */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              Autonomous Workflows
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground leading-tight">
              40+ workflows running while you sleep
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
              Shadow runs a library of pre-built autonomous workflows — triggered
              on schedules, events, or client stage transitions — so your agency
              is always producing value, even when no one&apos;s at their desk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((workflow) => (
              <div
                key={workflow.title}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-heading font-semibold text-sm text-foreground mb-2">
                  {workflow.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {workflow.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="See Shadow run your operations"
        body="We'll walk through the full client lifecycle — from pipeline to autonomous workflows — in a live demo."
        primaryLabel="Book a demo"
        secondaryLabel="Explore Customers"
        secondaryHref="/customers"
      />
    </div>
  );
}
