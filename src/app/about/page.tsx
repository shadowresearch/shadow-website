import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us | Shadow",
  description:
    "Shadow is building the AI operating system for PR and communications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About us | Shadow",
    description:
      "Shadow is building the AI operating system for PR and communications.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "About us | Shadow",
    description:
      "Shadow is building the AI operating system for PR and communications.",
  },
};

const aboutPageLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://shadow.inc/about",
  name: "About Shadow",
  mainEntity: { "@id": "https://shadow.inc/#organization" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            We built the tool we wish had existed
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow is the AI operating system for communications, built by
            people who believe that the best PR teams in the world
            shouldn&apos;t be spending half their time on research, formatting,
            and admin.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Communications deserves better infrastructure
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed max-w-md">
                <p>
                  PR agencies run some of the most sophisticated strategic
                  work in business. They shape narratives for the world&apos;s
                  most important companies, build relationships with the
                  journalists who define industries, and help leaders
                  communicate through moments that matter.
                </p>
                <p>
                  But the tooling hasn&apos;t kept up. Teams are cobbling
                  together research platforms, media databases, content tools,
                  and operations spreadsheets, switching between eight systems
                  to produce work that deserves a single, coherent workflow.
                </p>
                <p>
                  Shadow is what happens when you build the infrastructure
                  from the ground up for this specific domain, not a generic
                  AI wrapper, but a system that understands how PR agencies
                  actually work, what clients actually need, and what good
                  communications actually looks like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Get in touch
                </h2>
              </div>
              <div className="flex flex-col gap-3">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Build with us
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              We&apos;re a small team doing ambitious work. If you&apos;re
              excited about vertical AI and the future of communications,
              we&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
