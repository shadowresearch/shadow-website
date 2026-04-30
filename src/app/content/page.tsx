import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content & Strategy | Shadow",
  description:
    "Messaging frameworks, press releases, website copy, GEO content, award submissions, executive thought leadership.",
  alternates: {
    canonical: "/content",
  },
  openGraph: {
    title: "Content & Strategy | Shadow",
    description:
      "Messaging frameworks, press releases, website copy, GEO content, award submissions, executive thought leadership.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content & Strategy | Shadow",
    description:
      "Messaging frameworks, press releases, website copy, GEO content, award submissions, executive thought leadership.",
  },
};

const sections = [
  {
    label: "Strategic Foundations",
    heading: "Strategy before content. Always.",
    body: "Shadow builds the strategic layer first, messaging architecture, narrative positioning, and go-to-market strategy, so every piece of content that follows is coherent, differentiated, and grounded in real market context.",
    details: [
      {
        title: "Master Messaging",
        description:
          "Shadow synthesizes brand positioning, competitive landscape, and audience research into a master messaging document that anchors all downstream content, from press releases to CEO keynotes.",
      },
      {
        title: "Narrative Frameworks",
        description:
          "Beyond messaging, Shadow builds narrative arcs for programs, product launches, and thought leadership, ensuring your client has a story that builds over time, not just individual hits.",
      },
      {
        title: "GTM Strategy",
        description:
          "For launches and major moments, Shadow develops full go-to-market communications strategies: timing, channel sequencing, announcement hierarchy, and spokesperson guidance.",
      },
    ],
  },
  {
    label: "Content Production",
    heading: "Every deliverable your team produces, automated",
    body: "Shadow produces the full range of comms deliverables. Not generic drafts, outputs shaped by your client's voice guidelines and strategic context, ready for light editing rather than heavy rewriting.",
    details: [
      {
        title: "Press Materials",
        description:
          "Press releases, media advisories, pitches, backgrounders, and fact sheets, all produced in your client's voice, anchored to the current news cycle, and formatted to editorial standards.",
      },
      {
        title: "Website Copy",
        description:
          "Homepage messaging, product pages, about sections, and blog posts, written to reflect the brand's voice, keyword strategy, and competitive positioning.",
      },
      {
        title: "Awards & Events",
        description:
          "Award submissions, speaker abstracts, event descriptions, and recap copy, Shadow handles the high-volume, time-consuming content that eats agency capacity.",
      },
      {
        title: "Executive Thought Leadership",
        description:
          "Op-eds, LinkedIn posts, keynote narratives, and interview briefs, written in the executive's voice, trained on their existing content and speaking patterns.",
      },
    ],
  },
];

export default function ContentPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            On-brand. On-brief. On time.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow produces messaging frameworks, press materials, website
            copy, and thought leadership, governed by client SOPs so every
            deliverable sounds like the brand, not like a language model.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.label} className="px-4 md:px-8 pb-12 md:pb-20">
          <div className="rounded-3xl bg-card overflow-hidden">
            <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                    {section.body}
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  {section.details.map((detail) => (
                    <div key={detail.title}>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {detail.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See what Shadow can do for your clients
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll show you a live content workflow, from
              brief to deliverable, for a client in your space.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/pipeline"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore Pipeline
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
