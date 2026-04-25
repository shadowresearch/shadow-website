import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operate | Shadow",
  description:
    "Shadow runs the structural operations of your agency: intake, proposals, dossiers, press management, inbound handling, staffing, and client onboarding. So your team focuses on the work clients pay for.",
  alternates: {
    canonical: "/operate",
  },
  openGraph: {
    title: "Operate | Shadow",
    description:
      "Shadow runs the structural operations of your agency: intake, proposals, dossiers, press management, inbound handling, staffing, and client onboarding.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operate | Shadow",
    description:
      "The agency operations layer. Shadow runs the structural functions that keep your agency moving.",
  },
};

const COVERAGE = [
  {
    label: "New business intake and triage",
    body:
      "Inbound enquiries processed automatically. Qualification, routing, initial research, and response handling run by agents before your team sees the opportunity. By the time a lead reaches a human, the dossier is ready.",
  },
  {
    label: "Proposals and scoping",
    body:
      "Proposals drafted from live client context, competitive landscape data, and governed by your methodology. Scope of work documents, service agreements, and commercial terms structured to your standards. Agents handle the assembly. Your team reviews and signs off.",
  },
  {
    label: "Client dossiers and intelligence packages",
    body:
      "Comprehensive client and prospect intelligence: company profiles, leadership bios, market positioning, competitive landscape, recent coverage, and relevant market context. Assembled automatically for every new opportunity.",
  },
  {
    label: "Press management and inbound handling",
    body:
      "Press enquiries triaged and routed. Media responses drafted. Coverage tracked and compiled. The operational overhead of press management handled systematically, not reactively.",
  },
  {
    label: "Staffing and resource allocation",
    body:
      "Team capacity tracked. Staffing recommendations generated based on scope, expertise match, and current allocation. The staffing decision is still yours. The information to make it is ready when you need it.",
  },
  {
    label: "Client onboarding",
    body:
      "Structured intake, questionnaire generation, client space initialisation, and baseline intelligence gathering. Ramp up in days, not weeks.",
  },
  {
    label: "Pipeline and CRM",
    body:
      "Prospect tracking, status management, follow-up cadences, and pipeline visibility. The operational plumbing of new business development, running continuously.",
  },
];

export default function OperatePage() {
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
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Operate
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-2xl">
            The agency operations layer. Shadow runs the structural functions
            that keep your agency moving: new business intake, proposals,
            client dossiers, press management, inbound processing, staffing,
            and onboarding. The stuff no one really wants to do.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See it in action
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* What Operate Covers */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Agency infrastructure, running in the background.
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                {COVERAGE.map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-border pt-6"
                  >
                    <p className="font-heading text-base font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Difference: Fully managed */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Fully managed.
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Shadow&apos;s team configures the operational layer to match
                  how your team runs: your intake process, your proposal
                  structure, your staffing model, your onboarding flow. Agents
                  execute. Your team reviews and directs.
                </p>
                <p>
                  This isn&apos;t a project management tool. It&apos;s not a
                  CRM with AI features. It&apos;s the operational
                  infrastructure that means you scale your craft, capacity,
                  and margins.
                </p>
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
              Run the agency. Don&apos;t be run by it.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Operate handles the structural work so your team does the
              strategic work.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
