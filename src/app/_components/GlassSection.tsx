/**
 * GlassSection wraps content with the hero background image and a frosted glass blur overlay.
 */
export function GlassSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="backdrop-blur-3xl bg-background/50">
        {children}
      </div>
    </div>
  );
}
