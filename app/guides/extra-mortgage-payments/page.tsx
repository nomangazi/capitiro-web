import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "extra-mortgage-payments";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Paying a little more than your required mortgage payment is one of the simplest ways to save money. Every extra dollar goes
        straight to principal, which shrinks the balance that interest is charged on — every month, for the rest of the loan. Here is
        how much difference it really makes, and when it might not be the best use of your money.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Extra payments go to principal, so they cut the balance that interest is charged on for every remaining month.</li>
        <li>On a <strong>$320,000</strong> loan at 6.5% for 30 years, an extra <strong>$100 a month</strong> saves about <strong>$61,700</strong> in interest and shortens the loan by almost 4 years.</li>
        <li>The earlier you pay, the more it saves. A $10,000 lump sum is worth about $50,500 after year 1 but only about $8,700 after year 20.</li>
        <li>Pay off high-interest debt and build an emergency fund first, then confirm your servicer applies the extra to principal.</li>
      </ul>

      <h2>Why extra payments work so well</h2>
      <p>
        Mortgage interest is calculated on the remaining balance. In the early years most of your payment goes to interest, so the
        balance falls slowly. An extra payment skips the queue: it reduces principal immediately, so next month&apos;s interest is a
        little smaller, a little more of your regular payment goes to principal, and the effect snowballs.
      </p>

      <h2>The numbers: a $320,000 mortgage</h2>
      <p>
        Take a <strong>$320,000 loan at 6.5% for 30 years</strong>. The required principal and interest payment is about{" "}
        <strong>$2,023 a month</strong>, and over the full term you would pay roughly <strong>$408,000 in interest</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Paid off sooner by</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+$100 a month</td>
            <td>≈ 3 years 10 months</td>
            <td>≈ $61,700</td>
          </tr>
          <tr>
            <td>+$169 a month (one extra payment a year)</td>
            <td>≈ 5 years 10 months</td>
            <td>≈ $93,100</td>
          </tr>
          <tr>
            <td>+$200 a month</td>
            <td>≈ 6 years 7 months</td>
            <td>≈ $105,400</td>
          </tr>
          <tr>
            <td>+$500 a month</td>
            <td>≈ 12 years</td>
            <td>≈ $185,600</td>
          </tr>
          <tr>
            <td>One-off $10,000 after the first year</td>
            <td>≈ 2 years 5 months</td>
            <td>≈ $50,500</td>
          </tr>
        </tbody>
      </table>
      <p>
        Just $100 a month — about 5% more than the required payment — saves over $60,000. Money paid early has the biggest impact,
        because it removes interest for the longest time.
      </p>

      <h2>How much do extra payments save on different loan sizes?</h2>
      <p>
        The same extra amount helps more on a smaller loan, in years saved, while larger loans save more dollars. All loans below are
        6.5% for 30 years. Each cell shows time cut from the loan and total interest saved.
      </p>
      <table>
        <thead>
          <tr>
            <th>Loan amount</th>
            <th>Required payment</th>
            <th>Interest over full term</th>
            <th>+$100 a month</th>
            <th>+$200 a month</th>
            <th>+$500 a month</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$200,000</td><td>$1,264</td><td>≈ $255,100</td><td>5 yrs 7 mo, ≈ $55,900</td><td>9 yrs 2 mo, ≈ $90,100</td><td>15 yrs 3 mo, ≈ $144,100</td></tr>
          <tr><td>$320,000</td><td>$2,023</td><td>≈ $408,100</td><td>3 yrs 10 mo, ≈ $61,700</td><td>6 yrs 7 mo, ≈ $105,400</td><td>12 yrs 0 mo, ≈ $185,600</td></tr>
          <tr><td>$500,000</td><td>$3,160</td><td>≈ $637,700</td><td>2 yrs 7 mo, ≈ $65,800</td><td>4 yrs 8 mo, ≈ $117,700</td><td>9 yrs 2 mo, ≈ $225,200</td></tr>
        </tbody>
      </table>
      <p>
        What matters is the extra amount <em>relative to</em> the payment. $100 is about 8% of a $1,264 payment but only 3% of a
        $3,160 payment, which is why the smaller loan shortens so much more.
      </p>

      <h2>Does the interest rate change the benefit?</h2>
      <p>
        Yes. Higher rates mean more of each payment is interest, so there is more to save. Here is an extra <strong>$200 a month</strong>{" "}
        on a $320,000, 30-year loan at four different rates:
      </p>
      <table>
        <thead>
          <tr>
            <th>Rate</th>
            <th>Required payment</th>
            <th>Interest over full term</th>
            <th>Time cut</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>3.0%</td><td>$1,349</td><td>≈ $165,700</td><td>5 yrs 9 mo</td><td>≈ $34,900</td></tr>
          <tr><td>4.5%</td><td>$1,621</td><td>≈ $263,700</td><td>6 yrs 0 mo</td><td>≈ $60,400</td></tr>
          <tr><td>6.5%</td><td>$2,023</td><td>≈ $408,100</td><td>6 yrs 7 mo</td><td>≈ $105,400</td></tr>
          <tr><td>7.5%</td><td>$2,237</td><td>≈ $485,500</td><td>7 yrs 0 mo</td><td>≈ $133,500</td></tr>
        </tbody>
      </table>
      <p>
        A higher rate does not make extra payments free. It just means each dollar earns a higher guaranteed return. We compare that
        with other uses of money further down.
      </p>

      <h2>Is a lump sum better than monthly extra payments?</h2>
      <p>
        Timing matters more than the method. The first month of this loan has $1,733 of interest and only $289 of principal, so every
        dollar paid early cuts a large future interest bill. A single $100 extra payment in month one saves about $595 over the loan.
        The table shows a one-off <strong>$10,000</strong> payment made at different points in the same $320,000 loan:
      </p>
      <table>
        <thead>
          <tr>
            <th>When you pay the $10,000</th>
            <th>Paid off sooner by</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>After 1 month</td><td>≈ 2 years 7 months</td><td>≈ $53,900</td></tr>
          <tr><td>After 1 year</td><td>≈ 2 years 5 months</td><td>≈ $50,500</td></tr>
          <tr><td>After 5 years</td><td>≈ 1 year 11 months</td><td>≈ $37,500</td></tr>
          <tr><td>After 10 years</td><td>≈ 1 year 5 months</td><td>≈ $25,000</td></tr>
          <tr><td>After 15 years</td><td>≈ 1 year 0 months</td><td>≈ $15,600</td></tr>
          <tr><td>After 20 years</td><td>≈ 9 months</td><td>≈ $8,700</td></tr>
        </tbody>
      </table>
      <p>
        If you have $12,000 to spare in year one, paying it all in month one saves about $63,500, while spreading it as $1,000 a month
        over twelve months saves about $61,500. Paying sooner wins, but not by much within a single year, so choose whichever method you
        will actually stick to.
      </p>

      <h2>Popular ways to pay extra</h2>
      <ul>
        <li><strong>Round up:</strong> pay $2,100 instead of $2,023. Small, painless and automatic.</li>
        <li>
          <strong>One extra payment a year:</strong> add 1/12 of your payment each month (about $169 here). This is what
          &quot;biweekly&quot; plans achieve — 26 half-payments equal 13 full payments — without paying a third party a setup fee.
        </li>
        <li><strong>Windfalls:</strong> put tax refunds, bonuses or gifts toward principal as a lump sum.</li>
        <li><strong>Recast:</strong> after a large lump sum, some lenders will &quot;recast&quot; the loan for a small fee, lowering your required payment instead of shortening the term.</li>
      </ul>

      <h2>Make sure it counts</h2>
      <ol>
        <li>Tell your servicer the extra amount is for <strong>principal only</strong> — otherwise it may be held as a prepayment of next month&apos;s bill.</li>
        <li>Check your loan has <strong>no prepayment penalty</strong> (rare on standard US mortgages; UK fixed-rate deals often allow around 10% overpayment a year without charges).</li>
        <li>Watch your statement to confirm the balance drops by the extra amount.</li>
      </ol>

      <h2>When paying extra may not be the best move</h2>
      <ul>
        <li><strong>You have high-interest debt.</strong> A credit card at 20%+ should be cleared first — see the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.</li>
        <li><strong>You lack an emergency fund.</strong> Money in your house is hard to get back quickly. Keep three to six months of expenses in cash first.</li>
        <li><strong>You&apos;re missing an employer retirement match.</strong> A 50–100% instant match beats a 6.5% guaranteed saving.</li>
        <li>
          <strong>Your rate is very low.</strong> With a 3% mortgage, investing the extra may plausibly earn more over the long run —
          though with more risk. Paying down a mortgage is a guaranteed, risk-free return equal to your interest rate.
        </li>
      </ul>

      <h2>Should I pay extra or invest the money instead?</h2>
      <p>
        Paying down a 6.5% mortgage is a guaranteed return of about 6.5% a year, with no market risk. The{" "}
        <Link href="/guides/rule-of-72">Rule of 72</Link> shows what that means: 72 ÷ 6.5 is about 11, so money earning 6.5% roughly
        doubles every 11 years. Investing could earn more or less, and the result is not guaranteed. A common compromise is to do both:
        capture any employer match, keep a cash cushion, then split what is left between extra payments and investing.
      </p>
      <p>
        A cushion is worth planning properly. The <Link href="/calculators/savings-goal">savings goal calculator</Link> shows how long
        an emergency fund takes to build at your savings rate.
      </p>

      <h2>What about the UK and Europe?</h2>
      <p>
        Many UK fixed and tracker deals allow overpayments of up to about 10% of the balance each year without an early repayment
        charge (ERC), and some lenders let you choose between a shorter term or a lower monthly payment. Check your offer document,
        because going over the allowance during a fixed period can trigger an ERC. Rules vary across Europe, so check your
        contract for prepayment fees.
      </p>
      <p>
        As an example, take a <strong>£200,000 loan at 5% over 25 years</strong>. The required payment is about{" "}
        <strong>£1,169 a month</strong> and total interest is about £150,800. Overpaying £200 a month shortens the term by about 6
        years 2 months and saves about £41,800. Overpaying £500 a month shortens it by about 11 years 1 month and saves about £73,100.
        Even £500 a month is £6,000 a year, or 3% of the balance, well inside a typical 10% allowance.
      </p>

      <h2>What are the common mistakes?</h2>
      <ul>
        <li><strong>Assuming the extra reduces your next payment.</strong> It lowers the balance, but the required payment stays the same unless you recast.</li>
        <li><strong>Not specifying principal.</strong> Without instructions, some servicers treat it as an early payment.</li>
        <li><strong>Paying extra while carrying a 20% credit card.</strong> The card costs far more than the mortgage.</li>
        <li><strong>Emptying savings.</strong> You cannot withdraw equity from your house as easily as from a savings account.</li>
        <li><strong>Forgetting PMI.</strong> Reaching 80% loan-to-value sooner can end PMI, as covered in our <Link href="/guides/what-is-pmi">PMI guide</Link>.</li>
      </ul>

      <h2>Try it with your own loan</h2>
      <p>
        Enter your balance, rate and remaining term in the <Link href="/calculators/loan-amortization">loan amortization calculator</Link>, then add an amount in the <strong>Extra monthly payment</strong> field. The
        calculator shows the interest you&apos;d save and your new payoff date. If you have private mortgage insurance, extra payments
        also help you reach the point where you can cancel it — see <Link href="/guides/what-is-pmi">what PMI is and how to avoid it</Link>.
      </p>
      <p>
        Related reading: <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link>,{" "}
        <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage</Link> and{" "}
        <Link href="/guides/refinance-break-even">refinance break-even</Link>. To model the full monthly cost including tax and
        insurance, use the <Link href="/calculators/mortgage">mortgage calculator</Link>. The CFPB also publishes plain-language
        guidance on{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">mortgage basics</a>.
      </p>
    </GuideLayout>
  );
}
