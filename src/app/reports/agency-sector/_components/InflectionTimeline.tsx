import { palette, inflectionHeadlines } from "./data";

// Visual timeline of the six headlines that defined February 2026.
// Not a chart — a structured list with the peak headline visually weighted.

export function InflectionTimeline() {
  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Six stories that defined the sector frame · February 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          A two-week window decided what kind of story the agency sector is.
        </h3>
      </figcaption>

      <ol className="border-t border-border">
        {inflectionHeadlines.map((h) => {
          const peak = h.isPeak;
          return (
            <li
              key={`${h.date}-${h.title}`}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-2 gap-x-8 py-6 border-b border-border"
            >
              <div className="flex flex-col gap-1.5">
                <p
                  className="text-[11px] font-mono uppercase tracking-[0.14em]"
                  style={{ color: peak ? palette.dusk : palette.shade }}
                >
                  {h.date}
                </p>
                <p className="text-[13px] font-mono text-foreground">
                  {h.source}
                </p>
                {peak && (
                  <span
                    className="inline-block w-fit text-[10px] font-mono uppercase tracking-[0.18em] px-2 py-0.5"
                    style={{
                      color: palette.dusk,
                      backgroundColor: `${palette.dusk}22`,
                    }}
                  >
                    Peak moment
                  </span>
                )}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-[0.14em] px-1.5 py-0.5 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className={`font-serif leading-snug tracking-tight ${
                    peak ? "text-[1.25rem] text-foreground" : "text-[1.1rem] text-foreground"
                  }`}
                >
                  &ldquo;{h.title}&rdquo;
                </p>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
                  {h.blurb}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: WSJ, Bloomberg, Reuters, The Guardian, Forbes, Axios. Shadow analysis.
      </p>
    </figure>
  );
}
