export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO dates */
  published: string;
  updated: string;
  readingMinutes: number;
  /** Calculator slug this guide links to as its main call-to-action */
  calculator: string;
}

/** Registry of long-form guides. Each guide lives at app/guides/<slug>/page.tsx. Newest first. */
export const guides: GuideMeta[] = [
  {
    slug: "15-vs-30-year-mortgage",
    title: "15-Year vs. 30-Year Mortgage: Which Saves You More?",
    description:
      "Compare 15-year and 30-year mortgages side by side: monthly payments, total interest, equity and flexibility — with real numbers.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "mortgage",
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt Avalanche vs. Debt Snowball: Which Payoff Method Wins?",
    description:
      "How the avalanche and snowball debt payoff methods work, a worked example with three debts, and how to choose the right one for you.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "credit-card-payoff",
  },
  {
    slug: "rule-of-72",
    title: "The Rule of 72: How Long Does It Take to Double Your Money?",
    description:
      "Learn the Rule of 72 shortcut for estimating how fast money doubles, how accurate it is, and how to use it for investing, debt and inflation.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 5,
    calculator: "compound-interest",
  },
];

export function guidePath(slug: string): string {
  return `/guides/${slug}`;
}

export function getGuide(slug: string): GuideMeta {
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Unknown guide slug: ${slug}`);
  return guide;
}
