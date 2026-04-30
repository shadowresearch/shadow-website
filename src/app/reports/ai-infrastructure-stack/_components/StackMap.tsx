import { layers, statusColor } from "./data";

// Vertical map of the 7-layer stack. Highest layer (7) on top, foundation (1) on bottom.
// Each row visualizes status, velocity, and the "receives from below" relationship.

export function StackMap() {
  const ordered = [...layers].sort((a, b) => b.layer - a.layer);

  return (
    <figure className="w-full max-w-[760px] mx-auto">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          The AI Infrastructure Stack · Narrative Map
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Seven layers. Seven narrative environments.
          <br />
          Each receives from the one below it.
        </h3>
      </figcaption>

      <div className="relative rounded-2xl overflow-hidden">
        {/* Sandscape backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
          style={{ backgroundImage: "url('/sandscape.png')" }}
        />
        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
            backgroundSize: "5px 5px",
          }}
        />
        {/* Inner card frame holding the layer rows */}
        <div className="relative p-3 lg:p-5">
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            {ordered.map((layer, idx) => {
          const color = statusColor(layer.status);
          const velocityWidth = `${layer.velocity}%`;
          const isLast = idx === ordered.length - 1;
          return (
            <div
              key={layer.layer}
              className={`relative bg-card ${
                isLast ? "" : "border-b border-border"
              }`}
            >
              {/* Velocity bar background */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 pointer-events-none"
                style={{
                  width: velocityWidth,
                  background: `linear-gradient(90deg, ${color}1A 0%, transparent 100%)`,
                }}
              />

              <div className="relative grid grid-cols-[60px_minmax(0,1fr)_auto] gap-x-4 md:gap-x-6 px-5 md:px-7 py-5 md:py-6 items-start">
                {/* Layer number */}
                <div className="flex flex-col items-start">
                  <span className="font-serif text-3xl md:text-4xl text-foreground tabular-nums leading-none">
                    {layer.layer}
                  </span>
                  <span className="mt-1 text-[9px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                    {layer.bracket}
                  </span>
                </div>

                {/* Name + headline */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-serif text-base md:text-lg text-foreground leading-tight tracking-tight">
                      {layer.name}
                    </h4>
                    <span
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-[0.14em]"
                      style={{
                        color,
                        background: `${color}1F`,
                      }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: color }}
                      />
                      {layer.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] md:text-[13.5px] text-muted-foreground leading-snug max-w-[60ch]">
                    {layer.headline}
                  </p>
                  {!isLast && (
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground/70">
                      receives from below ↓
                    </p>
                  )}
                </div>

                {/* Velocity score */}
                <div className="flex flex-col items-end pl-2">
                  <span
                    className="font-serif text-2xl md:text-3xl tabular-nums leading-none"
                    style={{ color }}
                  >
                    {layer.velocity}
                  </span>
                  <span className="mt-1 text-[9px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                    Velocity
                  </span>
                </div>
              </div>
            </div>
          );
        })}
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Layers ordered top to bottom (highest to lowest in the stack) · Status as of April 2026 · Velocity scores relative to 90-day baseline.
      </p>
    </figure>
  );
}
