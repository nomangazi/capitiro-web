import { LoanAmortization } from "@/components/calculators/LoanAmortization";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "loan-amortization";

export const metadata = buildMetadata({
  title: "Loan Amortization Calculator & Schedule",
  description:
    "Calculate your monthly loan payment, total interest and full amortization schedule. See how extra payments shorten your loan and save interest.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is an amortization schedule?",
    answer:
      "An amortization schedule is a table showing every payment on a loan, split into the part that pays interest and the part that reduces the balance. Early payments are mostly interest; later payments are mostly principal.",
  },
  {
    question: "Why do I pay so much interest at the start of a loan?",
    answer:
      "Interest is charged on the outstanding balance. At the start the balance is highest, so the interest portion is largest. As the balance falls, more of each fixed payment goes to principal.",
  },
  {
    question: "How much do extra payments save?",
    answer:
      "Every extra dollar goes straight to principal, which reduces the interest charged in every following month. Enter an amount in the 'Extra monthly payment' field to see the exact interest saved and how many months sooner you'll be debt-free.",
  },
  {
    question: "Can I use this for car loans, personal loans and student loans?",
    answer:
      "Yes. Any fixed-rate loan with equal monthly payments — auto loans, personal loans, student loans and mortgages — amortizes the same way. For a house payment including tax and insurance, use the mortgage calculator.",
  },
  {
    question: "What happens with a 0% interest loan?",
    answer:
      "With 0% interest, the monthly payment is simply the loan amount divided by the number of months, and total interest is zero. The calculator handles 0% rates correctly.",
  },
];

export default function LoanAmortizationPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      updated="2026-10-10"
      intro="Find your monthly payment and total interest for any fixed-rate loan, explore the month-by-month schedule, and see what paying a little extra could save."
      calculator={<LoanAmortization />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the loan amortization calculator</h2>
          <ol>
            <li>Enter the <strong>loan amount</strong> you are borrowing.</li>
            <li>Enter the <strong>interest rate</strong> (APR) quoted by your lender.</li>
            <li>Choose the <strong>loan term</strong> in years.</li>
            <li>Optionally add an <strong>extra monthly payment</strong> to see how much faster you could repay.</li>
          </ol>
          <p>
            The summary shows your payment, total interest and payoff time. Switch the schedule between yearly and monthly views to
            see exactly how each payment is split.
          </p>

          <h2>Loan payment formula explained</h2>
          <p><strong>Payment = P × r ÷ [1 − (1 + r)<sup>−n</sup>]</strong></p>
          <ul>
            <li><strong>P</strong> = amount borrowed</li>
            <li><strong>r</strong> = monthly rate = annual rate ÷ 12 ÷ 100</li>
            <li><strong>n</strong> = total number of monthly payments</li>
          </ul>
          <p>
            Each month, interest = remaining balance × r. The rest of the payment reduces the balance. Repeating this for every
            month produces the amortization schedule. Our totals are calculated at full precision and only rounded for display,
            so the yearly figures add up exactly to the loan amount.
          </p>

          <h2>Worked example</h2>
          <p>
            Borrowing <strong>$25,000 at 7.5% for 5 years</strong> gives a payment of about <strong>$501 per month</strong> and
            roughly $5,057 of interest in total. Adding just $100 a month extra clears the loan about 11 months early and saves
            roughly $1,000 in interest.
          </p>

          <h2>Tips to pay off a loan faster</h2>
          <ul>
            <li><strong>Round up</strong> your payment — $480 becomes $500 without much pain.</li>
            <li><strong>Use windfalls</strong> such as tax refunds or bonuses for lump-sum principal payments.</li>
            <li><strong>Check for prepayment penalties</strong> before paying early (rare on most consumer loans).</li>
            <li><strong>Refinance</strong> if rates have fallen or your credit has improved.</li>
          </ul>
        </>
      }
    />
  );
}
