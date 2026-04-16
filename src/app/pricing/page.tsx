import type { Metadata } from "next";
import { CTASection } from "../_components/CTASection";
import { GlassSection } from "../_components/GlassSection";
import { PricingTiers } from "./_components/PricingTiers";

export const metadata: Metadata = {
  title: "Pricing | Shadow",
  description:
    "Simple, per-client pricing. $500/client/month. Volume discounts for agencies managing multiple clients.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Shadow",
    description:
      "Simple, per-client pricing. $500/client/month. Volume discounts for agencies managing multiple clients.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Shadow",
    description:
      "Simple, per-client pricing. $500/client/month. Volume discounts for agencies managing multiple clients.",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <GlassSection>
        <section className="py-28 md:py-36 px-6 md:px-16 border-b border-border">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-xs font-sans text-primary tracking-widest">
              Pricing
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl mx-auto">
              Flexible plans for every team
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From internal teams to agencies serving hundreds of clients.
              Shadow provides adaptive pricing that scales with you.
            </p>
          </div>
        </section>
      </GlassSection>

      <PricingTiers />


      <CTASection
        heading="See Shadow in action"
        body="Book a demo and we'll show you exactly what Shadow does for your clients and workflows."
        primaryLabel="Book a demo"
        secondaryLabel="Learn more"
        secondaryHref="/about"
      />
    </div>
  );
}
