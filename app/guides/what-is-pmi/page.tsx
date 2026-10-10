import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "what-is-pmi";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        If you buy a home in the US with less than 20% down on a conventional loan, your lender will almost always require{" "}
        <strong>private mortgage insurance (PMI)</strong>. It can add over a hundred dollars to your monthly payment — but it
        doesn&apos;t last forever, and there are several ways to avoid or shorten it.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>PMI protects the lender, not you. It is usually required on conventional loans with less than 20% down.</li>
        <li>On a $350,000 home at 6.5%, assuming a 0.5% PMI rate, 5% down means about $139 a month for about 11 years 3 months, roughly $18,700 in total.</li>
        <li>Your PMI rate depends heavily on credit and down payment. At 10% down, an illustrative range of 0.3% to 1.4% means about $79 to $368 a month.</li>
        <li>You can ask to cancel at 80% loan-to-value, and it must end automatically at 78% if you are current on payments.</li>
        <li>Paying $200 extra a month on a 10%-down loan reaches 80% about 33 payments sooner, in 62 payments instead of 95.</li>
      </ul>

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

      <h2>How much does your credit score change the cost?</h2>
      <p>
        The 0.5% rate above is only one assumption. Insurers price PMI by risk, so a borrower with strong credit pays much less than
        one with weaker credit. The rates below are <strong>illustrative assumptions, not quotes</strong>, applied to the
        $315,000 loan from the 10%-down row. PMI runs for the same 109 months in each case, because the loan balance does not depend
        on the PMI rate.
      </p>
      <table>
        <thead>
          <tr>
            <th>Illustrative PMI rate</th>
            <th>PMI / month</th>
            <th>Total PMI over 109 months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.3% (stronger credit)</td>
            <td>$79</td>
            <td>$8,584</td>
          </tr>
          <tr>
            <td>0.5% (example above)</td>
            <td>$131</td>
            <td>$14,306</td>
          </tr>
          <tr>
            <td>0.9% (middle)</td>
            <td>$236</td>
            <td>$25,751</td>
          </tr>
          <tr>
            <td>1.4% (weaker credit)</td>
            <td>$368</td>
            <td>$40,058</td>
          </tr>
        </tbody>
      </table>
      <p>
        The spread is large: the same house and down payment can carry about $31,000 more PMI at the top of this range than at the
        bottom. Ask lenders for a quote at several credit and down payment levels, and check your credit reports for errors before you
        apply.
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
        There is also a backstop: if you are current, PMI must end by the midpoint of the loan term (the end of year 15 on a
        30-year loan) even if your balance has not reached 78%. The Consumer Financial Protection Bureau explains the rules in{" "}
        <a
          href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          When can I remove PMI from my loan?
        </a>{" "}
        These protections apply to borrower-paid PMI. Lender-paid PMI is not cancelable the same way.
      </p>
      <p>
        FHA loans work differently: they charge a mortgage insurance premium (MIP) that, for many borrowers, lasts for the life of
        the loan unless you refinance. VA loans don&apos;t charge monthly mortgage insurance but usually have an upfront funding fee.
      </p>

      <h2>Is it worth asking to cancel at 80% instead of waiting for 78%?</h2>
      <p>
        Yes, when you qualify. Cancelling at 80% saves the PMI that would otherwise be charged between the 80% and 78% marks. Using
        the same $350,000 home, 6.5% rate and 0.5% PMI rate:
      </p>
      <table>
        <thead>
          <tr>
            <th>Down payment</th>
            <th>Payments to reach 80%</th>
            <th>PMI if cancelled at 80%</th>
            <th>PMI if it ends at 78%</th>
            <th>Saved by asking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5%</td>
            <td>124 (10 years 4 months)</td>
            <td>$17,179</td>
            <td>$18,703</td>
            <td>$1,524</td>
          </tr>
          <tr>
            <td>10%</td>
            <td>95 (7 years 11 months)</td>
            <td>$12,469</td>
            <td>$14,306</td>
            <td>$1,837</td>
          </tr>
          <tr>
            <td>15%</td>
            <td>56 (4 years 8 months)</td>
            <td>$6,942</td>
            <td>$9,297</td>
            <td>$2,355</td>
          </tr>
        </tbody>
      </table>
      <p>
        Your servicer will usually require a written request, a good payment history, no second liens and sometimes proof that the
        home has not lost value. Put a reminder in your calendar for the month you expect to reach 80%.
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

      <h2>How much sooner does extra principal get you to 80%?</h2>
      <p>
        Extra payments shorten the PMI period because they shrink the balance faster. This table shows how many payments it takes to
        reach 80% of the original $350,000 value ($280,000) on the same loan terms:
      </p>
      <table>
        <thead>
          <tr>
            <th>Extra per month</th>
            <th>5% down (payments)</th>
            <th>10% down (payments)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$0</td>
            <td>124 (10 years 4 months)</td>
            <td>95 (7 years 11 months)</td>
          </tr>
          <tr>
            <td>$100</td>
            <td>100 (8 years 4 months)</td>
            <td>75 (6 years 3 months)</td>
          </tr>
          <tr>
            <td>$200</td>
            <td>84 (7 years)</td>
            <td>62 (5 years 2 months)</td>
          </tr>
          <tr>
            <td>$300</td>
            <td>72 (6 years)</td>
            <td>52 (4 years 4 months)</td>
          </tr>
          <tr>
            <td>$500</td>
            <td>57 (4 years 9 months)</td>
            <td>41 (3 years 5 months)</td>
          </tr>
        </tbody>
      </table>
      <p>
        An extra $200 a month on the 10%-down loan also cuts total interest from about $401,765 to about $296,815 over the life of
        the loan, if you keep paying it. See the <Link href="/guides/extra-mortgage-payments">extra mortgage payments guide</Link> for
        how to make sure your lender applies the money to principal.
      </p>

      <h2>PMI versus FHA mortgage insurance: how do they compare?</h2>
      <p>
        FHA loans accept smaller down payments and looser credit, but their insurance works differently. The figures below use{" "}
        <strong>illustrative assumptions</strong>: an upfront premium of 1.75% added to the loan and an annual premium of 0.55% of the
        starting loan, spread over 12 months. Real FHA premiums depend on loan size, term and down payment and change over time, and
        they are calculated on a declining balance, so the lifetime figure here is an upper estimate. Check the current schedule on{" "}
        <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer">HUD.gov</a>. The home is $350,000 with
        5% down at 6.5% for 30 years.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Conventional with PMI (0.5%)</th>
            <th>FHA with assumed MIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Upfront insurance cost</td>
            <td>None</td>
            <td>$5,819 (financed)</td>
          </tr>
          <tr>
            <td>Principal and interest</td>
            <td>$2,102</td>
            <td>$2,138</td>
          </tr>
          <tr>
            <td>Monthly insurance</td>
            <td>$139</td>
            <td>$152</td>
          </tr>
          <tr>
            <td>P&amp;I plus insurance</td>
            <td>$2,240</td>
            <td>$2,291</td>
          </tr>
          <tr>
            <td>How long it lasts</td>
            <td>About 11 years 3 months, then ends</td>
            <td>Life of the loan with under 10% down, unless you refinance</td>
          </tr>
        </tbody>
      </table>
      <p>
        Over the same 11 years 3 months, the FHA premiums come to about $20,573 plus the $5,819 upfront fee, versus about $18,703 of
        PMI. The big difference is duration: conventional PMI ends on its own, while FHA insurance can continue unless you refinance
        into a conventional loan once you have enough equity. That is a reason to use our{" "}
        <Link href="/guides/refinance-break-even">refinance break-even guide</Link> before assuming a refinance will pay off. FHA can
        still be the better option for borrowers who would pay a high PMI rate or would not qualify for conventional financing at all.
      </p>

      <h2>Is paying PMI ever worth it?</h2>
      <p>
        Often, yes. If waiting to save 20% would take years while home prices and rents keep rising, paying PMI for a limited period
        can cost less than waiting. The key is to treat it as temporary: know your 80% date, and plan to reach it. To compare
        scenarios, read <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link>, then run the numbers
        below — the mortgage calculator shows your monthly PMI, how many months you&apos;ll pay it and the total cost.
      </p>
      <p>
        Consider a moving target. If prices rise 3% a year (an illustrative assumption, not a forecast), a $350,000 home costs about
        $382,454 in three years, and 20% down grows from $70,000 to about $76,491. Starting with $17,500 and a 4% savings rate, that
        goal needs about $1,487 a month for three years, versus about $1,317 a month for the original $70,000 target. Waiting can
        still be the right choice, but the price of waiting is not zero.
      </p>

      <h2>What mistakes do buyers make with PMI?</h2>
      <ul>
        <li><strong>Ignoring PMI when budgeting.</strong> In the 5%-down example it adds about $139 to a $2,102 principal-and-interest payment, roughly 6.6% more. Include it when you test affordability.</li>
        <li><strong>Assuming it cancels without action.</strong> Automatic termination happens at 78%, but you can save money by asking at 80%.</li>
        <li><strong>Choosing lender-paid PMI without comparing.</strong> A higher interest rate lasts as long as the loan, even after you would have dropped borrower-paid PMI.</li>
        <li><strong>Refinancing just to drop PMI.</strong> Closing costs can outweigh the saving. Compare them with the <Link href="/calculators/loan-amortization">loan amortization calculator</Link> first.</li>
        <li><strong>Stretching the down payment too thin.</strong> Emptying your savings to avoid PMI can leave you short in an emergency.</li>
      </ul>

      <h2>Does PMI exist in the UK and Europe?</h2>
      <p>
        PMI in this form is a US product. UK lenders generally build the extra risk of a small deposit into the interest rate:
        loans at a high loan-to-value ratio, such as 90% or 95%, usually cost more than loans at 75% or 60%, and the rate improves
        as you move into a lower band, for example when you remortgage. Some European countries have state-backed mortgage
        guarantees instead, such as the Netherlands. Whatever the product, the lesson is the same: a larger deposit usually lowers the
        cost of borrowing, so compare the full cost, not just the headline payment.
      </p>

      <h2>How to decide</h2>
      <ol>
        <li>Get PMI quotes at your actual credit score and at two or three down payment levels.</li>
        <li>Work out the date you will reach 80% with and without extra payments.</li>
        <li>Compare the total PMI to the cost of waiting, using the moving-target idea above.</li>
        <li>Confirm the full payment, including taxes and insurance, still fits your budget.</li>
        <li>Check whether a lower-rate, longer or shorter loan fits better. See the <Link href="/guides/15-vs-30-year-mortgage">15-year vs 30-year mortgage guide</Link>.</li>
      </ol>
      <p>Figures here are illustrations based on the stated assumptions, not offers or advice.</p>
    </GuideLayout>
  );
}
