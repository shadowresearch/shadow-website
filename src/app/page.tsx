import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shadow | The Operating System for Communications Teams",
  description:
    "Shadow is the AI operating system for PR and communications teams. Research, strategy, content, media, and pipeline in one platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shadow | The Operating System for Communications Teams",
    description:
      "Shadow is the AI operating system for PR and communications teams. Research, strategy, content, media, and pipeline in one platform.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow | The Operating System for Communications Teams",
    description:
      "Shadow is the AI operating system for PR and communications teams. Research, strategy, content, media, and pipeline in one platform.",
  },
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
      "Master messaging frameworks, strategic positioning, and GTM strategies grounded in real market data and competitive context.",
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
    title: "Autonomous agents",
    description:
      "Pre-built comms agents ready to go. Inbound triage, daily media digests, weekly market scans, coverage reports, intelligence dossiers, and more.",
    href: "/pipeline",
  },
];

const steps = [
  {
    number: "01",
    title: "Client-first",
    description:
      "Every client gets a dedicated workspace. Their brand voice, positioning, competitors, coverage, and strategic context all in one place.",
    mockup: "client-space",
  },
  {
    number: "02",
    title: "Methodology-led",
    description:
      "Standard operating procedures are encoded into your agents for every workflow. Shadow follows your methodology and style so every output is on-brand.",
    mockup: "sop-execution",
  },
  {
    number: "03",
    title: "Proactive & Continuous",
    description:
      "Shadow runs continuously in the background. Surfacing news, scanning competitors, generating content, and flagging opportunities without being asked.",
    mockup: "autonomous-agent",
  },
];

const replacedTools = [
  "Google Alerts",
  "Prezly",
  "Custom scripts",
  "Google Sheets",
  "Notion",
  "Slack bots",
  "Semrush",
  "Coverage books",
  "Ahrefs",
  "Brandwatch",
  "Cision",
  "HubSpot",
  "Prowly",
  "Muck Rack",
  "Meltwater",
  "ChatGPT",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Shadow",
            description: "The AI operating system for PR and communications teams.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://shadow.inc",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "27",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background smoke */}
        <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
          <img
            src="/smoke.svg"
            alt=""
            className="w-auto max-w-none opacity-40"
            style={{ transform: "translateX(25%) scale(1.1)" }}
          />
        </div>
        {/* Glass overlay */}
        <div className="backdrop-blur-xl bg-background/50 py-28 md:py-36 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:items-center md:text-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-foreground leading-tight tracking-tight max-w-4xl">
            The operating system for communications
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow is the AI infrastructure that powers leading teams.
            Six operational layers working together so your team can focus on
            outcomes and relationships, not repetition.
          </p>

          <div className="mt-10 flex flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all"
            >
              Book a demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 transition-colors"
            >
              Learn more
            </a>
          </div>

        </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-border">
        <p className="text-center text-sm text-muted-foreground py-4 border-b border-border">
          Trusted by the teams that brought you
        </p>
        {/* Logo grid — 5 columns, 2 rows with cell borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "HubSpot", file: "hubspot-1.svg" },
            { name: "Amazon", file: "amazon-1.svg" },
            { name: "Lovable", file: "lovable-1.svg" },
            { name: "Roblox", file: "roblox-1.svg" },
            { name: "Etsy", file: "etsy-1.svg" },
            { name: "SoftBank", file: "softbank-1.svg" },
            { name: "Airbnb", file: "airbnb-1.svg" },
            { name: "OpenAI", file: "openai-1.svg" },
            { name: "Netflix", file: "netflix-1.svg" },
            { name: "Harness", file: "harness-1.svg" },
          ].map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center py-6 px-4 border-b border-r border-border"
            >
              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={120}
                height={28}
                className={`w-auto h-auto object-contain grayscale opacity-50 ${logo.name === "Roblox" ? "max-h-7 max-w-24" : "max-h-5 max-w-20"}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Product depth — six layers */}
      <section>
        <div className="text-center px-6 md:px-16 py-16">
          <span className="text-xs font-sans text-primary tracking-widest">
            Product
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground leading-tight">
            Six operational layers. One system.
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Shadow isn&apos;t a feature. It&apos;s a complete operating layer that runs
            across research, strategy, content, media, pipeline, and autonomous
            execution.
          </p>
        </div>

        <div>
          {[layers.slice(0, 3), layers.slice(3, 6)].map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {row.map((layer) => (
                <Link
                  key={layer.title}
                  href={layer.href}
                  className="group p-6 hover:bg-muted/20 transition-colors"
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
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-border">
        <div className="text-center px-6 md:px-16 py-16">
          <span className="text-xs font-sans text-primary tracking-widest">
            How it works
          </span>
          <h2 className="mt-3 font-serif text-4xl text-foreground leading-tight">
            Built for the way comms teams actually work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 p-6 bg-muted/20 rounded-lg">
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
      </section>

      {/* Architecture — replace the stack */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
            <div className="p-8 border-r border-border">
              <span className="text-xs font-sans text-primary tracking-widest">
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
                system that has context on every client and every campaign.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
              >
                See Shadow in action
              </a>
            </div>

            <div className="flex flex-col justify-end relative">
              {/* Tool cells — fading in from top */}
              {(() => {
                const rows: string[][] = [];
                for (let i = 0; i < replacedTools.length; i += 2) {
                  rows.push(replacedTools.slice(i, i + 2));
                }
                const totalRows = rows.length;
                return rows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className={`grid grid-cols-2 ${rowIdx < totalRows - 1 ? "border-b border-border" : ""}`}
                    style={{
                      opacity: 0.15 + (rowIdx / totalRows) * 0.85,
                      filter: `blur(${Math.max(0, (1 - rowIdx / totalRows) * 2.5)}px)`,
                    }}
                  >
                    {row.map((tool, colIdx) => (
                      <div
                        key={tool}
                        className={`px-4 py-3 text-sm font-semibold text-muted-foreground line-through decoration-2 decoration-muted-foreground/60 ${colIdx === 0 ? "border-r border-border" : ""}`}
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                ));
              })()}
              {/* Fade gradient overlay at top */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
            </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
            Your team sets the direction. Shadow does the work.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From the first brief to the final report — Shadow handles the
            research, the drafts, the monitoring, and the admin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
            >
              Book a demo
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 transition-colors"
            >
              See who runs on Shadow
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
