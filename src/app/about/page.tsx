import type { Metadata } from "next";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";

export const metadata: Metadata = {
  title: "About Shadow",
  description:
    "Building the AI operating system for communications — who we are, why we're doing this, and who's backing us.",
};

const team = [
  {
    name: "Jessen Gibbs",
    title: "Co-founder & CEO",
    bio: "Jessen spent years watching communications teams do incredible strategic work buried under research, admin, and repetitive production. He built Shadow to give those teams their time back — and their edge back.",
  },
  {
    name: "Nico Bent",
    title: "Co-founder & CTO",
    bio: "Nico brings deep experience in AI systems and developer infrastructure. He architects Shadow's multi-agent orchestration layer — the engine that makes autonomous workflows reliable at scale.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            About
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            We built the tool we wish had existed
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow is the AI operating system for communications — built by
            people who believe that the best PR teams in the world shouldn&apos;t
            be spending half their time on research, formatting, and admin.
          </p>
        </div>
      </section>
      </GlassSection>

      {/* Mission */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              Why we&apos;re building this
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground leading-tight">
              Communications deserves better infrastructure
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-base text-muted-foreground leading-relaxed">
            <p>
              PR agencies run some of the most sophisticated strategic work in
              business. They shape narratives for the world&apos;s most important
              companies, build relationships with the journalists who define
              industries, and help leaders communicate through moments that
              matter.
            </p>
            <p>
              But the tooling hasn&apos;t kept up. Teams are cobbling together
              research platforms, media databases, content tools, and operations
              spreadsheets — switching between eight systems to produce work
              that deserves a single, coherent workflow.
            </p>
            <p>
              Shadow is what happens when you build the infrastructure from the
              ground up for this specific domain — not a generic AI wrapper, but
              a system that understands how PR agencies actually work, what
              clients actually need, and what good communications actually looks
              like.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 border-b border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Team
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground leading-tight mb-10">
            The people building Shadow
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center">
                  <span className="font-heading font-semibold text-lg text-muted-foreground">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{person.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Backed by
          </span>
          <div className="mt-6 flex flex-wrap gap-6 items-center">
            <div className="bg-card border border-border rounded-xl px-6 py-4">
              <p className="font-heading font-semibold text-base text-foreground">
                Front Row Ventures
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Early-stage investor in vertical AI and developer tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground mb-4">
            Get in touch
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              General inquiries:{" "}
              <a
                href="mailto:hello@shadow.inc"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-2"
              >
                hello@shadow.inc
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Press:{" "}
              <a
                href="mailto:press@shadow.inc"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-2"
              >
                press@shadow.inc
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Build with us"
        body="We're a small team doing ambitious work. If you're excited about vertical AI and the future of communications, we'd love to hear from you."
        primaryLabel="Book a demo"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
      />
    </div>
  );
}
