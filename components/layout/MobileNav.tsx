"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { calculatorCategories, calculatorPath, calculators } from "@/lib/calculators";
import { cn } from "@/lib/utils";
import { CurrencySelect } from "./CurrencySelect";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu after navigation (adjusting state during render, per React docs).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-10 items-center justify-center rounded-lg border outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t bg-background"
      >
        <nav aria-label="Mobile" className="container space-y-6 py-6">
          {calculatorCategories.map((category) => (
            <div key={category}>
              <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{category}</p>
              <ul className="grid gap-1">
                {calculators
                  .filter((c) => c.category === category)
                  .map((c) => {
                    const Icon = c.icon;
                    const href = calculatorPath(c.slug);
                    return (
                      <li key={c.slug}>
                        <Link
                          href={href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium hover:bg-muted",
                            pathname === href && "bg-primary/10 text-primary"
                          )}
                        >
                          <Icon className="size-5 text-primary" aria-hidden />
                          {c.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-6">
            <Link href="/guides" className="text-base font-medium hover:text-primary">
              Guides
            </Link>
            <CurrencySelect />
          </div>
        </nav>
      </div>
    </div>
  );
}
