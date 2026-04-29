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

type Size = "sm" | "lg";

const itemClass = (name: string, size: Size) => {
  if (size === "lg") {
    return `shrink-0 w-auto object-contain opacity-50 ${
      name === "Roblox" ? "h-9" : "h-7"
    }`;
  }
  return `shrink-0 w-auto object-contain opacity-40 ${
    name === "Roblox" ? "h-5" : "h-3.5"
  }`;
};

function LogoSet({
  ariaHidden = false,
  size,
}: {
  ariaHidden?: boolean;
  size: Size;
}) {
  const gap = size === "lg" ? "gap-x-20 pr-20" : "gap-x-12 pr-12";
  const dim = size === "lg" ? { width: 160, height: 40 } : { width: 80, height: 20 };
  return (
    <div
      className={`flex shrink-0 items-center ${gap}`}
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {LOGOS.map((logo) => (
        <Image
          key={logo.name}
          src={`/logos/${logo.file}`}
          alt={ariaHidden ? "" : logo.name}
          width={dim.width}
          height={dim.height}
          loading="lazy"
          className={itemClass(logo.name, size)}
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
export function LogoMarquee({ size = "sm" }: { size?: Size } = {}) {
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
      <div
        className={`flex w-max ${
          size === "lg" ? "animate-logo-marquee-lg" : "animate-logo-marquee"
        }`}
      >
        <LogoSet size={size} />
        <LogoSet ariaHidden size={size} />
      </div>
    </div>
  );
}
