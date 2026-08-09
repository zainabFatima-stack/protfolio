import Link from "next/link";
import { Container } from "@/components/shared/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navLinks } from "@/data/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <ThemeToggle />
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight"
          >
            Zainab<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Resume */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-[var(--color-chart-2)] px-4 text-sm font-medium text-primary-foreground shadow-sm shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />

        </nav>
      </Container>
    </header>
  );
}