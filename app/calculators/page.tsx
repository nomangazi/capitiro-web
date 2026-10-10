import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CalculatorCard } from "@/components/site/CalculatorCard";
import { calculatorCategories, calculators } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Financial Calculators",
  description:
    "Browse every free Capitiro calculator: mortgage, loan amortization, credit card payoff, compound interest, SIP, retirement, savings goal and inflation.",
  path: "/calculators",
});

export default function CalculatorsIndex() {
  return (
    <div className="container space-y-10 pt-6 pb-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Calculators", path: "/calculators" },
        ]}
      />
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-bold sm:text-4xl">All financial calculators</h1>
        <p className="text-lg text-muted-foreground">
          Free tools for borrowing, investing and planning. Every calculator explains its formula and runs privately in your browser.
        </p>
      </header>
      {calculatorCategories.map((category) => (
        <section key={category} aria-labelledby={`cat-${category}`}>
          <h2 id={`cat-${category}`} className="mb-5 text-xl font-semibold">
            {category}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {calculators
              .filter((c) => c.category === category)
              .map((c) => (
                <CalculatorCard key={c.slug} calculator={c} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
