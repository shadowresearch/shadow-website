import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PricingTiers } from "./_components/PricingTiers";

export const metadata: Metadata = {
  title: "Pricing | Shadow",
  description:
    "Per-client pricing that scales with your team. $750/client/month, with volume discounts for agencies and a 15% annual discount.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Shadow",
    description:
      "Per-client pricing that scales with your team. $750/client/month, with volume discounts for agencies and a 15% annual discount.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Shadow",
    description:
      "Per-client pricing that scales with your team. Volume discounts for agencies.",
  },
};

const INCLUDED = [
  {
    label: "Narrative intelligence",
    body:
      "Live media, search, social, and AI signal across every client account, unified in one graph.",
  },
  {
    label: "Program execution",
    body:
      "Proposals, media relations, SEO, GEO, thought leadership, social, awards, and reporting in one workflow.",
  },
  {
    label: "Six AI agents",
    body:
      "Researchers, analysts, strategists, planners, writers, and reporters governed by your methodology and voice.",
  },
  {
    label: "Operate",
    body:
      "Intake, dossiers, scoping, staffing, onboarding, and pipeline run automatically in the background.",
  },
  {
    label: "Fully managed",
    body:
      "Dedicated Shadow team handles setup, agent configuration, optimisation, and ongoing maintenance.",
  },
  {
    label: "All your integrations",
    body:
      "Slack, Gmail, Outlook, Google Drive, OneDrive, LinkedIn, Google Analytics, Facebook, and custom.",
  },
];

const FAQ = [
  {
    q: "How does the per-client model work for agencies?",
    a: "You pay $750 per client per month. Per-client pricing decreases as you scale; we'll size the right rate against your client count on the call.",
  },
  {
    q: "What does 'fully managed' actually include?",
    a: "Setup, methodology and voice configuration, agent training, integrations, ongoing optimisation, and platform maintenance. You direct the work; the Shadow team operates the platform alongside you.",
  },
  {
    q: "Is there a contract minimum?",
    a: "Engagements are typically annual to align with how teams plan their year. We're flexible on quarterly starts for agency pilots — talk to us.",
  },
  {
    q: "How does onboarding work?",
    a: "Your Shadow team configures the methodology, voice, and quality standards, integrates your stack, and stands up workspaces per client. Most teams are running in days, not weeks.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="absolute inset-0 -z-0" aria-hidden="true">
          <Image
            src="/smoke.svg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            priority
            role="presentation"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-2xl">
            Flexible pricing for every team.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-md">
            One price, every capability. Pricing decreases as you add clients.
            Annual plans save 15%.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <PricingTiers />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Every plan is the full platform.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  No tiers locked behind upsells. Every plan ships with the
                  whole graph, every agent, every integration, and a managed
                  team.
                </p>
              </div>
              <ul className="flex flex-col">
                {INCLUDED.map((item) => (
                  <li
                    key={item.label}
                    className="grid grid-cols-[minmax(0,180px)_minmax(0,1fr)] gap-6 items-baseline border-b border-border py-5"
                  >
                    <span className="text-sm font-heading font-semibold text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Pricing questions.
                </h2>
              </div>
              <div className="flex flex-col">
                {FAQ.map((item) => (
                  <div
                    key={item.q}
                    className="border-b border-border py-6"
                  >
                    <p className="font-heading text-base font-semibold text-foreground">
                      {item.q}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-3xl">
              See Shadow on a real client.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll walk through how Shadow runs the work
              for a client like yours.
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
                See who runs on Shadow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
