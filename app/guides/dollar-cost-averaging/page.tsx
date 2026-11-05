import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "dollar-cost-averaging";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Dollar-cost averaging means investing the same fixed amount at regular intervals, whatever prices are doing. Because the
        amount is fixed, it buys more units when prices are low and fewer when they are high, which pulls your average cost per unit
        below the average price. It does not stop losses and it does not beat investing a lump sum in a rising market. What it does
        is make investing automatic and take timing out of your hands.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Dollar-cost averaging (DCA) is a fixed amount on a fixed schedule, such as $300 on the first of every month.</li>
        <li>Your average cost per unit is always at or below the simple average of the prices you paid. In the hypothetical path below, it is $15.38 against an average price of $16.40.</li>
        <li>DCA reduces timing regret but not market risk. If prices fall and stay down, you still lose money, only less than a lump sum would have.</li>
        <li>At 7% a year, $300 a month grows to about $157,190 after 20 years on $72,000 paid in. The habit and the time matter more than the technique.</li>
        <li>If your money arrives as salary, you are already doing DCA. The useful decisions are how much, how early and at what cost.</li>
      </ul>

      <h2>What is dollar-cost averaging?</h2>
      <p>
        You pick an amount, a schedule and an investment, then buy on every date without checking the price. In the US this is called
        dollar-cost averaging, in the UK people say pound-cost averaging or regular investing, and in India it is a SIP. Most 401(k)
        and workplace pension contributions are DCA by default, because a slice of every paycheck is invested on payday.
      </p>
      <p>
        The &quot;averaging&quot; is about your cost. A fixed amount buys units in inverse proportion to the price, so you automatically
        buy more on the dips. The next section shows the arithmetic with invented prices you can check by hand.
      </p>

      <h2>How does the averaging actually work?</h2>
      <p>
        These prices are <strong>hypothetical</strong>, chosen to make the sums easy. They ignore dividends, fees and taxes and are
        not a forecast. You invest $200 a month for 5 months, $1,000 in total, and the price per unit moves like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Price per unit</th>
            <th>Units bought with $200</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>$20</td><td>10</td></tr>
          <tr><td>2</td><td>$16</td><td>12.5</td></tr>
          <tr><td>3</td><td>$10</td><td>20</td></tr>
          <tr><td>4</td><td>$16</td><td>12.5</td></tr>
          <tr><td>5</td><td>$20</td><td>10</td></tr>
          <tr><td><strong>Total</strong></td><td>Average price $16.40</td><td><strong>65</strong></td></tr>
        </tbody>
      </table>
      <p>
        You paid $1,000 for 65 units, so your average cost is $1,000 ÷ 65 = $15.38 per unit. That is below the $16.40 simple average
        of the five prices, because the cheap month bought the most units. The price ends back at $20, where the 65 units are worth
        $1,300, a gain of $300. Someone who put the full $1,000 in at month 1 bought 50 units and ends with $1,000, a gain of zero.
        The price went nowhere, yet DCA made money.
      </p>
      <p>
        That result needs a dip along the way. With no dip there is nothing to average. If the price sits at $20 for all five
        months, you end with 50 units worth $1,000, exactly the same as the lump sum.
      </p>

      <h2>Does dollar-cost averaging beat investing a lump sum?</h2>
      <p>
        It depends on the path the price takes, which you cannot know in advance. Using the same $1,000 and five months, here are
        three hypothetical paths. The lump sum buys everything at the month 1 price.
      </p>
      <table>
        <thead>
          <tr>
            <th>Hypothetical path (price per unit, months 1 to 5)</th>
            <th>$1,000 lump sum in month 1</th>
            <th>$200 a month for 5 months</th>
            <th>Better outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dips then recovers: 20, 16, 10, 16, 20</td>
            <td>$1,000 (50 units)</td>
            <td>$1,300 (65 units)</td>
            <td>DCA by $300</td>
          </tr>
          <tr>
            <td>Falls and stays down: 20, 16, 10, 10, 10</td>
            <td>$500 (50 units)</td>
            <td>$825 (82.5 units)</td>
            <td>DCA by $325</td>
          </tr>
          <tr>
            <td>Rises and stays up: 10, 12.5, 20, 25, 25</td>
            <td>$2,500 (100 units)</td>
            <td>$1,550 (62 units)</td>
            <td>Lump sum by $950</td>
          </tr>
        </tbody>
      </table>
      <p>
        Values are measured at the month 5 price. In the second row, DCA still loses: $825 is less than the $1,000 you put in. It
        simply loses less than the lump sum. In the third row, the lump sum wins by a wide margin because every unit was bought at
        the cheapest price. This is the trade-off in one table: DCA gives up some upside in a rising market to cushion a falling one.
      </p>
      <p>
        Our guide to <Link href="/guides/sip-vs-lump-sum">SIP vs lump sum investing</Link> runs the same comparison with steady
        returns over 10 years. Historical studies are often reported to favor a lump sum more often than not, because markets have
        tended to rise over long periods, but results vary by market and period, so we do not quote a figure.
      </p>

      <h2>What does regular investing build over time?</h2>
      <p>
        Averaging is the small part of the story. Most of the long-term result comes from the contribution, the time and the return.
        Here is $300 a month at a constant 7% a year, compounded monthly with the deposit at the start of each month, and no fees or
        taxes. A constant rate is a simplification, since real returns vary and can be negative.
      </p>
      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Total paid in</th>
            <th>Balance</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>5</td><td>$18,000</td><td>$21,603</td><td>$3,603</td></tr>
          <tr><td>10</td><td>$36,000</td><td>$52,228</td><td>$16,228</td></tr>
          <tr><td>20</td><td>$72,000</td><td>$157,190</td><td>$85,190</td></tr>
          <tr><td>30</td><td>$108,000</td><td>$368,126</td><td>$260,126</td></tr>
        </tbody>
      </table>
      <p>
        After 10 years, growth is about 31% of the balance. After 20 years it is more than half, and after 30 years it is most of
        it. The last decade adds $210,936 to the balance from only $36,000 of new deposits. You can change the amount, rate and
        period in the <Link href="/calculators/sip-return">SIP calculator</Link>.
      </p>

      <h2>How much do the amount, the rate and a yearly increase matter?</h2>
      <p>
        Using the same 7% and 20 years: $100 a month grows to $52,397, $300 to $157,190 and $500 to $261,983. At $300 a month for
        20 years, a return of 5% gives $123,824 and 9% gives $201,869. Your contribution is the one input you control, and a small
        yearly increase helps. Raising the $300 by 3% at the start of each year gives $197,418 after 20 years on $96,733 paid in,
        against $157,190 on $72,000 for a flat $300.
      </p>

      <h2>When does dollar-cost averaging help, and when does it not?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Does DCA fit?</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Investing from monthly income</td>
            <td>Yes</td>
            <td>The money only exists month by month, so this is the plan</td>
          </tr>
          <tr>
            <td>Holding a lump sum, nervous about a fall</td>
            <td>Maybe</td>
            <td>Phasing in over 3 to 12 months trades some expected growth for less regret</td>
          </tr>
          <tr>
            <td>Holding a lump sum, long horizon, comfortable with swings</td>
            <td>Often not</td>
            <td>Waiting leaves cash uninvested, which has a cost when prices rise</td>
          </tr>
          <tr>
            <td>Money needed within a few years</td>
            <td>Neither</td>
            <td>It belongs in stable savings, not in market investments</td>
          </tr>
          <tr>
            <td>Tiny deposits with a fixed fee per trade</td>
            <td>Check costs</td>
            <td>A $5 fee is 5% of a $100 deposit but 0.5% of $1,000</td>
          </tr>
        </tbody>
      </table>

      <h2>How should you decide?</h2>
      <ol>
        <li><strong>Start with the source of the money.</strong> Salary means monthly investing, so set up an automatic transfer and move on.</li>
        <li><strong>Pick an amount you can keep up in a bad year.</strong> The averaging benefit only appears if you keep buying while prices are down.</li>
        <li><strong>Check the costs.</strong> Per-trade fees and ongoing charges eat small deposits first. See <Link href="/guides/investment-fees-impact">how a 1% fee eats your returns</Link>.</li>
        <li><strong>Hold a lump sum? Decide how much regret you can live with.</strong> A shorter phasing period costs less and protects less. Neither is right for everyone.</li>
        <li><strong>Link it to a goal.</strong> Work backwards from the amount you need with the <Link href="/calculators/retirement">retirement calculator</Link>, then test how a monthly figure compounds in the <Link href="/calculators/compound-interest">compound interest calculator</Link>.</li>
      </ol>
      <p>
        Planning for the long term? The <Link href="/guides/4-percent-rule">4% rule guide</Link> shows how a pot like the ones above
        translates into yearly spending in retirement.
      </p>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Believing DCA guarantees a profit.</strong> It lowers your average cost but cannot make a falling investment rise.</li>
        <li><strong>Pausing when prices drop.</strong> That is when a fixed amount buys the most units.</li>
        <li><strong>Holding cash &quot;to DCA later&quot; for years.</strong> Phasing in should have an end date.</li>
        <li><strong>Averaging into a single risky holding.</strong> Regular buying does not fix a lack of diversification.</li>
        <li><strong>Ignoring wrapper rules.</strong> ISAs, 401(k)s and IRAs have contribution limits that may cap your monthly amount.</li>
      </ul>
      <p>
        This guide is general education, not personal financial advice. Investments can fall as well as rise, and past performance
        does not predict future returns. All price paths above are invented for illustration.
      </p>
    </GuideLayout>
  );
}
