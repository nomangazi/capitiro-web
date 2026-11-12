import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "mortgage-points";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Mortgage points let you pay cash at closing in exchange for a lower interest rate. They are worth paying only if you keep the
        loan longer than the break-even point, which is often around five years or more. This guide shows the math with one
        illustrative example, so you can test your own quote.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>One discount point costs 1% of the loan amount. On a $400,000 loan that is <strong>$4,000</strong>.</li>
        <li>In our example, one point cuts the rate from 6.75% to 6.50%, lowers the payment by <strong>$66.12</strong> a month and breaks even in about <strong>61 months</strong>.</li>
        <li>Selling or refinancing before break-even loses money. Holding the loan well past it saves money: <strong>$19,803</strong> net over 30 years for one point.</li>
        <li>The rate cut per point varies by lender and by day. The rates here are illustrative, not a quote or a market average.</li>
      </ul>

      <h2>What is a mortgage point?</h2>
      <p>
        A <strong>discount point</strong> is a fee you pay the lender at closing to buy a lower rate. One point equals 1% of the loan
        amount, and lenders can offer fractions of a point. This is different from <strong>origination points</strong>, which are a
        fee for processing the loan and do not lower your rate. Check which kind your Loan Estimate lists. The{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">CFPB home buying guide</a>{" "}
        explains how to read one.
      </p>

      <h2>How much does one point lower your rate?</h2>
      <p>
        There is no fixed answer. Some lenders cut the rate by about a quarter of a percentage point per point, others by more or
        less, and the offer can change daily. Throughout this guide we use a made-up price list for a <strong>$400,000, 30-year
        fixed loan</strong>: 6.75% with no points, 6.50% with one point and 6.25% with two. Replace them with the numbers from your own
        quotes.
      </p>

      <h2>How do you work out the break-even point?</h2>
      <p>
        <strong>Break-even (months) = cost of the points ÷ monthly payment saving</strong>
      </p>
      <p>
        Only principal and interest changes with the rate, so compare that part of the payment. Taxes, insurance and any HOA fees stay
        the same. The break-even point is how long you need to keep the loan before the lower payments have repaid what you spent.
      </p>

      <h2>A worked example: 0, 1 and 2 points</h2>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Upfront cost</th>
            <th>Rate</th>
            <th>Monthly P&amp;I</th>
            <th>Monthly saving</th>
            <th>Break-even</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0 points</td><td>$0</td><td>6.75%</td><td>$2,594.39</td><td>–</td><td>–</td></tr>
          <tr><td>1 point</td><td>$4,000</td><td>6.50%</td><td>$2,528.27</td><td>$66.12</td><td>≈ 61 months</td></tr>
          <tr><td>2 points</td><td>$8,000</td><td>6.25%</td><td>$2,462.87</td><td>$131.52</td><td>≈ 61 months</td></tr>
        </tbody>
      </table>
      <p>
        One point takes about 60.5 months to pay back ($4,000 ÷ $66.12), and two points take about 60.8 months. The second point on
        its own ($4,000 for another $65.40 a month) breaks even in about 61 months.
      </p>

      <h2>How much interest do points save over 5, 10 and 30 years?</h2>
      <p>
        The table below counts the interest you avoid in the first 5, 10 or 30 years compared with the no-points loan, then subtracts
        what the points cost. A negative number would mean you are still behind.
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Net after 5 years</th>
            <th>Net after 10 years</th>
            <th>Net after 30 years</th>
            <th>Total interest over 30 years</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0 points</td><td>–</td><td>–</td><td>–</td><td>$533,981</td></tr>
          <tr><td>1 point</td><td>+$1,026</td><td>+$6,034</td><td>+$19,803</td><td>$510,178</td></tr>
          <tr><td>2 points</td><td>+$2,045</td><td>+$12,036</td><td>+$39,348</td><td>$486,633</td></tr>
        </tbody>
      </table>
      <p>
        Before subtracting the cost, one point saves $23,803 of interest over 30 years and two points save $47,348. After five years the
        net result is close to zero because you are only just reaching break-even. The interest figure is slightly more generous than
        the simple payment break-even because the lower rate also pays down principal a little faster.
      </p>

      <h2>When do points pay off, and when do they not?</h2>
      <p><strong>Points tend to pay off when:</strong></p>
      <ul>
        <li>You expect to keep the loan for well beyond the break-even point, for example in a long-term home.</li>
        <li>You have spare cash after covering your down payment, closing costs and an emergency fund.</li>
        <li>The lender gives a meaningful rate cut for each point.</li>
      </ul>
      <p><strong>Points tend not to pay off when:</strong></p>
      <ul>
        <li>You may sell, move or refinance within a few years. At 36 months, one point has returned about $2,380 of the $4,000, so you would be about $1,620 behind.</li>
        <li>You would need to stretch to afford the closing costs.</li>
        <li>Rates may fall soon and you plan to refinance. Read <Link href="/guides/refinance-break-even">refinance break-even explained</Link> first, because refinancing starts a new break-even clock.</li>
      </ul>

      <h2>What if the rate cut is smaller than in the example?</h2>
      <p>
        The rate cut matters as much as the price. Here is the same $4,000 point from the 6.75% starting rate, with three possible
        cuts:
      </p>
      <table>
        <thead>
          <tr>
            <th>Rate cut for one point</th>
            <th>New rate</th>
            <th>Monthly P&amp;I</th>
            <th>Monthly saving</th>
            <th>Break-even</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0.125%</td><td>6.625%</td><td>$2,561.24</td><td>$33.15</td><td>≈ 121 months</td></tr>
          <tr><td>0.25%</td><td>6.50%</td><td>$2,528.27</td><td>$66.12</td><td>≈ 61 months</td></tr>
          <tr><td>0.375%</td><td>6.375%</td><td>$2,495.48</td><td>$98.91</td><td>≈ 40 months</td></tr>
        </tbody>
      </table>
      <p>
        A small cut can push break-even past ten years, which is longer than many people keep a mortgage. This is why you should
        always ask for quotes with and without points and calculate the break-even yourself.
      </p>

      <h2>Points or a bigger down payment?</h2>
      <p>
        If you have $4,000 extra, you could put it into the down payment instead. On the same loan, a $396,000 balance at 6.75% has
        a payment of $2,568.45, a saving of only $25.94 a month and about $5,340 of interest over 30 years. One point on the $400,000
        loan saves $66.12 a month and $23,803 of interest. The cash saves less per dollar on the down payment, but the comparison is
        not quite fair: down payment money stays in the house as equity, while points are a cost you do not get back. A larger down
        payment can also help you reach the 20% equity that avoids PMI (see <Link href="/guides/what-is-pmi">what PMI is</Link>). If
        you are close to a threshold, check that first.
      </p>

      <h2>How should you decide?</h2>
      <ol>
        <li>Ask for the same quote with 0, 1 and 2 points, and note each rate, fee and payment.</li>
        <li>Calculate break-even for each: points cost ÷ monthly P&amp;I saving.</li>
        <li>Be honest about how long you will keep the loan, including the chance you will move or refinance.</li>
        <li>Check that the cash will not drain your emergency fund or down payment.</li>
        <li>Compare with other uses of the cash, such as a larger down payment, <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link> or <Link href="/guides/overpay-mortgage-or-invest">investing instead</Link>.</li>
      </ol>
      <p>
        If the break-even is comfortably shorter than the time you expect to stay, points are worth considering. If it is close, the
        no-points loan keeps your cash flexible. The shorter loan term also matters: see the{" "}
        <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</Link> if you are still choosing a term.
      </p>

      <h2>Are mortgage points tax deductible?</h2>
      <p>
        In some circumstances, points may be deductible in the US, but the rules depend on your situation. The IRS explains them in{" "}
        <a href="https://www.irs.gov/taxtopics/tc504" target="_blank" rel="noopener noreferrer">Topic No. 504, Home mortgage points</a>.
        Do not count a deduction in your break-even unless you have confirmed it applies to you.
      </p>

      <h2>A note for UK and European readers</h2>
      <p>
        Discount points are a US product. The closest equivalent in the UK and much of Europe is paying a larger product or
        arrangement fee to get a lower rate. The same break-even test works: divide the extra fee by the monthly saving, then compare
        that with how long the deal lasts. A two- or five-year fix may end before you reach break-even, and an early repayment charge
        can add to the cost if you leave early.
      </p>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Assuming every point gives the same cut.</strong> Check the actual rate on each quote.</li>
        <li><strong>Ignoring how long you will stay.</strong> Break-even only helps if you pass it.</li>
        <li><strong>Mixing up discount points and origination fees.</strong> Only discount points buy a lower rate.</li>
        <li><strong>Draining your reserves.</strong> A lower payment is no help if you have no cash for repairs.</li>
        <li><strong>Forgetting that rates can fall.</strong> If you refinance, the points on the old loan are gone.</li>
      </ul>

      <h2>Run your own numbers</h2>
      <p>
        Enter each quote into the <Link href="/calculators/mortgage">mortgage calculator</Link> to see the full monthly cost, then use
        the <Link href="/calculators/loan-amortization">loan amortization calculator</Link> to compare the interest you would pay under
        each rate. Subtract the points cost from the interest saved to see your net result.
      </p>

      <p>
        This guide is general education, not personal financial advice. The rates, prices and savings above are illustrative, and
        real offers vary by lender, borrower and date. Taxes, PMI and escrow are not modelled. Speak to a qualified adviser about your
        own situation.
      </p>
    </GuideLayout>
  );
}
