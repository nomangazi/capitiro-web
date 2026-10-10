import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "how-much-house-can-i-afford";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        &quot;How much house can I afford?&quot; is usually the first question in any home search, and the answer from a lender
        can be very different from what feels comfortable month to month. This guide explains the rule lenders use, works through
        a real example, and shows which levers change your budget the most.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>A common guideline is to keep housing costs under <strong>28%</strong> of gross monthly income and all debts under <strong>36%</strong>.</li>
        <li>On a <strong>$100,000</strong> income, with 20% down and a 6.5% rate, that points to a home price of roughly <strong>$370,000</strong>.</li>
        <li>Taxes, insurance, PMI and HOA fees count toward the 28%, so the same income buys very different homes in different places.</li>
        <li>A lender&apos;s maximum is a ceiling, not a target. Check it against your real monthly budget.</li>
      </ul>

      <h2>The 28/36 rule</h2>
      <p>Most US lenders start with two debt-to-income (DTI) limits, both measured against your <strong>gross</strong> (pre-tax) monthly income:</p>
      <ul>
        <li>
          <strong>28% front-end ratio:</strong> your total housing payment (principal, interest, property tax, homeowners
          insurance, plus any PMI and HOA fees) should stay below 28% of gross income.
        </li>
        <li>
          <strong>36% back-end ratio:</strong> housing <em>plus</em> all other monthly debt payments (car loan, student loans,
          credit card minimums) should stay below 36%.
        </li>
      </ul>
      <p>
        Your maximum housing payment is whichever limit is lower. Some loan programs allow higher ratios, but staying within 28/36
        leaves room for savings, repairs and the unexpected.
      </p>

      <h2>A worked example</h2>
      <p>
        Say your household earns <strong>$100,000 a year</strong> ($8,333 a month gross) and pays <strong>$400 a month</strong>{" "}
        toward a car loan. We assume a 6.5% 30-year fixed rate, 1.1% annual property tax and $1,500 a year for insurance.
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Calculation</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Front-end limit</td>
            <td>28% × $8,333</td>
            <td>$2,333</td>
          </tr>
          <tr>
            <td>Back-end limit</td>
            <td>36% × $8,333 − $400 debts</td>
            <td>$2,600</td>
          </tr>
          <tr>
            <td>Maximum housing payment</td>
            <td>The lower of the two</td>
            <td><strong>$2,333</strong></td>
          </tr>
        </tbody>
      </table>
      <p>Working backwards from a $2,333 monthly payment gives these approximate home prices:</p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Home price</th>
            <th>Payment breakdown (per month)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20% down, 6.5%</td>
            <td>≈ $370,000</td>
            <td>$1,869 P&amp;I + $339 tax + $125 insurance</td>
          </tr>
          <tr>
            <td>10% down, 6.5%</td>
            <td>≈ $316,000</td>
            <td>$1,800 P&amp;I + $290 tax + $125 insurance + $119 PMI</td>
          </tr>
          <tr>
            <td>20% down, 7.5%</td>
            <td>≈ $339,000</td>
            <td>$1,897 P&amp;I + $311 tax + $125 insurance</td>
          </tr>
          <tr>
            <td>20% down, $1,000/mo other debts</td>
            <td>≈ $314,000</td>
            <td>Back-end limit drops the payment cap to $2,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Notice how much the answer moves: a smaller down payment, a 1-point higher rate or an extra $600 of monthly debt each cut the
        budget by $30,000–$56,000.
      </p>

      <h2>What changes your budget the most</h2>
      <ol>
        <li><strong>Other debts.</strong> Paying off a car loan or credit card before you apply can raise your price range more than a pay rise.</li>
        <li><strong>Interest rate.</strong> Improving your credit score and comparing several lenders can lower your rate.</li>
        <li><strong>Down payment.</strong> Reaching 20% removes PMI and lowers the loan amount — see our guide to <Link href="/guides/what-is-pmi">PMI and how to avoid it</Link>.</li>
        <li><strong>Property tax and HOA fees.</strong> They vary hugely by location; a high-tax area can cost as much each month as a pricier home elsewhere.</li>
      </ol>

      <h2>How much house can I afford at different incomes?</h2>
      <p>
        The table applies the same 28% front-end limit to five common household incomes. It assumes a 6.5% 30-year fixed rate,
        20% down, 1.1% annual property tax, $1,500 a year for insurance and $400 a month in other debts. At every income shown
        the 28% limit is the one that binds (at $60,000 the two limits happen to be equal).
      </p>
      <table>
        <thead>
          <tr>
            <th>Gross income</th>
            <th>Max housing payment</th>
            <th>Home price</th>
            <th>20% down payment</th>
            <th>Cash to close*</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$60,000</td><td>$1,400</td><td>≈ $213,000</td><td>≈ $43,000</td><td>≈ $49,000</td></tr>
          <tr><td>$80,000</td><td>$1,867</td><td>≈ $292,000</td><td>≈ $58,000</td><td>≈ $67,000</td></tr>
          <tr><td>$100,000</td><td>$2,333</td><td>≈ $370,000</td><td>≈ $74,000</td><td>≈ $85,000</td></tr>
          <tr><td>$120,000</td><td>$2,800</td><td>≈ $448,000</td><td>≈ $90,000</td><td>≈ $103,000</td></tr>
          <tr><td>$150,000</td><td>$3,500</td><td>≈ $565,000</td><td>≈ $113,000</td><td>≈ $130,000</td></tr>
        </tbody>
      </table>
      <p>
        <small>*20% down plus closing costs assumed at 3% of the price. Your actual closing costs will differ.</small>
      </p>
      <p>
        In every row the home price is about 3.6 to 3.8 times gross income, and the loan itself is about 2.8 to 3.0 times income.
        The down payment is the harder hurdle: at a $100,000 income you need roughly $85,000 in cash before you get the keys.
      </p>

      <h2>What if I put down less than 20%?</h2>
      <p>
        Putting down 10% lowers the cash you need up front but adds PMI and a larger loan, so the same payment buys a cheaper home.
        Assuming PMI of 0.5% a year on the loan amount:
      </p>
      <table>
        <thead>
          <tr>
            <th>Gross income</th>
            <th>Home price, 10% down</th>
            <th>10% down payment</th>
            <th>Compared with 20% down</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$60,000</td><td>≈ $183,000</td><td>≈ $18,000</td><td>about 14% lower price</td></tr>
          <tr><td>$80,000</td><td>≈ $250,000</td><td>≈ $25,000</td><td>about 14% lower price</td></tr>
          <tr><td>$120,000</td><td>≈ $383,000</td><td>≈ $38,000</td><td>about 14% lower price</td></tr>
          <tr><td>$150,000</td><td>≈ $484,000</td><td>≈ $48,000</td><td>about 14% lower price</td></tr>
        </tbody>
      </table>
      <p>
        That trade-off is the core of the PMI decision. Our guide to <Link href="/guides/what-is-pmi">what PMI is and how to avoid it</Link>{" "}
        shows when it drops off and what it costs in total.
      </p>

      <h2>How do interest rates change what I can afford?</h2>
      <p>
        Rates move the answer more than most people expect. For the $100,000 income in our example (28% limit of $2,333 a month, 20%
        down), the affordable price changes like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>30-year rate</th>
            <th>Affordable home price</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>5.5%</td><td>≈ $405,000</td></tr>
          <tr><td>6.0%</td><td>≈ $387,000</td></tr>
          <tr><td>6.5%</td><td>≈ $370,000</td></tr>
          <tr><td>7.0%</td><td>≈ $354,000</td></tr>
          <tr><td>7.5%</td><td>≈ $339,000</td></tr>
          <tr><td>8.0%</td><td>≈ $325,000</td></tr>
        </tbody>
      </table>
      <p>
        Each one-point rise in the rate trims roughly $29,000 to $35,000 from the budget. A shorter term changes the picture again:
        see <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage</Link> for the trade-off between a bigger payment and
        far less interest.
      </p>

      <h2>How much do other debts, property tax and HOA fees matter?</h2>
      <p>
        Existing debts only matter once the 36% back-end limit becomes the lower of the two. Using the same assumptions (20% down,
        6.5%):
      </p>
      <table>
        <thead>
          <tr>
            <th>Other monthly debts</th>
            <th>$80,000 income</th>
            <th>$120,000 income</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$0 to $400</td><td>$1,867 payment, ≈ $292,000 home</td><td>$2,800 payment, ≈ $448,000 home</td></tr>
          <tr><td>$1,000</td><td>$1,400 payment, ≈ $213,000 home</td><td>$2,600 payment, ≈ $414,000 home</td></tr>
          <tr><td>$1,500</td><td>$900 payment, ≈ $130,000 home</td><td>$2,100 payment, ≈ $331,000 home</td></tr>
        </tbody>
      </table>
      <p>
        Location matters just as much. At a $100,000 income, moving from a 0.5% property tax rate to 2.0% changes the affordable
        price from about $403,000 to about $328,000. A $300 monthly HOA fee cuts it to about $319,000, and a $500 fee to about
        $286,000. Always include these in the housing payment you test.
      </p>
      <p>
        If credit card balances are what is holding your number down, work on those first with the{" "}
        <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>

      <h2>What lenders don&apos;t count (but you should)</h2>
      <ul>
        <li><strong>Maintenance:</strong> a common rule of thumb is to budget 1–2% of the home&apos;s value each year.</li>
        <li><strong>Utilities and commuting</strong> — often higher in a bigger or more distant home.</li>
        <li><strong>Closing costs</strong>, typically a few percent of the price, paid on top of the down payment.</li>
        <li><strong>An emergency fund:</strong> keep three to six months of expenses after closing. Our <Link href="/calculators/savings-goal">savings goal calculator</Link> can help you plan it.</li>
      </ul>

      <h2>Outside the US</h2>
      <p>
        UK and European lenders usually focus on <strong>loan-to-income multiples</strong> (often around 4–4.5× income in the UK)
        and affordability stress tests rather than the 28/36 rule. The monthly repayment maths is the same, though, so you can still
        use the calculator below — just set PMI to zero and switch the currency in the header.
      </p>
      <p>
        As an illustration, a 4.5× multiple on a £50,000 income means borrowing up to about £225,000, and 4× on £80,000 is about
        £320,000. For comparison, the 20%-down examples above give a US loan of roughly 2.8 to 3.0 times income, because US
        lenders cap the whole housing payment rather than the loan size. UK and EU lenders also test whether you could still pay if
        rates rose, so the multiple on offer can be lower than the headline. Expect to need a deposit, often 5% to 10% or more of the price.
      </p>
      <p>
        For the US rules in plain language, including debt-to-income ratios and each step of the home buying process, see the
        Consumer Financial Protection Bureau&apos;s{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">home buying guide</a>.
      </p>

      <h2>What are the most common mistakes?</h2>
      <ul>
        <li><strong>Using take-home pay with a gross-income rule.</strong> The 28/36 limits are based on pre-tax income.</li>
        <li><strong>Forgetting tax, insurance and HOA fees.</strong> Principal and interest alone understates the real payment.</li>
        <li><strong>Spending the full limit.</strong> The maximum leaves little room for repairs, childcare or a pay cut.</li>
        <li><strong>Draining savings for the down payment.</strong> Keep an emergency fund after closing.</li>
        <li><strong>Ignoring the rate.</strong> Compare several lenders; a quarter-point difference changes the price you can reach.</li>
        <li><strong>Overlooking how long you will stay.</strong> Buying and selling costs make short stays expensive.</li>
      </ul>

      <h2>What should I do once I have a mortgage?</h2>
      <p>
        The figures above use a 30-year loan because it gives the lowest required payment and the highest price range. Once you own
        the home you can still cut interest by paying more than required, as explained in{" "}
        <Link href="/guides/extra-mortgage-payments">how extra mortgage payments save you money</Link>. If rates later fall, check
        the <Link href="/guides/refinance-break-even">refinance break-even</Link> before you act.
      </p>

      <h2>How to find your number</h2>
      <ol>
        <li>Work out 28% of your gross monthly income, and 36% minus your other debt payments. Take the lower figure.</li>
        <li>Enter different home prices into the <Link href="/calculators/mortgage">mortgage calculator</Link> until the total monthly payment matches that figure.</li>
        <li>Then sanity-check it against your real take-home budget — the lender&apos;s maximum is a ceiling, not a target.</li>
      </ol>
    </GuideLayout>
  );
}
