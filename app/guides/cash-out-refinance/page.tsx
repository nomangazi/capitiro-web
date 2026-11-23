import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "cash-out-refinance";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A cash-out refinance replaces your mortgage with a larger one and pays you the difference in cash. It can make sense when
        your current rate is high or the cash has a clearly profitable use. It rarely makes sense when you would swap a low rate
        for a much higher one on the whole balance, which is the trap this guide quantifies.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>You pay the new rate on your <strong>entire</strong> balance, not just on the cash you take out.</li>
        <li>In our example, keeping a 3.25% loan and borrowing $50,000 separately at 8.5% costs <strong>$1,925.55</strong> a month for 10 years. A 6.75% cash-out refinance costs <strong>$2,123.89</strong> a month for 30 years.</li>
        <li>Over the full terms, the cash-out refinance adds about <strong>$288,984</strong> of interest, mostly because it resets a cheap loan to a higher rate and a longer term.</li>
        <li>It tends to win only when your existing rate is at or above current rates, or when you need a large sum and a second loan would be pricier or unavailable.</li>
        <li>All rates and costs below are assumptions for illustration, not quotes.</li>
      </ul>

      <h2>What is a cash-out refinance?</h2>
      <p>
        You take a new first mortgage for more than you owe. The new loan pays off the old one, covers closing costs and sends you
        the rest. The extra is secured by your home, so missing payments puts the house at risk. A plain rate-and-term refinance
        changes the rate or term only; our <Link href="/guides/refinance-break-even">refinance break-even guide</Link> covers that
        case.
      </p>
      <p>
        Lenders commonly limit the new loan to about 80% of the home&apos;s value on conventional loans, though limits vary by
        lender and loan type. Fees are commonly a few percent of the loan. In the UK, the nearest equivalents are remortgaging to
        release equity or taking a further advance from your current lender. In Europe, the options and costs vary by country.
      </p>

      <h2>How does a cash-out refinance compare with other ways to borrow?</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Your existing mortgage</th>
            <th>Rate type</th>
            <th>Upfront costs</th>
            <th>Main risk</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cash-out refinance</td><td>Replaced entirely</td><td>Usually fixed, set on the whole balance</td><td>Closing costs on the whole new loan</td><td>Losing a low rate, longer term</td></tr>
          <tr><td>HELOC</td><td>Stays as is</td><td>Usually variable</td><td>Often lower</td><td>Payments can rise; home is security</td></tr>
          <tr><td>Home equity loan</td><td>Stays as is</td><td>Usually fixed</td><td>Some closing costs</td><td>Second payment; home is security</td></tr>
          <tr><td>Personal loan</td><td>Stays as is</td><td>Usually fixed</td><td>Possible origination fee</td><td>Higher rate, but the home is not security</td></tr>
        </tbody>
      </table>
      <p>
        The key difference is that only the cash-out refinance replaces your existing loan, so only it can cost you a cheap rate.
      </p>

      <h2>A worked example: keep the loan or refinance?</h2>
      <p>
        These are assumptions, not market data. You borrowed <strong>$300,000 at 3.25% for 30 years</strong>, a payment of{" "}
        <strong>$1,305.62</strong>. Five years later you owe <strong>$267,920</strong> on a home worth <strong>$430,000</strong>, a
        loan-to-value ratio of 62.3%. You want <strong>$50,000</strong> in cash.
      </p>
      <ul>
        <li><strong>Option A, keep and borrow:</strong> keep the mortgage (25 years left) and take a $50,000 loan at an assumed 8.5% for 10 years.</li>
        <li><strong>Option B, cash-out refinance:</strong> a new 30-year loan at an assumed 6.75%, with closing costs of 3% of balance plus cash ($9,537.61) added to the loan, giving a new loan of <strong>$327,457.88</strong> (76.2% of the home&apos;s value).</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>A: keep + $50,000 loan</th>
            <th>B: cash-out refinance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monthly payment, years 1 to 10</td><td>$1,925.55 ($1,305.62 + $619.93)</td><td>$2,123.89</td></tr>
          <tr><td>Monthly payment after year 10</td><td>$1,305.62</td><td>$2,123.89</td></tr>
          <tr><td>Total interest over the terms</td><td>$148,156.83</td><td>$437,140.93</td></tr>
          <tr><td>Total paid in the first 10 years</td><td>$231,065.69</td><td>$254,866.27</td></tr>
          <tr><td>Mortgage balance after 10 years</td><td>$185,808.59</td><td>$279,324.84</td></tr>
        </tbody>
      </table>
      <p>
        Option B costs $198.34 more a month at first, and $288,984 more interest overall. Part of that is the longer horizon: B
        runs 30 years and A about 25. Even if you shorten B to 25 years, it needs $2,262.44 a month and pays about $351,275 of
        interest.
      </p>

      <h2>What is the blended-rate trap?</h2>
      <p>
        Option A&apos;s blended rate is about <strong>4.08%</strong>: $267,920 at 3.25% mixed with $50,000 at 8.5%. Option B
        charges 6.75% on all $327,458. The $50,000 is not the expensive part. Moving your existing $267,920 from 3.25% to 6.75%
        over the same 25 years would by itself raise the payment from $1,305.62 to $1,851.09, an extra $545.47 a month, before you
        take any cash. Option B hides that by stretching to 30 years, which makes the payment look manageable.
      </p>
      <p>
        Closing costs matter too. Rolling the $9,537.61 into the loan means you pay interest on it, about $12,732 over 30 years at
        6.75%. Check that cost against the saving you expect.
      </p>

      <h2>When does a cash-out refinance make sense?</h2>
      <ul>
        <li><strong>Your current rate is high.</strong> If you are on a rate at or above today&apos;s, you may lower it and get cash in one step. Run the break-even maths first.</li>
        <li><strong>You need a large amount, and other loans would cost more or are unavailable.</strong> Lender limits on second loans and credit requirements differ.</li>
        <li><strong>You will use the cash for something that pays back,</strong> such as a renovation that adds value, or paying off higher-interest debt. See the <Link href="/guides/debt-consolidation-loans">debt consolidation loans guide</Link> for how that compares.</li>
        <li><strong>You value one fixed payment</strong> and accept the trade-offs above.</li>
      </ul>

      <h2>When should you avoid it?</h2>
      <ul>
        <li>Your current rate is well below today&apos;s, as in the example.</li>
        <li>The cash is for spending that does not hold value, like a holiday. You would be paying interest for decades on a short-term want.</li>
        <li>You expect to move soon, so you cannot spread the closing costs over many years.</li>
        <li>Your budget is tight. A higher payment secured by your home raises the stakes if income falls.</li>
        <li>You are turning unsecured debt into secured debt without changing the habits that created it.</li>
      </ul>

      <h2>How should you decide?</h2>
      <ol>
        <li><strong>Price the alternative.</strong> Get quotes for a HELOC, home equity loan and personal loan for the amount you need.</li>
        <li><strong>Compute both paths.</strong> Enter the current loan and the cash-out option into the <Link href="/calculators/refinance">refinance calculator</Link> using the cash-out field, and compare the payment and total interest with the alternative.</li>
        <li><strong>Compare the same horizon.</strong> A 30-year loan against a 10-year loan looks cheaper per month, so compare total interest and balance after, say, 10 years.</li>
        <li><strong>Include closing costs.</strong> Compare Loan Estimates from several lenders, and consider whether <Link href="/guides/mortgage-points">mortgage points</Link> are worth paying.</li>
        <li><strong>Check the payment against your budget.</strong> Use the <Link href="/calculators/mortgage">mortgage calculator</Link> to add tax, insurance and any PMI to the new payment.</li>
        <li><strong>Test the downside.</strong> Ask whether you could keep paying if your income dropped.</li>
      </ol>

      <h2>Does this apply in the UK and EU?</h2>
      <p>
        Not in the same form. A UK borrower would typically either remortgage to a larger loan to release equity, or ask their
        lender for a further advance, which is a separate borrowing on its own terms. Early repayment charges on a fixed deal can
        be part of the cost. Rules in EU countries differ, so check with a local lender or regulator. The arithmetic of the
        blended rate is the same in any currency.
      </p>

      <h2>Where can I get official guidance?</h2>
      <p>
        The US Consumer Financial Protection Bureau has{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">home buying and mortgage resources</a>.
        Read each Loan Estimate and your loan agreement closely. This guide is general information, not financial advice.
      </p>
    </GuideLayout>
  );
}
