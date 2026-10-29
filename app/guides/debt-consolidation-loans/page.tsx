import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "debt-consolidation-loans";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $15,000 of card debt at 24% APR. Loan: 11% APR over 5 years, 5% origination fee taken from the proceeds. */
const OPTIONS = [
  { option: "Keep the cards, pay $343.30 a month", payment: "$343.30", time: "105 months (8 years 9 months)", cost: "$20,894.02" },
  { option: "Keep the cards, clear them in 5 years", payment: "$431.52", time: "60 months", cost: "$10,891.17" },
  { option: "Consolidation loan, 11% APR, 5% fee", payment: "$343.30", time: "60 months", cost: "$5,598.09" },
  { option: "Balance transfer, 0% for 18 months, 3% fee", payment: "$343.30", time: "58 months", cost: "$4,645.19" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A debt consolidation loan replaces several debts with one new loan, usually at a fixed rate and a fixed end date. It helps
        when the new rate is clearly lower than what you pay now and you stop adding to the old balances.{" "}
        <strong>
          In the example below, $15,000 of card debt at 24% APR costs $5,598.09 in interest and fees if consolidated into an 11%, 5-year loan with a 5% fee, against $10,891.17 in
          interest if the cards are cleared over the same 5 years.
        </strong>{" "}
        The same loan at a much higher rate could save nothing or even cost more.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Consolidation saves money only if the all-in cost (interest plus fees) is lower than what you would pay by repaying the existing debts over the same period.</li>
        <li>The headline rate is not enough. An origination fee of 5% on $15,000 adds $789.47 on day one and, because it is borrowed too, about $240 more interest over 5 years.</li>
        <li>A longer term lowers the monthly payment but raises the total cost. Compare the total, not just the payment.</li>
        <li>Consolidating does not remove the debt. If the cards fill up again, you end up with the loan and new card debt.</li>
        <li>A 0% balance transfer can be cheaper still, but only if you qualify and clear the balance before the offer ends.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: $15,000 owed across cards at one blended 24% APR, no new spending, fixed payments, interest
          added monthly (APR ÷ 12). Rates, fees and terms are illustrative, not current offers. The arithmetic is the same in any
          currency, so $15,000 can be read as £15,000 or €15,000. Figures are rounded to the cent, so parts may differ from totals by a cent.
        </small>
      </p>

      <h2>What is a debt consolidation loan?</h2>
      <p>
        You borrow a lump sum, use it to pay off cards or other loans, and then repay the new loan in equal monthly instalments.
        Lenders may charge an origination fee, often deducted from the amount you receive, so you must borrow more than you need to
        clear the debts. The monthly payment follows the standard loan formula, which you can explore in the{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link>.
      </p>
      <p>
        The idea exists in the US, UK and EU, but names and rules differ. Many UK lenders quote a representative APR, and some
        countries add statutory cooling-off or early-repayment rules. Always read the loan agreement for your country.
      </p>

      <h2>How do the options compare?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Keep the cards</th>
            <th>Consolidation loan</th>
            <th>Balance transfer card</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typical rate</td>
            <td>High, variable, compounds monthly</td>
            <td>Lower, usually fixed</td>
            <td>0% for a set period, then the card rate</td>
          </tr>
          <tr>
            <td>Upfront cost</td>
            <td>None</td>
            <td>Possible origination fee</td>
            <td>Transfer fee, often a percentage of the balance</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>Open-ended unless you set a plan</td>
            <td>Fixed term</td>
            <td>Promo period is short; the rest follows normal card terms</td>
          </tr>
          <tr>
            <td>Main risk</td>
            <td>Interest outruns small payments</td>
            <td>Fee and a long term can erase the saving</td>
            <td>Promo ends before the debt is cleared</td>
          </tr>
          <tr>
            <td>Needs good credit</td>
            <td>No</td>
            <td>Usually, for the best rates</td>
            <td>Usually, for a long 0% offer</td>
          </tr>
        </tbody>
      </table>

      <h2>Worked example: $15,000 of card debt</h2>
      <p>
        To receive $15,000 after a 5% fee, you borrow 15,000 ÷ 0.95 = $15,789.47. The fee is $789.47. On an 11% APR, 5-year loan the
        payment is <strong>$343.30</strong> a month, total interest is <strong>$4,808.61</strong>, and total interest plus fee is{" "}
        <strong>$5,598.09</strong>.
      </p>
      <p>
        On the cards, the first month&apos;s interest is $300.00 (15,000 × 24% ÷ 12). If you keep paying the same $343.30, the cards take 105
        months and cost $20,894.02 in interest. To clear them in 5 years you need $431.52 a month and pay $10,891.17 in interest. Use the{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link> for your own balance.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Monthly payment</th>
            <th>Time to be debt-free</th>
            <th>Interest and fees</th>
          </tr>
        </thead>
        <tbody>
          {OPTIONS.map((row) => (
            <tr key={row.option}>
              <td>{row.option}</td>
              <td>{row.payment}</td>
              <td>{row.time}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        <li>Against paying the cards over 5 years, the loan saves $5,293.08 and lowers the payment by $88.22 a month ($431.52 − $343.30).</li>
        <li>Against paying only $343.30 on the cards, it saves $15,295.94, because the cards would take almost four more years.</li>
        <li>In the first 12 months you pay $1,612.96 of loan interest, against $3,538.85 of card interest at the same payment.</li>
      </ul>

      <h2>When does the loan pay back its fee?</h2>
      <p>
        Add the fee to the loan&apos;s cumulative interest and compare it with the cards&apos; cumulative interest at the same $343.30 payment.
        After 5 months the cards have cost $1,491.16 against $1,494.79 for the loan including the fee. After 6 months it is $1,786.66
        against $1,630.26. <strong>The break-even point is month 6</strong>. After that the loan is cheaper every month, and the
        gap is $3,725.33 versus $6,921.92 at month 24.
      </p>
      <p>
        The break-even is short here because the rate gap is large (24% vs 11%). With a smaller gap, or a larger fee, it takes much
        longer, and if you plan to repay early you may never reach it.
      </p>

      <h2>How much do the term and rate change the result?</h2>
      <ul>
        <li><strong>3-year loan, same rate and fee:</strong> $516.93 a month, $3,609.38 in interest and fees.</li>
        <li><strong>5-year loan:</strong> $343.30 a month, $5,598.09.</li>
        <li><strong>7-year loan:</strong> $270.35 a month, $7,709.76. The payment is lower, but the cost is more than double the 3-year loan.</li>
        <li><strong>Rate of 22% instead of 11% (5 years, same fee):</strong> $436.09 a month and $11,165.29 in interest and fees, which is $274.12 <em>more</em> than clearing the cards over 5 years.</li>
      </ul>

      <h2>What about a balance transfer instead?</h2>
      <p>
        Suppose a card offers 0% for 18 months with a 3% transfer fee. The fee is $450 and the balance becomes $15,450. After 18
        payments of $343.30 you still owe $9,270.57. If the rate then reverts to 24%, you need 40 more months, paying $4,195.19 in interest. That
        is 58 months and $4,645.19 in interest and fees, which is $952.90 less than the loan in this example. The catch is that you must
        qualify, and the saving shrinks fast if the 0% period is shorter or the leftover balance is large. See{" "}
        <Link href="/guides/balance-transfer-math">balance transfer math</Link> for the full breakdown.
      </p>

      <h2>How do you decide?</h2>
      <ul>
        <li><strong>Add up the all-in cost.</strong> Interest plus every fee, over the full term, for each option on the same basis.</li>
        <li><strong>Check the rate gap.</strong> A large gap pays off the fee quickly; a small one may not.</li>
        <li><strong>Pick the shortest term you can afford.</strong> Choose the payment you can sustain, not the lowest one offered.</li>
        <li><strong>Be honest about spending.</strong> Consolidation works when the cards stay near zero afterwards.</li>
        <li><strong>Consider a payoff order.</strong> If you only have a few small debts, <Link href="/guides/debt-avalanche-vs-snowball">avalanche or snowball</Link> may be enough without a new loan.</li>
        <li><strong>Check for prepayment charges</strong> on the old and new debts before you sign.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Comparing only the monthly payment.</strong> A 7-year loan has a smaller payment than a 3-year loan and costs far more.</li>
        <li><strong>Ignoring the fee.</strong> A fee deducted from proceeds means you borrow, and pay interest on, more than you receive.</li>
        <li><strong>Running the cards up again.</strong> This is the most common way consolidation backfires.</li>
        <li><strong>Assuming you will get the advertised rate.</strong> Lenders often advertise their best rate; yours depends on your credit profile.</li>
        <li><strong>Putting secured assets at risk.</strong> A loan secured on your home can be lost if you cannot pay. Unsecured debt does not carry that risk.</li>
        <li><strong>Skipping a plan for unaffordable debt.</strong> If you cannot meet payments, speak to a free, regulated debt advice service before taking on more credit.</li>
      </ul>

      <h2>Where can I get official guidance?</h2>
      <p>
        See the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a>. To see how long
        card payoff takes at different payments, read{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long to pay off a credit card</Link>. This guide is general
        information, not financial advice.
      </p>
    </GuideLayout>
  );
}
