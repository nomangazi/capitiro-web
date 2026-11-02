import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "minimum-payment-trap";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $5,000 at 22% APR. Declining minimum = max(1% of balance + that month's interest, $25). */
const OPTIONS = [
  { option: "Declining minimum (1% + interest)", payment: "$141.67, falling to about $25", time: "230 months (19 years 2 months)", interest: "$8,099.77", total: "$13,099.77" },
  { option: "Fixed at the first minimum", payment: "$141.67", time: "58 months (4 years 10 months)", interest: "$3,121.43", total: "$8,121.43" },
  { option: "Fixed $200", payment: "$200.00", time: "34 months (2 years 10 months)", interest: "$1,749.88", total: "$6,749.88" },
  { option: "Fixed $300", payment: "$300.00", time: "21 months (1 year 9 months)", interest: "$1,021.60", total: "$6,021.60" },
  { option: "Fixed to clear in 24 months", payment: "$259.39", time: "24 months (2 years)", interest: "$1,225.38", total: "$6,225.38" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        The minimum payment is the smallest amount your card issuer lets you pay without being late. It is built to keep the account
        open and the interest flowing, not to clear the debt quickly.{" "}
        <strong>
          In the example below, a $5,000 balance at 22% APR takes 230 months (over 19 years) and costs $8,099.77 in interest if you
          pay only a declining minimum, against 58 months and $3,121.43 if you keep paying the first minimum every month.
        </strong>{" "}
        That gap is the minimum payment trap.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>A minimum that shrinks with your balance means each payment does less work, so the debt lingers for years.</li>
        <li>In the example, interest is $8,099.77 on a $5,000 balance. You repay $13,099.77 in total, about 2.6 times what you borrowed.</li>
        <li>Simply keeping the first month&apos;s payment fixed cuts the time from 230 months to 58 and the interest by $4,978.34.</li>
        <li>Paying $300 instead of $200 a month saves $728.28 in interest and 13 months.</li>
        <li>Pick a payoff date, work out the fixed payment that reaches it, and treat the minimum as a safety net, not a plan.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: $5,000 owed at 22% APR, no new purchases, interest added monthly (APR ÷ 12), payments made
          on time. The declining minimum is illustrative: each month you pay 1% of the balance plus that month&apos;s interest, with a
          $25 floor, and never more than the amount owed. Real formulas vary by issuer and country. The arithmetic is the same in
          any currency, so $5,000 can be read as £5,000 or €5,000. Figures are rounded to the cent.
        </small>
      </p>

      <h2>How is a credit card minimum payment calculated?</h2>
      <p>
        There is no single rule. A common approach is a small percentage of the balance plus the interest charged that month, with a
        fixed floor for small balances. Others use a percentage of the balance alone, or the greater of a flat amount and a
        percentage. Issuers in the US, UK and EU set their own formulas within local rules, and your statement shows the exact
        amount. Check your card agreement before relying on any example, including this one.
      </p>
      <p>
        What matters is the shape: the payment is tied to the balance, so as you pay down, the required payment falls too.
      </p>

      <h2>Why does paying only the minimum take so long?</h2>
      <p>
        At 22% APR, the first month&apos;s interest on $5,000 is $91.67 (5,000 × 22% ÷ 12). The first minimum is $141.67, which is 1% of
        the balance ($50.00) plus that interest. Only $50.00 of your payment reduces the debt. After 12 payments the balance is still
        $4,431.92, a drop of just $568.08.
      </p>
      <p>
        Because the next minimum is calculated on the smaller balance, the payment shrinks and the principal part stays small. After
        24 months you still owe $3,928.39, after 60 months $2,735.78 and after 120 months $1,496.90. The $25 floor hardly matters
        here. It only bites at the very end, when the final payment is $22.86.
      </p>

      <h2>How do different payment strategies compare?</h2>
      <p>
        Here is the same $5,000 at 22% APR under five approaches. Use the{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link> to run your own balance, rate and payment.
      </p>
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Monthly payment</th>
            <th>Time to be debt-free</th>
            <th>Total interest</th>
            <th>Total paid</th>
          </tr>
        </thead>
        <tbody>
          {OPTIONS.map((row) => (
            <tr key={row.option}>
              <td>{row.option}</td>
              <td>{row.payment}</td>
              <td>{row.time}</td>
              <td>{row.interest}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Worked example: what does each extra dollar buy?</h2>
      <p>
        Start with the declining minimum: 230 months, $8,099.77 of interest. Now keep paying the first minimum of $141.67 instead of
        letting it fall. You finish in 58 months and pay $3,121.43, which is 172 months and $4,978.34 less. You did not pay more in
        the first month. You simply refused to pay less later.
      </p>
      <ul>
        <li><strong>$141.67 to $200 (+$58.33):</strong> 24 months sooner and $1,371.55 less interest.</li>
        <li><strong>$200 to $300 (+$100):</strong> 13 months sooner and $728.28 less interest.</li>
        <li><strong>$141.67 to $300 (+$158.33):</strong> 37 months sooner and $2,099.83 less interest.</li>
      </ul>
      <p>
        The 24-month plan needs $259.39 a month. That is $117.72 more than the first minimum, yet total interest is $1,225.38, which is
        $6,874.39 less than the declining minimum. A fixed $300 clears the card in 21 months for $1,021.60, so $259.39 is a fair
        middle path if you want a firm two-year date.
      </p>

      <h2>How do you decide what to pay?</h2>
      <ul>
        <li><strong>Start with a date.</strong> Choose how many months you can live with, then find the fixed payment that reaches it.</li>
        <li><strong>Fix the amount.</strong> Set a standing payment at your chosen level, so a falling minimum cannot lower it.</li>
        <li><strong>Make the budget real.</strong> If $259.39 is too much, find the highest figure you can keep up for the whole period.</li>
        <li><strong>Add windfalls.</strong> Tax refunds and bonuses are most valuable at the start, when the balance and interest are highest.</li>
        <li><strong>Stop adding to the balance.</strong> New spending resets the clock and every example above assumes none.</li>
        <li><strong>Check a cheaper rate.</strong> A 0% offer may help, once fees are counted; see <Link href="/guides/balance-transfer-math">balance transfer math</Link>.</li>
        <li><strong>If you have several cards,</strong> pay the minimum on all and send the extra to one. Read <Link href="/guides/debt-avalanche-vs-snowball">avalanche vs snowball</Link> to choose which.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Treating the minimum as the recommended amount.</strong> It is the lowest payment allowed, not the amount that clears the debt.</li>
        <li><strong>Letting autopay stay on &quot;minimum&quot;.</strong> It keeps you current, but the debt can outlast many other goals.</li>
        <li><strong>Looking only at the monthly figure.</strong> A payment of $141.67 sounds manageable, yet the declining version costs $8,099.77 in interest.</li>
        <li><strong>Paying less than the interest.</strong> If a payment is below the monthly interest the balance never falls, and the calculator will report it as unpayable.</li>
        <li><strong>Assuming your formula matches this one.</strong> Your issuer may use a different percentage or floor. Use your statement as the starting point.</li>
        <li><strong>Waiting until you are in trouble.</strong> If you cannot meet even minimums, contact the issuer or a free, regulated debt advice service early.</li>
      </ul>

      <h2>How long will my card take to pay off?</h2>
      <p>
        Your answer depends on your own balance, APR and payment. The guide{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long to pay off a credit card</Link> shows more balances and payment
        levels side by side, and the{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link> gives your exact month count and interest.
      </p>

      <h2>Where can I get official guidance?</h2>
      <p>
        See the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a> for how card
        statements, minimum payments and debt help work in your country. This guide is general information, not financial advice.
      </p>
    </GuideLayout>
  );
}
