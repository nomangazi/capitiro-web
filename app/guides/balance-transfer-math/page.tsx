import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "balance-transfer-math";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A balance transfer is worth it when the interest you avoid during the 0% period is larger than the transfer fee. On a
        $6,000 balance at 24% APR, paying $300 a month, <strong>an 18-month 0% offer with a 3% fee costs about $210 in total, against
        $1,739 of interest if you stay put</strong>. The same offer is a poor deal if you would clear the debt within a couple of
        months anyway.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The fee is charged up front, usually on the amount moved, so a 3% fee on $6,000 adds $180 to the new balance.</li>
        <li>At 24% APR, a 3% fee equals about 1.5 months of interest, so the break-even point comes quickly.</li>
        <li>To clear $6,000 inside an 18-month promo with a 3% fee you need about $344 a month, not $333.</li>
        <li>Whatever is left when the promo ends starts accruing interest again at the regular rate.</li>
        <li>With a low existing APR, a high fee or a fast payoff, the transfer can lose money.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: a $6,000 balance on a card charging 24% APR; the fee is added to the transferred balance; a
          fixed monthly payment; no new purchases; interest of APR ÷ 12 per month; and, where a balance remains after the promo, a{" "}
          <strong>revert APR of 24%</strong> (an assumption, so check the real rate in your offer). Figures are rounded to the nearest
          dollar.
        </small>
      </p>

      <h2>How does a balance transfer actually work?</h2>
      <p>
        You open a new card (or use an existing offer) and move debt onto it. The new issuer pays off the old card and charges a
        transfer fee, commonly a percentage of the amount moved. For a promotional period the new balance carries 0% interest, so
        every payment goes to principal. After that the card&apos;s regular APR applies to whatever remains. The total cost of the
        move is the fee plus any interest paid once the promotion ends.
      </p>
      <p>
        <strong>Total cost of transfer = fee + interest charged after the 0% period.</strong> Compare that with the interest you
        would pay by staying on the old card at the same monthly payment. That comparison is the whole decision.
      </p>

      <h2>How much does a 0% offer save compared with staying at 24%?</h2>
      <p>
        Staying at 24% with $300 a month, the $6,000 takes 26 months and costs $1,739 in interest. The table compares six common
        offers at the same $300 payment.
      </p>
      <table>
        <thead>
          <tr>
            <th>0% offer</th>
            <th>Fee</th>
            <th>Left when promo ends</th>
            <th>Total cost</th>
            <th>Saved vs. staying</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 months, 3% fee</td>
            <td>$180</td>
            <td>$1,680</td>
            <td>$300</td>
            <td>$1,440</td>
          </tr>
          <tr>
            <td>15 months, 5% fee</td>
            <td>$300</td>
            <td>$1,800</td>
            <td>$437</td>
            <td>$1,302</td>
          </tr>
          <tr>
            <td>18 months, 3% fee</td>
            <td>$180</td>
            <td>$780</td>
            <td>$210</td>
            <td>$1,530</td>
          </tr>
          <tr>
            <td>18 months, 5% fee</td>
            <td>$300</td>
            <td>$900</td>
            <td>$338</td>
            <td>$1,402</td>
          </tr>
          <tr>
            <td>21 months, 3% fee</td>
            <td>$180</td>
            <td>$0</td>
            <td>$180</td>
            <td>$1,559</td>
          </tr>
          <tr>
            <td>21 months, 5% fee</td>
            <td>$300</td>
            <td>$0</td>
            <td>$300</td>
            <td>$1,439</td>
          </tr>
        </tbody>
      </table>
      <p>
        One pattern stands out: promo length can matter as much as the fee: the 18-month offer with a 5% fee ($338) costs less
        than the 15-month offer with a 5% fee ($437), and the 21-month 5% offer costs the same $300 as the 15-month 3% offer while
        leaving no balance exposed to the regular rate.
      </p>

      <h2>What monthly payment clears the balance inside the promo?</h2>
      <p>
        The payment is the new balance (original plus fee) divided by the number of promo months, rounded up. There is no interest to
        add, which makes this the easiest number to plan around.
      </p>
      <table>
        <thead>
          <tr>
            <th>0% offer</th>
            <th>Fee on $6,000</th>
            <th>Payment for $6,000</th>
            <th>Fee on $10,000</th>
            <th>Payment for $10,000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15 months, 3% fee</td>
            <td>$180</td>
            <td>$412</td>
            <td>$300</td>
            <td>$687</td>
          </tr>
          <tr>
            <td>15 months, 5% fee</td>
            <td>$300</td>
            <td>$420</td>
            <td>$500</td>
            <td>$700</td>
          </tr>
          <tr>
            <td>18 months, 3% fee</td>
            <td>$180</td>
            <td>$344</td>
            <td>$300</td>
            <td>$573</td>
          </tr>
          <tr>
            <td>18 months, 5% fee</td>
            <td>$300</td>
            <td>$350</td>
            <td>$500</td>
            <td>$584</td>
          </tr>
          <tr>
            <td>21 months, 3% fee</td>
            <td>$180</td>
            <td>$295</td>
            <td>$300</td>
            <td>$491</td>
          </tr>
          <tr>
            <td>21 months, 5% fee</td>
            <td>$300</td>
            <td>$300</td>
            <td>$500</td>
            <td>$500</td>
          </tr>
        </tbody>
      </table>
      <p>
        If that payment is beyond your budget, you are in the next scenario. For payoff timelines without a promo, see{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long credit card payoff takes</Link>.
      </p>

      <h2>What happens if I do not clear the balance before the promo ends?</h2>
      <p>
        The remaining balance is charged the revert APR. Our assumption is 24%. In the 15-month, 3% offer with $300 a month, $1,680
        is left at month 15. At a revert rate of 20%, 24% or 28%, the interest on that remainder is $98, $120 or $142, and you are
        debt-free in month 21 or 22.
      </p>
      <p>
        With a lower payment, the picture changes. At $200 a month on the same offer, $3,180 is left after 15 months. At 24% it
        takes 35 months in total and costs $866 (the fee plus $686 of interest), against $3,255 and 47 months if you had stayed. At
        $150 a month, $3,930 is left, the total is 53 months and the cost is $1,873, against $6,191 and 82 months if you had stayed.
      </p>
      <p>
        A transfer can still beat staying even if you miss the deadline, because you avoid interest for the promo months. The risk
        is behavioral: new spending on the freed-up card, a missed payment that ends the promo early (check your terms), or a revert
        rate higher than your old APR. Store cards with &quot;deferred interest&quot; work differently and back-date interest on any
        unpaid balance, so read those terms separately. The{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link> can show a leftover balance at the
        revert rate.
      </p>

      <h2>What is the break-even point?</h2>
      <p>
        <strong>Break-even months ≈ fee % ÷ (existing APR ÷ 12).</strong> At 24%, interest is 2% a month, so a 3% fee breaks even in
        1.5 months and a 5% fee in 2.5 months. As the balance falls, interest falls too. In our $300-a-month simulation, the interest
        you avoid passes the $180 fee in month 2 and the $300 fee in month 3.
      </p>
      <p>
        At 12%, interest is 1% a month, so the same fees break even in 3 and 5 months. At 8%, a 5% fee needs about 7.5 months. The
        lower your current rate, the more the fee matters.
      </p>

      <h2>When is a balance transfer not worth it?</h2>
      <p>The savings shrink in two situations. The first is paying the debt off quickly. Here is an 18-month offer on $6,000 at 24%:</p>
      <table>
        <thead>
          <tr>
            <th>Monthly payment</th>
            <th>Months if you stay</th>
            <th>Interest if you stay</th>
            <th>Saved, 3% fee</th>
            <th>Saved, 5% fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$300</td>
            <td>26</td>
            <td>$1,739</td>
            <td>$1,530</td>
            <td>$1,402</td>
          </tr>
          <tr>
            <td>$600</td>
            <td>12</td>
            <td>$762</td>
            <td>$582</td>
            <td>$462</td>
          </tr>
          <tr>
            <td>$1,000</td>
            <td>7</td>
            <td>$458</td>
            <td>$278</td>
            <td>$158</td>
          </tr>
          <tr>
            <td>$2,000</td>
            <td>4</td>
            <td>$251</td>
            <td>$71</td>
            <td>-$49</td>
          </tr>
          <tr>
            <td>$3,000</td>
            <td>3</td>
            <td>$186</td>
            <td>$6</td>
            <td>-$114</td>
          </tr>
        </tbody>
      </table>
      <p>
        The second is a low current rate. Here the balance is $6,000, you pay $500 a month (so the transfer clears inside the promo)
        and the offer is 18 months:
      </p>
      <table>
        <thead>
          <tr>
            <th>Existing APR</th>
            <th>Interest if you stay</th>
            <th>Saved, 3% fee</th>
            <th>Saved, 5% fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8%</td>
            <td>$275</td>
            <td>$95</td>
            <td>-$25</td>
          </tr>
          <tr>
            <td>12%</td>
            <td>$424</td>
            <td>$244</td>
            <td>$124</td>
          </tr>
          <tr>
            <td>16%</td>
            <td>$582</td>
            <td>$402</td>
            <td>$282</td>
          </tr>
          <tr>
            <td>20%</td>
            <td>$751</td>
            <td>$571</td>
            <td>$451</td>
          </tr>
          <tr>
            <td>24%</td>
            <td>$930</td>
            <td>$750</td>
            <td>$630</td>
          </tr>
        </tbody>
      </table>
      <p>
        A negative number means the fee costs more than the interest you save. Also weigh a credit check when you apply and a credit limit that may be lower than your balance.
      </p>

      <h2>How should I decide between a transfer and other options?</h2>
      <ol>
        <li>
          <strong>Work out your realistic payment</strong> and the months it takes at your current APR, using the{" "}
          <Link href="/calculators/credit-card-payoff">payoff calculator</Link>.
        </li>
        <li>
          <strong>Add the fee to the balance</strong> and divide by the promo months. If you can afford that payment, the transfer
          should cost only the fee.
        </li>
        <li>
          <strong>Compare the total cost</strong> (fee plus any post-promo interest) with the interest from staying. Transfer only if
          the saving is clearly positive.
        </li>
        <li>
          <strong>Compare a fixed-rate personal loan.</strong> Its monthly payment comes from the same formula used in the{" "}
          <Link href="/calculators/loan-amortization">loan amortization calculator</Link>, and it has no revert date.
        </li>
        <li>
          <strong>If you owe on several cards,</strong> the <Link href="/guides/debt-avalanche-vs-snowball">avalanche and snowball
          methods</Link> help you choose which to move first.
        </li>
      </ol>

      <h2>What are the most common mistakes?</h2>
      <ul>
        <li>
          <strong>Ignoring the fee.</strong> &quot;0% interest&quot; is not free money. A 5% fee on $10,000 is $500 on day one.
        </li>
        <li>
          <strong>Paying only the minimum.</strong> Minimums are far below the payment that clears the balance in time. See the
          table above for the figure that matters.
        </li>
        <li>
          <strong>Spending on the old card again.</strong>
        </li>
        <li>
          <strong>Missing the promo end date.</strong> Set a reminder a month earlier and plan the last payments.
        </li>
        <li>
          <strong>Having no cash buffer.</strong> Plan one with the <Link href="/calculators/savings-goal">savings goal calculator</Link>.
        </li>
        <li>
          <strong>Underestimating revert risk.</strong> Debt left at 24% can double in about three years (72 ÷ 24; see the{" "}
          <Link href="/guides/rule-of-72">Rule of 72</Link>), so a leftover balance deserves its own plan.
        </li>
      </ul>

      <h2>What should UK and European readers know?</h2>
      <p>
        0% balance transfer cards are common in the UK, and fees are normally quoted as a percentage of the amount moved. The
        arithmetic is the same as above in pounds. For example, moving £4,000 with a 3% fee adds £120, and clearing £4,120 in an
        18-month promo takes about £229 a month. A 5% fee adds £200 and needs about £234 a month. Offers, fees, promotional lengths
        and eligibility rules change often, and providers frequently do not allow transfers between their own cards, so use the
        figures in the card&apos;s own summary documents.
      </p>
      <p>
        For independent explainers, see the US Consumer Financial Protection Bureau&apos;s{" "}
        <a href="https://www.consumerfinance.gov/ask-cfpb/" target="_blank" rel="noopener noreferrer">
          Ask CFPB answers
        </a>{" "}
        and, in the UK, the free guidance at{" "}
        <a href="https://www.moneyhelper.org.uk/" target="_blank" rel="noopener noreferrer">
          MoneyHelper
        </a>
        .
      </p>

      <h2>What should I do next?</h2>
      <p>
        Add the fee to your balance, divide by the promo months and check that the payment fits your budget. If it does, compare
        the total cost with staying. If it does not, plan for the leftover balance before you apply.
      </p>
    </GuideLayout>
  );
}
