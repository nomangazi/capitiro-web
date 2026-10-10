import Link from "next/link";
import { ConsentSettingsLink } from "@/components/ads/ConsentSettingsLink";
import { calculatorCategories, calculatorPath, calculators } from "@/lib/calculators";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

const COMPANY_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-of-service", label: "Terms of service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Free, accurate financial calculators. Every calculation runs privately in your browser — we never see or store your
            numbers.
          </p>
        </div>
        {calculatorCategories.map((category) => (
          <div key={category}>
            <h2 className="mb-3 text-sm font-semibold">{category}</h2>
            <ul className="space-y-2">
              {calculators
                .filter((c) => c.category === category)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={calculatorPath(c.slug)} className={linkClass}>
                      {c.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-3 text-sm font-semibold">Company</h2>
          <ul className="space-y-2">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides" className={linkClass}>
                Guides ({guides.length})
              </Link>
            </li>
            <li>
              <ConsentSettingsLink className={`${linkClass} cursor-pointer text-left`} />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>For educational purposes only — not financial, tax or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
