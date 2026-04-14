export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="px-8 py-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <span className="text-lg font-heading font-semibold tracking-tight text-foreground">
          Shadow
        </span>
        <a
          href="https://app.shadow.inc"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Sign in
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-6xl tracking-tight text-foreground max-w-3xl leading-tight">
          AI infrastructure for PR
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
          Shadow is the operating system that powers modern PR agencies — automating research, content creation, media tracking, and communications workflows with AI agents.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="https://app.shadow.inc"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get started
          </a>
          <a
            href="#learn-more"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Learn more
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Shadow Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
