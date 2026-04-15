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
  primaryHref = "/contact",
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
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background  transition-all"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-1.5 text-xs font-medium text-foreground hover:bg-muted/20 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
