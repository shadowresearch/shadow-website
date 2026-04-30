import { palette, aiCrisisHeadlines, aiAdvantageHeadlines } from "./data";

// Side-by-side headline lists showing the two AI frames running through the
// sector at the same time: AI as crisis vs. AI as advantage.

export function AIFrameSplit() {
  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          AI coverage frames · same window · same sector
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Two AI stories run side by side. Sequence — not strategy — decides which one each holdco lives in.
        </h3>
      </figcaption>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Crisis frame */}
        <div
          className="rounded-xl p-5 md:p-6"
          style={{ backgroundColor: `${palette.lamplight}10` }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-[0.18em]"
            style={{ color: palette.lamplight }}
          >
            The crisis frame
          </p>
          <h4 className="mt-2 font-serif text-lg leading-snug text-foreground">
            AI as disruption — what it&rsquo;s doing to the sector.
          </h4>
          <ul className="mt-5 space-y-3">
            {aiCrisisHeadlines.map((h) => (
              <li key={h.title} className="flex gap-3 items-start">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: palette.lamplight }}
                />
                <div className="min-w-0">
                  <p className="text-[14px] font-serif text-foreground leading-snug">
                    &ldquo;{h.title}&rdquo;
                  </p>
                  <p className="mt-0.5 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    {h.source}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Advantage frame */}
        <div
          className="rounded-xl p-5 md:p-6"
          style={{ backgroundColor: `${palette.uv}10` }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-[0.18em]"
            style={{ color: palette.uv }}
          >
            The advantage frame
          </p>
          <h4 className="mt-2 font-serif text-lg leading-snug text-foreground">
            AI as strategy — what it&rsquo;s enabling for the winners.
          </h4>
          <ul className="mt-5 space-y-3">
            {aiAdvantageHeadlines.map((h) => (
              <li key={h.title} className="flex gap-3 items-start">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: palette.uv }}
                />
                <div className="min-w-0">
                  <p className="text-[14px] font-serif text-foreground leading-snug">
                    &ldquo;{h.title}&rdquo;
                  </p>
                  <p className="mt-0.5 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    {h.source}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
