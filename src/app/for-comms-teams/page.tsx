import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Comms Teams | Shadow",
  description:
    "Shadow is the narrative intelligence platform for in-house comms teams. See the landscape, own the position, prove the impact.",
  alternates: {
    canonical: "/for-comms-teams",
  },
  openGraph: {
    title: "For Comms Teams | Shadow",
    description:
      "Shadow is the narrative intelligence platform for in-house comms teams. See the landscape, own the position, prove the impact.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Comms Teams | Shadow",
    description:
      "Shadow is the narrative intelligence platform for in-house comms teams. See the landscape, own the position, prove the impact.",
  },
};

const whatShadowRuns = [
  {
    title: "Competitive positioning",
    description:
      "Continuous mapping of how your category is being described, which narratives competitors own, where the white space is, and which positions you can credibly take. Updated weekly, not quarterly.",
  },
  {
    title: "Executive visibility",
    description:
      "Track how your CEO, CFO, and other spokespeople appear across Tier 1 media, podcasts, LinkedIn, and AI-generated answers. Know which stories are building each executive's narrative and which are eroding it.",
  },
  {
    title: "Crisis readiness",
    description:
      "Shadow maintains a live map of sensitivities, narrative pressure points, and early-warning signals. When the moment arrives, you open an already-built situation room instead of building one under fire.",
  },
  {
    title: "GEO and AI answer tracking",
    description:
      "Query ChatGPT, Perplexity, Google AI Overview, and other AI engines on the questions your buyers actually ask. See how your brand shows up, where competitors win citations, and what content closes the gap.",
  },
];

const worksInside = [
  {
    title: "Not against your agency",
    description:
      "Most Shadow customers keep their agency and use Shadow to brief them better. You walk into agency calls with the landscape, the positions, and the measurement framework already built. The agency does what agencies do best.",
  },
  {
    title: "Not instead of your team",
    description:
      "Shadow does not replace comms directors, writers, or media relations leads. It replaces the invisible research and monitoring load that consumes half their week, so they can focus on the work only they can do.",
  },
  {
    title: "Fits your stack",
    description:
      "Shadow integrates alongside your existing media database, social listening, and analytics tools during transition. Most teams consolidate two or three vendors within the first year, but there is no hard switchover required.",
  },
  {
    title: "One source of narrative truth",
    description:
      "The VP of Comms, the CMO, the agency, and the CEO's chief of staff all work from the same landscape. No more conflicting weekly reports. No more debating what the narrative actually is.",
  },
];

const commsCalendar = [
  {
    title: "Board reporting",
    description:
      "Shadow Reporters produce quarterly narrative reports: share of voice, position strength, competitive movement, AI citation rate, and message pull-through. The deck the CCO brings to the board is generated, not cobbled together.",
  },
  {
    title: "Program planning",
    description:
      "Starting a product launch, funding announcement, or exec repositioning. Shadow Strategists rank the positions worth taking; Planners build the program; Writers draft the pitches, bylines, and messaging. Your team reviews and ships.",
  },
  {
    title: "Real-time narrative tracking",
    description:
      "A competitor launches. A reporter opens a thread. An AI model starts citing a new frame. Shadow surfaces the shift within the day, not the week, so your team can respond while the narrative is still forming.",
  },
];

const faqs = [
  {
    q: "How is Shadow different from Muck Rack, Cision, or Meltwater?",
    a: "Those tools monitor and report. Shadow monitors, analyzes, positions, plans, writes, and measures. The legacy category is media database and clipping. Shadow is narrative intelligence: the layer above that tells you what the coverage means and what to do next.",
  },
  {
    q: "Does Shadow actually pitch reporters for us?",
    a: "Shadow drafts the pitches, profiles the journalists, and sequences the outreach. A human sends. We keep a hard line between AI-generated content and AI-sent communication. Every pitch that leaves your domain is reviewed and sent by a person on your team or your agency.",
  },
  {
    q: "What does Shadow's GEO tracking actually measure?",
    a: "Shadow queries ChatGPT, Perplexity, Google AI Overview, and Gemini against a defined set of buyer questions. It tracks whether your brand is cited, how, alongside which competitors, and which source pages drove the citation. That tells you what to publish to win more answers.",
  },
  {
    q: "How long before Shadow delivers useful intelligence?",
    a: "The first landscape lands within a week of kickoff. The first competitive position ranking in two weeks. Within a quarter, Shadow has enough baseline data to measure narrative movement and generate the first true comparative report.",
  },
];

export default function ForCommsTeamsPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            The narrative intelligence every comms team wishes they had.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow reads how your company is being described across media,
            search, and AI, finds the positions you can own, and runs the
            programs to take them. Operated by a team of six agents, always
            on.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a demo
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See a Narrative Cycle Report
            </Link>
          </div>
        </div>
      </section>

      {/* In-house problem */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  Too many surfaces, not enough analysts.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p className="text-sm italic text-foreground/80">
                  Shadow is narrative intelligence for corporate communications
                  teams. It monitors media, search results, AI answer engines
                  (ChatGPT, Perplexity, Google AI Overview), and competitor
                  positioning, then turns what it finds into ranked positions,
                  drafted programs, and board-ready reports. Operated by six
                  agents, always on.
                </p>
                <p>
                  In-house communications has inherited a job that used to be
                  three. You own reputation in the press. You own how executives
                  show up in search. You own how your company is described by
                  AI models. You own competitive narrative. Each of these is a
                  full-time analyst role. Most comms teams have one researcher
                  and a monitoring tool that only covers news.
                </p>
                <p>
                  The failure mode is familiar: reactive pitching, stale message
                  houses, agency reports that describe activity instead of
                  impact, and no systematic view of how the company is actually
                  being positioned in the market. Shadow closes that gap. Six
                  agents run continuously against your category, your
                  competitors, and your executives, and produce the intelligence
                  your team no longer has time to gather by hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Shadow runs */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  What Shadow runs for comms teams.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow&apos;s Positioning Engine is operated by six agents
                  (Researchers, Analysts, Strategists, Planners, Writers,
                  Reporters) configured for the in-house job. The focus is
                  continuous intelligence: competitive positioning, exec
                  visibility, crisis readiness, and GEO presence across AI
                  answer engines.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {whatShadowRuns.map((item) => (
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

      {/* Works inside your org */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 order-2 lg:order-1">
                {worksInside.map((item) => (
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
                  Does Shadow replace my agency or my team?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Neither. Shadow is the intelligence and production layer your
                  comms org has never had. Your team still owns strategy,
                  relationships, and final judgment. Your agency still pitches
                  media and runs programs. Shadow gives both a sharper view of
                  the narrative landscape and the raw material to act on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How comms leaders use Shadow */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Where does Shadow show up in the comms calendar?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Three recurring jobs for in-house comms: reporting to the
                  board, planning the next program, and tracking narrative in
                  real time. Shadow runs all three from the same live
                  landscape, so the story stays consistent from the CEO&apos;s
                  office to the press desk.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                {commsCalendar.map((item) => (
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
              In-house comms questions, answered.
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
              See your company&apos;s narrative landscape.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              We will run the initial map on your category, your competitors,
              and your executive visibility. No pitch deck. Just the landscape
              your team has been asking for.
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
