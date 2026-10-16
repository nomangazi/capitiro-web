import { Refinance } from "@/components/calculators/Refinance";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "refinance";

export const metadata = buildMetadata({
  title: "Mortgage Refinance Calculator & Break-Even",
  description:
    "See your new monthly payment, break-even point and lifetime savings before you refinance. Compare terms, roll in closing costs and test a cash-out.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is the refinance break-even point?",
    answer:
      "The break-even point is how many months it takes for your monthly payment savings to cover the closing costs. It equals closing costs divided by monthly savings. If you keep the new loan longer than that, the refinance has paid for itself on payments. If you sell or refinance again sooner, you lose money.",
  },
  {
    question: "Is it worth refinancing if the rate only drops by 1%?",
    answer:
      "A one percentage point drop is a common rule of thumb, not a rule. What matters is your own numbers. Enter your balance, rates and closing costs above: if the break-even is well inside the time you expect to keep the home, and total cost does not rise, the refinance can make sense.",
  },
  {
    question: "Should I roll closing costs into the new loan?",
    answer:
      "Rolling costs in means you pay nothing at closing, but the loan is bigger, so the payment saving shrinks and you pay interest on the fees for years. Paying upfront usually costs less overall. Switch the toggle above to compare both options with your own numbers.",
  },
  {
    question: "Does a lower monthly payment always mean I save money?",
    answer:
      "No. If you restart a 30-year term after years of payments, the payment can fall while total interest rises, because you borrow for longer. Check the lifetime figure as well as the monthly saving. Choosing a term close to the time you have left on your current loan avoids that trap.",
  },
  {
    question: "How does a cash-out refinance change the result?",
    answer:
      "A cash-out refinance replaces your loan with a larger one and pays you the difference. The bigger balance raises the payment and the interest, so monthly savings shrink or turn negative. The calculator does not count the cash as a saving, because you repay it with interest.",
  },
  {
    question: "What closing costs should I enter?",
    answer:
      "Use the total from the Loan Estimate your lender gives you, including origination, appraisal, title and any discount points. If you only want a rough test, try a range of amounts and watch how the break-even moves. Costs vary by lender, so compare estimates side by side before you choose.",
  },
];

export default function RefinancePage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Find out whether refinancing your mortgage pays off: compare your payment before and after, see how many months it takes to recover closing costs and check the total cost over the life of both loans."
      calculator={<Refinance />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the mortgage refinance calculator</h2>
          <ol>
            <li>Enter your <strong>current loan balance</strong>, <strong>interest rate</strong> and the <strong>years remaining</strong> on the loan. Your latest mortgage statement has all three.</li>
            <li>Enter the <strong>new interest rate</strong> you have been quoted and choose a <strong>new loan term</strong> of 15, 20 or 30 years.</li>
            <li>Enter the <strong>closing costs</strong> from your lender&apos;s Loan Estimate, and choose whether you pay them upfront or roll them into the loan.</li>
            <li>Optionally add a <strong>cash-out</strong> amount if you want to borrow extra against your home.</li>
          </ol>
          <p>
            The summary shows your monthly saving, the break-even point and the lifetime difference. The chart plots your cumulative
            savings after closing costs, so you can see the month the line crosses zero.
          </p>

          <h2>Refinance formulas explained</h2>
          <p>The calculator compares two fixed-rate loans using the standard payment formula:</p>
          <p><strong>Payment = P × r ÷ [1 − (1 + r)<sup>−n</sup>]</strong></p>
          <ul>
            <li><strong>P</strong> = loan amount (for the new loan: balance + cash-out + any closing costs rolled in)</li>
            <li><strong>r</strong> = monthly rate = annual rate ÷ 12 ÷ 100</li>
            <li><strong>n</strong> = number of monthly payments left</li>
          </ul>
          <p>From the two payments it works out three answers:</p>
          <ul>
            <li><strong>Monthly savings</strong> = current payment − new payment.</li>
            <li><strong>Break-even (months)</strong> = closing costs ÷ monthly savings. If the new payment is not lower, break-even is never reached.</li>
            <li><strong>Lifetime difference</strong> = interest left on the current loan − interest on the new loan − closing costs, assuming you keep each loan to the end of its term.</li>
          </ul>
          <p>
            The current payment is recalculated from your balance, rate and remaining years, so it may differ by a few dollars from the
            amount on your statement. All figures are principal and interest only; property tax, insurance and PMI are not included.
            For a full monthly cost, use the <a href="/calculators/mortgage">mortgage calculator</a>.
          </p>

          <h2>Worked example</h2>
          <p>
            You owe <strong>$310,000 at 7.5%</strong> with <strong>27 years left</strong>, and you are offered <strong>6.25% on a new
            30-year loan</strong> with <strong>$7,750</strong> of closing costs paid upfront. Your current payment is about{" "}
            <strong>$2,234</strong> and the new payment is about <strong>$1,909</strong>, a saving of roughly <strong>$326 a month</strong>.
          </p>
          <p>
            Break-even is $7,750 ÷ $325.55, or about <strong>24 months</strong>. After one year you are still about $3,843 behind. At two
            years you are about $63 ahead, and at five years about $11,783 ahead. Over the full terms you would pay about $413,905 in
            interest on the current loan against about $377,140 on the new one, a difference of $36,765. After the $7,750 of closing
            costs the lifetime saving is about <strong>$29,015</strong>.
          </p>

          <h2>How do the term and closing costs change the answer?</h2>
          <p>Here is the same $310,000 balance under different choices. Each row changes one thing from the example above.</p>
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>New payment</th>
                <th>Monthly change</th>
                <th>Break-even</th>
                <th>Lifetime result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>6.25%, 30 years, costs upfront</td><td>$1,909</td><td>Saves $326</td><td>≈ 24 months</td><td>Saves ≈ $29,015</td></tr>
              <tr><td>6.25%, 30 years, costs rolled in</td><td>$1,956</td><td>Saves $278</td><td>≈ 28 months</td><td>Saves ≈ $19,586</td></tr>
              <tr><td>6.25%, 20 years</td><td>$2,266</td><td>Costs $32 more</td><td>Never</td><td>Saves ≈ $172,344</td></tr>
              <tr><td>6.25%, 15 years</td><td>$2,658</td><td>Costs $424 more</td><td>Never</td><td>Saves ≈ $237,713</td></tr>
              <tr><td>7.0%, 30 years</td><td>$2,062</td><td>Saves $172</td><td>≈ 45 months</td><td>Costs ≈ $26,323 more</td></tr>
              <tr><td>6.25%, 30 years, $40,000 cash-out</td><td>$2,155</td><td>Saves $79</td><td>≈ 98 months</td><td>Costs ≈ $19,649 more</td></tr>
            </tbody>
          </table>
          <p>
            Closing costs matter just as much. With the 30-year, 6.25% loan, costs of $3,100 (1% of the balance) break even in about
            10 months, while $15,500 (5%) takes about 48 months. The shorter terms never reach break-even because the payment goes up,
            yet they cut far more interest. That is why the lifetime figure belongs next to the monthly saving.
          </p>

          <h2>Tips for comparing refinance offers</h2>
          <ul>
            <li><strong>Get several Loan Estimates.</strong> Fees differ by lender, and the break-even moves with every dollar of closing costs. Our <a href="/guides/refinance-break-even">refinance break-even guide</a> shows how.</li>
            <li><strong>Keep your payoff date in mind.</strong> Choosing a term close to the years you have left avoids restarting the clock. See the <a href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</a> for the trade-off.</li>
            <li><strong>Think about how long you will stay.</strong> If you may move before the break-even month, a lower rate may not pay off.</li>
            <li><strong>Check the schedule.</strong> The <a href="/calculators/loan-amortization">loan amortization calculator</a> shows the balance you would owe on either loan at any date.</li>
            <li><strong>Consider extra payments instead.</strong> Paying more on your current loan has no closing costs; see <a href="/guides/extra-mortgage-payments">how extra mortgage payments help</a>.</li>
          </ul>

          <h2>What the refinance calculator does not include</h2>
          <p>
            It assumes fixed rates and equal monthly payments, and it ignores taxes, insurance, PMI and escrow. It also does not model
            investing the monthly saving elsewhere, tax deductions or what happens if you sell early. In the UK and Europe, check for an
            early repayment charge on your current deal and add it to the closing costs you enter. Use the results as a starting point, and
            compare them with your lender&apos;s official figures.
          </p>
        </>
      }
    />
  );
}
