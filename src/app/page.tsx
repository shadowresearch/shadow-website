import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shadow: The AI Operating System",
  description:
    "Shadow is the AI operating system for communications — automating research, content creation, media tracking, and campaign workflows for modern PR agencies.",
};

const layers = [
  {
    title: "Research & Intelligence",
    description:
      "200K+ news sources, journalist profiles, keyword intelligence, GEO audits, and competitive monitoring — all continuously updated.",
    href: "/research",
  },
  {
    title: "Strategy & Positioning",
    description:
      "Master messaging frameworks, narrative arcs, and GTM strategies grounded in real market data and competitive context.",
    href: "/content",
  },
  {
    title: "Content Production",
    description:
      "Press releases, pitches, website copy, awards submissions, and executive thought leadership — governed by client SOPs.",
    href: "/content",
  },
  {
    title: "Media & Outreach",
    description:
      "230K+ journalist profiles with beat matching, outlet intelligence, coverage tracking, and story clustering.",
    href: "/media",
  },
  {
    title: "Pipeline & Operations",
    description:
      "Client onboarding, proposals, agreements, invoicing, and the full inbound pipeline — managed end-to-end.",
    href: "/pipeline",
  },
  {
    title: "Autonomous Workflows",
    description:
      "40+ pre-built agent workflows: daily media digests, weekly market scans, coverage reports, content slates, and inbound triage.",
    href: "/pipeline",
  },
];

const steps = [
  {
    number: "01",
    title: "Client spaces",
    description:
      "Every client gets a dedicated workspace — their brand voice, SOPs, contacts, past coverage, and strategic context all in one place.",
  },
  {
    number: "02",
    title: "SOPs as memory",
    description:
      "Standard operating procedures are encoded as living documents. Shadow reads them before every task, ensuring every output is on-brand.",
  },
  {
    number: "03",
    title: "Autonomous agents",
    description:
      "Shadow runs continuously in the background — surfacing news, scanning competitors, generating content, and flagging opportunities without being asked.",
  },
];

const replacedTools = [
  "Cision",
  "Meltwater",
  "Semrush",
  "Ahrefs",
  "ChatGPT",
  "HubSpot",
  "Notion",
  "Slack bots",
  "Custom scripts",
  "Google Sheets",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-40 px-10 md:px-16">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-foreground leading-tight tracking-tight">
            The PR operating system.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            One platform replacing fragmented tool stacks with connected infrastructure. Pipeline, intelligence, strategy, execution, and reporting working together across every client.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="https://cal.com/shadow-inc/demo"
              className="rounded-lg border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Get started
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-border">
        <p className="text-center text-xs text-muted-foreground py-3 border-b border-border">
          Trusted by the teams that brought you
        </p>
        {/* Logo grid — 5 columns, 2+ rows with cell borders */}
        {[
          [
            { name: "HubSpot", file: "hubspot-1.svg" },
            { name: "Amazon", file: "amazon-1.svg" },
            { name: "Lovable", file: "lovable-1.svg" },
            { name: "Roblox", file: "roblox-1.svg" },
            { name: "Etsy", file: "etsy-1.svg" },
          ],
          [
            { name: "SoftBank", file: "softbank-1.svg" },
            { name: "TikTok", file: "tiktok-1.svg" },
            { name: "OpenAI", file: "openai-1.svg" },
            { name: "Netflix", file: "netflix-1.svg" },
            { name: "Harness", file: "harness-1.svg" },
          ],
          [
            { name: "Meta", file: "meta-1.svg" },
            { name: "Lyft", file: "lyft-1.svg" },
            null,
            null,
            null,
          ],
        ].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-5 border-b border-border">
            {row.map((logo, colIdx) => (
              <div
                key={logo?.name ?? `empty-${colIdx}`}
                className={`flex items-center justify-center py-5 ${colIdx < 4 ? "border-r border-border" : ""}`}
              >
                {logo && (
                  <Image
                    src={`/logos/${logo.file}`}
                    alt={logo.name}
                    width={120}
                    height={24}
                    className="h-6 w-auto grayscale opacity-50"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Product depth — six layers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              Product
            </span>
            <h2 className="mt-3 font-serif text-4xl text-foreground leading-tight">
              Six operational layers. One AI.
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Shadow isn&apos;t a feature. It&apos;s a complete operating layer that runs
              across research, strategy, content, media, pipeline, and autonomous
              execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {layers.map((layer) => (
              <Link
                key={layer.title}
                href={layer.href}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {layer.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              How it works
            </span>
            <h2 className="mt-3 font-serif text-4xl text-foreground leading-tight">
              Built for the way agencies actually work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="font-mono text-4xl font-light text-border">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture — replace the stack */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                Consolidation
              </span>
              <h2 className="mt-3 font-serif text-4xl text-foreground leading-tight">
                Replace the stack.
                <br />
                Not another tool in it.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                The average PR agency runs on 8–12 disconnected tools. Shadow
                replaces the research platforms, the content tools, the media
                databases, and the operations spreadsheets — unified under one
                AI that knows every client, every campaign, and every SOP.
              </p>
              <a
                href="https://cal.com/shadow-inc/demo"
                className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                See Shadow in action
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {replacedTools.map((tool) => (
                <div
                  key={tool}
                  className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground line-through decoration-muted-foreground/40"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            Your team does the strategy. Shadow does everything else.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From the first brief to the final report — Shadow handles the
            research, the drafts, the monitoring, and the admin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/shadow-inc/demo"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a demo
            </a>
            <a
              href="/customers"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              See who runs on Shadow
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
