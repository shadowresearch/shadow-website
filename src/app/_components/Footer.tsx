import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Shadow" width={18} height={30} />
              <span className="font-heading font-semibold text-sm tracking-wide text-foreground">
                Shadow
              </span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              The AI operating system for communications. Built for agencies and the brands they serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Product</span>
              <Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">Research</Link>
              <Link href="/media" className="text-muted-foreground hover:text-foreground transition-colors">Media</Link>
              <Link href="/content" className="text-muted-foreground hover:text-foreground transition-colors">Content</Link>
              <Link href="/pipeline" className="text-muted-foreground hover:text-foreground transition-colors">Pipeline</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Company</span>
              <Link href="/customers" className="text-muted-foreground hover:text-foreground transition-colors">Customers</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Contact</span>
              <a href="https://cal.com/shadow-inc/demo" className="text-muted-foreground hover:text-foreground transition-colors">Book a demo</a>
              <a href="mailto:hello@shadow.inc" className="text-muted-foreground hover:text-foreground transition-colors">hello@shadow.inc</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shadow Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for communications teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
