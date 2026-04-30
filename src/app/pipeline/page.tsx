import type { Metadata } from "next";
import Link from "next/link";

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
      "Automated weekly intelligence reports covering industry trends, competitor moves, and emerging narratives, delivered without being asked.",
  },
  {
    title: "Coverage Reports",
    description:
      "Shadow tracks all earned coverage, formats it into a polished report, and sends it to clients on whatever cadence you set.",
  },
  {
    title: "Intelligence Dossiers",
    description:
      "Deep-dive research packages on companies, markets, or individuals, assembled automatically from news, filings, and public data.",
  },
  {
    title: "AI Visibility",
    description:
      "Shadow audits how your clients appear across ChatGPT, Gemini, Perplexity, and Claude, then produces GEO-optimized content to improve citation rates and AI search visibility.",
  },
];

const sections = [
  {
    label: "Client Management",
    heading: "From first inquiry to fully onboarded",
    body: "Shadow manages your entire client lifecycle, tracking prospects through your pipeline, generating intake questionnaires, and onboarding new clients with the documentation and context they need to feel in good hands from day one.",
    details: [
      {
        title: "Inbound Pipeline",
        description:
          "Prospects enter Shadow's pipeline from any source. Shadow tracks their stage, generates follow-up tasks, and surfaces context for every conversation so your team never goes in blind.",
      },
      {
        title: "Onboarding",
        description:
          "When a client signs, Shadow generates onboarding documents, intake questionnaires, and kickoff materials automatically, calibrated to the engagement scope and client category.",
      },
    ],
  },
  {
    label: "Business Operations",
    heading: "Proposals, agreements, and invoices, handled",
    body: "Shadow generates the business documents your agency needs to close and manage engagements, scoped to the client, branded to your agency, and ready in minutes.",
    details: [
      {
        title: "Proposals & Agreements",
        description:
          "Shadow generates scoped proposals, with service descriptions, deliverables, timelines, and pricing, based on the client context in your pipeline. Agreements follow the same playbook.",
      },
      {
        title: "Invoicing",
        description:
          "Track engagement values, generate invoice documentation, and maintain a clear record of what's been billed and what's outstanding, without a separate finance tool.",
      },
    ],
  },
];

export default function PipelinePage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Run the business. Not just the programs.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow manages your client pipeline, onboarding, proposals, and
            invoicing, and runs autonomous agents in the background so your
            team never has a cold start.
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

      {/* Autonomous Agents */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Pre-built comms agents ready to go
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow ships with a library of autonomous agents that run
                  when you need them to.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {agents.map((agent) => (
                  <div key={agent.title}>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {agent.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See Shadow run your operations
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              We&apos;ll walk through the full client lifecycle, from pipeline
              to autonomous workflows, in a live demo.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore Customers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
