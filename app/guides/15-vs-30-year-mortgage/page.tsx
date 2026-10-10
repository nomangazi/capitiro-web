import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "15-vs-30-year-mortgage";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Choosing a mortgage term is one of the biggest money decisions most households make. The two most popular options in the
        US are the 15-year and the 30-year fixed-rate mortgage. The trade-off is simple to state — a higher payment now versus a
        much larger interest bill later — but the right answer depends on your budget, goals and risk tolerance.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>On a $320,000 loan, a 15-year mortgage at 5.9% costs about $660 more per month than a 30-year at 6.5%, but saves about $245,000 in interest.</li>
        <li>The gap grows with the loan: about $153,000 saved on a $200,000 loan and about $460,000 on a $600,000 loan, using the same two rates.</li>
        <li>Most of the saving, about $226,000 of the $245,000, comes from the shorter term itself. The lower rate adds only about $19,000.</li>
        <li>A 30-year loan paid at the 15-year amount still finishes in about 16 years, though it costs more interest than a true 15-year loan.</li>
        <li>The 15-year loan only wins if you can carry the higher payment without cutting retirement savings or your emergency fund.</li>
      </ul>

      <h2>The numbers side by side</h2>
      <p>
        Here is a <strong>$320,000 loan</strong> (a $400,000 home with 20% down). Fifteen-year loans usually carry lower rates, so
        we assume 6.5% for 30 years and 5.9% for 15 years. Figures cover principal and interest only.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>30-year at 6.5%</th>
            <th>15-year at 5.9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly payment</td>
            <td>$2,023</td>
            <td>$2,683</td>
          </tr>
          <tr>
            <td>Total interest</td>
            <td>$408,142</td>
            <td>$162,955</td>
          </tr>
          <tr>
            <td>Balance after 10 years</td>
            <td>$271,284</td>
            <td>$139,118</td>
          </tr>
        </tbody>
      </table>
      <p>
        The 15-year loan costs about <strong>$660 more per month</strong> but saves roughly <strong>$245,000 in interest</strong>{" "}
        — and after ten years you would owe about half as much.
      </p>

      <h2>How do the results change at different loan sizes?</h2>
      <p>
        The pattern holds at every size, but the dollar amounts scale up quickly. This table keeps the same assumed rates (6.5% for
        30 years, 5.9% for 15 years) and shows principal and interest only.
      </p>
      <table>
        <thead>
          <tr>
            <th>Loan amount</th>
            <th>30-year payment</th>
            <th>15-year payment</th>
            <th>Extra per month</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$200,000</td>
            <td>$1,264</td>
            <td>$1,677</td>
            <td>$413</td>
            <td>$153,242</td>
          </tr>
          <tr>
            <td>$320,000</td>
            <td>$2,023</td>
            <td>$2,683</td>
            <td>$660</td>
            <td>$245,187</td>
          </tr>
          <tr>
            <td>$450,000</td>
            <td>$2,844</td>
            <td>$3,773</td>
            <td>$929</td>
            <td>$344,795</td>
          </tr>
          <tr>
            <td>$600,000</td>
            <td>$3,792</td>
            <td>$5,031</td>
            <td>$1,238</td>
            <td>$459,726</td>
          </tr>
        </tbody>
      </table>
      <p>
        On the $320,000 loan, the 15-year payment needs about $114,989 of gross income if principal and interest alone are held to
        28% of income, versus about $86,684 for the 30-year payment. Real lenders also count taxes and insurance, so the true gap is
        larger. Our guide on <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link> shows the full
        28/36 test.
      </p>

      <h2>How much does the interest rate gap matter?</h2>
      <p>
        A 15-year rate is usually lower than a 30-year rate, but by how much changes from month to month. Here is the $320,000 loan
        with the 30-year held at 6.5% and the 15-year rate varied. The first row shows a 15-year loan at the <em>same</em> 6.5%.
      </p>
      <table>
        <thead>
          <tr>
            <th>15-year rate</th>
            <th>15-year payment</th>
            <th>Extra per month</th>
            <th>15-year total interest</th>
            <th>Interest saved vs 30-year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6.5%</td>
            <td>$2,788</td>
            <td>$765</td>
            <td>$181,758</td>
            <td>$226,385</td>
          </tr>
          <tr>
            <td>6.0%</td>
            <td>$2,700</td>
            <td>$678</td>
            <td>$166,062</td>
            <td>$242,081</td>
          </tr>
          <tr>
            <td>5.9%</td>
            <td>$2,683</td>
            <td>$660</td>
            <td>$162,955</td>
            <td>$245,187</td>
          </tr>
          <tr>
            <td>5.5%</td>
            <td>$2,615</td>
            <td>$592</td>
            <td>$150,640</td>
            <td>$257,502</td>
          </tr>
          <tr>
            <td>5.0%</td>
            <td>$2,531</td>
            <td>$508</td>
            <td>$135,497</td>
            <td>$272,645</td>
          </tr>
        </tbody>
      </table>
      <p>
        Even at the same rate, shortening the term saves about $226,000, because the balance falls faster. A lower rate adds to
        that: at 5.9% it contributes the remaining $19,000 or so. The term does most of the work.
      </p>

      <h2>Why a 15-year mortgage saves so much</h2>
      <ul>
        <li><strong>Lower rate:</strong> lenders take less risk over a shorter term, so they usually charge less.</li>
        <li><strong>Less time for interest to accrue:</strong> interest is charged on the outstanding balance every month, and the balance falls much faster.</li>
        <li><strong>Faster equity:</strong> more of each payment goes to principal from day one.</li>
      </ul>

      <h2>Why many people still choose 30 years</h2>
      <ul>
        <li><strong>Affordability:</strong> the lower payment can make the difference between qualifying for a home or not.</li>
        <li><strong>Flexibility:</strong> you can always pay extra on a 30-year loan, but you can&apos;t pay less on a 15-year one when money is tight.</li>
        <li><strong>Opportunity cost:</strong> the monthly difference could fund retirement accounts that may earn more than your mortgage rate — especially with an employer match.</li>
        <li><strong>Emergency cushion:</strong> a lower fixed cost makes it easier to build and keep an emergency fund.</li>
      </ul>

      <h2>What if you invest the difference instead?</h2>
      <p>
        This is the most common argument for the 30-year loan: take the lower payment and invest the $660 a month you save. To test
        it fairly, compare the two paths at year 15. On the 15-year loan you owe nothing. On the 30-year loan you still owe about{" "}
        <strong>$232,189</strong>, so your invested money has to beat that balance.
      </p>
      <p>
        The table below assumes $660 a month is invested for 15 years at a constant return. These returns are illustrative
        assumptions, not forecasts, and they ignore taxes and fees.
      </p>
      <table>
        <thead>
          <tr>
            <th>Assumed annual return</th>
            <th>Invested pot after 15 years</th>
            <th>Pot minus 30-year balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0%</td>
            <td>$118,884</td>
            <td>−$113,305</td>
          </tr>
          <tr>
            <td>3%</td>
            <td>$149,908</td>
            <td>−$82,281</td>
          </tr>
          <tr>
            <td>5%</td>
            <td>$176,535</td>
            <td>−$55,654</td>
          </tr>
          <tr>
            <td>7%</td>
            <td>$209,343</td>
            <td>−$22,846</td>
          </tr>
          <tr>
            <td>8.5%</td>
            <td>$238,948</td>
            <td>+$6,758</td>
          </tr>
        </tbody>
      </table>
      <p>
        With these rates, you would need a steady return of roughly 8.2% a year, after taxes and fees, for investing to match the
        15-year loan. Stock returns can beat that over long periods, but they are not steady or guaranteed. Paying down a mortgage
        earns a certain return equal to your loan rate. Model your own scenario with the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>
      <p>
        Two real-world factors can tip the scale. If your employer matches retirement contributions, that match is usually worth
        more than any mortgage saving, so capture it first. And if you itemize deductions in the US, mortgage interest may be
        deductible, which lowers the after-tax cost of the loan and helps the 30-year option.
      </p>

      <h2>A middle path: 30-year loan, 15-year habits</h2>
      <p>
        Some borrowers take a 30-year mortgage for safety, then voluntarily pay extra each month. You won&apos;t get the lower
        15-year rate, but you keep the option to drop back to the minimum payment during a hard year. Use the extra-payment field in
        our <Link href="/calculators/loan-amortization">loan amortization calculator</Link> to see how much time and interest this
        could save.
      </p>
      <p>
        Here is the $320,000 loan at 6.5% for 30 years with different extra payments. The last row pays the full 15-year amount
        ($660 extra) while keeping the 30-year contract.
      </p>
      <table>
        <thead>
          <tr>
            <th>Extra per month</th>
            <th>Time to pay off</th>
            <th>Total interest</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$0</td>
            <td>30 years</td>
            <td>$408,142</td>
            <td>—</td>
          </tr>
          <tr>
            <td>$100</td>
            <td>26 years 2 months</td>
            <td>$346,444</td>
            <td>$61,698</td>
          </tr>
          <tr>
            <td>$300</td>
            <td>21 years 2 months</td>
            <td>$269,696</td>
            <td>$138,446</td>
          </tr>
          <tr>
            <td>$500</td>
            <td>18 years</td>
            <td>$222,590</td>
            <td>$185,552</td>
          </tr>
          <tr>
            <td>$660</td>
            <td>16 years 1 month</td>
            <td>$195,814</td>
            <td>$212,329</td>
          </tr>
        </tbody>
      </table>
      <p>
        Paying 15-year money into the 30-year loan leaves you with about $33,000 more interest than a true 15-year loan
        ($195,814 versus $162,955). That is the price of keeping the option to pay less. Our guide to{" "}
        <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link> covers how to set this up, and checking for
        prepayment penalties first is wise (see the{" "}
        <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-prepayment-penalty-en-1769/" target="_blank" rel="noopener noreferrer">CFPB explainer</a>).
      </p>

      <h2>What mistakes do people make when choosing a term?</h2>
      <ul>
        <li><strong>Comparing payments only.</strong> The 15-year payment looks scary, but it also builds equity much faster. After five years you would have paid down about $77,229 of the loan on a 15-year mortgage, versus about $20,445 on a 30-year one.</li>
        <li><strong>Forgetting the full monthly cost.</strong> Property tax, insurance, HOA fees and PMI sit on top of principal and interest. With less than 20% down, read the <Link href="/guides/what-is-pmi">PMI guide</Link> before you commit.</li>
        <li><strong>Stretching to the maximum.</strong> A payment you can afford only if nothing goes wrong leaves no room for a job gap or a repair bill.</li>
        <li><strong>Draining savings to close.</strong> A lower rate is not worth leaving yourself with no emergency fund.</li>
        <li><strong>Ignoring how long you will stay.</strong> If you may move in five to seven years, you will pay far less of the total interest than the tables suggest. If you may refinance, read our <Link href="/guides/refinance-break-even">refinance break-even guide</Link>.</li>
      </ul>

      <h2>Does this apply in the UK and Europe?</h2>
      <p>
        The idea is the same but the products differ. In the US, a 30-year fixed rate is common and the rate is locked for the whole
        term. In the UK, loans are usually taken over 25 to 35 years, but the rate is typically fixed for only two to five years, then
        resets to a variable rate. Many UK lenders cap penalty-free overpayments, often around 10% of the balance a year during a
        fixed period, so check your contract. In much of the euro area, terms and fixed periods vary by country, and some markets
        favor long fixes while others favor variable rates.
      </p>
      <p>
        The calculators on this site work for any fixed-rate loan. Choose your currency and enter the term and rate from your offer.
        The US-specific parts of this guide, including the 28% guideline, PMI and the interest deduction, will not apply abroad.
      </p>

      <h2>How to decide</h2>
      <ol>
        <li>Make sure the 15-year payment — plus taxes, insurance and any PMI — stays within about 28% of gross income.</li>
        <li>Check that you&apos;ll still have three to six months of expenses saved after closing.</li>
        <li>Confirm you can keep contributing to retirement, at least enough to get any employer match.</li>
        <li>Compare your actual 15-year quote to the 30-year rate. A bigger rate gap strengthens the case for 15 years.</li>
        <li>If all of these are true, the 15-year loan is usually the cheaper choice. If not, a 30-year loan with optional extra payments is the safer one.</li>
      </ol>
      <p>
        The Consumer Financial Protection Bureau&apos;s{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">home-buying guide</a>{" "}
        explains what to ask lenders and how to compare Loan Estimates side by side. To test several terms yourself, use the{" "}
        <Link href="/calculators/mortgage">mortgage calculator</Link>. All figures here are illustrations based on the stated
        assumptions, not quotes.
      </p>
      <p>Run your own numbers with the full payment breakdown below.</p>
    </GuideLayout>
  );
}
