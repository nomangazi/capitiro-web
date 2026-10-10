import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { calculatorPath, type CalculatorMeta } from "@/lib/calculators";

export function CalculatorCard({ calculator, compact = false }: { calculator: CalculatorMeta; compact?: boolean }) {
  const Icon = calculator.icon;
  return (
    <Link
      href={calculatorPath(calculator.slug)}
      className="group flex h-full flex-col rounded-xl border bg-card p-5 shadow-sm transition-all outline-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="font-semibold text-foreground">{calculator.title}</span>
      {!compact && <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{calculator.summary}</span>}
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Open calculator
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
