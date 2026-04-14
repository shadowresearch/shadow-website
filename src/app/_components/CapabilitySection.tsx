interface DetailItem {
  title: string;
  description: string;
}

interface CapabilitySectionProps {
  label?: string;
  heading: string;
  body: string;
  details?: DetailItem[];
  reversed?: boolean;
  accent?: "uv" | "lamplight" | "dusk";
}

export function CapabilitySection({
  label,
  heading,
  body,
  details,
  reversed = false,
  accent = "uv",
}: CapabilitySectionProps) {
  const accentColors = {
    uv: "text-primary",
    lamplight: "text-[oklch(0.623_0.093_54)]",
    dusk: "text-[oklch(0.55_0.07_300)]",
  };

  return (
    <section className="border-b border-border last:border-0">
      <div className={`grid md:grid-cols-2 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className={`flex flex-col gap-4 p-8 ${!reversed ? "md:border-r border-border" : ""} ${reversed ? "md:border-l border-border" : ""}`}>
          {label && (
            <span className={`text-xs font-mono uppercase tracking-widest ${accentColors[accent]}`}>
              {label}
            </span>
          )}
          <h2 className="font-heading text-3xl font-semibold text-foreground leading-tight">
            {heading}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {body}
          </p>
        </div>

        {details && details.length > 0 && (
          <div className="flex flex-col">
            {details.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 ${i < details.length - 1 ? "border-b border-border" : ""}`}
              >
                <h3 className="font-heading font-semibold text-sm text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
