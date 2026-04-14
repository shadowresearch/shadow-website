export function NewsIntelMockup() {
  const articles = [
    {
      headline: "Inworld AI's NPC technology is redefining character intelligence in games",
      source: "TechCrunch",
      date: "Apr 12, 2026",
      sentiment: "Positive",
      metric: "8.2M monthly visits",
    },
    {
      headline: "The companies racing to build AI companions for entertainment",
      source: "Wired",
      date: "Apr 11, 2026",
      sentiment: "Neutral",
      metric: "12.5M monthly visits",
    },
    {
      headline: "a16z leads $40M round into Inworld AI amid AI gaming boom",
      source: "The Information",
      date: "Apr 10, 2026",
      sentiment: "Positive",
      metric: "2.4M monthly visits",
    },
  ];

  const sentimentColors: Record<string, string> = {
    Positive: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Neutral: "bg-muted text-muted-foreground",
    Negative: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-xl overflow-hidden"
      style={{ transform: "perspective(1200px) rotateY(-2deg)" }}
    >
      {/* Toolbar */}
      <div className="px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-xs font-semibold text-foreground ml-2">
          News Intelligence
        </span>
      </div>

      {/* Search bar */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
          <svg
            className="w-3.5 h-3.5 text-muted-foreground shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="text-xs text-muted-foreground">
            Inworld AI · last 7 days
          </span>
          <span className="ml-auto text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded">
            3 results
          </span>
        </div>
      </div>

      {/* Articles */}
      <div className="flex flex-col divide-y divide-border">
        {articles.map((article) => (
          <div key={article.headline} className="px-4 py-3 hover:bg-muted/20 transition-colors">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground leading-snug mb-1.5 line-clamp-2">
                  {article.headline}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-semibold text-muted-foreground">
                    {article.source}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {article.date}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {article.metric}
                  </span>
                </div>
              </div>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${sentimentColors[article.sentiment]}`}
              >
                {article.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
