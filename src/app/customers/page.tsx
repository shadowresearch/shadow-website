import type { Metadata } from "next";
import { CTASection } from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Customers: Shadow",
  description:
    "Communications teams use Shadow to run campaigns for Amazon, OpenAI, Roblox, TikTok, Netflix, and HBO. See who runs on Shadow.",
};

const agencies = [
  {
    name: "Outcast",
    descriptor: "Agency",
    description:
      "One of the most respected tech PR agencies in the world, Outcast runs Shadow across their team to power research, content, and media workflows for clients including OpenAI, TikTok, Netflix, and HBO.",
    clients: ["OpenAI", "TikTok", "Netflix", "HBO", "Next 15"],
    quote:
      "Shadow has changed how we work. We move faster, go deeper, and show clients a level of intelligence they haven't seen from an agency before.",
    attribution: "Team at Outcast",
  },
  {
    name: "Haymaker",
    descriptor: "Agency",
    description:
      "Haymaker uses Shadow to manage client pipelines, generate content at scale, and run autonomous monitoring workflows — freeing their team to focus on strategy and relationships.",
    clients: ["Amazon", "Roblox"],
    quote:
      "The autonomous workflows alone have saved us hours every week. Shadow just runs.",
    attribution: "Team at Haymaker",
  },
];

const brands = [
  "Amazon",
  "OpenAI",
  "Roblox",
  "TikTok",
  "Netflix",
  "HBO",
  "Inworld AI",
  "Next 15",
];

export default function CustomersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Customers
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl mx-auto">
            Who runs on Shadow
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The agencies that trust Shadow are running campaigns for some of
            the most demanding brands in tech and entertainment. Here&apos;s who
            they are and what they&apos;ve built.
          </p>
        </div>
      </section>

      {/* Agency cards */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {agencies.map((agency) => (
              <div
                key={agency.name}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      {agency.descriptor}
                    </span>
                    <h2 className="mt-1 font-heading text-2xl font-semibold text-foreground">
                      {agency.name}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[160px]">
                    {agency.clients.map((client) => (
                      <span
                        key={client}
                        className="inline-flex items-center rounded-full bg-muted border border-border px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agency.description}
                </p>

                <blockquote className="border-l-2 border-primary/40 pl-4">
                  <p className="text-sm text-foreground italic leading-relaxed">
                    &ldquo;{agency.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-muted-foreground">
                    — {agency.attribution}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands logo grid */}
      <section className="py-16 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
            Brands served through Shadow-powered agencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-base font-heading font-semibold text-foreground/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case study placeholders */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
            Case studies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Outcast × OpenAI", "Haymaker × Amazon"].map((title) => (
              <div
                key={title}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3"
              >
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Coming soon
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A detailed look at how Shadow reshaped the team&apos;s workflow,
                  from research and content to media and reporting. Full case
                  study coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to join them?"
        body="Book a demo and see how Shadow would work for your agency and your clients."
        primaryLabel="Book a demo"
        secondaryLabel="Learn about Shadow"
        secondaryHref="/about"
      />
    </div>
  );
}
