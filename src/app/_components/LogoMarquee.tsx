import Image from "next/image";

const LOGOS: Array<{ name: string; file: string }> = [
  { name: "HubSpot", file: "hubspot-1.svg" },
  { name: "Amazon", file: "amazon-1.svg" },
  { name: "Lovable", file: "lovable-1.svg" },
  { name: "OpenAI", file: "openai-1.svg" },
  { name: "Netflix", file: "netflix-1.svg" },
  { name: "Airbnb", file: "airbnb-1.svg" },
  { name: "Roblox", file: "roblox-1.svg" },
  { name: "Etsy", file: "etsy-1.svg" },
  { name: "SoftBank", file: "softbank-1.svg" },
  { name: "Inworld", file: "inworld.svg" },
  { name: "Harness", file: "harness-1.svg" },
];

const itemClass = (name: string) =>
  `shrink-0 w-auto h-auto object-contain opacity-40 ${
    name === "Roblox" ? "max-h-5 max-w-16" : "max-h-3.5 max-w-14"
  }`;

function LogoSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-12 pr-12"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {LOGOS.map((logo) => (
        <Image
          key={logo.name}
          src={`/logos/${logo.file}`}
          alt={ariaHidden ? "" : logo.name}
          width={80}
          height={20}
          loading="lazy"
          className={itemClass(logo.name)}
        />
      ))}
    </div>
  );
}

/**
 * LogoMarquee
 *
 * Continuous left-scrolling logo bar. Renders two identical logo sets in a
 * track and animates the track from translateX(0) to translateX(-50%), so the
 * second set lands exactly where the first started — a seamless loop.
 * Edges fade via a CSS mask so logos slide in/out cleanly.
 */
export function LogoMarquee() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-logo-marquee">
        <LogoSet />
        <LogoSet ariaHidden />
      </div>
    </div>
  );
}
