import Link from "next/link";
import { CalculatorCard } from "@/components/site/CalculatorCard";
import { calculators } from "@/lib/calculators";

export default function NotFound() {
  return (
    <div className="container space-y-10 py-20">
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="text-3xl font-bold sm:text-4xl">We couldn&apos;t find that page</h1>
        <p className="text-lg text-muted-foreground">
          The link may be broken or the page may have moved. Try one of our popular calculators, or head back to the{" "}
          <Link href="/" className="text-primary underline underline-offset-4">
            homepage
          </Link>
          .
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {calculators.slice(0, 4).map((c) => (
          <CalculatorCard key={c.slug} calculator={c} compact />
        ))}
      </div>
    </div>
  );
}
