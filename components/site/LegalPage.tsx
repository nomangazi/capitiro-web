import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

/** Simple long-form shell for About, Contact and legal pages. */
export function LegalPage({
  title,
  path,
  intro,
  updated,
  children,
}: {
  title: string;
  path: string;
  intro?: string;
  /** ISO date, shown as "Last updated" */
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="container max-w-3xl pt-6 pb-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
      />
      <header className="mt-6 mb-8 space-y-3 border-b pb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {intro && <p className="text-lg text-muted-foreground">{intro}</p>}
        {updated && (
          <p className="text-sm text-muted-foreground">
            Last updated:{" "}
            <time dateTime={updated}>
              {new Date(updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
            </time>
          </p>
        )}
      </header>
      <div className="prose-content">{children}</div>
    </div>
  );
}
