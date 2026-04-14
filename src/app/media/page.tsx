import type { Metadata } from "next";
import { CapabilitySection } from "../_components/CapabilitySection";
import { CTASection } from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Media & Outreach: Shadow",
  description:
    "Media list curation, journalist intelligence, coverage tracking — Shadow's database of 230K+ journalist profiles makes every pitch smarter.",
};

export default function MediaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Media &amp; Outreach
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            The right journalist. The right moment. Every time.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Shadow&apos;s database of 230K+ journalist profiles — with live beat
            tracking, outlet intelligence, and recent coverage — means your
            team pitches with context, not guesswork.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://cal.com/shadow-inc/demo"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* Media List Curation */}
      <CapabilitySection
        label="Media List Curation"
        heading="Media lists built by the AI that reads the news"
        body="Shadow doesn't just search a static database — it reads recent articles, maps journalist beats dynamically, and builds targeted media lists based on who's actually covering your client's category right now."
        details={[
          {
            title: "Beat Matching",
            description:
              "Describe your story angle and Shadow surfaces the journalists whose recent work aligns with it — not just their listed beat, but what they've actually been writing about in the last 30 days.",
          },
          {
            title: "Outlet Intelligence",
            description:
              "Shadow evaluates outlets by reach, domain authority, editorial focus, and audience fit — helping your team decide where to invest pitch energy and what placements will move the needle.",
          },
        ]}
        accent="uv"
      />

      {/* Coverage Tracking */}
      <CapabilitySection
        label="Coverage Tracking"
        heading="Every mention. Every outlet. Every context."
        body="Shadow monitors coverage across 200K+ sources and organizes it into story clusters — so you can see not just that your client was mentioned, but how the narrative around them is evolving."
        details={[
          {
            title: "Story Clusters",
            description:
              "Shadow groups individual articles by narrative thread, showing you which stories are gaining momentum, which are fading, and where your client sits in the broader media conversation.",
          },
          {
            title: "Coverage Reports",
            description:
              "Weekly coverage summaries are generated automatically — formatted, contextualized, and ready to send to clients. No manual clipping required.",
          },
        ]}
        reversed
        accent="uv"
      />

      {/* Journalist Intelligence */}
      <CapabilitySection
        label="Journalist Intelligence"
        heading="Know the person behind the byline"
        body="Great media relations is about understanding people — their interests, their rhythms, their preferences. Shadow builds profiles that go beyond contact info to give you real intelligence on every journalist you pitch."
        details={[
          {
            title: "Recent Coverage Analysis",
            description:
              "Shadow reads and summarizes a journalist's recent articles, identifying their current focus areas, preferred story angles, and the types of sources they tend to cite.",
          },
          {
            title: "Pitch Timing Signals",
            description:
              "Shadow surfaces signals about when journalists are most active, what story formats they respond to, and which topics they've been avoiding — so your pitch lands at the right moment.",
          },
          {
            title: "Relationship Tracking",
            description:
              "Log your team's interactions with journalists, track open relationships, and get reminded when it's been too long since you've been in touch with a key contact.",
          },
        ]}
        accent="uv"
      />

      <CTASection
        heading="Ready to pitch smarter?"
        body="See Shadow's journalist database in action — live intelligence on the reporters covering your clients' space."
        primaryLabel="Book a demo"
        secondaryLabel="Explore Content"
        secondaryHref="/content"
      />
    </div>
  );
}
