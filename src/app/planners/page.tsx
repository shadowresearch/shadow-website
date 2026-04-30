import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planners | Shadow",
  description:
    "Planners translate positioning into program. Angles, journalists, outlets, message variants, sequence.",
  alternates: {
    canonical: "/planners",
  },
  openGraph: {
    title: "Planners | Shadow",
    description:
      "Planners translate positioning into program. Angles, journalists, outlets, message variants, sequence.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planners | Shadow",
    description:
      "Planners translate positioning into program. Angles, journalists, outlets, message variants, sequence.",
  },
};

const faqs = [
  {
    q: "What does a Planner produce?",
    a: "A program plan. That includes a ranked media list, angle variants per outlet, channel mix, message variants per audience, and a sequence with timing. The plan is executable: a Writer can pick it up and draft without another round of briefing. The plan is also versioned, so changes are trackable.",
  },
  {
    q: "How does Shadow build a media list?",
    a: "Planners score journalists against the chosen position using beat fit, recent coverage, outlet authority, and tone alignment. Shadow's Narrative Graph profiles 200,000+ sources continuously, so the list reflects who is covering the category this week, not last year. Every name comes with a pitch angle calibrated to that journalist.",
  },
  {
    q: "Who does the Planner replace?",
    a: "Account Managers doing program planning and Media Relations leads curating target lists. Planning is pattern work: matching positions to angles, angles to journalists, journalists to outlets, outlets to channels. Shadow's Planner runs that matching against live data rather than against a spreadsheet last updated in Q2.",
  },
  {
    q: "Can humans override the Planner?",
    a: "Always. The Planner's output is a recommendation with explicit reasoning. Strategists and account leads can swap journalists, reorder the sequence, adjust the channel mix, or change message variants. Every override is logged, and Shadow learns from the pattern so future plans weight preferences correctly.",
  },
];

export default function PlannersPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Design the program that takes it.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Planners take the positioning decision and turn it into an
            executable program. Angles, journalist targets, outlet mix, message
            variants per channel, sequence and timing.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Request a landscape
            </Link>
            <Link
              href="/ai-agents"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See all agents
            </Link>
          </div>
        </div>
      </section>

      {/* What Planners do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Translate positioning into a program plan.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Planners take the Strategist&apos;s recommendation and build
                  the plan that takes it. They curate the media list, develop
                  angle variants, map channels, and set the sequence. The
                  deliverable is a full editorial calendar: who gets pitched,
                  with what angle, in what order, and on what timing. Nothing
                  is left for a human to reconstruct from a brief.
                </p>
                <Link
                  href="/program-execution"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore program execution
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Media list curation",
                    desc: "Shadow's Planner scores every journalist in the Narrative Graph for fit against the chosen position. The top-ranked list ships with beat notes, recent coverage, and a tailored pitch angle for each reporter.",
                  },
                  {
                    title: "Angle development",
                    desc: "One position, many angles. The Planner generates angle variants that map to outlet priorities: business press wants the customer story, trade press wants the product detail, tier-one wants the executive stance.",
                  },
                  {
                    title: "Channel mapping",
                    desc: "Earned, owned, social, and paid work differently. The Planner allocates the positioning across channels with message variants calibrated to the format and the audience each channel reaches.",
                  },
                  {
                    title: "Sequence optimization",
                    desc: "Order matters. The Planner sequences placements so exclusives land before syndications, thought leadership seeds before product news, and executive social amplifies rather than preempts. Timing is optimized against news cycle windows.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What they replace */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Account Manager (planning)",
                    desc: "The weekly ritual of updating a media list, cross-referencing recent bylines, and assembling an editorial calendar is continuous in Shadow. Account Managers review and approve rather than assemble.",
                  },
                  {
                    title: "Media Relations lead",
                    desc: "Maintaining journalist relationships stays human. Assembling, scoring, and segmenting the list does not. Shadow's Planner runs on live beat maps that update as journalists change outlets, beats, or tone.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  The Account Manager&apos;s spreadsheet month.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Program planning is where comms work goes to die. Account
                  Managers maintain target lists in spreadsheets, Media
                  Relations leads rebuild those lists every quarter, and
                  planners reconcile the two at the start of every engagement.
                  Shadow&apos;s Planner replaces the spreadsheet and the
                  reconciliation. The plan is live, versioned, and grounded in
                  the same graph every other agent uses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How they work */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Matching is the mechanism.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  The Planner runs four matching passes. Position to angle.
                  Angle to journalist. Journalist to outlet. Outlet to channel.
                  Each pass uses live data from the Narrative Graph: coverage
                  patterns, beat histories, syndication routes, audience
                  overlap. The result is a plan where every element connects
                  to every other element, and every element has a reason.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Talk to us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Position to angle",
                    desc: "The Planner generates angle candidates from the position and scores them for news value, evidence support, and differentiation. Weak angles are discarded before they reach a journalist list.",
                  },
                  {
                    title: "Angle to journalist",
                    desc: "Each surviving angle is matched to journalists with beat fit, outlet priority, and tone alignment. Relationships and past outreach are weighted so the Planner does not recycle cold contacts.",
                  },
                  {
                    title: "Journalist to outlet",
                    desc: "Many journalists write for multiple outlets. The Planner chooses the outlet placement where the angle carries most weight and syndication downstream is most likely.",
                  },
                  {
                    title: "Outlet to channel",
                    desc: "Earned placements seed owned content, social amplification, and paid promotion. The Planner sequences the channel cascade so each placement multiplies rather than competes with the others.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handoff */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Pitch-ready briefs",
                    desc: "Every entry in the media list is a pitch-ready brief. Writer agents convert the brief into a draft pitch in seconds, with voice and facts grounded in the client's evidence.",
                  },
                  {
                    title: "Live re-planning",
                    desc: "When coverage lands or an angle fatigues, the Planner adjusts the sequence and Writers work from the updated plan. The program breathes with the news cycle.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  From plan to production.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Once the plan is approved, Writers pick it up and draft. The
                  handoff is granular: each journalist on the list comes with
                  an angle, a pitch hook, message variants, and a deadline.
                  Writers do not rebuild the logic; they execute against a
                  brief that already contains every decision. This is how a
                  two-person team runs a program that used to take six.
                </p>
                <Link
                  href="/writers"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Meet the Writers
                  <span aria-hidden="true">→</span>
                </Link>
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
              Questions about Planners
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

      {/* Final CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See a program plan assembled from your positioning.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll show the Planner turn a live position
              into a full editorial calendar.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Request a landscape
              </Link>
              <Link
                href="/ai-agents"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See all agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
