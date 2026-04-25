import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & Outreach | Shadow",
  description:
    "Media list curation, journalist intelligence, coverage tracking. 230,000+ journalist profiles. Source evaluation and beat analysis.",
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media & Outreach | Shadow",
    description:
      "Media list curation, journalist intelligence, coverage tracking. 230,000+ journalist profiles. Source evaluation and beat analysis.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Outreach | Shadow",
    description:
      "Media list curation, journalist intelligence, coverage tracking. 230,000+ journalist profiles. Source evaluation and beat analysis.",
  },
};

const sections = [
  {
    label: "Media List Curation",
    heading: "Media lists built by the AI that reads the news",
    body: "Shadow doesn't just search a static database, it reads recent articles, maps journalist beats dynamically, and builds targeted media lists based on who's actually covering your client's category right now.",
    details: [
      {
        title: "Beat Matching",
        description:
          "Describe your story angle and Shadow surfaces the journalists whose recent work aligns with it, not just their listed beat, but what they've actually been writing about in the last 30 days.",
      },
      {
        title: "Outlet Intelligence",
        description:
          "Shadow evaluates outlets by reach, domain authority, editorial focus, and audience fit, helping your team decide where to invest pitch energy and what placements will move the needle.",
      },
    ],
  },
  {
    label: "Coverage Tracking",
    heading: "Every mention. Every outlet. Every context.",
    body: "Shadow monitors coverage across 200K+ sources and organizes it into story clusters, so you can see not just that your client was mentioned, but how the narrative around them is evolving.",
    details: [
      {
        title: "Story Clusters",
        description:
          "Shadow groups individual articles by narrative thread, showing you which stories are gaining momentum, which are fading, and where your client sits in the broader media conversation.",
      },
      {
        title: "Coverage Reports",
        description:
          "Weekly coverage summaries are generated automatically, formatted, contextualized, and ready to send to clients. No manual clipping required.",
      },
    ],
  },
  {
    label: "Journalist Intelligence",
    heading: "Know the person behind the byline",
    body: "Great media relations is about understanding people, their interests, their rhythms, their preferences. Shadow builds profiles that go beyond contact info to give you real intelligence on every journalist you pitch.",
    details: [
      {
        title: "Recent Coverage Analysis",
        description:
          "Shadow reads and summarizes a journalist's recent articles, identifying their current focus areas, preferred story angles, and the types of sources they tend to cite.",
      },
      {
        title: "Pitch Timing Signals",
        description:
          "Shadow surfaces signals about when journalists are most active, what story formats they respond to, and which topics they've been avoiding, so your pitch lands at the right moment.",
      },
      {
        title: "Relationship Tracking",
        description:
          "Log your team's interactions with journalists, track open relationships, and get reminded when it's been too long since you've been in touch with a key contact.",
      },
    ],
  },
];

export default function MediaPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            The right journalist. The right moment. Every time.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow&apos;s database of 230K+ journalist profiles, with live beat
            tracking, outlet intelligence, and recent coverage, means your team
            pitches with context, not guesswork.
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
            <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
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
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Ready to pitch smarter?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              See Shadow&apos;s journalist database in action, live
              intelligence on the reporters covering your clients&apos; space.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Explore Content
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
