import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Standard two-column calculator layout: inputs on the left (sticky on desktop),
 * results on the right. Stacks on mobile with inputs first.
 */
export function CalculatorShell({ inputs, children }: { inputs: ReactNode; children: ReactNode }) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <section
        aria-label="Calculator inputs"
        className="rounded-xl border bg-card p-5 shadow-sm lg:sticky lg:top-20 sm:p-6"
      >
        <h2 className="mb-5 text-base font-semibold">Your details</h2>
        <div className="space-y-6">{inputs}</div>
      </section>
      <div className="min-w-0 space-y-6" aria-live="polite">
        {children}
      </div>
    </div>
  );
}

export function Panel({
  title,
  description,
  action,
  children,
  className,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-xl border bg-card p-5 shadow-sm sm:p-6", className)}>
      {(title || action) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && <h2 className="text-base font-semibold">{title}</h2>}
            {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

type Tone = "default" | "primary" | "positive" | "negative" | "muted";

const toneClass: Record<Tone, string> = {
  default: "text-foreground",
  primary: "text-primary",
  positive: "text-accent",
  negative: "text-destructive",
  muted: "text-muted-foreground",
};

export interface Stat {
  label: string;
  value: string;
  tone?: Tone;
  hint?: string;
}

/**
 * Headline result block. The first stat is the "hero" number (largest, on a tinted
 * background); the rest are secondary figures.
 */
export function ResultSummary({ stats }: { stats: Stat[] }) {
  const [hero, ...rest] = stats;
  return (
    <section aria-label="Results" className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="bg-primary/[0.06] px-5 py-5 sm:px-6">
        <p className="text-sm font-medium text-muted-foreground">{hero.label}</p>
        <p className={cn("mt-1 text-4xl font-bold tracking-tight tabular-nums sm:text-5xl", toneClass[hero.tone ?? "primary"])}>
          {hero.value}
        </p>
        {hero.hint && <p className="mt-1.5 text-sm text-muted-foreground">{hero.hint}</p>}
      </div>
      {rest.length > 0 && (
        <dl className="grid grid-cols-2 divide-border border-t sm:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] sm:divide-x">
          {rest.map((stat) => (
            <div key={stat.label} className="px-5 py-4 sm:px-6">
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{stat.label}</dt>
              <dd className={cn("mt-1 text-xl font-semibold tabular-nums", toneClass[stat.tone ?? "default"])}>
                {stat.value}
              </dd>
              {stat.hint && <dd className="mt-0.5 text-xs text-muted-foreground">{stat.hint}</dd>}
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

export function Notice({ tone = "warning", children }: { tone?: "warning" | "info" | "success"; children: ReactNode }) {
  return (
    <div
      role={tone === "warning" ? "alert" : "status"}
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        tone === "warning" && "border-warning/30 bg-warning/10 text-foreground",
        tone === "info" && "border-primary/20 bg-primary/5 text-foreground",
        tone === "success" && "border-accent/30 bg-accent/10 text-foreground"
      )}
    >
      {children}
    </div>
  );
}
