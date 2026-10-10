"use client";

import { useCurrency } from "@/components/providers/currency";
import { currencies, currencyCodes, isCurrencyCode } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Display-currency picker. Only changes symbols/formatting — no exchange-rate conversion. */
export function CurrencySelect({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">Currency</span>
      <select
        value={currency}
        onChange={(e) => isCurrencyCode(e.target.value) && setCurrency(e.target.value)}
        className="h-9 cursor-pointer appearance-none rounded-lg border bg-background py-1 pr-8 pl-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {currencyCodes.map((code) => (
          <option key={code} value={code}>
            {currencies[code].symbol} {code}
          </option>
        ))}
      </select>
      <svg aria-hidden viewBox="0 0 20 20" className="pointer-events-none absolute right-2.5 size-4 text-muted-foreground" fill="currentColor">
        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" />
      </svg>
    </label>
  );
}
