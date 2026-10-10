import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "how-long-to-pay-off-credit-card";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        At a 24% APR, <strong>$5,000 of credit card debt takes 36 months to clear with $200 a month</strong> and costs about $2,001 in
        interest. <strong>$10,000 with $300 a month takes 56 months</strong> and about $6,644 in interest. The answer depends on three
        numbers: the balance, the APR and the fixed amount you pay each month. This guide shows all three together.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Your payment must be larger than one month&apos;s interest, or the balance never falls.</li>
        <li>Going from $150 to $200 a month on $5,000 at 24% cuts the payoff from 56 to 36 months and saves about $1,322.</li>
        <li>Paying only a typical minimum (interest plus 1% of the balance) can take 20 years or more.</li>
        <li>To be debt-free in 24 months, $5,000 at 24% needs about $265 a month, and $10,000 needs about $529.</li>
      </ul>
      <p>
        <small>
          Every figure below assumes a fixed monthly payment, no new purchases, and interest of APR ÷ 12 charged each month on the
          balance. Real cards charge interest daily, so your statement will differ by a few dollars.
        </small>
      </p>

      <h2>How many months does $5,000 of credit card debt take to pay off?</h2>
      <p>
        With $5,000, even the smallest payment in the table below beats the first month&apos;s interest ($83 to $117, depending on
        the APR). Each cell shows the number of months and the total interest paid.
      </p>
      <table>
        <thead>
          <tr>
            <th>$5,000 at…</th>
            <th>$150/mo</th>
            <th>$200/mo</th>
            <th>$300/mo</th>
            <th>$500/mo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20% APR</td>
            <td>50 mo / $2,359</td>
            <td>33 mo / $1,522</td>
            <td>20 mo / $907</td>
            <td>12 mo / $515</td>
          </tr>
          <tr>
            <td>24% APR</td>
            <td>56 mo / $3,322</td>
            <td>36 mo / $2,001</td>
            <td>21 mo / $1,143</td>
            <td>12 mo / $635</td>
          </tr>
          <tr>
            <td>28% APR</td>
            <td>66 mo / $4,782</td>
            <td>38 mo / $2,591</td>
            <td>22 mo / $1,406</td>
            <td>12 mo / $761</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice how little the APR matters once you pay $500 a month: the three rates finish together in 12 months. At $150 a month the
        same rates are 16 months apart. The lower your payment, the more interest rate decides the result.
      </p>

      <h2>How long does $10,000 of credit card debt take to pay off?</h2>
      <p>
        Here some combinations are impossible. A payment at or below the first month&apos;s interest ($167 at 20%, $200 at 24%,
        $233 at 28%) leaves the balance flat or growing.
      </p>
      <table>
        <thead>
          <tr>
            <th>$10,000 at…</th>
            <th>$150/mo</th>
            <th>$200/mo</th>
            <th>$300/mo</th>
            <th>$500/mo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20% APR</td>
            <td>Never*</td>
            <td>109 mo / $11,680</td>
            <td>50 mo / $4,718</td>
            <td>25 mo / $2,266</td>
          </tr>
          <tr>
            <td>24% APR</td>
            <td>Never*</td>
            <td>Never*</td>
            <td>56 mo / $6,644</td>
            <td>26 mo / $2,899</td>
          </tr>
          <tr>
            <td>28% APR</td>
            <td>Never*</td>
            <td>Never*</td>
            <td>66 mo / $9,563</td>
            <td>28 mo / $3,628</td>
          </tr>
        </tbody>
      </table>
      <p>
        <small>*Payment is at or below the first month&apos;s interest, so the balance does not shrink.</small>
      </p>
      <p>
        At 20% and $200 a month you would pay $11,680 in interest on a $10,000 debt. That is more than the original balance, and
        the payoff takes over nine years. A balance left alone compounds quickly too. At 24%, debt roughly doubles in three
        years (72 ÷ 24 = 3, see our <Link href="/guides/rule-of-72">Rule of 72 guide</Link>), and 1.02 to the 36th power is 2.04.
      </p>

      <h2>How is the payoff time calculated?</h2>
      <p>
        Each month, interest equals the balance times APR ÷ 12. Your payment covers that interest first, and what is left reduces
        the balance. With a monthly rate <em>r</em>, balance <em>B</em> and payment <em>P</em>:
      </p>
      <p>
        <strong>Months = −ln(1 − r × B ÷ P) ÷ ln(1 + r)</strong>, rounded up
      </p>
      <p>
        For $5,000 at 24% with $200: r = 0.02, so r × B = $100 and the formula gives 35.003, which rounds up to 36 payments (the last
        one is tiny). The formula only works when P is larger than r × B, which is exactly the &quot;Never&quot; rule above. You can
        test your own balance in the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>

      <h2>What is the minimum payment trap?</h2>
      <p>
        Minimum payments are designed to be small, and they shrink as your balance shrinks. We simulated one common style as an{" "}
        <strong>illustrative assumption</strong>: the minimum is all of the month&apos;s interest plus 1% of the balance, never less
        than $25 (or the whole balance if it is smaller), with no new purchases. Your issuer&apos;s formula may differ, so check your
        statement. US statements must carry a minimum-payment warning showing how long payoff takes if you pay only the minimum.
      </p>
      <table>
        <thead>
          <tr>
            <th>Balance / APR</th>
            <th>First minimum</th>
            <th>Time to pay off</th>
            <th>Total interest</th>
            <th>Total paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$5,000 at 20%</td>
            <td>$133</td>
            <td>226 mo (18.8 yrs)</td>
            <td>$7,317</td>
            <td>$12,317</td>
          </tr>
          <tr>
            <td>$5,000 at 24%</td>
            <td>$150</td>
            <td>234 mo (19.5 yrs)</td>
            <td>$8,887</td>
            <td>$13,887</td>
          </tr>
          <tr>
            <td>$5,000 at 28%</td>
            <td>$167</td>
            <td>241 mo (20.1 yrs)</td>
            <td>$10,472</td>
            <td>$15,472</td>
          </tr>
          <tr>
            <td>$10,000 at 20%</td>
            <td>$267</td>
            <td>295 mo (24.6 yrs)</td>
            <td>$15,650</td>
            <td>$25,650</td>
          </tr>
          <tr>
            <td>$10,000 at 24%</td>
            <td>$300</td>
            <td>303 mo (25.3 yrs)</td>
            <td>$18,887</td>
            <td>$28,887</td>
          </tr>
          <tr>
            <td>$10,000 at 28%</td>
            <td>$333</td>
            <td>310 mo (25.8 yrs)</td>
            <td>$22,138</td>
            <td>$32,138</td>
          </tr>
        </tbody>
      </table>
      <p>
        The trap is that only 1% of the balance goes to principal. On $5,000 at 24%, the first $150 minimum pays $100 of interest and
        just $50 of debt. If you instead keep paying that same $150 every month, you finish in 56 months with $3,322 in interest,
        instead of 234 months and $8,887. <strong>Paying the first minimum as a fixed amount cuts the time by about 15 years.</strong>
      </p>

      <h2>What monthly payment clears the debt in 12, 24 or 36 months?</h2>
      <p>
        Working backwards from a deadline is often more motivating. The table shows the payment, rounded up to the next dollar, and
        the total interest in brackets.
      </p>
      <table>
        <thead>
          <tr>
            <th>Balance / APR</th>
            <th>12 months</th>
            <th>24 months</th>
            <th>36 months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$5,000 at 20%</td>
            <td>$464 ($557)</td>
            <td>$255 ($1,105)</td>
            <td>$186 ($1,687)</td>
          </tr>
          <tr>
            <td>$5,000 at 24%</td>
            <td>$473 ($673)</td>
            <td>$265 ($1,340)</td>
            <td>$197 ($2,049)</td>
          </tr>
          <tr>
            <td>$5,000 at 28%</td>
            <td>$483 ($790)</td>
            <td>$275 ($1,582)</td>
            <td>$207 ($2,442)</td>
          </tr>
          <tr>
            <td>$10,000 at 20%</td>
            <td>$927 ($1,115)</td>
            <td>$509 ($2,215)</td>
            <td>$372 ($3,374)</td>
          </tr>
          <tr>
            <td>$10,000 at 24%</td>
            <td>$946 ($1,347)</td>
            <td>$529 ($2,687)</td>
            <td>$393 ($4,113)</td>
          </tr>
          <tr>
            <td>$10,000 at 28%</td>
            <td>$966 ($1,579)</td>
            <td>$549 ($3,172)</td>
            <td>$414 ($4,884)</td>
          </tr>
        </tbody>
      </table>
      <p>
        These payments come from the standard loan-payment formula, the same one used in our{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link>. Doubling the term from 12 to 24 months
        cuts the payment by roughly 45% but about doubles the interest.
      </p>

      <h2>How much does an extra $50 or $100 a month change the answer?</h2>
      <p>The returns on small increases are large because they cut the principal that interest is charged on.</p>
      <table>
        <thead>
          <tr>
            <th>$5,000 at 24%</th>
            <th>Months</th>
            <th>Total interest</th>
            <th>Interest saved vs. $150</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$150/mo</td>
            <td>56</td>
            <td>$3,322</td>
            <td>-</td>
          </tr>
          <tr>
            <td>$200/mo</td>
            <td>36</td>
            <td>$2,001</td>
            <td>$1,322</td>
          </tr>
          <tr>
            <td>$250/mo</td>
            <td>26</td>
            <td>$1,449</td>
            <td>$1,873</td>
          </tr>
          <tr>
            <td>$300/mo</td>
            <td>21</td>
            <td>$1,143</td>
            <td>$2,179</td>
          </tr>
        </tbody>
      </table>

      <h2>How should I decide on a payoff plan?</h2>
      <ol>
        <li>
          <strong>Find your APR and balance</strong> on the latest statement. Use the purchase APR, not the promotional one.
        </li>
        <li>
          <strong>Pick a payoff date</strong> you can keep, then use the table above or the calculator to find the payment.
        </li>
        <li>
          <strong>Check the budget.</strong> If the payment is out of reach, extend the date rather than skipping months. A longer
          plan that you complete beats a short plan you abandon.
        </li>
        <li>
          <strong>Automate it.</strong> Set a fixed monthly payment above the minimum so it does not shrink as the balance falls.
        </li>
        <li>
          <strong>With several cards,</strong> see which order works best in{" "}
          <Link href="/guides/debt-avalanche-vs-snowball">debt avalanche vs. snowball</Link>.
        </li>
        <li>
          <strong>Consider cheaper debt.</strong> A 0% offer can cut interest if you can clear it in time. Read{" "}
          <Link href="/guides/balance-transfer-math">the real math on balance transfers</Link> first.
        </li>
      </ol>

      <h2>What are the most common mistakes?</h2>
      <ul>
        <li>
          <strong>Paying the minimum and calling it a plan.</strong> The statement minimum is the lender&apos;s number, not yours.
        </li>
        <li>
          <strong>Adding new purchases.</strong> Every table here assumes the balance only falls. New spending resets the clock.
        </li>
        <li>
          <strong>Ignoring the emergency gap.</strong> With no cash buffer, one car repair goes back on the card. A small starter
          fund helps, and the <Link href="/calculators/savings-goal">savings goal calculator</Link> shows how long it takes.
        </li>
        <li>
          <strong>Judging by the payment, not the total.</strong> A lower payment looks affordable but, as the tables show, costs far
          more in interest.
        </li>
        <li>
          <strong>Forgetting the APR can change.</strong> In the US most card rates are variable, so recheck your numbers when the rate moves.
        </li>
      </ul>

      <h2>Does this work the same way in the UK and Europe?</h2>
      <p>
        The arithmetic is identical for any currency: replace $ with £ or €. Card providers quote the rate as an APR, and UK
        statements typically include a warning about how long minimum-only repayment takes. Interest rules and minimum formulas
        differ by country and provider, so treat the figures here as a guide and check your own agreement. For independent
        guidance, the US Consumer Financial Protection Bureau publishes{" "}
        <a href="https://www.consumerfinance.gov/consumer-tools/credit-cards/" target="_blank" rel="noopener noreferrer">
          credit card tools and explainers
        </a>
        , and in the UK{" "}
        <a href="https://www.moneyhelper.org.uk/" target="_blank" rel="noopener noreferrer">
          MoneyHelper
        </a>{" "}
        offers free debt advice.
      </p>

      <h2>What should I do next?</h2>
      <p>
        Enter your own balance, APR and payment into the{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>, pick a payment from the tables that
        fits your budget, and set it up as an automatic transfer. If you are struggling to cover even the interest, a nonprofit
        credit counselor can help you negotiate a plan.
      </p>
    </GuideLayout>
  );
}
