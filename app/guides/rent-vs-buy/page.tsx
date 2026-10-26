import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "rent-vs-buy";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Renting versus buying is not a question of rent against a mortgage payment. <strong>Owning also costs property tax,
        insurance, upkeep, closing costs and the growth your down payment could have earned elsewhere, while renting costs rent that
        usually rises each year.</strong> In the example below, a home bought for $400,000 and sold after 7 years costs about $64,000
        more than renting if the price does not rise, and about $22,000 less if it rises 3% a year.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The monthly payment understates the cost of owning. In the example, the first-year cost of owning is about $2,873 a month, against $2,400 of rent, once tax, insurance and maintenance are added.</li>
        <li>Not every payment is a cost. About $30,668 of the mortgage payments over 7 years goes to principal, which builds equity rather than disappearing.</li>
        <li>Over 7 years, owning costs about $285,091 before any price gain, against $220,679 of rent.</li>
        <li>Home price growth decides the result. In this example, buying breaks even at roughly 2.3% a year growth.</li>
        <li>The shorter you stay, the more renting tends to win, because buying and selling costs are spread over fewer years.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure, all illustrative and not forecasts: $400,000 home, 20% down ($80,000), 30-year fixed loan at
          6.5%, property tax of 1.1% of the price a year, home insurance of $1,800 a year, maintenance of 1% of the price a year,
          buying costs of 3% of the price, selling costs of 6% of the sale price, starting rent of $2,400 a month rising 3% a year,
          and a 5% a year return (compounded monthly) on money not tied up in the home. Taxes and tax deductions are ignored. Figures are rounded to the
          dollar.
        </small>
      </p>

      <h2>What does owning cost that renting does not?</h2>
      <p>
        Owners pay for things a landlord normally covers or that renters never face. The table lists each cost, how we estimate it
        and what it comes to over 7 years in the example.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cost</th>
            <th>Owning</th>
            <th>Renting</th>
            <th>7-year amount in the example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mortgage interest</td>
            <td>Paid every month, largest in early years</td>
            <td>None</td>
            <td>$139,232</td>
          </tr>
          <tr>
            <td>Property tax</td>
            <td>1.1% of price a year ($4,400)</td>
            <td>Built into the rent</td>
            <td>$30,800</td>
          </tr>
          <tr>
            <td>Home insurance</td>
            <td>$1,800 a year</td>
            <td>Tenant policy only, if any</td>
            <td>$12,600</td>
          </tr>
          <tr>
            <td>Maintenance and repairs</td>
            <td>1% of price a year ($4,000)</td>
            <td>Usually the landlord</td>
            <td>$28,000</td>
          </tr>
          <tr>
            <td>Closing costs</td>
            <td>3% of price, paid once</td>
            <td>Deposit, usually refundable</td>
            <td>$12,000</td>
          </tr>
          <tr>
            <td>Selling costs</td>
            <td>6% of sale price when you sell</td>
            <td>None</td>
            <td>$24,000 if the price stays flat</td>
          </tr>
          <tr>
            <td>Opportunity cost of the down payment</td>
            <td>$80,000 down plus $12,000 closing, tied up in the home</td>
            <td>Could be invested at the assumed 5%</td>
            <td>$38,459</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td>None</td>
            <td>$2,400 a month, rising 3% a year</td>
            <td>$220,679</td>
          </tr>
        </tbody>
      </table>
      <p>
        Principal repayment is left out on purpose. Of the $169,900 paid on the loan over 7 years ($2,023 a month), $30,668 reduces
        the balance from $320,000 to $289,332. That money is still yours when you sell.
      </p>

      <h2>How do you compare rent and buy over 7 years?</h2>
      <p>
        Add up every cost that is gone for good, then subtract the gain in the home&apos;s price. The mortgage payment alone is $2,023
        a month, but property tax ($367 a month), insurance ($150) and maintenance ($333) lift the first-year cost of owning to about
        $2,873 a month, against $2,400 of rent. By year 7, rent has grown to about $2,866 a month.
      </p>
      <p>
        The opportunity cost line deserves a note. The $92,000 you put into the home ($80,000 down plus $12,000 of closing costs)
        could instead grow at the assumed 5% a year. After 7 years it would be worth about $130,459, so you give up $38,459. This is
        an assumption, not a promise: your actual alternative might earn more, less, or nothing.
      </p>
      <p>
        Owning, then, costs $139,232 of interest, $30,800 of property tax, $12,600 of insurance, $28,000 of maintenance, $12,000 of
        closing costs and $38,459 of opportunity cost. Add selling costs, which depend on the sale price, and the totals depend on how
        much the home gains:
      </p>
      <table>
        <thead>
          <tr>
            <th>Home price growth per year</th>
            <th>Net cost of owning</th>
            <th>Cost of renting</th>
            <th>Cheaper option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0%</td>
            <td>$285,091</td>
            <td>$220,679</td>
            <td>Renting, by $64,412</td>
          </tr>
          <tr>
            <td>1%</td>
            <td>Rent plus $37,289</td>
            <td>$220,679</td>
            <td>Renting, by $37,289</td>
          </tr>
          <tr>
            <td>2%</td>
            <td>Rent plus $8,506</td>
            <td>$220,679</td>
            <td>Renting, by $8,506</td>
          </tr>
          <tr>
            <td>3%</td>
            <td>$198,659</td>
            <td>$220,679</td>
            <td>Buying, by $22,020</td>
          </tr>
        </tbody>
      </table>
      <p>
        At 3% growth the home sells for about $491,950, a gain of $91,950, but selling costs rise to $29,517. The break-even point
        sits near 2.3% a year. Those growth rates are assumptions. Real prices vary by place and period, and can fall.
      </p>

      <h2>What changes the answer most?</h2>
      <ul>
        <li><strong>How long you stay.</strong> Closing and selling costs ($12,000 and $24,000 here) are paid once. Over 2 years they weigh heavily; over 15 they barely register.</li>
        <li><strong>Home price growth.</strong> It is the swing factor in the table above, and the one nobody can forecast.</li>
        <li><strong>Mortgage rate.</strong> Interest is the largest single cost. Test other rates with the <Link href="/calculators/mortgage">mortgage calculator</Link>, and see the <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year comparison</Link> for how the term changes it.</li>
        <li><strong>Rent growth.</strong> Faster rent increases favor buying, because a fixed-rate mortgage payment does not rise. Property tax and insurance still can.</li>
        <li><strong>Down payment size.</strong> With less than 20% down, private mortgage insurance adds a cost this example leaves out. Our <Link href="/guides/what-is-pmi">PMI guide</Link> shows what it costs.</li>
        <li><strong>Maintenance.</strong> 1% a year is a placeholder. Older homes can cost more in some years and less in others.</li>
      </ul>

      <h2>Does this work the same in the UK and Europe?</h2>
      <p>
        The method is the same, but some costs differ. Property tax in the US is set locally, so 1.1% is only an example. In the UK,
        council tax is paid by whoever lives in the home, so renters pay it too. Buyers in England and Northern Ireland may owe stamp duty on top of legal fees,
        and the rules and thresholds change, so check the official{" "}
        <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer">stamp duty land tax page on GOV.UK</a>.
        Buying costs, mortgage terms and rental rules vary by country across Europe, so replace the percentages above with the real
        ones from your market. The arithmetic works in any currency.
      </p>

      <h2>How to decide</h2>
      <ol>
        <li>Estimate how long you will realistically stay. If it is under about 5 years, renting often costs less, because the one-time costs of buying and selling are spread over fewer years.</li>
        <li>Price the full monthly cost of owning, not only the mortgage payment. Our guide on <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link> covers the 28/36 test.</li>
        <li>Check that you would still have three to six months of expenses saved after paying the down payment and closing costs.</li>
        <li>Run the comparison at several price growth rates, including 0%. If buying only wins in the optimistic case, treat it as a risk.</li>
        <li>Count what is not in the numbers: stability, the freedom to renovate, and the flexibility to move.</li>
      </ol>
      <p>
        The Consumer Financial Protection Bureau&apos;s{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">home-buying guide</a>{" "}
        explains how to compare lender offers. To test your own price, rate and down payment, use the{" "}
        <Link href="/calculators/mortgage">mortgage calculator</Link>. All figures here are illustrations based on the stated
        assumptions, not quotes or advice.
      </p>
      <p>Run your own numbers with the full payment breakdown below.</p>
    </GuideLayout>
  );
}
