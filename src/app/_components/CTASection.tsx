interface CTASectionProps {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  heading = "Ready to run on Shadow?",
  body = "Join the communications teams already using Shadow to do more with less.",
  primaryLabel = "Book a demo",
  primaryHref = "https://cal.com/shadow-inc/demo",
  secondaryLabel = "Learn more",
  secondaryHref = "/about",
}: CTASectionProps) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl text-foreground leading-tight max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {body}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryHref}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
