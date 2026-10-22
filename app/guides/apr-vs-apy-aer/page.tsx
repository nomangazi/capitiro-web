import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "apr-vs-apy-aer";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** 5% stated annual rate on $10,000 for one year, by how often interest is added. */
const COMPOUNDING = [
  { frequency: "Yearly (1 time)", balance: "$10,500.00", interest: "$500.00", effective: "5.0000%" },
  { frequency: "Twice a year", balance: "$10,506.25", interest: "$506.25", effective: "5.0625%" },
  { frequency: "Quarterly (4 times)", balance: "$10,509.45", interest: "$509.45", effective: "5.0945%" },
  { frequency: "Monthly (12 times)", balance: "$10,511.62", interest: "$511.62", effective: "5.1162%" },
  { frequency: "Daily (365 times)", balance: "$10,512.67", interest: "$512.67", effective: "5.1267%" },
];

/** Credit card rates on a $5,000 balance with no payments or purchases for one year. */
const CARDS = [
  { apr: "19.9% APR", monthly: "21.82%", monthlyInterest: "$1,090.96", dailyInterest: "$1,100.58" },
  { apr: "24% APR", monthly: "26.82%", monthlyInterest: "$1,341.21", dailyInterest: "$1,355.74" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        APR is the yearly rate <em>before</em> compounding, while APY (US) and AER (UK) are the yearly rate <em>after</em> compounding.{" "}
        <strong>A 5% rate with interest added monthly is a 5.12% APY or AER, so $10,000 earns $511.62 in a year instead of $500.</strong>{" "}
        The gap is small for savings but larger for debt: a 24% credit card APR compounded monthly costs an effective 26.82% a year.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>APR = the stated annual rate. APY and AER = the real yearly growth once interest on interest is included. APY and AER are the same idea under two names.</li>
        <li>For savings, compare APY or AER. They put every account on the same footing, whatever its compounding schedule.</li>
        <li>For borrowing, a loan APR can include fees, but a credit card APR normally does not show the cost of compounding. The effective rate is higher.</li>
        <li>5% compounded monthly = 5.12% APY/AER. 5% compounded daily = 5.13%. The higher the rate, the bigger the gap.</li>
        <li>A 4.9% rate compounded monthly equals about 5.01% APY, so it beats an account paying 5.00% APY. Always compare like with like.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: a single deposit or balance with nothing added or paid; one steady rate for the whole year; no
          tax, fees or promotional changes. Rates are illustrative, not current market rates. The arithmetic is identical in any
          currency, so $10,000 can be read as £10,000 or €10,000. Figures are rounded to the cent.
        </small>
      </p>

      <h2>What do APR, APY and AER mean?</h2>
      <p>
        <strong>APR (annual percentage rate)</strong> is the yearly cost or return expressed as a simple annual figure. On a loan it is
        the headline rate you compare between lenders, and it can include certain mandatory fees. On a credit card it is generally the
        periodic (monthly or daily) rate multiplied up to a year, so it does not capture compounding.
      </p>
      <p>
        <strong>APY (annual percentage yield)</strong> is the US term for what a savings account or CD really pays over a year,
        including interest earned on interest. <strong>AER (annual equivalent rate)</strong> is the UK term for the same thing,
        and savings providers there show it prominently. Both answer the question &quot;if I leave the money for exactly one
        year, what percentage will I end up with?&quot;
      </p>
      <p>
        The formula is <strong>APY (or AER) = (1 + rate ÷ n)<sup>n</sup> − 1</strong>, where <em>rate</em> is the stated annual rate
        as a decimal and <em>n</em> is how many times a year interest is added. With 5% compounded monthly: (1 + 0.05 ÷ 12)
        <sup>12</sup> − 1 = 5.1162%.
      </p>

      <h2>How much does compounding frequency change the result?</h2>
      <p>The table shows $10,000 at a 5% stated rate for one year. Only the compounding schedule changes.</p>
      <table>
        <thead>
          <tr>
            <th>Interest added</th>
            <th>Balance after 1 year</th>
            <th>Interest earned</th>
            <th>APY / AER</th>
          </tr>
        </thead>
        <tbody>
          {COMPOUNDING.map((row) => (
            <tr key={row.frequency}>
              <td>{row.frequency}</td>
              <td>{row.balance}</td>
              <td>{row.interest}</td>
              <td>{row.effective}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Going from yearly to daily compounding adds $12.67 on $10,000. Over longer periods the gap grows: after five years, $10,000
        at 5% becomes $12,762.82 with yearly compounding, $12,833.59 monthly and $12,840.03 daily. You can test any rate and schedule
        with the <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>How do the three terms compare?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>APR</th>
            <th>APY</th>
            <th>AER</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Includes compounding?</td>
            <td>Usually no</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Typical use</td>
            <td>Loans, mortgages, credit cards (all regions)</td>
            <td>Savings, CDs, money market accounts (US)</td>
            <td>Savings and ISAs (UK)</td>
          </tr>
          <tr>
            <td>Who it helps</td>
            <td>Borrowers comparing lenders</td>
            <td>Savers comparing accounts</td>
            <td>Savers comparing accounts</td>
          </tr>
          <tr>
            <td>Size vs the others</td>
            <td>Lower than the matching APY or AER</td>
            <td>Higher than the matching APR</td>
            <td>Higher than the matching APR</td>
          </tr>
        </tbody>
      </table>

      <h2>Which term is used in the US, UK and EU?</h2>
      <ul>
        <li><strong>United States:</strong> banks quote an APY on savings accounts and CDs and an APR on loans and credit cards. A savings account may also show an &quot;interest rate&quot;, which is the APR-style figure before compounding.</li>
        <li><strong>United Kingdom:</strong> savings and ISAs are advertised with an AER, often alongside a &quot;gross&quot; rate (before tax). Loans and credit cards show an APR, and loan ads usually quote a &quot;representative APR&quot;, the rate that at least 51% of accepted customers get.</li>
        <li><strong>Euro area and wider EU:</strong> consumer credit uses an APR (called TAEG, TAE or a similar name in some languages), and its calculation is set by EU consumer credit rules. Savings products are often shown as a nominal annual rate, and in some countries as an effective annual rate. Check which one a bank means before comparing two offers.</li>
      </ul>
      <p>
        Labels differ and definitions can vary slightly by country and product, so read the small print.
      </p>

      <h2>Worked example: a 5% savings rate on $10,000</h2>
      <p>Bank A advertises a 5% rate compounded monthly. Bank B advertises 5.00% APY. Which pays more?</p>
      <ol>
        <li><strong>Convert Bank A to APY:</strong> (1 + 0.05 ÷ 12)<sup>12</sup> − 1 = 5.1162%.</li>
        <li><strong>Compare:</strong> 5.1162% beats 5.00%, so Bank A pays more.</li>
        <li><strong>Check in money:</strong> Bank A turns $10,000 into $10,511.62 after a year. Bank B gives $10,500.00. Bank A is $11.62 better.</li>
      </ol>
      <p>
        Now reverse it. To deliver exactly 5.00% AER with monthly interest, a provider needs a stated rate of about 4.889%
        (12 × (1.05<sup>1/12</sup> − 1)). With daily interest the stated rate is about 4.879%. Both land at the same year-end balance,
        so a lower headline rate can be exactly as good. A stated rate of 4.8% compounded monthly is a 4.907% AER, and 4.9% monthly
        is 5.012%.
      </p>

      <h2>Why does a credit card APR understate the real cost?</h2>
      <p>
        Card issuers charge interest on a daily or monthly basis, and unpaid interest is added to the balance, so you pay interest on
        interest. The table shows a $5,000 balance left untouched for a year, with no new purchases or payments. This is a thought
        experiment, because real cards require minimum payments.
      </p>
      <table>
        <thead>
          <tr>
            <th>Card rate</th>
            <th>Effective yearly rate (monthly)</th>
            <th>Interest after 1 year (monthly)</th>
            <th>Interest after 1 year (daily)</th>
          </tr>
        </thead>
        <tbody>
          {CARDS.map((row) => (
            <tr key={row.apr}>
              <td>{row.apr}</td>
              <td>{row.monthly}</td>
              <td>{row.monthlyInterest}</td>
              <td>{row.dailyInterest}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        At 24% the simple-interest figure would be $1,200, but monthly compounding gives $1,341.21 and daily compounding $1,355.74.
        With regular payments the numbers differ, so see how fast a real balance clears in{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long it takes to pay off a credit card</Link>. If you are weighing a
        0% offer, <Link href="/guides/balance-transfer-math">the balance transfer math</Link> shows when the transfer fee is worth it.
      </p>

      <h2>How do you decide which rate to compare?</h2>
      <ul>
        <li><strong>Saving in cash?</strong> Compare APY or AER only. If an account shows just an APR or &quot;interest rate&quot;, convert it with the formula above, using the compounding schedule in the terms.</li>
        <li><strong>Borrowing?</strong> Compare APRs between like products (card with card, loan with loan), then ask how often interest is added and whether fees are included. Total cost in money is the safest test.</li>
        <li><strong>Choosing between a savings account and a CD?</strong> Match the term. A fixed rate is not like a variable rate that can fall; see <Link href="/guides/high-yield-savings-vs-cds">high-yield savings vs CDs</Link>.</li>
        <li><strong>Judging the real gain?</strong> A 5% yield with 3% inflation is a 1.94% real return (1.05 ÷ 1.03 − 1). <Link href="/guides/real-vs-nominal-returns">Real vs nominal returns</Link> covers this in detail.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Comparing an APR with an APY.</strong> They are not on the same basis. Convert first.</li>
        <li><strong>Ignoring the fine print on variable rates.</strong> A rate can change, and a bonus rate may end after a set period.</li>
        <li><strong>Judging a loan by its APR alone.</strong> Fees and term matter, so compare the total repaid.</li>
        <li><strong>Forgetting tax.</strong> AER and APY are usually quoted before tax. Rules differ by country and account type, so check yours.</li>
        <li><strong>Treating the example rates as current.</strong> The 5% and 24% here are illustrations, not market rates.</li>
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
