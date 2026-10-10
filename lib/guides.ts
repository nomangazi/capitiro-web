export interface GuideMeta {
  slug: string;
  /** H1 and default <title> */
  title: string;
  /** Shorter <title> when `title` + " | Capitiro" would exceed ~60 characters */
  seoTitle?: string;
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
    slug: "how-long-to-pay-off-credit-card",
    title: "How Long Will It Take to Pay Off $5,000 or $10,000 of Credit Card Debt?",
    seoTitle: "How Long to Pay Off $5K or $10K Credit Card Debt",
    description:
      "How many months $5,000 or $10,000 of credit card debt takes at 20-28% APR, why minimum payments drag on for decades, and what to pay to be free in 12-36 months.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 8,
    calculator: "credit-card-payoff",
  },
  {
    slug: "balance-transfer-math",
    title: "Balance Transfer Cards: The Real Math (Fees, 0% Periods and Break-Even)",
    seoTitle: "Balance Transfer Math: Fees, 0% & Break-Even",
    description:
      "Is a balance transfer worth it? Compare 3% and 5% fees on 15, 18 and 21-month 0% offers against a 24% card, plus break-even, revert-rate risk and UK notes.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 8,
    calculator: "credit-card-payoff",
  },
  {
    slug: "4-percent-rule",
    title: "The 4% Rule Explained: How Much Can You Withdraw in Retirement?",
    seoTitle: "4% Rule Explained: How Much Can You Withdraw?",
    description:
      "The 4% rule explained: where it comes from, the 25x spending target, what $500k to $1.5M can pay each month, and where the rule falls short.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 8,
    calculator: "retirement",
  },
  {
    slug: "retirement-savings-by-age",
    title: "How Much Should You Have Saved for Retirement by Age?",
    seoTitle: "Retirement Savings by Age: Benchmarks & Targets",
    description:
      "Common retirement savings benchmarks by age, plus our projections of what $300, $500 or $1,000 a month grows to by 67 and how to catch up.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 8,
    calculator: "retirement",
  },
  {
    slug: "extra-mortgage-payments",
    title: "How Extra Mortgage Payments Save You Money",
    description:
      "See exactly how much paying an extra $100, $200 or $500 a month off your mortgage saves, the best ways to pay extra, and when not to.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "loan-amortization",
  },
  {
    slug: "refinance-break-even",
    title: "Should You Refinance? Mortgage Break-Even Explained",
    description:
      "How to calculate your mortgage refinance break-even point, with a worked example showing when refinancing saves money and when it costs more.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "loan-amortization",
  },
  {
    slug: "how-much-house-can-i-afford",
    title: "How Much House Can I Afford? The 28/36 Rule Explained",
    description:
      "Use the 28/36 rule to work out how much house you can afford, with a worked example, the factors that change your budget and costs lenders ignore.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "mortgage",
  },
  {
    slug: "what-is-pmi",
    title: "What Is PMI? How Much It Costs and How to Avoid It",
    description:
      "Private mortgage insurance explained: what PMI costs at 5%, 10% and 15% down, when it's removed, and five ways to avoid or shorten it.",
    published: "2026-10-10",
    updated: "2026-10-10",
    readingMinutes: 6,
    calculator: "mortgage",
  },
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
    seoTitle: "Debt Avalanche vs. Snowball: Which Method Wins?",
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
    seoTitle: "Rule of 72: How Long to Double Your Money?",
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
