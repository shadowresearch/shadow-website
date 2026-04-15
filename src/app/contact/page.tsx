import type { Metadata } from "next";
import { GlassSection } from "../_components/GlassSection";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shadow",
  description:
    "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
  alternates: {
    canonical: "/contact",
  },
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
          <ContactForm />
        </div>
      </section>
      </GlassSection>
    </div>
  );
}
