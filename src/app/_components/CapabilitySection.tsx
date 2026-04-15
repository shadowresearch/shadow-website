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

  const textContent = (
    <div className="flex flex-col gap-4 px-6 md:px-16 py-16">
      {label && (
        <span className={`text-xs font-sans tracking-widest ${accentColors[accent]}`}>
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
  );

  const detailContent = details && details.length > 0 ? (
    <div className="flex flex-col pt-16 px-6 md:px-16">
      {details.map((item, i) => (
        <div
          key={item.title}
          className="pb-8"
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
  ) : null;

  return (
    <section className="border-b border-border last:border-0">
      <div className="grid md:grid-cols-2 items-start">
        {/* Left column always gets border-r */}
        <div>
          {reversed ? detailContent : textContent}
        </div>
        <div>
          {reversed ? textContent : detailContent}
        </div>
      </div>
    </section>
  );
}
