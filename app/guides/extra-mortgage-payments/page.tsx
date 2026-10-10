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

      <h2>Try it with your own loan</h2>
      <p>
        Enter your balance, rate and remaining term, then add an amount in the <strong>Extra monthly payment</strong> field. The
        calculator shows the interest you&apos;d save and your new payoff date. If you have private mortgage insurance, extra payments
        also help you reach the point where you can cancel it — see <Link href="/guides/what-is-pmi">what PMI is and how to avoid it</Link>.
      </p>
    </GuideLayout>
  );
}
