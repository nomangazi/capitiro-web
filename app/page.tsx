import Link from "next/link";
import { ArrowRight, BadgeCheck, Calculator, Lock, Zap } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { CalculatorCard } from "@/components/site/CalculatorCard";
import { calculatorCategories, calculatorPath, calculators } from "@/lib/calculators";
import { guidePath, guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} – Free Mortgage, Loan & Investment Calculators`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const CATEGORY_COPY: Record<string, string> = {
  Borrowing: "Understand the true cost of a mortgage, loan or credit card before you sign.",
  Investing: "See how regular saving and compound growth build wealth over time.",
  Planning: "Set targets for retirement and savings goals — in real, inflation-adjusted terms.",
};

const PILLARS = [
  { icon: BadgeCheck, title: "Accurate, tested math", body: "Every formula is unit-tested against standard financial equations, and explained on the page." },
  { icon: Lock, title: "Private by design", body: "Calculations run in your browser. We never ask for, see or store your financial details." },
  { icon: Zap, title: "Instant & free", body: "No sign-up, no paywall. Results update as you type, on any device." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background:radial-gradient(60rem_30rem_at_80%_-10%,var(--primary),transparent_60%)]"
        />
        <div className="relative container grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
              <Calculator className="size-4" aria-hidden /> {calculators.length} free financial calculators
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Free financial calculators for smarter money decisions</h1>
            <p className="max-w-xl text-lg text-white/75">
              Clear, accurate calculators for mortgages, loans, investing and retirement — so you can make money decisions with
              confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={calculatorPath("mortgage")}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Mortgage calculator <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/calculators"
                className="inline-flex h-11 items-center rounded-lg border border-white/20 px-5 font-medium transition-colors hover:bg-white/10"
              >
                Browse all calculators
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {calculators.slice(0, 4).map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.slug}>
                  <Link
                    href={calculatorPath(c.slug)}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/90">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="flex-1 font-medium">{c.title}</span>
                    <ArrowRight className="size-4 text-white/60" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container py-16 sm:py-20" aria-labelledby="calculators-heading">
        <div className="mb-10 max-w-2xl space-y-3">
          <h2 id="calculators-heading" className="text-3xl font-bold">
            Financial calculators
          </h2>
          <p className="text-lg text-muted-foreground">Pick a tool to get an instant, detailed answer — with charts and schedules.</p>
        </div>
        <div className="space-y-12">
          {calculatorCategories.map((category) => (
            <div key={category}>
              <div className="mb-5">
                <h3 className="text-xl font-semibold">{category}</h3>
                <p className="text-sm text-muted-foreground">{CATEGORY_COPY[category]}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {calculators
                  .filter((c) => c.category === category)
                  .map((c) => (
                    <CalculatorCard key={c.slug} calculator={c} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <AdSlot />
      </div>

      <section className="border-y bg-secondary/50">
        <div className="container grid gap-8 py-16 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="space-y-3">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Icon className="size-5" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 sm:py-20" aria-labelledby="guides-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 id="guides-heading" className="text-3xl font-bold">
              Money guides
            </h2>
            <p className="text-muted-foreground">Plain-English explainers with worked examples.</p>
          </div>
          <Link href="/guides" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            All guides <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={guidePath(g.slug)}
              className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="text-xs font-medium text-muted-foreground">{g.readingMinutes} min read</span>
              <span className="mt-2 font-semibold group-hover:text-primary">{g.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
