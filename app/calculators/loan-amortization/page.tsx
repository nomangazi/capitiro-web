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
  {
    question: "Is a shorter loan term always better?",
    answer:
      "A shorter term costs less interest but needs a higher payment each month. On $25,000 at 7.5%, a 3-year loan costs about $2,996 in interest and a 7-year loan about $7,210, but the 7-year payment is about $394 lower. Pick the shortest term your budget can handle comfortably.",
  },
];

export default function LoanAmortizationPage() {
  return (
    <CalculatorPage
      slug={SLUG}
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
          <p>
            Look at the first payment to see why early payments feel slow. Of the $501, about $156 is interest and only about $345
            reduces the balance. By the final payment, interest is down to roughly $3.
          </p>

          <h2>How do the loan term and rate change what you pay?</h2>
          <p>
            A longer term lowers the monthly payment but raises the total interest, and a higher rate raises both. The table shows
            a $25,000 loan at 7.5% over different terms.
          </p>
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Monthly payment</th>
                <th>Total interest</th>
                <th>Total paid</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>3 years</td><td>$778</td><td>$2,996</td><td>$27,996</td></tr>
              <tr><td>4 years</td><td>$604</td><td>$4,015</td><td>$29,015</td></tr>
              <tr><td>5 years</td><td>$501</td><td>$5,057</td><td>$30,057</td></tr>
              <tr><td>6 years</td><td>$432</td><td>$6,122</td><td>$31,122</td></tr>
              <tr><td>7 years</td><td>$383</td><td>$7,210</td><td>$32,210</td></tr>
            </tbody>
          </table>
          <p>
            Stretching from 5 to 7 years lowers the payment by about $117 a month but adds about $2,150 in interest. The rate matters
            just as much. On the same $25,000 over 5 years, 5% costs about $3,307 in interest, 10% costs about $6,871 and 15% costs
            about $10,685. Shop for the lowest rate first, then choose the term.
          </p>
          <p>
            Here is a second example with a car loan. Borrowing $18,000 at 7% costs $431 a month over 4 years, $356 over 5 years and
            $307 over 6 years, with total interest of about $2,690, $3,385 and $4,096.
          </p>

          <h2>How much do extra payments save?</h2>
          <p>
            Even $50 extra a month on the $25,000 loan saves about $564 in interest and clears the debt six months early. The table
            shows the same loan with different extra amounts.
          </p>
          <table>
            <thead>
              <tr>
                <th>Extra per month</th>
                <th>Months to repay</th>
                <th>Total interest</th>
                <th>Interest saved</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>$0</td><td>60</td><td>$5,057</td><td>$0</td></tr>
              <tr><td>$25</td><td>57</td><td>$4,758</td><td>$299</td></tr>
              <tr><td>$50</td><td>54</td><td>$4,493</td><td>$564</td></tr>
              <tr><td>$100</td><td>49</td><td>$4,043</td><td>$1,014</td></tr>
              <tr><td>$200</td><td>41</td><td>$3,374</td><td>$1,683</td></tr>
            </tbody>
          </table>
          <p>
            The same idea works on much larger debts. See what it does to a home loan in our{" "}
            <a href="/guides/extra-mortgage-payments">extra mortgage payments guide</a>, or run the numbers with the{" "}
            <a href="/calculators/mortgage">mortgage calculator</a>. If you also carry card debt, compare it with the{" "}
            <a href="/calculators/credit-card-payoff">credit card payoff calculator</a>, since card rates are usually higher.
          </p>

          <h2>Tips to pay off a loan faster</h2>
          <ul>
            <li><strong>Round up</strong> your payment — $480 becomes $500 without much pain.</li>
            <li><strong>Use windfalls</strong> such as tax refunds or bonuses for lump-sum principal payments.</li>
            <li><strong>Check for prepayment penalties</strong> before paying early (rare on most consumer loans).</li>
            <li><strong>Refinance</strong> if rates have fallen or your credit has improved, after checking the <a href="/guides/refinance-break-even">break-even point</a>.</li>
          </ul>

          <h2>What the loan calculator does not include</h2>
          <p>
            It assumes a fixed rate, equal monthly payments and no fees. Real loans can differ in a few ways, so compare your
            lender&apos;s paperwork with the results here.
          </p>
          <ul>
            <li><strong>Fees.</strong> An origination or arrangement fee raises the true cost. Compare loans using the APR, but enter the interest rate here.</li>
            <li><strong>How extra money is applied.</strong> Tell your lender to apply extra payments to principal. Otherwise it may count as an early next payment.</li>
            <li><strong>Variable rates.</strong> If your rate can change, the payment and schedule will change too.</li>
            <li><strong>UK and EU loans.</strong> Personal loans are usually quoted with an APR and a fixed term, and lenders may charge a fee for repaying early. Check your agreement before overpaying.</li>
          </ul>
        </>
      }
    />
  );
}
