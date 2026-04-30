import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writers | Shadow",
  description:
    "Writers produce the work. Pitches, releases, bylines, briefs, content. Every deliverable in comms is written.",
  alternates: {
    canonical: "/writers",
  },
  openGraph: {
    title: "Writers | Shadow",
    description:
      "Writers produce the work. Pitches, releases, bylines, briefs, content. Every deliverable in comms is written.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writers | Shadow",
    description:
      "Writers produce the work. Pitches, releases, bylines, briefs, content. Every deliverable in comms is written.",
  },
};

const faqs = [
  {
    q: "What do Writers actually draft?",
    a: "Pitches, press releases, bylines, award submissions, briefs, talking points, social content, and website copy. Every deliverable a comms team produces is written. Shadow's Writers draft against the Planner's brief, the client's voice model, and the evidence inventory, then pass the draft to a human for review.",
  },
  {
    q: "Does this replace the craft of a senior writer?",
    a: "No. Writers replace the blank page, not the judgment. A senior writer still shapes the edit, challenges the angle, and owns the voice. What Shadow removes is the first-draft latency: the hours between a brief arriving and a workable draft existing. Senior writers spend their time where it matters.",
  },
  {
    q: "Why call them Writers and not Operators?",
    a: "Because the work is writing. Pitches are written. Releases are written. Bylines are written. Naming the agent 'Operator' obscures what it does. Communications is a writing profession. Shadow's language respects that. The writer frame also sets the right bar for output: the draft should be judged as writing.",
  },
  {
    q: "How does voice consistency work across Writers?",
    a: "Every client has a voice model in the Client Workspace. The model is trained on approved content: past releases, executive bylines, brand guidelines, and edits made during review. Writers draft against the model, and edits feed back into it. Over a quarter, the voice tightens rather than drifts.",
  },
];

export default function WritersPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Produce the work.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Comms is a writing profession. Writers draft pitches, press
            releases, bylines, award submissions, briefs, and content, grounded
            in your client&apos;s positioning and voice.
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

      {/* What Writers do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Draft every deliverable in the comms stack.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Writers take the Planner&apos;s brief and produce the work.
                  Pitches to named journalists. Press releases tied to the
                  program sequence. Executive bylines grounded in client
                  evidence. Award submissions, talking points, social posts,
                  website copy, internal memos. Each draft is tied to the
                  position, the voice model, and the proof inventory. Writers
                  do not invent; they compose from the source of truth.
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
                    title: "Pitches and outreach",
                    desc: "Writers draft pitches calibrated to the journalist on the Planner's list. Each pitch uses the angle assigned to that reporter, quotes the proof the reporter will care about, and follows a hook pattern the reporter has engaged with before.",
                  },
                  {
                    title: "Press releases and bylines",
                    desc: "Long-form work inherits the client's voice model and the program's message architecture. Releases carry the program's structured facts. Bylines reflect the executive's published thinking and avoid the house voice that flattens trade press.",
                  },
                  {
                    title: "Briefs, talking points, content",
                    desc: "The quieter work: briefing documents, Q&A prep, talking points for executive interviews, social content, website copy, award submissions. All drafted against the same positioning so the client's story stays coherent across surfaces.",
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
                    title: "Account Executive (drafting)",
                    desc: "The pitch-and-release mill that defines AE work moves to Writers. AEs own relationships, judgment calls, and edits. First drafts arrive in minutes and iterate to final through human review.",
                  },
                  {
                    title: "Content Creator and Copywriter",
                    desc: "Website copy, social content, owned media, and program assets are drafted by Writers and refined by humans. The creative brief becomes input; the draft becomes output; the editor remains human.",
                  },
                  {
                    title: "Media Relations Specialist",
                    desc: "List pulling and template pitches move to Writers working from the Planner's brief. Specialists shift to relationship work and edge cases: the awkward pitch, the sensitive story, the cold outreach to a dream outlet.",
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
                  The entire first-draft workload.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Account Executives, Content Creators, Media Relations
                  Specialists, and Copywriters spend the majority of their
                  hours on first drafts. Shadow&apos;s Writers absorb that
                  work. Human writers stop producing from scratch and start
                  editing, shaping, and owning the voice. Output per person
                  rises. Quality rises with it, because senior attention lands
                  on edits instead of openings.
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
                  Draft, voice, fact-check, review.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow&apos;s Writers run a four-step loop. Draft against the
                  Planner&apos;s brief. Apply the client&apos;s voice model.
                  Fact-check against the evidence inventory. Package for human
                  review. The loop runs in under a minute for a pitch, in a
                  few minutes for a release. The output is a draft that reads
                  like the client and cites only facts the client can defend.
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
                    title: "Draft",
                    desc: "Structure first. The Writer composes with the angle as the lede, the proof as the body, and the call-to-action as the close. Long-form follows the equivalent architecture for the format.",
                  },
                  {
                    title: "Apply voice",
                    desc: "The client's voice model rewrites the draft. Rhythms, vocabulary, sentence length, and characteristic phrasings inherit from approved past work. Voice is not a style guide; it is a trained pattern.",
                  },
                  {
                    title: "Fact-check",
                    desc: "Every claim is mapped to a source in the evidence inventory. Unsupported claims are flagged, not fabricated. Writers will not invent a number to fill a sentence.",
                  },
                  {
                    title: "Ready for review",
                    desc: "The draft arrives in the Client Workspace with comment anchors on every claim. Human reviewers see the reasoning behind each sentence and can accept, edit, or rewrite with full context.",
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

      {/* Why Writer not Operator */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Naming is a claim about work",
                    desc: "An Operator executes a workflow. A Writer produces prose. The category is writing, so the agent is a Writer. The naming is a choice about what the product is for.",
                  },
                  {
                    title: "The blank page is the problem",
                    desc: "Senior writers rarely complain about editing. They complain about starting. Shadow's Writers eliminate the start and preserve the edit. The craft is where humans still win.",
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
                  The work in comms is writing.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Some categories call their production agents Operators. That
                  framing hides the craft. Comms does not move freight: it
                  writes. Calling the agent a Writer sets the right expectation
                  for the output, the right bar for review, and the right
                  lineage for the people doing the work. Shadow&apos;s Writers
                  do not replace craft. They replace the blank page.
                </p>
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
              Questions about Writers
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
              See a Writer draft against your client&apos;s voice.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll produce a live pitch and release from
              your positioning on the call.
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
