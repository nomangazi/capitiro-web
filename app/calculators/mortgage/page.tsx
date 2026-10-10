import { Mortgage } from "@/components/calculators/Mortgage";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "mortgage";

export const metadata = buildMetadata({
  title: "Mortgage Calculator with Taxes, Insurance & PMI",
  description:
    "Free mortgage calculator: estimate your monthly payment with property tax, homeowners insurance, PMI and HOA fees, plus a full amortization schedule.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is included in a monthly mortgage payment?",
    answer:
      "Most mortgage payments cover four things, often shortened to PITI: principal (repaying the loan), interest (the lender's charge), property taxes and homeowners insurance. If you put down less than 20%, private mortgage insurance (PMI) is usually added, and condos or planned communities may also charge HOA fees.",
  },
  {
    question: "How much house can I afford?",
    answer:
      "A common guideline is the 28/36 rule: keep your total housing payment below 28% of gross monthly income and all debt payments below 36%. Use this calculator to find the payment for a given price, then compare it with 28% of your monthly income.",
  },
  {
    question: "When does PMI go away?",
    answer:
      "On conventional US loans, lenders must cancel PMI automatically once your balance is scheduled to reach 78% of the home's original value, and you can request cancellation at 80%. This calculator estimates how many months of PMI you will pay based on the 78% rule.",
  },
  {
    question: "Is a 15-year or 30-year mortgage better?",
    answer:
      "A 15-year mortgage has a higher monthly payment but usually a lower rate and far less total interest. A 30-year loan keeps payments lower and more flexible. Switch the loan term in the calculator to compare total interest side by side.",
  },
  {
    question: "Does this calculator work for UK or European mortgages?",
    answer:
      "Yes for the core repayment — principal and interest are calculated the same way everywhere. Simply set property tax, insurance and PMI to zero if they are not paid through your mortgage, and switch the currency in the header to GBP or EUR.",
  },
];

export default function MortgagePage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Estimate your full monthly house payment — principal, interest, property tax, insurance, PMI and HOA — and see how much the loan really costs over time."
      calculator={<Mortgage />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the mortgage calculator</h2>
          <ol>
            <li><strong>Home price</strong> — the purchase price you are considering.</li>
            <li><strong>Down payment</strong> — the cash you put in up front. The percentage is shown next to the label; 20% or more avoids PMI on most conventional loans.</li>
            <li><strong>Interest rate</strong> — the annual rate from your lender quote (not the APR, which also includes fees).</li>
            <li><strong>Loan term</strong> — 30 years is the most common in the US; 15-year loans save interest.</li>
            <li><strong>Taxes, insurance &amp; fees</strong> — property tax as a % of the home&apos;s value per year, your annual insurance premium, the PMI rate and any monthly HOA dues.</li>
          </ol>
          <p>Results update instantly. The donut shows where each monthly dollar goes, and the schedule shows how the balance falls year by year.</p>

          <h2>Mortgage payment formula explained</h2>
          <p>The principal-and-interest part of the payment uses the standard amortization formula:</p>
          <p><strong>M = P × r(1 + r)<sup>n</sup> ÷ [(1 + r)<sup>n</sup> − 1]</strong></p>
          <ul>
            <li><strong>M</strong> = monthly principal and interest payment</li>
            <li><strong>P</strong> = loan amount (home price minus down payment)</li>
            <li><strong>r</strong> = monthly interest rate (annual rate ÷ 12)</li>
            <li><strong>n</strong> = number of monthly payments (years × 12)</li>
          </ul>
          <p>
            Property tax is the annual rate × home price ÷ 12, insurance is the annual premium ÷ 12, and PMI is the annual PMI rate
            × the original loan amount ÷ 12. PMI is charged until the scheduled balance falls to 78% of the purchase price.
          </p>

          <h2>Worked example</h2>
          <p>
            A $400,000 home with 20% down ($80,000) leaves a $320,000 loan. At 6.5% for 30 years, principal and interest come to
            about <strong>$2,023 per month</strong>. Add 1.1% property tax ($367/month) and $1,500/year insurance ($125/month) and
            the full payment is roughly <strong>$2,514</strong>. Over 30 years you would pay around $408,000 in interest — more than
            the original loan.
          </p>

          <h2>Ways to lower your mortgage payment</h2>
          <ul>
            <li><strong>Put more down.</strong> Reaching 20% removes PMI and shrinks the loan.</li>
            <li><strong>Improve your credit score</strong> before applying — even 0.25% lower interest saves thousands.</li>
            <li><strong>Compare lenders.</strong> Rates and fees vary; get at least three Loan Estimates.</li>
            <li><strong>Shop insurance</strong> and appeal your property tax assessment if it looks high.</li>
            <li><strong>Pay extra principal</strong> when you can — try our <a href="/calculators/loan-amortization">loan amortization calculator</a> to see the savings.</li>
          </ul>
        </>
      }
    />
  );
}
