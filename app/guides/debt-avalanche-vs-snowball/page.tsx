import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "debt-avalanche-vs-snowball";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        If you have several debts, the order you pay them off matters. Two strategies dominate: the <strong>debt avalanche</strong>{" "}
        and the <strong>debt snowball</strong>. Both start the same way — pay the minimum on everything, then throw every spare
        dollar at one target debt — but they pick that target differently.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The avalanche targets the highest interest rate first and always costs the least interest. The snowball targets the smallest balance first and gives faster early wins.</li>
        <li>In our three-debt example the avalanche saves about $155 in interest and both methods finish in month 27. Paying only minimums would take 87 months and about $8,417 in interest.</li>
        <li>The gap widens when your highest-rate debt is also your biggest. In our second example the avalanche saves about $1,967 and finishes three months sooner.</li>
        <li>The total you put toward debt each month matters more than the method. Roll freed-up payments forward and never lower your total.</li>
        <li>Pick the method you will stick with. A plan you abandon saves nothing.</li>
      </ul>

      <h2>How the two methods work</h2>
      <h3>Debt avalanche: highest interest rate first</h3>
      <p>
        List your debts from highest APR to lowest. Put all extra money toward the highest-rate debt. When it&apos;s gone, roll that
        payment into the next-highest rate. Because you eliminate the most expensive debt first, this method always costs the least
        interest.
      </p>
      <h3>Debt snowball: smallest balance first</h3>
      <p>
        List your debts from smallest balance to largest, regardless of rate. Clear the smallest one first, then roll its payment
        into the next. You pay a little more interest, but you get quick wins that can keep you motivated.
      </p>

      <h2>A worked example</h2>
      <p>Imagine three debts and a total budget of <strong>$700 a month</strong> for debt repayment:</p>
      <table>
        <thead>
          <tr>
            <th>Debt</th>
            <th>Balance</th>
            <th>APR</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Store card</td>
            <td>$1,200</td>
            <td>15.9%</td>
            <td>$35</td>
          </tr>
          <tr>
            <td>Credit card</td>
            <td>$6,000</td>
            <td>24.9%</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Car loan</td>
            <td>$9,000</td>
            <td>6.9%</td>
            <td>$260</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Avalanche</th>
            <th>Snowball</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First debt cleared</td>
            <td>Month 18 (credit card)</td>
            <td>Month 5 (store card)</td>
          </tr>
          <tr>
            <td>Debt-free</td>
            <td>Month 27</td>
            <td>Month 27</td>
          </tr>
          <tr>
            <td>Total interest</td>
            <td>≈ $2,400</td>
            <td>≈ $2,560</td>
          </tr>
        </tbody>
      </table>
      <p>
        The avalanche saves about <strong>$155</strong> here. The snowball delivers its first win more than a year earlier. Both are
        debt-free in the same month, because the same $700 goes to debt every month either way.
      </p>

      <h2>What if you only pay the minimums?</h2>
      <p>
        Minimums are set low so that debt lasts. In the same example, if you paid only the stated minimums and never rolled anything
        forward, the car loan would end in month 39, the store card in month 47 and the credit card in month 87, with total interest
        of about $8,417. The extra $255 a month (the $700 budget minus $445 of minimums) cuts that to about $2,400 and 27 months.
        You can see how one card behaves with the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>

      <h2>When does the avalanche win by a lot?</h2>
      <p>
        The gap is small when your balances are small or your rates are close together. It grows when the highest-rate debt is also
        large, because the snowball leaves that expensive debt untouched for longer. Here is a second mix with a <strong>$650</strong>{" "}
        monthly budget:
      </p>
      <table>
        <thead>
          <tr>
            <th>Debt</th>
            <th>Balance</th>
            <th>APR</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Card X</td>
            <td>$2,500</td>
            <td>19.9%</td>
            <td>$60</td>
          </tr>
          <tr>
            <td>Card Y</td>
            <td>$9,500</td>
            <td>29.9%</td>
            <td>$260</td>
          </tr>
          <tr>
            <td>Personal loan</td>
            <td>$5,000</td>
            <td>9.0%</td>
            <td>$110</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Avalanche</th>
            <th>Snowball</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First debt cleared</td>
            <td>Month 28 (Card Y)</td>
            <td>Month 10 (Card X)</td>
          </tr>
          <tr>
            <td>Debt-free</td>
            <td>Month 36</td>
            <td>Month 39</td>
          </tr>
          <tr>
            <td>Total interest</td>
            <td>≈ $5,778</td>
            <td>≈ $7,745</td>
          </tr>
        </tbody>
      </table>
      <p>
        Here the avalanche saves about <strong>$1,967</strong> and finishes three months sooner. The snowball spends 39 months
        paying 29.9% on the largest balance while it works through the smaller ones. If you lean toward the snowball in a case like
        this, the hybrid approach below limits the cost.
      </p>

      <h2>How much does your monthly budget change things?</h2>
      <p>
        Using the first three debts, here is how the total monthly budget changes the outcome. Minimums add up to $445, so $500 leaves
        only $55 extra.
      </p>
      <table>
        <thead>
          <tr>
            <th>Monthly budget</th>
            <th>Avalanche: months / interest</th>
            <th>Snowball: months / interest</th>
            <th>Avalanche saves</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$500</td>
            <td>42 / $4,747</td>
            <td>44 / $5,339</td>
            <td>$592</td>
          </tr>
          <tr>
            <td>$600</td>
            <td>33 / $3,132</td>
            <td>33 / $3,339</td>
            <td>$207</td>
          </tr>
          <tr>
            <td>$700</td>
            <td>27 / $2,402</td>
            <td>27 / $2,557</td>
            <td>$155</td>
          </tr>
          <tr>
            <td>$850</td>
            <td>22 / $1,814</td>
            <td>22 / $1,925</td>
            <td>$111</td>
          </tr>
          <tr>
            <td>$1,000</td>
            <td>18 / $1,475</td>
            <td>18 / $1,560</td>
            <td>$85</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice the pattern. Going from $500 to $1,000 a month saves roughly $3,300 in interest and 24 months, far more than the
        choice of method does. Finding an extra $100 a month matters more than picking the &quot;perfect&quot; order.
      </p>

      <h2>Which one should you choose?</h2>
      <ul>
        <li><strong>Choose the avalanche</strong> if you are disciplined and motivated by saving the most money, or if your high-rate debt is also large.</li>
        <li><strong>Choose the snowball</strong> if you&apos;ve struggled to stick with a plan before. Research on consumer behaviour suggests early wins help many people keep going.</li>
        <li><strong>Hybrid:</strong> knock out one or two tiny balances for momentum, then switch to avalanche order.</li>
      </ul>
      <p>The best method is the one you will actually finish.</p>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Missing a minimum.</strong> Late fees and penalty rates can erase your progress. Set up autopay for every minimum.</li>
        <li><strong>Lowering your payment when a debt is cleared.</strong> The method works because the freed-up payment rolls forward. Keep the same total going.</li>
        <li><strong>Adding new charges.</strong> Paying a card down while spending on it again goes nowhere. Pause card use, or switch to cash or debit while you pay off.</li>
        <li><strong>Ignoring promotional rates.</strong> A 0% deal that ends can jump to a high APR. Note the end date and plan to clear it before then.</li>
        <li><strong>Skipping a starter emergency fund.</strong> Without any cash, one car repair goes straight back on a card.</li>
      </ul>

      <h2>Should you pay debt or invest?</h2>
      <p>
        A guaranteed &quot;return&quot; from clearing a 24.9% card is hard to match elsewhere. The Rule of 72 shows why: 72 ÷ 24.9
        is about 2.9, so a card balance left alone roughly doubles in under three years. Our{" "}
        <Link href="/guides/rule-of-72">Rule of 72 guide</Link> explains the shortcut. As a general approach, many people capture any
        employer retirement match first, then attack high-rate debt. For low-rate debt, such as a 3% to 7% mortgage or car loan, it is
        reasonable to invest at the same time. Compare options with the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link>, and see how the same trade-off plays out on
        a home loan in our guide to <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link>.
      </p>

      <h2>Does this work in the UK and Europe?</h2>
      <p>
        Yes, the ordering logic is identical. Use the rate shown on your statement or loan agreement (a UK APR already
        includes compounding, so the monthly rate is slightly below APR ÷ 12, but the payoff order doesn&apos;t change). In the UK, many
        borrowers also consider 0% balance transfer cards and consolidation loans, and the independent{" "}
        <a href="https://www.moneyhelper.org.uk/en/money-troubles" target="_blank" rel="noopener noreferrer">MoneyHelper service</a>{" "}
        offers free guidance if you are struggling. In the US, nonprofit credit counseling agencies, such as members of the{" "}
        <a href="https://www.nfcc.org/" target="_blank" rel="noopener noreferrer">National Foundation for Credit Counseling</a>, can
        help you build a plan. If you cannot cover your minimums, seek advice early instead of choosing a payoff method.
      </p>

      <h2>Speed up either method</h2>
      <ul>
        <li>Ask card issuers for a lower APR — a one-minute call can cut your rate.</li>
        <li>Consider a 0% balance transfer or a lower-rate consolidation loan (watch for fees).</li>
        <li>Put windfalls such as tax refunds straight onto the target debt.</li>
        <li>Keep a small emergency fund so new expenses don&apos;t go back on a card — our <Link href="/calculators/savings-goal">savings goal calculator</Link> can help you plan one.</li>
        <li>For installment loans such as a car loan, see what extra payments do in the <Link href="/calculators/loan-amortization">loan amortization calculator</Link>.</li>
      </ul>
      <p>
        All figures above come from a month-by-month simulation that charges interest at APR ÷ 12 on the balance, pays minimums
        first, then sends the rest to the target debt. Real statements can differ slightly because of daily interest, fees and
        changing minimums. See exactly how long one card will take to clear with the calculator below.
      </p>
    </GuideLayout>
  );
}
