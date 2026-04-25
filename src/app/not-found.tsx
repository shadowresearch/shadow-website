import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-card min-h-[70vh] items-center justify-center px-8 text-center">
      <h1 className="mt-4 font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Back home
      </Link>
    </div>
  );
}
