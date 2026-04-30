import { propagationEvents } from "./data";

// Four propagation events. Each shows origin layer → destination layer with lag.
// Lighter, text-forward layout — deliberately distinct from the heavier glass
// cards used elsewhere on the page.

export function PropagationFlow() {
  return (
    <figure className="w-full not-prose">
      <figcaption className="mb-6 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Cross-layer narrative propagation · last 18 months
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          How narratives travel up the stack: four traceable examples.
        </h3>
      </figcaption>

      <ol className="border-t border-border">
        {propagationEvents.map((event) => (
          <li
            key={event.title}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_140px] gap-x-8 gap-y-3 border-b border-border py-6"
          >
            {/* Body */}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                {event.origin.name}
                <span aria-hidden="true" className="mx-2 text-foreground">→</span>
                {event.destination.name}
              </p>
              <h4 className="mt-1.5 font-serif text-[clamp(1rem,1.4vw,1.15rem)] text-foreground leading-snug tracking-tight">
                {event.title}
              </h4>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed max-w-[68ch]">
                {event.body}
              </p>
            </div>

            {/* Right rail: path + lag */}
            <div className="flex flex-col gap-2 md:items-end md:text-right">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-foreground md:justify-end">
                <span>L{event.origin.layer}</span>
                <span aria-hidden="true" className="text-muted-foreground">→</span>
                <span>L{event.destination.layer}</span>
                {event.inTransit && (
                  <span className="ml-1 inline-flex items-center gap-1.5 text-foreground">
                    <span
                      aria-hidden="true"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-foreground animate-pulse"
                    />
                    In transit
                  </span>
                )}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground leading-snug">
                {(() => {
                  const idx = event.lagLabel.indexOf(":");
                  if (idx === -1) return event.lagLabel;
                  const label = event.lagLabel.slice(0, idx);
                  const value = event.lagLabel.slice(idx + 1).trim();
                  return (
                    <>
                      <span className="block">{label}</span>
                      <span className="block text-foreground">{value}</span>
                    </>
                  );
                })()}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Shadow propagation analysis · Media data: Perigon News Intelligence · Timeline: Q3 2024 to April 2026.
      </p>
    </figure>
  );
}
