import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "refinance-break-even";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        When mortgage rates fall, refinancing can cut your monthly payment by hundreds of dollars. But refinancing isn&apos;t free —
        closing costs can run into thousands — and restarting a 30-year clock can quietly increase the total you pay. The key number
        to understand is the <strong>break-even point</strong>.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Break-even months equal total closing costs divided by your monthly payment saving. Refinancing only pays off if you keep the loan longer than that.</li>
        <li>In our example (a $310,400 balance at 7.5%), refinancing to 6.25% for 30 years breaks even in about <strong>24 months</strong>. At 7.0% it takes about <strong>45 months</strong> and costs more in total.</li>
        <li>Closing costs shift the answer a lot: at 1% of the balance break-even is about 10 months, at 5% it is about 48 months.</li>
        <li>Compare total interest as well as the monthly payment, because a longer term can cost more even when the payment falls.</li>
      </ul>

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
            <td>Saves ≈ $29,100</td>
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

      <h2>How do closing costs change the break-even point?</h2>
      <p>
        Closing costs are the biggest unknown before you apply. Using the same $310,446 balance and a new rate of 6.25%, here is how
        different cost levels (shown as a percentage of the balance) move the answer. The 2.5% row is the example above.
      </p>
      <table>
        <thead>
          <tr>
            <th>Closing costs</th>
            <th>Amount</th>
            <th>30-year: break-even</th>
            <th>30-year: lifetime result</th>
            <th>27-year: break-even</th>
            <th>27-year: lifetime result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1%</td><td>$3,104</td><td>≈ 10 months</td><td>Saves ≈ $33,700</td><td>≈ 12 months</td><td>Saves ≈ $78,400</td></tr>
          <tr><td>2%</td><td>$6,209</td><td>≈ 19 months</td><td>Saves ≈ $30,600</td><td>≈ 25 months</td><td>Saves ≈ $75,300</td></tr>
          <tr><td>2.5%</td><td>$7,761</td><td>≈ 24 months</td><td>Saves ≈ $29,100</td><td>≈ 31 months</td><td>Saves ≈ $73,800</td></tr>
          <tr><td>3%</td><td>$9,313</td><td>≈ 29 months</td><td>Saves ≈ $27,500</td><td>≈ 37 months</td><td>Saves ≈ $72,200</td></tr>
          <tr><td>4%</td><td>$12,418</td><td>≈ 38 months</td><td>Saves ≈ $24,400</td><td>≈ 49 months</td><td>Saves ≈ $69,100</td></tr>
          <tr><td>5%</td><td>$15,522</td><td>≈ 48 months</td><td>Saves ≈ $21,300</td><td>≈ 62 months</td><td>Saves ≈ $66,000</td></tr>
        </tbody>
      </table>
      <p>
        Every extra 1% of closing costs adds roughly 9 to 10 months to the 30-year break-even. Ask each lender for a Loan Estimate (the{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">CFPB home buying guide</a>{" "}
        explains how to read one) and compare the same figures side by side before you choose.
      </p>

      <h2>How much does the new rate matter?</h2>
      <p>
        With closing costs held at 2.5% ($7,761) and the same $310,446 balance, a smaller rate drop gives a much longer wait.
        Compare the new loan with the old payment of $2,237:
      </p>
      <table>
        <thead>
          <tr>
            <th>New rate</th>
            <th>30-year: monthly saving</th>
            <th>30-year: break-even</th>
            <th>30-year: lifetime</th>
            <th>27-year: break-even</th>
            <th>27-year: lifetime</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>7.25%</td><td>$120</td><td>≈ 65 months</td><td>Costs ≈ $45,200 more</td><td>≈ 151 months</td><td>Saves ≈ $8,900</td></tr>
          <tr><td>6.75%</td><td>$224</td><td>≈ 35 months</td><td>Costs ≈ $7,700 more</td><td>≈ 51 months</td><td>Saves ≈ $41,700</td></tr>
          <tr><td>6.5%</td><td>$275</td><td>≈ 28 months</td><td>Saves ≈ $10,800</td><td>≈ 38 months</td><td>Saves ≈ $57,800</td></tr>
          <tr><td>6.0%</td><td>$376</td><td>≈ 21 months</td><td>Saves ≈ $47,100</td><td>≈ 26 months</td><td>Saves ≈ $89,600</td></tr>
          <tr><td>5.5%</td><td>$475</td><td>≈ 16 months</td><td>Saves ≈ $82,600</td><td>≈ 20 months</td><td>Saves ≈ $120,600</td></tr>
        </tbody>
      </table>
      <p>
        A one-point drop (7.5% to 6.5%) breaks even in about 28 months here, which is why the &quot;one percentage point&quot; rule
        of thumb is a reasonable screen. A half-point drop (to 7.0%) does not clear the bar on a fresh 30-year term.
      </p>

      <h2>How long do I need to stay in the home?</h2>
      <p>
        This table shows your cumulative cash position at each point, calculated as the monthly payment saving multiplied by months
        elapsed, minus the $7,761 in closing costs. It uses the 6.25% refinance and ignores any difference in interest.
      </p>
      <table>
        <thead>
          <tr>
            <th>Years in the home</th>
            <th>30-year refinance</th>
            <th>27-year refinance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>−$3,800</td><td>−$4,700</td></tr>
          <tr><td>2</td><td>+$100</td><td>−$1,700</td></tr>
          <tr><td>3</td><td>+$4,000</td><td>+$1,300</td></tr>
          <tr><td>5</td><td>+$11,800</td><td>+$7,300</td></tr>
          <tr><td>7</td><td>+$19,600</td><td>+$13,400</td></tr>
          <tr><td>10</td><td>+$31,400</td><td>+$22,400</td></tr>
        </tbody>
      </table>
      <p>
        If you expect to sell, move or refinance again within about two to three years, the refinance may not pay back. Our{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link> shows the balance you would owe at any
        future date.
      </p>

      <h2>Should I pay for discount points?</h2>
      <p>
        One discount point costs 1% of the loan, which is $3,104 on this balance. Suppose that point cuts the rate from 6.25% to 6.0%
        (an illustration; real pricing varies by lender and day). The payment would fall from $1,911 to $1,861, a $50 saving, so the
        point takes about 62 months, or just over five years, to pay for itself. Points suit people who are sure they will stay
        for many years.
      </p>

      <h2>What about rolling closing costs into the loan?</h2>
      <p>
        Adding the $7,761 of costs to a 6.25%, 30-year loan makes the new balance $318,207 and the payment $1,959, so your monthly
        saving is $278 instead of $326. You avoid paying cash at closing, but the lifetime result falls from about $29,100 to about
        $19,600, because you also repay the $7,761 you borrowed and pay interest on it. It is a reasonable choice if cash is tight, as long as you see the cost for what it is.
      </p>

      <h2>Should I shorten the term instead?</h2>
      <p>
        Refinancing into a shorter term can cut far more interest. At 6.25% over 20 years, the payment is about $2,269, only $32
        higher than today&apos;s $2,237, and the interest on the new loan would be about $234,100 compared with about $414,500 on the
        old one. After the $7,761 of closing costs, that is a lifetime saving of about $172,600. A shorter term usually comes with a
        lower rate too, but check whether the larger payment fits your budget. The{" "}
        <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</Link> explains the trade-off.
      </p>

      <h2>Is a cash-out refinance different from a rate-and-term refinance?</h2>
      <p>
        A rate-and-term refinance changes the rate or term only. A cash-out refinance replaces your loan with a bigger one and pays
        you the difference. Here is a $40,000 cash-out compared with a plain refinance (closing costs at 2.5% of the new loan, 30-year
        terms):
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>New loan</th>
            <th>Payment</th>
            <th>Interest over the loan</th>
            <th>Cash after closing costs</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Keep current loan</td><td>$310,446</td><td>$2,237</td><td>≈ $414,500 (remaining)</td><td>$0</td></tr>
          <tr><td>Rate-and-term at 6.25%</td><td>$310,446</td><td>$1,911</td><td>≈ $377,700</td><td>$0 (costs $7,761)</td></tr>
          <tr><td>Cash-out at 6.25%</td><td>$350,446</td><td>$2,158</td><td>≈ $426,300</td><td>≈ $31,200</td></tr>
          <tr><td>Cash-out at 6.75%</td><td>$350,446</td><td>$2,273</td><td>≈ $467,800</td><td>≈ $31,200</td></tr>
        </tbody>
      </table>
      <p>
        At the same 6.25% rate, the extra $40,000 raises the payment by about $246 a month and adds about $48,700 in interest. Cash-out
        loans are often priced a little higher, and at 6.75% the payment ($2,273) ends up above your current one. Your home secures the
        borrowing, so use cash-out for something that pays back, and compare it with other options such as paying down high-interest
        debt with the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>

      <h2>When does refinancing make sense apart from the rate?</h2>
      <ul>
        <li><strong>Removing PMI:</strong> if your home has gained value, a new loan under 80% loan-to-value avoids it. See <Link href="/guides/what-is-pmi">what PMI is</Link>.</li>
        <li><strong>Switching from an adjustable to a fixed rate</strong> for payment certainty.</li>
        <li><strong>Removing a borrower</strong> after a divorce or other change.</li>
      </ul>
      <p>
        These can justify a refinance without a big rate drop, but the break-even maths still applies to the closing costs.
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
      <p>
        As an illustration, take a £250,000 balance with 20 years left, moving from 5.5% to 4.5%. The monthly payment falls from
        about £1,720 to about £1,582, a saving of about £138. With £1,000 of fees, break-even depends heavily on the ERC:
      </p>
      <table>
        <thead>
          <tr>
            <th>Early repayment charge</th>
            <th>Total cost (fees + ERC)</th>
            <th>Break-even</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>None (fix has ended)</td><td>£1,000</td><td>≈ 7 months</td></tr>
          <tr><td>1% (£2,500)</td><td>£3,500</td><td>≈ 25 months</td></tr>
          <tr><td>2% (£5,000)</td><td>£6,000</td><td>≈ 43 months</td></tr>
          <tr><td>3% (£7,500)</td><td>£8,500</td><td>≈ 62 months</td></tr>
        </tbody>
      </table>
      <p>
        That is why many UK borrowers wait until the fix ends, or start comparing deals a few months earlier, rather than paying an ERC.
      </p>

      <h2>What are the common mistakes?</h2>
      <ul>
        <li><strong>Judging only by the monthly payment.</strong> A longer term can lower the payment and raise total interest.</li>
        <li><strong>Restarting the clock.</strong> Refinancing back to 30 years after several years of payments adds interest unless you keep paying the old amount.</li>
        <li><strong>Ignoring how long you will stay.</strong> The break-even only helps if you stay past it.</li>
        <li><strong>Overlooking the cash you need.</strong> Closing costs often need to be paid at closing, so plan for them with the <Link href="/calculators/savings-goal">savings goal calculator</Link>.</li>
        <li><strong>Not comparing lenders.</strong> Fees vary, so get Loan Estimates from several lenders and compare them line by line.</li>
      </ul>

      <h2>Run your own numbers</h2>
      <p>
        You can test your own balance, rates and closing costs, including a rolled-in or cash-out option, in the{" "}
        <Link href="/calculators/refinance">mortgage refinance calculator</Link>. To do it by hand, follow these steps.
      </p>
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
      <p>
        If you are deciding how much to borrow in the first place, start with{" "}
        <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link>, and use the{" "}
        <Link href="/calculators/mortgage">mortgage calculator</Link> to see the full monthly cost.
      </p>
    </GuideLayout>
  );
}
