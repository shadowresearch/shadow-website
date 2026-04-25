import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shadow vs Blackbird.AI | Shadow",
  description:
    "Both use narrative intelligence. Blackbird detects threats. Shadow positions brands. Same data substrate, opposite direction.",
  alternates: {
    canonical: "/vs-blackbird-ai",
  },
  openGraph: {
    title: "Shadow vs Blackbird.AI | Shadow",
    description:
      "Both use narrative intelligence. Blackbird detects threats. Shadow positions brands. Same data substrate, opposite direction.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow vs Blackbird.AI | Shadow",
    description:
      "Both use narrative intelligence. Blackbird detects threats. Shadow positions brands. Same data substrate, opposite direction.",
  },
};

const comparisonTable = [
  {
    dimension: "Primary buyer",
    blackbird: "Trust and safety, risk, security, public sector",
    shadow: "Communications, PR, marketing leadership",
  },
  {
    dimension: "Core output",
    blackbird: "Threat dossiers, risk scores, attribution, response timing",
    shadow: "Position recommendations, drafted pitches and content, program plans",
  },
  {
    dimension: "Use of shared substrate",
    blackbird: "Detect manipulation and harm inside narratives",
    shadow: "Identify positions a brand can credibly own and take",
  },
  {
    dimension: "Core platform",
    blackbird: "Constellation platform, Compass conversational AI",
    shadow: "Narrative Graph, Positioning Engine, six agents",
  },
  {
    dimension: "Deployment model",
    blackbird: "Enterprise and government, analyst-led workflows",
    shadow: "SaaS workspace, agent-operated flow",
  },
  {
    dimension: "Outcome measured",
    blackbird: "Harm avoided, narrative threats neutralized",
    shadow: "Narrative share, position held, AI citation rate, pipeline influence",
  },
  {
    dimension: "Representative industries",
    blackbird: "Defense, government, financial services risk, critical infrastructure",
    shadow: "Technology, climate, healthcare, consumer, professional services, PR agencies",
  },
  {
    dimension: "Example use case",
    blackbird: "Detecting coordinated disinformation during an election cycle",
    shadow: "Building and owning a category position ahead of a funding milestone",
  },
  {
    dimension: "Pricing model",
    blackbird: "Enterprise contracts, contact for pricing",
    shadow: "Platform plus agents, contact for pricing",
  },
];

const chooseBlackbird = [
  "The buyer is a trust and safety, risk, security, or intelligence team.",
  "The job to be done is detecting coordinated manipulation, disinformation, or harm-of-narrative risk.",
  "The measure of success is threats identified, attributed, and neutralized before they escalate.",
  "The organization needs analyst-grade tooling, often with government or defense-sector requirements.",
];

const chooseShadow = [
  "The buyer is a head of comms, CMO, or PR agency principal.",
  "The job is to own a category position across media, search, and AI, and to run the programs that take it.",
  "The measure of success is narrative share, position held, AI answer presence, and the business outcomes downstream of those.",
  "The organization wants an operating layer that replaces the assembled stack of monitoring, media database, content, and reporting tools.",
];

const faqs = [
  {
    q: "Are Shadow and Blackbird.AI competitors?",
    a: "Not in any meaningful sense. They share a category label (narrative intelligence) and a signal substrate (media, search, AI). They serve different buyers and produce different outputs. Blackbird.AI is purchased by risk and trust and safety leaders to detect threats. Shadow is purchased by communications leaders to build positions. Most sales cycles do not overlap.",
  },
  {
    q: "Can Shadow detect disinformation or coordinated attacks?",
    a: "No. Shadow is not a threat detection platform. It reads the narrative landscape for positioning opportunities, not for harm signals. Organizations with disinformation or trust and safety requirements should evaluate Blackbird.AI and adjacent vendors for that work.",
  },
  {
    q: "Can Blackbird.AI build and run communications programs?",
    a: "Blackbird.AI is built for threat detection and response, not program production. It does not generate pitches, bylines, or program plans, and it does not replace a monitoring and media relations stack. Comms teams needing that workflow should evaluate Shadow or the incumbent media platforms (Cision, Muck Rack, Meltwater) depending on how much of the stack they want to replace.",
  },
  {
    q: "Should a global enterprise license both?",
    a: "Often, yes. The risk team and the comms team have different mandates and different scoreboards. Blackbird.AI covers the defensive mandate. Shadow covers the offensive one. The two systems can coexist cleanly because they do not write to the same workflows or report to the same leader.",
  },
];

export default function ShadowVsBlackbirdPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Two halves of narrative intelligence.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Blackbird.AI detects narrative threats. Shadow builds narrative
            positions. Same signal substrate (media, search, AI), different
            jobs. One is defensive. One is offensive.
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
      </section>

      {/* Answer capsule */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="max-w-3xl">
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                What is the difference between Shadow and Blackbird.AI?
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Both platforms work at the narrative layer, above traditional
                monitoring. They diverge on direction. Blackbird.AI detects
                narrative threats: disinformation, coordinated manipulation,
                harm-of-narrative risk for governments, defense, and
                enterprise risk teams. Shadow builds narrative positions: it
                reads how claims form across media, search, and AI, then
                writes the position a communications team can own and runs
                the program that takes it. Same substrate. Defensive versus
                offensive. Risk teams versus comms teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blackbird's job */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  What Blackbird.AI does.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Blackbird.AI is a narrative and risk intelligence company
                  focused on harm detection. Its Constellation platform
                  ingests signal from news, social platforms, and open
                  sources, then classifies narratives along dimensions the
                  company calls the five pillars of narrative risk, including
                  manipulation, deception, and harm. Compass, the
                  company&apos;s conversational AI product, lets analysts
                  query those narratives in natural language.
                </p>
                <p>
                  The buyers match the job. Blackbird.AI works with defense
                  and national security organizations, Fortune 500 risk and
                  trust and safety teams, and critical-infrastructure
                  operators who need to identify coordinated narrative
                  attacks, disinformation campaigns, and reputational threats
                  before they spread. Reporting from Forbes, Wired, and the
                  Atlantic Council has profiled this use of the platform
                  during election cycles and geopolitical crises.
                </p>
                <p>
                  The work is defensive by design: identify the threat,
                  measure its velocity, attribute the actors where possible,
                  and give the organization time to respond. The outcome is
                  harm avoided, not market captured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadow's job */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  What Shadow does.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Shadow is the narrative intelligence platform for
                  communications. It reads the landscape across media, search,
                  and AI, writes the position a brand can defensibly own, runs
                  the programs that take it, and measures what moved.
                </p>
                <p>
                  The platform is built around a Narrative Graph and a
                  Positioning Engine, operated by six agents: Researchers,
                  Analysts, Strategists, Planners, Writers, and Reporters.
                  Signal comes from coverage providers like Perigon, search
                  data from DataForSEO, and AI-answer audits from tools like
                  Profound and ZipTie. The output is not a threat dossier. It
                  is a position, the proof it requires, and the pitches,
                  bylines, and AI-ready content that take it.
                </p>
                <p>
                  Buyers are communications leaders: heads of comms at growth
                  and enterprise companies, principals at independent PR
                  agencies, and the marketing leaders who sit alongside them.
                  The outcome is market captured, category language owned,
                  and narrative share gained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legitimate split */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  Defensive and offensive, legitimately different.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The two companies do not compete for the same buyer. They
                  operate on the same underlying substrate (narratives moving
                  across media, search, and AI) and move in opposite
                  directions. Blackbird.AI asks what narrative is being used
                  against us. Shadow asks what narrative we should build and
                  hold. One is a chief information security officer or chief
                  risk officer purchase. The other is a chief communications
                  officer or chief marketing officer purchase.
                </p>
                <p>
                  Both buyers can exist inside the same enterprise. A global
                  consumer brand might run Blackbird.AI for the risk team
                  tracking coordinated disinformation, and run Shadow for the
                  comms team building its category narrative. The platforms
                  do not overlap. They occupy adjacent halves of a category
                  that is only now being named.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Shadow and Blackbird.AI side by side.
            </h2>
            <div className="mt-10 overflow-x-auto border border-border rounded-2xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Dimension
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Blackbird.AI
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Shadow
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row) => (
                    <tr key={row.dimension} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">
                        {row.dimension}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.blackbird}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.shadow}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-3xl">
              When to choose each, and when to run both.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Choose Blackbird.AI when
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {chooseBlackbird.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Choose Shadow when
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {chooseShadow.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Some enterprises legitimately run both. The risk team licenses
              Blackbird.AI for defensive coverage. The comms team licenses
              Shadow for offensive positioning. They share an understanding
              of the landscape and do different jobs with it.
            </p>
          </div>
        </div>
      </section>

      {/* What Shadow is not */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  What Shadow is not.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Shadow is not a threat detection system. It does not
                  identify coordinated manipulation, attribute hostile actors,
                  or score harm. Organizations with those requirements should
                  evaluate Blackbird.AI, Graphika, Logically, or similar
                  platforms alongside their SOC and risk tooling.
                </p>
                <p>
                  Shadow is not a disinformation defense platform. It is
                  built to help communications teams build and hold
                  positions, not to triage attacks on them.
                </p>
                <p>
                  Shadow is not an OSINT platform. Maltego, Babel Street, and
                  traditional open-source intelligence vendors serve the
                  investigative workflow Shadow does not try to replicate.
                </p>
                <p>
                  Shadow is the offensive half of narrative intelligence:
                  read the narrative, write the position, run the program,
                  measure what moved. When a communications team says they
                  need a system that tells them what to say next, that is
                  the job Shadow exists to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              Frequently asked questions.
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
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Build the narrative. Do not just watch it.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Shadow reads the landscape across media, search, and AI, then
              writes the position your team can own. Book a demo and we will
              pull a live narrative map for your category before the call.
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
