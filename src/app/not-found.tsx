import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <span className="text-xs font-sans text-muted-foreground tracking-widest mb-4">
        404
      </span>
      <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
        Page not found
      </h1>
      <p className="mt-4 text-base text-muted-foreground max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-all"
      >
        Back to home
      </Link>
    </div>
  );
}
