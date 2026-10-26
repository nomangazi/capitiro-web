import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "simple-vs-compound-interest";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $10,000 at 5% a year, no deposits or withdrawals. Compound = interest added monthly. */
const GROWTH = [
  { years: "1 year", simple: "$10,500.00", compound: "$10,511.62", gap: "$11.62" },
  { years: "5 years", simple: "$12,500.00", compound: "$12,833.59", gap: "$333.59" },
  { years: "10 years", simple: "$15,000.00", compound: "$16,470.09", gap: "$1,470.09" },
  { years: "20 years", simple: "$20,000.00", compound: "$27,126.40", gap: "$7,126.40" },
  { years: "30 years", simple: "$25,000.00", compound: "$44,677.44", gap: "$19,677.44" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Simple interest is paid only on the original amount, while compound interest is paid on the original amount <em>plus</em> all
        interest already added.{" "}
        <strong>$10,000 at 5% for 30 years earns $15,000 of simple interest but $34,677.44 of compound interest (added monthly).</strong>{" "}
        The longer the time and the higher the rate, the wider the gap.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Simple interest = principal × rate × years. It grows in a straight line, by the same amount every year.</li>
        <li>Compound interest = interest on interest. It grows in a curve that gets steeper over time.</li>
        <li>In year one the two are almost identical. After 30 years at 5%, compound interest on $10,000 is 2.3 times the simple figure.</li>
        <li>Compounding helps savers and investors, but it works against borrowers who carry a credit card balance.</li>
        <li>Many loans charge interest on the balance that is still owed, so their cost depends on how fast you repay. Read the terms to see how interest is charged.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: a single deposit or balance with nothing added or paid; one steady rate for the whole period;
          no tax, fees or inflation. Rates are illustrative, not current market rates. The arithmetic is identical in any currency, so
          $10,000 can be read as £10,000 or €10,000. Figures are rounded to the cent.
        </small>
      </p>

      <h2>What is the difference between simple and compound interest?</h2>
      <p>
        <strong>Simple interest</strong> is calculated on the starting amount (the principal) only. The formula is{" "}
        <strong>interest = P × r × t</strong>, where <em>P</em> is the principal, <em>r</em> is the yearly rate as a decimal and{" "}
        <em>t</em> is the time in years. $10,000 at 5% earns 10,000 × 0.05 = $500 every year, whether it is year 1 or year 30.
      </p>
      <p>
        <strong>Compound interest</strong> is calculated on the principal plus the interest already added. The formula is{" "}
        <strong>A = P × (1 + r ÷ n)<sup>n × t</sup></strong>, where <em>n</em> is how many times a year interest is added. With 5%
        added monthly, each month the balance grows by 0.05 ÷ 12 = 0.4167%, and next month&apos;s interest is calculated on the
        bigger balance. The more often interest is added, the slightly faster the growth; see{" "}
        <Link href="/guides/apr-vs-apy-aer">APR vs APY vs AER</Link> for how that changes the effective yearly rate.
      </p>

      <h2>How much bigger does the gap get over time?</h2>
      <p>The table shows $10,000 at 5% a year with nothing added or withdrawn. Only the type of interest changes.</p>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Simple interest balance</th>
            <th>Compound (monthly) balance</th>
            <th>Compound minus simple</th>
          </tr>
        </thead>
        <tbody>
          {GROWTH.map((row) => (
            <tr key={row.years}>
              <td>{row.years}</td>
              <td>{row.simple}</td>
              <td>{row.compound}</td>
              <td>{row.gap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The simple balance rises by exactly $500 a year. The compound balance rises by more each year, because the interest is
        working on a larger base. The first year is only $11.62 apart, but by year 30 the compound balance is $19,677.44 higher.
        Try your own numbers in the <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>How do simple and compound interest compare side by side?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Simple interest</th>
            <th>Compound interest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interest is charged on</td>
            <td>The original principal only</td>
            <td>Principal plus past interest</td>
          </tr>
          <tr>
            <td>Growth pattern</td>
            <td>Straight line, same each year</td>
            <td>Curve that steepens over time</td>
          </tr>
          <tr>
            <td>Formula</td>
            <td>P × r × t</td>
            <td>P × (1 + r ÷ n)<sup>n × t</sup> − P</td>
          </tr>
          <tr>
            <td>Doubling time at 5%</td>
            <td>20 years</td>
            <td>About 13.9 years (monthly)</td>
          </tr>
          <tr>
            <td>Common places</td>
            <td>Some short-term and auto loans, bond coupons</td>
            <td>Savings accounts, credit cards, investments</td>
          </tr>
          <tr>
            <td>Good for</td>
            <td>Borrowers on a short loan</td>
            <td>Savers and long-term investors</td>
          </tr>
        </tbody>
      </table>
      <p>
        The simple-interest doubling time is 100 ÷ 5 = 20 years, because $500 a year must add up to $10,000. The compound figure is
        close to the shortcut in the <Link href="/guides/rule-of-72">Rule of 72</Link>, which gives 72 ÷ 5 = 14.4 years. In the
        monthly calculation, the balance is $19,129.56 after 13 years and $20,108.26 after 14.
      </p>

      <h2>Where is simple interest used?</h2>
      <ul>
        <li><strong>Bond coupons.</strong> A bond pays a fixed coupon on its face value, so the coupon payments themselves do not compound. If you reinvest them, the reinvested money can earn interest of its own.</li>
        <li><strong>Many auto loans.</strong> Auto loans in the US are commonly described as simple-interest loans: interest builds on the outstanding balance and each payment reduces it. Paying early or extra means less interest. Check your contract, because terms vary by lender and country.</li>
        <li><strong>Some short-term loans.</strong> Short personal loans and loans between individuals are often quoted as a flat rate on the amount borrowed. For example, $1,000 at 6% for 3 years is $180 of simple interest, against $191.02 if interest were added yearly or $196.68 if added monthly.</li>
      </ul>
      <p>
        A mortgage or loan that charges interest on the remaining balance each period is, in effect, simple interest on a shrinking
        balance. It differs from a savings account in that the balance falls as you repay. See the{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link> for how the split between interest and
        principal changes.
      </p>

      <h2>Where is compound interest used?</h2>
      <ul>
        <li><strong>Savings accounts and CDs.</strong> Interest is credited on a set schedule (often daily or monthly) and then earns interest itself. The account terms say which.</li>
        <li><strong>Investments.</strong> Returns that are reinvested compound, for example dividends reinvested in a fund. Market returns are not guaranteed or steady, so a fixed rate like 5% is only an illustration.</li>
        <li><strong>Credit cards.</strong> Unpaid interest is added to the balance, and later interest is charged on that bigger balance. Card issuers typically work this out daily or monthly.</li>
      </ul>

      <h2>Worked example: $10,000 at 5% and 7% for 30 years</h2>
      <ol>
        <li><strong>Simple at 5%:</strong> 10,000 × 0.05 × 30 = $15,000 of interest, so the balance is $25,000.00.</li>
        <li><strong>Compound at 5%, monthly:</strong> the balance grows to $44,677.44, which is $34,677.44 of interest.</li>
        <li><strong>The difference:</strong> $44,677.44 − $25,000.00 = $19,677.44. Compounding earned 2.3 times as much interest as simple interest.</li>
        <li><strong>Raise the rate to 7%:</strong> simple interest gives $31,000.00 (10,000 × 0.07 × 30 = $21,000 interest). Compound monthly gives $81,164.97. The gap is $50,164.97.</li>
      </ol>
      <p>
        A higher rate does not just add to the gap; it multiplies it, because the growth is applied to a larger and larger balance.
        Regular deposits make the effect stronger still. Test a monthly amount with the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>Why does compounding hurt on credit card debt?</h2>
      <p>
        The same maths that grows savings makes debt grow. Take a $5,000 card balance at 24% with no payments and no new purchases,
        which is a thought experiment because real cards require minimum payments. Simple interest would be $1,200 after one year and
        $3,600 after three. With interest added monthly it is $1,341.21 after one year and $5,199.44 after three, so the balance
        would be more than double the original amount. With regular payments the picture is different; see{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long it takes to pay off a credit card</Link>.
      </p>

      <h2>How do you decide which one matters for you?</h2>
      <ul>
        <li><strong>Saving or investing?</strong> You want compounding on your side. Start early, leave the interest in the account and add money regularly. Time matters more than most other factors.</li>
        <li><strong>Borrowing on a card?</strong> Compounding is the cost. Pay the balance down quickly, because every unpaid month adds interest on interest.</li>
        <li><strong>Taking a fixed-term loan?</strong> Ask whether interest is charged on the remaining balance and whether you can repay early without a penalty. Compare the total repaid, not only the rate.</li>
        <li><strong>Comparing two offers?</strong> Put them on the same basis: same time, same compounding, same fees. Use the total in money as the final check.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Assuming a flat-rate loan is cheap.</strong> A flat rate on the original amount can cost more than it looks if you repay in instalments, because you owe less over time but the charge does not fall. Compare APRs.</li>
        <li><strong>Treating illustrative returns as promises.</strong> Investment returns vary from year to year. The 5% and 7% here are examples, not forecasts.</li>
        <li><strong>Ignoring tax and inflation.</strong> Both reduce what you keep; see <Link href="/guides/real-vs-nominal-returns">real vs nominal returns</Link>.</li>
        <li><strong>Skipping the compounding frequency.</strong> Daily, monthly and yearly compounding give slightly different results at the same rate. Look for the schedule in the terms.</li>
      </ul>

      <h2>Where can I check the official definitions?</h2>
      <p>
        For regulator explanations, see the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a>. This guide is general
        information, not financial advice.
      </p>
    </GuideLayout>
  );
}
