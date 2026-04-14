import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/media", label: "Media" },
  { href: "/content", label: "Content" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/customers", label: "Customers" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="Shadow" width={20} height={34} />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://cal.com/shadow-inc/demo"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
        >
          Book a demo
        </a>
      </div>
    </nav>
  );
}
