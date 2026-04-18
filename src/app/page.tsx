import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentFeed } from "./_components/AgentFeed";

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

/* ── Data ──────────────────────────────────────────────────────────── */

const layers = [
  {
    title: "Research & Intelligence",
    description:
      "200K+ news sources, journalist profiles, keyword intelligence, GEO audits, and competitive monitoring — all continuously updated.",
    href: "/intelligence",
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

/* ── Page ──────────────────────────────────────────────────────────── */

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
        <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
          <img
            src="/smoke.svg"
            alt=""
            className="w-auto max-w-none opacity-40"
            style={{ transform: "translateX(25%) scale(1.1)" }}
          />
        </div>
        <div className="backdrop-blur-xl bg-background/50 py-28 md:py-36 px-6 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-16">
            {/* Left — copy + CTAs */}
            <div className="flex flex-col flex-1 min-w-0">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] text-foreground leading-tight tracking-tight">
                AI agents for PR and communications
              </h1>

              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                Replace your tools stack with agents that research, write, pitch, track
                coverage, and manage your pipeline across every client.
              </p>

              <div className="mt-8 flex flex-row gap-3">
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

            {/* Right — Agent activity stream */}
            <div className="mt-12 md:mt-0 md:w-[380px] md:shrink-0">
              <AgentFeed />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-border">
        <p className="text-center text-sm text-muted-foreground py-4 border-b border-border">
          Trusted by the teams that brought you
        </p>
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

      {/* Product depth — six layers with vignettes */}
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
              {row.map((layer, colIdx) => {
                const globalIdx = rowIdx * 3 + colIdx;
                return (
                  <Link
                    key={layer.title}
                    href={layer.href}
                    className="group p-6 hover:bg-muted/20 transition-colors border-b border-r border-border"
                  >
                    <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {layer.description}
                    </p>
                    <LayerVignette index={globalIdx} />
                  </Link>
                );
              })}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-border">
          {/* Step 1: Client-first */}
          <div className="flex flex-col p-8 border-b lg:border-b-0 lg:border-r border-border">
            <span className="font-mono text-4xl font-light text-border">01</span>
            <h3 className="font-heading font-semibold text-lg text-foreground mt-4">
              Client-first
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-6">
              Every client gets a dedicated workspace. Their brand voice,
              positioning, competitors, coverage, and strategic context all in
              one place.
            </p>
            {/* Client workspace vignette */}
            <div className="mt-auto rounded-lg border border-border bg-card/60 overflow-hidden">
              <div className="px-3 py-2 border-b border-border/50">
                <span className="text-[10px] font-medium text-muted-foreground">Workspaces</span>
              </div>
              {[
                { name: "Lovable", cat: "Developer Tools", status: "Active", dot: "bg-green-500" },
                { name: "OpenAI", cat: "AI / Foundation", status: "Active", dot: "bg-green-500" },
                { name: "Whop", cat: "Creator Economy", status: "Active", dot: "bg-green-500" },
                { name: "Nova Labs", cat: "Biotech", status: "Onboarding", dot: "bg-blue-500" },
              ].map((c, i) => (
                <div
                  key={c.name}
                  className={`flex items-center gap-2.5 px-3 py-2 ${i > 0 ? "border-t border-border/30" : ""} ${i === 0 ? "bg-muted/30" : ""}`}
                >
                  <div className="w-5 h-5 rounded bg-muted border border-border flex items-center justify-center shrink-0">
                    <span className="text-[8px] font-bold text-muted-foreground">
                      {c.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-medium text-foreground">{c.name}</span>
                    <span className="text-[9px] text-muted-foreground ml-1.5">{c.cat}</span>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Methodology-led */}
          <div className="flex flex-col p-8 border-b lg:border-b-0 lg:border-r border-border">
            <span className="font-mono text-4xl font-light text-border">02</span>
            <h3 className="font-heading font-semibold text-lg text-foreground mt-4">
              Methodology-led
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-6">
              Standard operating procedures are encoded into your agents for
              every workflow. Shadow follows your methodology and style so every
              output is on-brand.
            </p>
            {/* SOP execution vignette */}
            <div className="mt-auto rounded-lg border border-border bg-card/60 overflow-hidden">
              <div className="px-3 py-2 border-b border-border/50 flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">
                  SOP: Press Release
                </span>
              </div>
              <div className="px-3 py-2.5 flex flex-col gap-2">
                {[
                  { step: "Load client voice & messaging", done: true },
                  { step: "Pull latest coverage context", done: true },
                  { step: "Draft in AP style, 400–600 words", done: true },
                  { step: "Include 2 approved exec quotes", active: true },
                  { step: "Add boilerplate & media contact", done: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                      s.done
                        ? "bg-foreground border-foreground"
                        : s.active
                          ? "border-primary bg-primary/10"
                          : "border-border"
                    }`}>
                      {s.done && (
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none">
                          <path d="M1 3L2.5 4.5L6 1" stroke="var(--color-background)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {s.active && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className={`text-[11px] ${
                      s.done
                        ? "text-muted-foreground"
                        : s.active
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/50"
                    }`}>
                      {s.step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Proactive & Continuous */}
          <div className="flex flex-col p-8">
            <span className="font-mono text-4xl font-light text-border">03</span>
            <h3 className="font-heading font-semibold text-lg text-foreground mt-4">
              Proactive & Continuous
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-6">
              Shadow runs continuously in the background. Surfacing news,
              scanning competitors, generating content, and flagging
              opportunities without being asked.
            </p>
            {/* Autonomous agent feed vignette */}
            <div className="mt-auto rounded-lg border border-border bg-card/60 overflow-hidden">
              <div className="px-3 py-2 border-b border-border/50 flex items-center justify-between">
                <span className="text-[10px] font-medium text-muted-foreground">Agent Activity</span>
                <span className="text-[9px] text-muted-foreground/50">Today</span>
              </div>
              {[
                { time: "6:00 AM", action: "Daily media scan completed", detail: "12 relevant articles across 3 clients", color: "#7489A3" },
                { time: "6:15 AM", action: "Coverage alert", detail: "TechCrunch mentioned Lovable in AI dev tools roundup", color: "#B27A53" },
                { time: "7:30 AM", action: "Competitor signal", detail: "Rival raised Series B — briefing drafted", color: "#977BA1" },
                { time: "8:00 AM", action: "Weekly report generated", detail: "Whop coverage summary ready for review", color: "#BF8440" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 flex items-start gap-2.5 ${i > 0 ? "border-t border-border/30" : ""}`}
                >
                  <span className="text-[9px] text-muted-foreground/50 tabular-nums pt-0.5 shrink-0 w-12">
                    {item.time}
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-foreground">{item.action}</span>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
              >
                See Shadow in action
              </a>
            </div>

            <div className="flex flex-col justify-end relative">
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

/* ── Layer vignettes ───────────────────────────────────────────────── */

function LayerVignette({ index }: { index: number }) {
  switch (index) {
    case 0: // Research & Intelligence
      return (
        <div className="flex flex-col gap-1.5 mt-1">
          {[
            { source: "TechCrunch", title: "AI dev tools market heats up as startups raise..." },
            { source: "Wired", title: "The companies racing to build AI-native..." },
            { source: "Bloomberg", title: "Enterprise AI spending tops $180B in..." },
          ].map((a) => (
            <div key={a.source} className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-primary/70 bg-primary/5 px-1 py-0.5 rounded shrink-0">
                {a.source}
              </span>
              <span className="text-[10px] text-muted-foreground/60 truncate">
                {a.title}
              </span>
            </div>
          ))}
        </div>
      );
    case 1: // Strategy & Positioning
      return (
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[9px] text-muted-foreground/50">Positioning</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            {["Category leader", "Differentiation", "Key narratives", "Proof points"].map((s) => (
              <div key={s} className="text-[9px] text-muted-foreground/50 bg-muted/30 rounded px-1.5 py-1 text-center">
                {s}
              </div>
            ))}
          </div>
        </div>
      );
    case 2: // Content Production
      return (
        <div className="flex flex-col gap-1.5 mt-1">
          {[
            { title: "Series B Press Release", status: "Draft", color: "text-amber-600" },
            { title: "Q2 Thought Leadership", status: "Review", color: "text-blue-600" },
            { title: "Awards Submission — TechCrunch", status: "Final", color: "text-green-600" },
          ].map((d) => (
            <div key={d.title} className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-muted-foreground/60 truncate">{d.title}</span>
              <span className={`text-[8px] font-mono ${d.color} opacity-60 shrink-0`}>{d.status}</span>
            </div>
          ))}
        </div>
      );
    case 3: // Media & Outreach
      return (
        <div className="flex flex-col gap-1.5 mt-1">
          {[
            { name: "K. Robison", outlet: "The Verge", beat: "Tech" },
            { name: "C. Metz", outlet: "NYT", beat: "AI" },
            { name: "D. Coldewey", outlet: "TC", beat: "Startups" },
          ].map((j) => (
            <div key={j.name} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                <span className="text-[7px] font-bold text-muted-foreground">{j.name[0]}</span>
              </div>
              <span className="text-[10px] text-muted-foreground/60">{j.name}</span>
              <span className="text-[9px] text-muted-foreground/40">{j.outlet}</span>
              <span className="text-[8px] font-mono text-primary/40 ml-auto">{j.beat}</span>
            </div>
          ))}
        </div>
      );
    case 4: // Pipeline & Operations
      return (
        <div className="mt-1">
          <div className="flex items-center gap-1">
            {["Inbound", "Proposal", "Agreement", "Active"].map((stage, i) => (
              <div key={stage} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full h-1 rounded-full ${i < 3 ? "bg-foreground/20" : "bg-primary/30"}`}
                />
                <span className="text-[8px] text-muted-foreground/40">{stage}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-muted-foreground/50">4 active &middot; 2 proposing &middot; 1 inbound</span>
          </div>
        </div>
      );
    case 5: // Autonomous agents
      return (
        <div className="flex flex-col gap-1 mt-1">
          {[
            { name: "Daily media digest", time: "6:00 AM", dot: "#7489A3" },
            { name: "Competitor scan", time: "Weekly", dot: "#977BA1" },
            { name: "Inbound triage", time: "Continuous", dot: "#BF8440" },
          ].map((a) => (
            <div key={a.name} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: a.dot, opacity: 0.5 }}
              />
              <span className="text-[10px] text-muted-foreground/60">{a.name}</span>
              <span className="text-[9px] text-muted-foreground/30 ml-auto tabular-nums">{a.time}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}
