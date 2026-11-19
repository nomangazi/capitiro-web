import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "personal-loan-vs-credit-card";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $10,000 of debt. Card: 24% APR. Loan: 12% APR, 36 months, 5% origination fee deducted from the proceeds (borrow $10,526.32). */
const OPTIONS = [
  { option: "Personal loan, 12% APR, 5% fee", payment: "$349.62", time: "36 months", interest: "$2,060.16", cost: "$2,586.48" },
  { option: "Card at 24% APR, same $349.62 payment", payment: "$349.62", time: "43 months", interest: "$4,985.16", cost: "$4,985.16" },
  { option: "Card at 24% APR, clear in 36 months", payment: "$392.33", time: "36 months", interest: "$4,123.83", cost: "$4,123.83" },
  { option: "Card at 24% APR, pay only $300", payment: "$300.00", time: "56 months", interest: "$6,644.17", cost: "$6,644.17" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        For debt you cannot clear quickly, a personal loan usually costs less than a credit card because its rate is lower and its
        term is fixed. <strong>In the example below, $10,000 costs $2,586.48 in interest and fees on a 36-month loan at 12% APR with a 5% fee, against
        $4,985.16 in interest on a 24% APR card at the same $349.62 monthly payment.</strong> The answer flips if the loan rate is close to the
        card rate, or if you can repay the card within a few months.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>A loan charges a fixed rate on a shrinking balance and ends on a set date. A card charges a (usually variable) rate for as long as you carry a balance.</li>
        <li>The rate gap drives the result. A 5% origination fee on $10,000 is $526.32 here, and the loan still saves $2,398.68 against the card at the same payment.</li>
        <li>At 24% APR the loan&apos;s edge shrinks as its own rate rises: with a 5% fee, a 24% loan costs $743.36 more than clearing the card over the same 36 months.</li>
        <li>If you will clear the balance in a few months, a card (especially one with a 0% offer) can cost less than any loan fee.</li>
        <li>Always compare total interest plus fees on the same basis, not the monthly payment alone.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: a $10,000 balance, no new spending, fixed monthly payments, interest added monthly (APR ÷ 12).
          The rates, fee and terms are illustrative assumptions, not market data or current offers. The arithmetic is the same in any
          currency, so $10,000 can be read as £10,000 or €10,000. Figures are rounded to the cent.
        </small>
      </p>

      <h2>How do a personal loan and a credit card differ?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Personal loan</th>
            <th>Credit card</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rate type</td>
            <td>Usually fixed for the term</td>
            <td>Often variable, and it can change</td>
          </tr>
          <tr>
            <td>Typical rate</td>
            <td>Often lower than cards for good credit; higher for weaker credit</td>
            <td>Often higher on carried balances</td>
          </tr>
          <tr>
            <td>Payment structure</td>
            <td>Fixed instalments that clear the debt</td>
            <td>Flexible minimum; the debt can last for years</td>
          </tr>
          <tr>
            <td>Fees</td>
            <td>Possible origination or arrangement fee; some lenders charge none</td>
            <td>Possible annual fee, late fees, and cash-advance or transfer fees</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>Fixed at the start</td>
            <td>Open-ended</td>
          </tr>
          <tr>
            <td>Flexibility</td>
            <td>Lump sum once; borrowing more means a new loan</td>
            <td>Reusable credit line; you can borrow again as you repay</td>
          </tr>
          <tr>
            <td>Credit impact</td>
            <td>New account and a credit check; adds an instalment loan to your file</td>
            <td>High balances relative to the limit can weigh on scores</td>
          </tr>
          <tr>
            <td>Early repayment</td>
            <td>Check for early-repayment charges</td>
            <td>Usually no charge for paying early</td>
          </tr>
        </tbody>
      </table>

      <h2>Which costs less for $10,000?</h2>
      <p>
        Take $10,000 of card debt at 24% APR. To receive $10,000 after a 5% origination fee deducted from the proceeds, you borrow
        10,000 ÷ 0.95 = <strong>$10,526.32</strong>. The fee is <strong>$526.32</strong>. Over 36 months at 12% APR the payment is{" "}
        <strong>$349.62</strong>, total interest is <strong>$2,060.16</strong>, and interest plus fee is <strong>$2,586.48</strong>. You repay
        $12,586.48 in total for $10,000 received. Try your own figures in the{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link>.
      </p>
      <p>
        On the card, the first month&apos;s interest is $200.00 (10,000 × 24% ÷ 12). Paying the same $349.62 a month takes 43 months and costs{" "}
        <strong>$4,985.16</strong> in interest. To match the loan&apos;s 36-month end date the card needs $392.33 a month and costs $4,123.83.
        A lower $300 payment takes 56 months (4 years 8 months) and costs $6,644.17. The{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link> runs this for any balance, rate and payment.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Monthly payment</th>
            <th>Time to be debt-free</th>
            <th>Interest</th>
            <th>Interest and fees</th>
          </tr>
        </thead>
        <tbody>
          {OPTIONS.map((row) => (
            <tr key={row.option}>
              <td>{row.option}</td>
              <td>{row.payment}</td>
              <td>{row.time}</td>
              <td>{row.interest}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        <li>At the same $349.62 payment, the loan saves $2,398.68 and finishes 7 months earlier.</li>
        <li>Against a card cleared in 36 months, the loan saves $1,537.35 and lowers the payment by $42.70 a month.</li>
        <li>The fee is not free: because it is borrowed, it adds $103.01 of interest compared with the same loan with no fee.</li>
      </ul>

      <h2>When does the loan pay back its fee?</h2>
      <p>
        Add the $526.32 fee to the loan&apos;s cumulative interest and compare it with the card&apos;s cumulative interest at the same payment.
        At month 3 the loan including its fee has cost $834.75 against $590.96 on the card. By month 6 the card has overtaken it, at $1,153.90
        against $1,120.75. <strong>The break-even point is month 6.</strong> At month 12 the figures are $2,188.72
        (card) and $1,622.70 (loan with fee), and at month 24 they are $3,839.13 and $2,326.03. If you expect to repay the loan within a few months, check for early-repayment charges first.
      </p>

      <h2>What if the loan rate is higher?</h2>
      <p>
        The saving depends on the rate gap. Keeping the 5% fee and 36-month term, here is what the loan costs at other illustrative rates:
      </p>
      <ul>
        <li><strong>12% APR:</strong> $349.62 a month, $2,586.48 in interest and fees.</li>
        <li><strong>18% APR:</strong> $380.55 a month, $3,699.86. Still $423.97 below the 36-month card payoff.</li>
        <li><strong>22% APR:</strong> $402.00 a month, $4,472.17.</li>
        <li><strong>24% APR:</strong> $412.98 a month, $4,867.19, which is $743.36 more than clearing the card in 36 months.</li>
      </ul>
      <p>
        This is why a quote matters: the rate you are offered depends on your credit profile and can be higher than the advertised best rate. In the UK, a representative APR only has to be available to at
        least 51% of successful applicants, so your own rate can differ. See{" "}
        <Link href="/guides/apr-vs-apy-aer">APR vs APY and AER</Link> for how quoted rates differ.
      </p>

      <h2>How do you decide?</h2>
      <ul>
        <li><strong>Choose the loan</strong> if you cannot clear the balance within a few months and the offered rate, after fees, is clearly below your card rate.</li>
        <li><strong>Stay on the card</strong> if you can clear it quickly, or if a 0% promotional offer covers most of the repayment. See <Link href="/guides/balance-transfer-math">balance transfer math</Link>.</li>
        <li><strong>Compare the all-in cost</strong>: interest plus every fee, over the full term, for each option.</li>
        <li><strong>Pick a payment you can sustain.</strong> A longer term lowers the payment but raises the total cost.</li>
        <li><strong>Be honest about spending.</strong> If the card fills up again after a loan clears it, you end up with both debts. <Link href="/guides/debt-consolidation-loans">Debt consolidation loans</Link> covers this in more detail.</li>
        <li><strong>Avoid minimum payments.</strong> They are the slowest, costliest route; the <Link href="/guides/minimum-payment-trap">minimum payment trap</Link> shows why.</li>
      </ul>

      <h2>Do US, UK and EU rules differ?</h2>
      <p>
        Yes, and the details matter. In the UK, Section 75 of the Consumer Credit Act 1974 can make a card provider jointly liable
        with a retailer for certain purchases within set price limits, which does not generally apply to a personal loan used to pay
        a debt; rules and limits are specific, so check the official guidance. US card dispute rights also vary by product. Arrangement
        fees are common on US loans, while some UK and EU lenders charge none, and early-repayment rules, cooling-off periods and APR
        definitions vary by country. Read the agreement for your country before you sign.
      </p>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Comparing only the monthly payment.</strong> A lower payment on a longer term can cost much more overall.</li>
        <li><strong>Forgetting the fee.</strong> A fee deducted from the proceeds means you borrow, and pay interest on, more than you receive.</li>
        <li><strong>Assuming the advertised rate is yours.</strong> Quotes depend on your credit profile and the lender.</li>
        <li><strong>Treating a loan as a reset.</strong> It only helps if the old balance stays at zero.</li>
        <li><strong>Ignoring hardship.</strong> If you cannot meet payments, speak to a free, regulated debt advice service before borrowing more.</li>
      </ul>

      <h2>Where can I get official guidance?</h2>
      <p>
        See the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a>. This guide is general
        information, not financial advice.
      </p>
    </GuideLayout>
  );
}
