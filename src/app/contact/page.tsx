import type { Metadata } from "next";
import { GlassSection } from "../_components/GlassSection";

export const metadata: Metadata = {
  title: "Contact | Shadow",
  description:
    "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
  openGraph: {
    title: "Contact | Shadow",
    description:
      "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Shadow",
    description:
      "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <GlassSection>
      <section className="py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight tracking-tight">
              Book a demo
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              See how Shadow runs the full communications workflow — research,
              strategy, content, media, and pipeline — in one platform.
            </p>
            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Email</span>
                <br />
                hello@shadow.inc
              </p>
              <p>
                <span className="text-foreground font-medium">Based in</span>
                <br />
                Montreal, Canada
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                placeholder="Tell us about your team and what you're looking for"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
            >
              Book a demo
            </button>
          </form>
        </div>
      </section>
      </GlassSection>
    </div>
  );
}
