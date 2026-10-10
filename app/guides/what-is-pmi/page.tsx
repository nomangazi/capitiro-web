import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "what-is-pmi";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        If you buy a home in the US with less than 20% down on a conventional loan, your lender will almost always require{" "}
        <strong>private mortgage insurance (PMI)</strong>. It can add over a hundred dollars to your monthly payment — but it
        doesn&apos;t last forever, and there are several ways to avoid or shorten it.
      </p>

      <h2>What PMI is (and who it protects)</h2>
      <p>
        PMI is insurance that protects the <strong>lender</strong>, not you, if you stop making payments. Because a small down
        payment means the lender has less of a cushion, it asks you to pay for this protection. In return, PMI makes it possible to
        buy a home years earlier than if you had to save a full 20%.
      </p>

      <h2>How much does PMI cost?</h2>
      <p>
        PMI is usually quoted as an annual percentage of the loan amount — commonly somewhere between about 0.3% and 1.5% — and is
        added to your monthly payment. The exact rate depends mainly on your credit score and how much you put down.
      </p>
      <p>
        Here is what PMI could look like on a <strong>$350,000 home</strong> with a 6.5% 30-year loan, assuming a 0.5% PMI rate and
        that PMI ends automatically when the balance reaches 78% of the purchase price:
      </p>
      <table>
        <thead>
          <tr>
            <th>Down payment</th>
            <th>Loan</th>
            <th>PMI / month</th>
            <th>How long</th>
            <th>Total PMI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5% ($17,500)</td>
            <td>$332,500</td>
            <td>$139</td>
            <td>≈ 11 years 3 months</td>
            <td>≈ $18,700</td>
          </tr>
          <tr>
            <td>10% ($35,000)</td>
            <td>$315,000</td>
            <td>$131</td>
            <td>≈ 9 years 1 month</td>
            <td>≈ $14,300</td>
          </tr>
          <tr>
            <td>15% ($52,500)</td>
            <td>$297,500</td>
            <td>$124</td>
            <td>≈ 6 years 3 months</td>
            <td>≈ $9,300</td>
          </tr>
          <tr>
            <td>20% ($70,000)</td>
            <td>$280,000</td>
            <td>$0</td>
            <td>—</td>
            <td>$0</td>
          </tr>
        </tbody>
      </table>
      <p>
        Each extra 5% down lowers the monthly charge a little, but its biggest effect is on <em>how long</em> you pay it.
      </p>

      <h2>When PMI goes away</h2>
      <p>For conventional loans, the US Homeowners Protection Act sets two key points (based on the home&apos;s original value):</p>
      <ul>
        <li>
          <strong>80% loan-to-value — you can ask to cancel.</strong> Once your balance reaches 80% of the original value, you can
          request cancellation in writing, provided your payment history is good. In the 10%-down example above, that happens after
          about 95 payments (just under 8 years).
        </li>
        <li>
          <strong>78% loan-to-value — it ends automatically.</strong> The lender must drop PMI when the balance is scheduled to reach
          78%, if you&apos;re current on payments — about 109 payments in the same example.
        </li>
      </ul>
      <p>
        FHA loans work differently: they charge a mortgage insurance premium (MIP) that, for many borrowers, lasts for the life of
        the loan unless you refinance. VA loans don&apos;t charge monthly mortgage insurance but usually have an upfront funding fee.
      </p>

      <h2>Five ways to avoid or shorten PMI</h2>
      <ol>
        <li><strong>Put 20% down.</strong> The simplest route, if saving a little longer is realistic. Plan it with our <Link href="/calculators/savings-goal">savings goal calculator</Link>.</li>
        <li>
          <strong>Pay extra principal.</strong> Extra payments reach the 80% mark sooner. In the 10%-down example, adding $200 a
          month gets there in about 62 payments instead of 95 — then request cancellation.
        </li>
        <li><strong>Ask for a new appraisal.</strong> If your home&apos;s value has risen, some lenders will cancel PMI based on the new value (rules and seasoning periods vary).</li>
        <li><strong>Improve your credit score before applying</strong> — a higher score usually means a lower PMI rate.</li>
        <li><strong>Compare lender-paid PMI or other programs</strong>, but check the trade-off: lender-paid PMI usually means a higher interest rate for the whole loan.</li>
      </ol>

      <h2>Is paying PMI ever worth it?</h2>
      <p>
        Often, yes. If waiting to save 20% would take years while home prices and rents keep rising, paying PMI for a limited period
        can cost less than waiting. The key is to treat it as temporary: know your 80% date, and plan to reach it. To compare
        scenarios, read <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link>, then run the numbers
        below — the mortgage calculator shows your monthly PMI, how many months you&apos;ll pay it and the total cost.
      </p>
    </GuideLayout>
  );
}
