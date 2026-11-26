import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "how-much-down-payment-for-a-house";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        <strong>There is no single right down payment: 20% avoids mortgage insurance and cuts interest the most, but 5% to 10% gets you
        into a home sooner and keeps more cash in your pocket.</strong> The best choice is the largest down payment that still leaves
        you a full emergency fund, because a bigger deposit saves money only if you can afford to part with the cash.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>On a $400,000 home at an assumed 6.5%, principal and interest is $2,402 a month with 5% down and $2,023 with 20% down.</li>
        <li>With an assumed 0.5% PMI rate, 5% down adds $158 a month for about 11 years 3 months, so the real monthly gap is $537.</li>
        <li>Total interest over 30 years falls from $484,669 (5% down) to $459,160 (10%) to $408,142 (20%).</li>
        <li>Saving $2,000 a month, 5% takes about 10 months and 20% about 38 months, so waiting has its own cost.</li>
        <li>A down payment that drains your savings can be riskier than paying PMI. Keep an emergency fund after closing.</li>
      </ul>

      <h2>How does the down payment change what you pay?</h2>
      <p>
        A bigger down payment means a smaller loan, and a smaller loan lowers three things at once: your monthly payment, the PMI you
        are charged, and the total interest. What it raises is the cash you must hand over on day one and the time it takes to save.
        The table below compares 5%, 10% and 20% down on the same <strong>$400,000 home</strong> with a 30-year loan.
      </p>
      <p>
        <strong>The rate and PMI figures are assumptions, not quotes:</strong> a 6.5% fixed rate, and an annual PMI charge of 0.5% of
        the loan, which ends once the balance reaches 78% of the purchase price. The buyer is assumed to have $100,000 saved in total,
        and closing costs are left out to keep the comparison simple.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>5% down</th>
            <th>10% down</th>
            <th>20% down</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Down payment</td>
            <td>$20,000</td>
            <td>$40,000</td>
            <td>$80,000</td>
          </tr>
          <tr>
            <td>Loan amount</td>
            <td>$380,000</td>
            <td>$360,000</td>
            <td>$320,000</td>
          </tr>
          <tr>
            <td>Principal and interest / month</td>
            <td>$2,402</td>
            <td>$2,275</td>
            <td>$2,023</td>
          </tr>
          <tr>
            <td>Estimated PMI / month (0.5% assumed)</td>
            <td>$158</td>
            <td>$150</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>P&amp;I plus PMI / month</td>
            <td>$2,560</td>
            <td>$2,425</td>
            <td>$2,023</td>
          </tr>
          <tr>
            <td>How long PMI lasts</td>
            <td>135 months (11 years 3 months)</td>
            <td>109 months (9 years 1 month)</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Total PMI paid</td>
            <td>$21,375</td>
            <td>$16,350</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Total interest over 30 years</td>
            <td>$484,669</td>
            <td>$459,160</td>
            <td>$408,142</td>
          </tr>
          <tr>
            <td>Cash left from $100,000 saved</td>
            <td>$80,000</td>
            <td>$60,000</td>
            <td>$20,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Taxes, home insurance and any HOA fees are the same whichever way you buy, so they are not in the table. Our guide to the{" "}
        <Link href="/guides/mortgage-payment-with-taxes-insurance-pmi">full monthly payment with taxes, insurance and PMI</Link> shows
        how they stack on top.
      </p>

      <h2>What does the extra cash buy you?</h2>
      <p>
        Moving from 5% to 20% down means handing over an extra $60,000. In return, your monthly P&amp;I plus PMI drops by $537
        ($2,560 to $2,023) and you avoid $76,527 of lifetime interest ($484,669 vs $408,142) plus $21,375 of PMI. Those are real
        savings, but they arrive slowly, month by month, over decades, while the $60,000 leaves your account immediately.
      </p>
      <p>
        Cash you keep is not idle. At an assumed 4% savings rate (before tax), $60,000 earns about $200 a month. That does not cancel
        the $537 monthly saving, and the interest saved over 30 years is large, but it does mean the cash left over is working for you
        and can cover a repair bill without borrowing. The middle option shows a similar pattern: 10% instead of 20% costs $402 more
        a month in P&amp;I plus PMI and $51,018 more interest, while keeping an extra $40,000.
      </p>

      <h2>How long does it take to save each down payment?</h2>
      <p>
        Time matters as much as percentage. Suppose you start from zero, save $2,000 a month and earn an assumed 4% on the balance
        (an illustration, not a forecast of your savings). You would reach each target in about:
      </p>
      <ul>
        <li><strong>5% ($20,000):</strong> 10 months</li>
        <li><strong>10% ($40,000):</strong> 20 months</li>
        <li><strong>20% ($80,000):</strong> 38 months</li>
      </ul>
      <p>
        So the choice between 5% and 20% is roughly a choice between buying now and buying in just over three years. During that time
        you would keep paying rent, and house prices and mortgage rates may move in either direction. Run the same timeline with
        your own numbers in the <Link href="/calculators/savings-goal">savings goal calculator</Link>.
      </p>

      <h2>Worked example: a buyer with $100,000 saved</h2>
      <p>
        Say a buyer has exactly $100,000 and spends about $4,000 a month, so a six-month emergency fund is $24,000. Here is what
        each choice leaves them:
      </p>
      <ul>
        <li><strong>5% down:</strong> $80,000 left, equal to 20 months of spending. Monthly P&amp;I plus PMI is $2,560.</li>
        <li><strong>10% down:</strong> $60,000 left, or 15 months of spending. The payment is $2,425.</li>
        <li><strong>20% down:</strong> $20,000 left, or 5 months of spending. The payment is $2,023.</li>
      </ul>
      <p>
        The 20% option has the lowest payment and the least interest, but it leaves this buyer below their six-month cushion at the
        exact moment they take on a mortgage, moving costs and the first repairs. The 10% option keeps a comfortable reserve while
        saving about $135 a month and $25,509 of interest compared with 5%. For many buyers in this position, 10% is a sensible
        middle. For a buyer with a stable income and a second source of savings, 20% may be better. Our{" "}
        <Link href="/guides/emergency-fund-size">emergency fund guide</Link> explains how to size the cushion.
      </p>

      <h2>When does PMI go away?</h2>
      <p>
        PMI is the main reason a small deposit costs more each month, but it is temporary. Under the US Homeowners Protection Act you
        can ask your servicer to cancel borrower-paid PMI once your balance reaches 80% of the original value, and it must end
        automatically at 78% if you are current on payments. The CFPB explains the process in{" "}
        <a
          href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          When can I remove PMI from my loan?
        </a>{" "}
        In the table above, automatic removal comes after about 11 years 3 months at 5% down and 9 years 1 month at 10% down. Our{" "}
        <Link href="/guides/what-is-pmi">PMI guide</Link> covers cancelling early and the rules for FHA loans. As a general fact,
        government-backed programs such as FHA allow smaller down payments than most conventional loans, but they have their own
        insurance rules, so compare the full cost.
      </p>

      <h2>How do you decide how much to put down?</h2>
      <ol>
        <li><strong>Protect the emergency fund first.</strong> Decide how many months of spending you want left after closing, then subtract that and your closing and moving costs from your savings. What remains is the most you should put down.</li>
        <li><strong>Check the monthly payment against your income.</strong> Use the <Link href="/calculators/home-affordability">home affordability calculator</Link>, or read <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link>, to see whether a smaller down payment still fits.</li>
        <li><strong>Price the wait.</strong> Compare the PMI you would pay now with the rent, and possible price changes, during the extra months of saving.</li>
        <li><strong>Compare the interest saving to other uses of the cash.</strong> Paying off debt that charges more than your mortgage rate usually beats a bigger down payment.</li>
        <li><strong>Get real quotes.</strong> Ask lenders for rates and PMI at 5%, 10% and 20%, because rates often improve at set thresholds. Then enter them in the <Link href="/calculators/mortgage">mortgage calculator</Link>.</li>
      </ol>

      <h2>Can you pay less now and more later?</h2>
      <p>
        Yes. A smaller down payment does not lock you in. Extra principal payments, once your reserve is built, shorten the time to
        reach 80% and cut interest. Confirm your lender applies them to principal.
      </p>

      <h2>How does this differ in the UK and Europe?</h2>
      <p>
        The details change by country, so treat these as general guidelines rather than rules. In the UK, lenders price mortgages by
        loan-to-value (LTV) bands, commonly around 95%, 90%, 85% and 75% LTV (a 5%, 10%, 15% or 25% deposit), and the rate generally
        gets better as the LTV falls. There is no separate PMI charge; the extra risk is built into the interest rate. That makes
        the trade-off similar: a bigger deposit can earn a lower rate for the whole fixed term, but you still need to keep reserves.
        Across the EU, practice varies widely by country. Lenders often expect larger deposits than the 5% that is possible in the US,
        and buyers may need to fund taxes and fees on top, so check local rules and get quotes before you plan.
      </p>

      <h2>What mistakes do buyers make with their down payment?</h2>
      <ul>
        <li><strong>Forgetting closing costs.</strong> This example ignores them, but real purchases include them, and they come out of the same savings.</li>
        <li><strong>Spending the emergency fund to avoid PMI.</strong> PMI ends. A job loss with no cash does not.</li>
        <li><strong>Assuming a bigger down payment is always the smartest use of cash.</strong> It lowers costs, but it also ties money up in the house.</li>
        <li><strong>Ignoring the rate.</strong> Our figures assume one rate for every scenario. In reality, the rate can differ with the down payment, so compare actual offers.</li>
      </ul>
      <p>
        These figures are illustrations based on the stated assumptions, not offers or advice. Rates, PMI pricing and the rules for
        your loan will differ, so confirm them with a lender.
      </p>
    </GuideLayout>
  );
}
