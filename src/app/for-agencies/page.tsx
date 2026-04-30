import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Agencies | Shadow",
  description:
    "Shadow is the narrative intelligence platform built for agencies. Position every client, run every program, measure what moved.",
  alternates: {
    canonical: "/for-agencies",
  },
  openGraph: {
    title: "For Agencies | Shadow",
    description:
      "Shadow is the narrative intelligence platform built for agencies. Position every client, run every program, measure what moved.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Agencies | Shadow",
    description:
      "Shadow is the narrative intelligence platform built for agencies. Position every client, run every program, measure what moved.",
  },
};

const agentCapabilities = [
  {
    title: "Researchers",
    description:
      "Continuous monitoring across 200K+ news outlets, trade publications, analyst reports, podcasts, and social feeds. Every client gets a live signal layer that never sleeps and never misses a relevant mention.",
  },
  {
    title: "Analysts",
    description:
      "Narrative landscapes per client: the claims being made in the category, who owns which position, where the gaps are, and how the story frames are shifting over time.",
  },
  {
    title: "Strategists",
    description:
      "Every open territory gets scored on differentiation, evidence, competitive contest, and buyer intent. The output is a ranked set of positions your client can credibly own.",
  },
  {
    title: "Planners",
    description:
      "From a chosen position, Planners build the program: angles, journalist targets, earned and owned sequencing, GEO content, analyst touchpoints, and executive visibility moves.",
  },
  {
    title: "Writers",
    description:
      "Pitches, bylines, press releases, briefing docs, messaging houses, Q&A prep, resource pages, and talking points. All drafted in your agency's voice, ready for editorial review.",
  },
  {
    title: "Reporters",
    description:
      "Weekly, monthly, quarterly. Reporters measure coverage, share of voice, narrative strength, AI answer presence, and message pull-through, then feed the outcomes back into the Positioning Engine.",
  },
];

const modelHolds = [
  {
    title: "Your team owns strategy",
    description:
      "Shadow produces ranked positioning options, evidence maps, and program plans. Your strategists choose which to pursue, how aggressive to get, and how to shape the narrative for each specific client.",
  },
  {
    title: "Your name on every deliverable",
    description:
      "Every pitch, briefing, landscape, and report ships under your agency's brand. Shadow does not white-label into client view. It is infrastructure, not a co-author.",
  },
  {
    title: "Clients only see your people",
    description:
      "No AI branding, no platform logos, no Shadow in the meeting. Clients experience a sharper, faster agency. The machinery stays behind the curtain where it belongs.",
  },
  {
    title: "Senior time goes back to clients",
    description:
      "Your most expensive people stop formatting decks and start doing counsel. That is where agency value lives; that is where margin returns.",
  },
];

const threeJobs = [
  {
    title: "New business pitches",
    description:
      "Prospect calls the agency. Within 48 hours, Shadow produces the full category landscape, the ownable positions, a draft 90-day plan, and a competitive narrative map. Your team walks in with the work the incumbent has not done.",
  },
  {
    title: "Retainer execution",
    description:
      "On every active account, Shadow runs the weekly research, surfaces narrative shifts, drafts the pitches, and prepares the reports. Your account leads spend their hours on judgment, client calls, and relationship work.",
  },
  {
    title: "Quarterly reviews",
    description:
      "Shadow Reporters generate the QBR: coverage delta, share of voice movement, position strength, AI answer citations, and what to change in the next quarter. The client conversation shifts from activity metrics to narrative outcomes.",
  },
];

const faqs = [
  {
    q: "Will Shadow compete with my agency for clients?",
    a: "No. Shadow is infrastructure for agencies, not an agency. Shadow does not sell directly to brands who are already represented, does not take retainers, and does not pitch media on behalf of end clients. Agencies are the customer and the operator.",
  },
  {
    q: "How does pricing work for agencies with many clients?",
    a: "Shadow prices at the agency level, not per seat or per client. One subscription covers every active account your team runs. The model rewards agencies that put Shadow on every client rather than penalizing growth.",
  },
  {
    q: "Does Shadow replace tools like Muck Rack or Meltwater?",
    a: "For most agencies, yes. Shadow covers media monitoring, journalist research, coverage reporting, and share of voice, then adds the positioning, strategy, and program layers those tools do not. Many agencies consolidate three to five vendors into one Shadow subscription.",
  },
  {
    q: "How long does onboarding take for a new client account?",
    a: "Roughly 72 hours from kickoff. Shadow ingests the client brief, runs the initial landscape, scores the position set, and delivers the first draft plan. Your team reviews, refines, and takes it to the client as your own.",
  },
];

export default function ForAgenciesPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            A full narrative team, operated across every account.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Your strategy. Your brand. Your relationships. Shadow is the
            capability layer that makes a six-person agency operate like a
            sixty-person one.
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
              See agency case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Agency math */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  Margin erosion is a positioning problem, not a staffing problem.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p className="text-sm italic text-foreground/80">
                  Shadow is the narrative intelligence platform for PR and
                  communications agencies. Six agents (Researchers, Analysts,
                  Strategists, Planners, Writers, Reporters) run continuously
                  across every account, so account teams spend time on client
                  judgment and senior thinking instead of research, monitoring,
                  and rote production work.
                </p>
                <p>
                  The standard agency response to thinner margins is to hire
                  junior staff, stretch senior talent, or compress scope. None of
                  these fix the underlying problem: the work it takes to position
                  a client credibly has grown faster than billable hours allow.
                  Category landscapes move weekly. AI answer engines (ChatGPT,
                  Perplexity, Google AI Overview) reshape how brands are
                  described. Journalists change beats. Competitors shift framing.
                </p>
                <p>
                  Agencies that win the next decade will not do so by adding
                  headcount. They will do it by installing a capability layer
                  that handles the research, mapping, and production load so
                  senior strategists can focus on the judgment only they can
                  provide. Shadow is that layer: one platform, six agents, every
                  account, always on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six agents */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  What Shadow runs for agencies.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow&apos;s Positioning Engine is operated by six agents
                  working in sequence across every client account. Researchers
                  monitor 200K+ sources. Analysts produce landscapes.
                  Strategists score positions. Planners build programs. Writers
                  draft. Reporters measure. Your account team directs; Shadow
                  produces.
                </p>
                <Link
                  href="/ai-agents"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore AI agents
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {agentCapabilities.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model holds */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 order-2 lg:order-1">
                {modelHolds.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Does Shadow replace my account team?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  No. Shadow replaces the research, monitoring, and production
                  load that buries account teams. Your strategists still own
                  the strategy. Your senior partners still own the
                  relationships. Clients only ever see your people. Shadow
                  surfaces options; your team decides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three jobs */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  How does Shadow fit into agency workflow?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Agencies deploy Shadow against three jobs with clear ROI:
                  winning new business, executing retainers, and running
                  quarterly reviews. Each uses the same six agents, operated
                  against a different surface of the agency-client
                  relationship.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                {threeJobs.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              Agency questions, answered.
            </h2>
            <div className="mt-10 space-y-10 max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See Shadow run on one of your accounts.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Send us a client. We will build the landscape, rank the
              positions, and draft the first 90-day plan. Under your agency&apos;s
              brand, ready for the next client meeting.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
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
