import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Home,
  Landmark,
  LineChart,
  PiggyBank,
  Repeat,
  Target,
  TrendingUp,
} from "lucide-react";

export type CalculatorCategory = "Borrowing" | "Investing" | "Planning";

export interface CalculatorMeta {
  slug: string;
  /** Full H1 / page title, e.g. "Mortgage Calculator" */
  title: string;
  /** Short label used in navigation */
  shortTitle: string;
  /** One-sentence summary for cards and meta descriptions (keep < 160 chars) */
  summary: string;
  category: CalculatorCategory;
  icon: LucideIcon;
  /** Primary search keywords this page targets (see .claude/skills/seo-marketing) */
  keywords: string[];
}

/**
 * Single source of truth for every calculator. Navbar, homepage, footer,
 * sitemap and "related calculators" all read from here — add new tools here first.
 */
export const calculators: CalculatorMeta[] = [
  {
    slug: "mortgage",
    title: "Mortgage Calculator",
    shortTitle: "Mortgage",
    summary:
      "Estimate your monthly mortgage payment including property tax, home insurance, PMI and HOA fees.",
    category: "Borrowing",
    icon: Home,
    keywords: ["mortgage calculator", "monthly mortgage payment", "mortgage payment with taxes and insurance", "PMI calculator"],
  },
  {
    slug: "loan-amortization",
    title: "Loan Amortization Calculator",
    shortTitle: "Loan Amortization",
    summary:
      "See your monthly loan payment, total interest and a full amortization schedule — plus how much extra payments save.",
    category: "Borrowing",
    icon: Landmark,
    keywords: ["loan calculator", "amortization schedule", "loan amortization calculator", "extra payment calculator"],
  },
  {
    slug: "credit-card-payoff",
    title: "Credit Card Payoff Calculator",
    shortTitle: "Credit Card Payoff",
    summary:
      "Find out how long it will take to pay off your credit card and how much interest you'll pay.",
    category: "Borrowing",
    icon: CreditCard,
    keywords: ["credit card payoff calculator", "credit card interest calculator", "debt payoff calculator"],
  },
  {
    slug: "compound-interest",
    title: "Compound Interest Calculator",
    shortTitle: "Compound Interest",
    summary:
      "Project how your savings grow with compound interest and regular monthly contributions.",
    category: "Investing",
    icon: TrendingUp,
    keywords: ["compound interest calculator", "investment calculator", "savings growth calculator"],
  },
  {
    slug: "sip-return",
    title: "SIP Calculator",
    shortTitle: "SIP Return",
    summary:
      "Estimate the future value of a systematic investment plan (monthly investing), with an optional yearly step-up.",
    category: "Investing",
    icon: Repeat,
    keywords: ["SIP calculator", "systematic investment plan calculator", "monthly investment calculator", "step-up SIP"],
  },
  {
    slug: "retirement",
    title: "Retirement Calculator",
    shortTitle: "Retirement",
    summary:
      "Estimate your retirement nest egg, its value in today's money and the income it could provide.",
    category: "Planning",
    icon: PiggyBank,
    keywords: ["retirement calculator", "retirement savings calculator", "how much do I need to retire"],
  },
  {
    slug: "savings-goal",
    title: "Savings Goal Calculator",
    shortTitle: "Savings Goal",
    summary:
      "Work out how much you need to save each month to reach a target amount by a certain date.",
    category: "Planning",
    icon: Target,
    keywords: ["savings goal calculator", "how much to save per month", "savings calculator"],
  },
  {
    slug: "inflation",
    title: "Inflation Calculator",
    shortTitle: "Inflation",
    summary:
      "See how inflation erodes purchasing power and what today's money will cost in the future.",
    category: "Planning",
    icon: LineChart,
    keywords: ["inflation calculator", "future value of money", "purchasing power calculator"],
  },
];

export const calculatorCategories: CalculatorCategory[] = ["Borrowing", "Investing", "Planning"];

export function calculatorPath(slug: string): string {
  return `/calculators/${slug}`;
}

export function getCalculator(slug: string): CalculatorMeta {
  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) throw new Error(`Unknown calculator slug: ${slug}`);
  return calc;
}

/** Related tools: same category first, then the rest, excluding the current page. */
export function getRelatedCalculators(slug: string, limit = 3): CalculatorMeta[] {
  const current = getCalculator(slug);
  const others = calculators.filter((c) => c.slug !== slug);
  const sameCategory = others.filter((c) => c.category === current.category);
  const rest = others.filter((c) => c.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
