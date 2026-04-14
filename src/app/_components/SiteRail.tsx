/**
 * SiteRail wraps page content with subtle vertical border rails
 * that push content toward the center, creating a structured grid feel.
 */
export function SiteRail({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1120px] mx-auto border-x border-border">
      {children}
    </div>
  );
}
