import Image from "next/image";
import Link from "next/link";

interface CardDetails {
  runs: string[];
  summary: string;
}

interface CardData {
  slug: string;
  eyebrow: string;
  logo: string;
  accent: string;
  hero: { value: number; suffix: string; label: string };
  secondary: { value: number; suffix: string; label: string }[];
  headline: string;
  body: string;
  details?: CardDetails;
}

const BACKDROP = "/sandscape.png";

export function ProductionLineCarousel({ cards }: { cards: CardData[] }) {
  return (
    <div className="mt-12 md:mt-16 flex flex-col gap-8 md:gap-12">
      {cards.map((card) => {
        const metrics = [card.hero, ...card.secondary].slice(0, 3);
        return (
          <div key={card.slug}>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-5">
                {/* Left column: logo + headline on a branded accent card.
                    "Read case study" link sits at the bottom-left so the
                    card has a clear hierarchy: brand → headline → CTA. */}
                <div
                  className="rounded-2xl p-6 lg:p-8 flex flex-col items-start lg:flex-1 lg:min-w-0"
                  style={{ backgroundColor: card.accent }}
                >
                  <Image
                    src={card.logo}
                    alt={card.eyebrow.split(" — ")[0]}
                    width={200}
                    height={48}
                    className="block h-8 w-auto brightness-0 invert opacity-90"
                  />
                  <h3 className="mt-6 font-serif font-normal text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] tracking-tight text-background max-w-xl">
                    {card.headline}
                  </h3>
                  <Link
                    href={`/case-studies/${card.slug}`}
                    className="mt-auto pt-8 inline-flex items-center gap-2 text-sm text-background hover:text-background/80 transition-colors border-b border-background/30 hover:border-background/60 pb-1 w-fit"
                  >
                    Read case study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                {/* Right column: image + dot grid outer card containing
                    only the metrics glass card */}
                <div className="relative rounded-2xl overflow-hidden self-start lg:w-[clamp(420px,48%,580px)] lg:shrink-0">
                  {/* Image backdrop */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
                    style={{
                      backgroundImage: `url('${BACKDROP}')`,
                    }}
                  />
                  {/* Dot grid — sits over the image, behind the inner card */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                      backgroundSize: "5px 5px",
                    }}
                  />
                  {/* Outer card padding — glass card fills the rest */}
                  <div className="relative p-3 lg:p-5">
                    {/* Hyper-realistic glass card with metrics +
                        description + link */}
                    <div
                      className="relative rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-white/[0.14] isolate"
                      style={{
                        boxShadow: [
                          "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                          "inset 0 0 0 1px rgba(255,255,255,0.18)",
                          "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                          "0 1px 2px 0 rgba(43,32,22,0.04)",
                          "0 8px 24px -8px rgba(43,32,22,0.18)",
                          "0 24px 48px -16px rgba(43,32,22,0.22)",
                        ].join(", "),
                      }}
                    >
                      {/* Top-down inner sheen */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                        }}
                      />
                      {/* Specular highlight on the top edge */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                        }}
                      />
                      {/* Faint bottom rim */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                        }}
                      />
                      {/* Content */}
                      <div className="relative p-6 lg:p-8">
                        <div className="grid grid-cols-3 gap-6 lg:gap-8">
                          {metrics.map((m, j) => (
                            <div key={j} className="flex flex-col gap-2">
                              <div className="font-serif font-normal text-[3rem] text-background leading-none tracking-tight">
                                {m.value}
                                {m.suffix}
                              </div>
                              <div className="text-xs text-background/70 leading-snug">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="mt-8 text-[15px] text-background/85 leading-relaxed">
                          {card.details?.summary ?? card.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
}
