import Link from "next/link";
import { calculatorPath, calculators } from "@/lib/calculators";
import { Logo } from "./Logo";
import { CurrencySelect } from "./CurrencySelect";
import { MobileNav } from "./MobileNav";

const PRIMARY_NAV = ["mortgage", "loan-amortization", "compound-interest", "retirement"];

export function Navbar() {
  const primary = calculators.filter((c) => PRIMARY_NAV.includes(c.slug));
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50" aria-label="Capitiro home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {primary.map((c) => (
            <Link
              key={c.slug}
              href={calculatorPath(c.slug)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {c.shortTitle}
            </Link>
          ))}
          <Link href="/calculators" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            All calculators
          </Link>
          <Link href="/guides" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            Guides
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <CurrencySelect className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
