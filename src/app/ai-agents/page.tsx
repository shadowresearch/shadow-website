import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents | Shadow",
  description:
    "Shadow gives you a team of specialised AI agents across the narrative craft: researchers, analysts, strategists, planners, writers, and reporters. Reading agents intake from the world. Writing agents output to it.",
  alternates: {
    canonical: "/ai-agents",
  },
  openGraph: {
    title: "AI Agents | Shadow",
    description:
      "Shadow gives you a team of specialised AI agents across the narrative craft: researchers, analysts, strategists, planners, writers, and reporters. Reading agents intake from the world. Writing agents output to it.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents | Shadow",
    description:
      "Your always-on narrative team. Six specialised agent roles, divided by function: those that read from the narrative landscape and those that write to it.",
  },
};

const READING_AGENTS = [
  {
    name: "Researchers",
    href: "/researchers",
    body: [
      "Your research agents are the intake layer. They continuously scan media coverage, search trends, social conversations, and AI citations across every client account. They surface signals: new coverage patterns, emerging narratives, competitive movements, journalist activity shifts, and audience behaviour changes.",
      "Researchers don't wait for a brief. They operate 24/7, processing thousands of data points and flagging what needs attention. By the time your team sits down in the morning, the researchers have already scanned the landscape.",
    ],
    capabilities: [
      "Continuous media monitoring across 200,000+ sources",
      "Search demand tracking and keyword movement detection",
      "Social conversation scanning and community signal identification",
      "AI citation monitoring across major LLM platforms",
      "Competitive news and activity tracking",
      "Category signal detection and trend identification",
    ],
  },
  {
    name: "Analysts",
    href: "/analysts",
    body: [
      "Analysts interpret what researchers surface. They identify patterns, track narrative cycles, measure competitive positioning, and quantify the landscape. Where researchers flag a signal, analysts tell you what it means.",
      "Analysts are the bridge between raw data and actionable intelligence. They turn coverage volume into share of voice trends, search data into demand maps, and social signals into narrative trajectory models.",
    ],
    capabilities: [
      "Narrative cycle analysis and lifecycle classification",
      "Competitive positioning measurement and gap identification",
      "Share of voice quantification across media, search, and AI",
      "Audience segmentation and demand mapping",
      "White space detection and position availability scoring",
      "Performance benchmarking and trend analysis",
    ],
  },
];

const WRITING_AGENTS = [
  {
    name: "Strategists",
    href: "/strategists",
    body: [
      "Strategists co-author the positioning. They score the positions analysts identify and work with you to build the frameworks that define how a client should own them: messaging architectures, narrative territories, competitive differentiation, and audience-specific framing.",
    ],
    capabilities: [
      "Positioning co-development",
      "Narrative framework construction",
      "Competitive differentiation mapping",
      "Audience segmentation and message architecture",
      "Category creation and white space strategy",
      "Help define the narrative territory you want to own",
      "Spokesperson and executive positioning",
    ],
  },
  {
    name: "Planners",
    href: "/planners",
    body: [
      "Planners structure the program. They take the strategic framework you approved and map it into actionable plans: channel strategies, content calendars, media targets, event roadmaps, and resource allocation.",
    ],
    capabilities: [
      "Program architecture and timeline development",
      "Channel strategy and media targeting",
      "Content calendar planning and editorial sequencing",
      "Events and awards roadmap development",
      "Resource and effort allocation across programs",
      "Campaign structure and phasing",
    ],
  },
  {
    name: "Writers",
    href: "/writers",
    body: [
      "Writers produce the work. Press releases, thought leadership, GEO content, proposals, briefs, social content, award applications. Every piece of output is grounded in the strategy, informed by the intelligence, and governed by your methodology, voice, and quality standards.",
    ],
    capabilities: [
      "Press materials and media kits",
      "Thought leadership and executive ghostwriting",
      "SEO and GEO content production",
      "Proposals, scopes of work, and strategic briefs",
      "Awards and events applications",
      "Social content and campaign materials",
    ],
  },
  {
    name: "Reporters",
    href: "/reporters",
    body: [
      "Reporters close the loop. They track performance, compile measurement, generate reporting, and surface what's working. They connect output back to outcome: which positions were taken, which content performed, which programs moved the metrics.",
    ],
    capabilities: [
      "Coverage analysis and media impact reporting",
      "GEO and AI visibility tracking and reporting",
      "SEO performance measurement",
      "Share of voice reporting and competitive benchmarking",
      "Quarterly program reporting",
      "ROI and impact measurement",
    ],
  },
];

const HOW_AGENTS_OPERATE = [
  {
    label: "Methodology-governed",
    body:
      "Every agent is governed by your methodology, voice, and quality standards. They don't produce generic AI output. They produce work that reflects how your best people think.",
  },
  {
    label: "Persistent context",
    body:
      "Agents retain client context across sessions. The 100th interaction with a client is informed by every previous one. Institutional knowledge compounds in the system, not in someone's head.",
  },
  {
    label: "Always running",
    body:
      "Reading agents operate 24/7. Writing agents are available on demand and can be triggered by reading agent signals. The team doesn't clock out.",
  },
  {
    label: "Coordinated",
    body:
      "Agents work together. A researcher surfaces a signal. An analyst interprets it. A strategist frames the response. A planner structures the program. A writer produces the work. A reporter measures the result. The chain is connected.",
  },
  {
    label: "Fully managed",
    body:
      "Shadow's team configures, deploys, and maintains your agents.",
  },
];

function AgentBlock({
  agent,
}: {
  agent: {
    name: string;
    href: string;
    body: string[];
    capabilities: string[];
  };
}) {
  return (
    <div className="border-t border-border pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10">
        <div>
          <Link
            href={agent.href}
            className="font-heading text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            {agent.name}
          </Link>
          <div className="mt-6 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed max-w-md">
            {agent.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={agent.href}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
          >
            See the {agent.name.toLowerCase()}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div>
          <p className="text-xs font-mono text-primary tracking-widest uppercase">
            Capabilities
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {agent.capabilities.map((cap) => (
              <li
                key={cap}
                className="text-sm text-foreground leading-relaxed pl-4 border-l border-border"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AiAgentsPage() {
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
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            AI Agents
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-2xl">
            Your always-on narrative team. Six specialised agent roles, divided
            by function: those that read from the narrative landscape and
            those that write to it. Running 24/7, governed by your methodology,
            voice, and quality standards, compounding across every client.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See them in action
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

      {/* Framework */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Agents that read. Agents that write.
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The narrative craft has two fundamental modes: reading
                  (understanding what the world is saying) and writing (shaping
                  what gets said next). Shadow&apos;s agents are organised
                  around this distinction.
                </p>
                <p>
                  Reading agents scan, track, interpret, and analyse. They
                  intake from the narrative landscape. They&apos;re the
                  intelligence layer&apos;s workforce: always running, always
                  processing, always surfacing what matters.
                </p>
                <p>
                  Writing agents strategise, plan, produce, and measure. They
                  co-author the narratives you want to shape. They&apos;re the
                  workforce that works alongside you and while you&apos;re
                  away to drive programs forward: running the positioning you
                  choose, and the program you approved.
                </p>
                <p>
                  Together, they form a persistent narrative team that operates
                  as an extension of your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading agents */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Reading from the narrative landscape.
                </h2>
              </div>
              {READING_AGENTS.map((agent) => (
                <AgentBlock key={agent.name} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writing agents */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Writing to the narrative landscape.
                </h2>
              </div>
              {WRITING_AGENTS.map((agent) => (
                <AgentBlock key={agent.name} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How agents operate */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              How agents operate.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOW_AGENTS_OPERATE.map((item) => (
                <div key={item.label} className="border-t border-border pt-6">
                  <p className="font-heading text-base font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-3xl">
              A narrative team that never stops working.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Six roles. Two modes. Your always-on narrative team.
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
