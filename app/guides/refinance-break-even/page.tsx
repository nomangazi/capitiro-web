import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "refinance-break-even";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.title, description: guide.description, path: guidePath(SLUG), type: "article" });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        When mortgage rates fall, refinancing can cut your monthly payment by hundreds of dollars. But refinancing isn&apos;t free —
        closing costs can run into thousands — and restarting a 30-year clock can quietly increase the total you pay. The key number
        to understand is the <strong>break-even point</strong>.
      </p>

      <h2>The break-even formula</h2>
      <p>
        <strong>Break-even (months) = total refinancing costs ÷ monthly savings</strong>
      </p>
      <p>
        If closing costs are $6,000 and your new payment is $300 lower, you break even after 20 months. Stay in the home longer than
        that and the refinance pays for itself; sell sooner and you lose money.
      </p>

      <h2>A worked example</h2>
      <p>
        Three years ago you borrowed <strong>$320,000 at 7.5% for 30 years</strong>. Your principal and interest payment is about{" "}
        <strong>$2,237</strong>, and you now owe about <strong>$310,400</strong>. If you keep this loan, you&apos;ll pay roughly{" "}
        $414,500 more in interest over the remaining 27 years. Closing costs for a refinance are assumed at 2.5% of the balance —
        about <strong>$7,760</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>New loan</th>
            <th>New payment</th>
            <th>Monthly saving</th>
            <th>Break-even</th>
            <th>Lifetime result*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6.25%, 30 years</td>
            <td>$1,911</td>
            <td>$326</td>
            <td>≈ 24 months</td>
            <td>Saves ≈ $29,000</td>
          </tr>
          <tr>
            <td>6.25%, 27 years</td>
            <td>$1,986</td>
            <td>$252</td>
            <td>≈ 31 months</td>
            <td>Saves ≈ $73,800</td>
          </tr>
          <tr>
            <td>7.0%, 30 years</td>
            <td>$2,065</td>
            <td>$172</td>
            <td>≈ 45 months</td>
            <td>Costs ≈ $26,400 more</td>
          </tr>
        </tbody>
      </table>
      <p>
        <small>
          *Remaining interest on the old loan minus interest on the new loan and closing costs, if each loan runs to the end of its
          term.
        </small>
      </p>

      <h2>Three lessons from the example</h2>
      <ol>
        <li>
          <strong>A lower payment isn&apos;t always a saving.</strong> The 7% refinance lowers the payment by $172, but because it
          stretches the loan back to 30 years, you&apos;d pay about $26,000 more overall.
        </li>
        <li>
          <strong>Keep your payoff date if you can.</strong> Refinancing into a 27-year term (matching the time left on the old loan)
          saves far more over the life of the loan, even though the monthly saving is smaller.
        </li>
        <li>
          <strong>How long you&apos;ll stay matters.</strong> If you might move within two to three years, even a good rate drop may
          not reach break-even.
        </li>
      </ol>

      <h2>What counts as refinancing costs?</h2>
      <ul>
        <li>Lender origination and underwriting fees</li>
        <li>Appraisal, title insurance and recording fees</li>
        <li>Discount points (if you pay to lower the rate)</li>
        <li>Prepaid interest and escrow deposits (these move money around rather than being a true cost, but you still need the cash)</li>
      </ul>
      <p>
        &quot;No-closing-cost&quot; refinances roll fees into the loan balance or a higher rate — the cost is still there, just less
        visible. Compare the lender&apos;s Loan Estimate line by line.
      </p>

      <h2>Is there a rule of thumb?</h2>
      <p>
        You&apos;ll often hear &quot;refinance if you can cut your rate by at least 1 percentage point.&quot; It&apos;s a reasonable
        starting point, but the break-even calculation is more reliable because it accounts for your actual costs, balance and plans.
      </p>

      <h2>A note for UK and European homeowners</h2>
      <p>
        In the UK, &quot;remortgaging&quot; usually happens when a fixed-rate deal ends. Leaving a fix early can trigger an early
        repayment charge (ERC), which should be added to your costs in the break-even formula. The same logic applies to most
        European fixed-rate mortgages.
      </p>

      <h2>Run your own numbers</h2>
      <ol>
        <li>Find your current balance, rate and remaining term on your latest statement.</li>
        <li>Enter the new rate and term into the calculator below to get your new payment.</li>
        <li>Subtract it from your current payment, then divide your closing costs by the difference.</li>
        <li>Compare total interest on both loans — not just the monthly payment.</li>
      </ol>
      <p>
        Want to shorten your loan without refinancing? Extra payments can do that with no closing costs — see{" "}
        <Link href="/guides/extra-mortgage-payments">how extra mortgage payments save you money</Link>.
      </p>
    </GuideLayout>
  );
}
