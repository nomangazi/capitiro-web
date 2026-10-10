import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { formatDate } from "@/lib/dates";
import { guidePath, guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Finance Guides",
  description:
    "Plain-English personal finance guides on mortgages, debt payoff, investing and saving — each with worked examples and a matching calculator.",
  path: "/guides",
});

export default function GuidesIndex() {
  return (
    <div className="container max-w-4xl space-y-10 pt-6 pb-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-bold sm:text-4xl">Personal finance guides</h1>
        <p className="text-lg text-muted-foreground">
          Clear explanations of the money decisions behind our calculators, with real numbers you can check yourself.
        </p>
      </header>
      <ul className="divide-y rounded-xl border bg-card">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={guidePath(g.slug)} className="group block p-6 transition-colors hover:bg-muted/50">
              <h2 className="text-lg font-semibold group-hover:text-primary">{g.title}</h2>
              <p className="mt-1.5 text-muted-foreground">{g.description}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {g.readingMinutes} min read · Published <time dateTime={g.published}>{formatDate(g.published)}</time> · Updated{" "}
                <time dateTime={g.updated}>{formatDate(g.updated)}</time>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
