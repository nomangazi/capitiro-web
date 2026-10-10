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

      <h2>How to find your number</h2>
      <ol>
        <li>Work out 28% of your gross monthly income, and 36% minus your other debt payments. Take the lower figure.</li>
        <li>Enter different home prices into the mortgage calculator until the total monthly payment matches that figure.</li>
        <li>Then sanity-check it against your real take-home budget — the lender&apos;s maximum is a ceiling, not a target.</li>
      </ol>
    </GuideLayout>
  );
}
