import Link from "next/link";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold text-xl text-primary">Capitiro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/calculators/compound-interest"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Compound Interest
            </Link>
            <Link
              href="/calculators/loan-amortization"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Loan Amortization
            </Link>
            <Link
              href="/calculators/sip-return"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              SIP Return
            </Link>
          </nav>
        </div>
        <div className="flex md:hidden">
          <Button variant="outline" size="sm">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
