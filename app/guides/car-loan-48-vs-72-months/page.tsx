import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "car-loan-48-vs-72-months";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $30,000 financed at 7% APR, no down payment, tax or fees, fixed monthly payments. */
const TERMS = [
  { term: "36 months (3 years)", payment: "$926.31", interest: "$3,347.26", total: "$33,347.26" },
  { term: "48 months (4 years)", payment: "$718.39", interest: "$4,482.59", total: "$34,482.59" },
  { term: "60 months (5 years)", payment: "$594.04", interest: "$5,642.16", total: "$35,642.16" },
  { term: "72 months (6 years)", payment: "$511.47", interest: "$6,825.85", total: "$36,825.85" },
  { term: "84 months (7 years)", payment: "$452.78", interest: "$8,033.55", total: "$38,033.55" },
];

/** Same loan at 9% APR. */
const TERMS_9 = [
  { term: "36 months", payment: "$953.99", interest: "$4,343.71", total: "$34,343.71" },
  { term: "48 months", payment: "$746.55", interest: "$5,834.46", total: "$35,834.46" },
  { term: "60 months", payment: "$622.75", interest: "$7,365.04", total: "$37,365.04" },
  { term: "72 months", payment: "$540.77", interest: "$8,935.16", total: "$38,935.16" },
  { term: "84 months", payment: "$482.67", interest: "$10,544.48", total: "$40,544.48" },
];

/** 72-month loan at 7% with extra monthly payments. */
const EXTRAS = [
  { extra: "$0", payment: "$511.47", months: "72", interest: "$6,825.85", saved: "-" },
  { extra: "$50", payment: "$561.47", months: "65", interest: "$6,055.54", saved: "$770.31" },
  { extra: "$100", payment: "$611.47", months: "58", interest: "$5,443.86", saved: "$1,381.99" },
  { extra: "$150", payment: "$661.47", months: "53", interest: "$4,946.84", saved: "$1,879.02" },
  { extra: "$206.92", payment: "$718.39", months: "48", interest: "$4,482.59", saved: "$2,343.26" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A longer car loan lowers the monthly payment because you spread the same debt over more months, but you pay interest for
        longer, so the total cost rises.{" "}
        <strong>
          On $30,000 at 7% APR, a 72-month loan has a payment of $511.47 against $718.39 for 48 months, yet it costs $2,343.26 more
          in interest.
        </strong>{" "}
        A longer term also keeps you owing more than the car is worth for longer.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Going from 48 to 72 months saves $206.92 a month but adds $2,343.26 in interest.</li>
        <li>At a higher rate the gap widens. At 9% APR the same change adds $3,100.70.</li>
        <li>Long loans pay down slowly, so you can owe more than the car is worth (negative equity) for a long time.</li>
        <li>A common guideline is a term of 60 months or less, and the shortest one whose payment fits comfortably in your budget.</li>
        <li>If you take a long loan for cash-flow reasons, paying extra each month can recover much of the lost interest.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: $30,000 financed at a fixed APR, no down payment, sales tax or fees, equal monthly
          payments, interest added monthly (APR ÷ 12). Rates and terms are illustrative, not current offers. The arithmetic is
          the same in any currency, so $30,000 can be read as £30,000 or €30,000. Figures are rounded to the cent.
        </small>
      </p>

      <h2>Why does a longer term lower the payment but raise the cost?</h2>
      <p>
        Each month you pay interest on the balance still owed, and the rest of the payment reduces that balance. A longer term
        means smaller payments, so the balance falls more slowly and stays higher for longer. Interest is charged on that higher
        balance for more months. The payment is lower today, and you pay for it with a larger total later.
      </p>
      <p>
        Lenders sometimes quote a higher rate on very long terms, which makes the gap bigger still. Check the rate for each term
        you are offered rather than assuming it stays the same.
      </p>

      <h2>How do the terms compare at 7% APR?</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Monthly payment</th>
            <th>Total interest</th>
            <th>Total paid</th>
          </tr>
        </thead>
        <tbody>
          {TERMS.map((row) => (
            <tr key={row.term}>
              <td>{row.term}</td>
              <td>{row.payment}</td>
              <td>{row.interest}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        <li><strong>72 vs 48 months:</strong> the payment is $206.92 lower, and total interest is $2,343.26 higher ($6,825.85 vs $4,482.59).</li>
        <li><strong>72 vs 36 months:</strong> the payment is $414.84 lower, and interest is $3,478.59 higher.</li>
        <li><strong>84 vs 72 months:</strong> one more year saves only $58.69 a month and adds $1,207.70 in interest.</li>
      </ul>
      <p>
        Try your own price, rate and term in the <Link href="/calculators/auto-loan">auto loan calculator</Link>.
      </p>

      <h2>What changes at a higher rate?</h2>
      <p>The same $30,000 at 9% APR:</p>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Monthly payment</th>
            <th>Total interest</th>
            <th>Total paid</th>
          </tr>
        </thead>
        <tbody>
          {TERMS_9.map((row) => (
            <tr key={row.term}>
              <td>{row.term}</td>
              <td>{row.payment}</td>
              <td>{row.interest}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Choosing 72 months over 48 now saves about $206 a month and adds <strong>$3,100.70</strong> in interest, which is $757.44 more than at 7%.
        The higher the rate, the more a long term costs.
      </p>

      <h2>What is negative equity, and why do long loans make it likelier?</h2>
      <p>
        Negative equity (being &quot;upside down&quot;) means you owe more on the loan than the car is worth. Cars generally lose value
        over time, often fastest in the early years, while a long loan repays principal slowly in those same years. If you need to
        sell, trade in, or the car is written off, the gap is still yours to pay, and insurance may not cover it unless you have gap
        cover. How fast value falls depends on the model, mileage and market, so check what similar used cars are listed for rather
        than relying on a rule.
      </p>
      <p>
        To see the effect, take a <strong>hypothetical assumption</strong>: the car is worth $24,000 after 12 months. This is an assumed
        value for illustration, not data about any real car. After 12 payments, the 48-month loan balance is $23,266.03, so you
        would be $733.97 ahead. The 72-month balance is $25,830.26, so you would owe{" "}
        <strong>$1,830.26 more than the car is worth</strong>. The shorter the term, the sooner the balance falls below the value.
        Rolling negative equity from a previous car into a new loan makes it worse from day one.
      </p>

      <h2>Can you keep a long loan and still save interest?</h2>
      <p>
        Yes, if the loan allows extra payments without a penalty. Take the 72-month loan at 7% and pay the 48-month amount of
        $718.39, which is $206.92 extra each month. It is cleared in 48 months with the same $4,482.59 interest as the shorter
        loan, saving $2,343.26. Smaller extra amounts help too:
      </p>
      <table>
        <thead>
          <tr>
            <th>Extra each month</th>
            <th>Payment</th>
            <th>Months to pay off</th>
            <th>Total interest</th>
            <th>Interest saved</th>
          </tr>
        </thead>
        <tbody>
          {EXTRAS.map((row) => (
            <tr key={row.extra}>
              <td>{row.extra}</td>
              <td>{row.payment}</td>
              <td>{row.months}</td>
              <td>{row.interest}</td>
              <td>{row.saved}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The lower required payment is a safety net in a tight month, while extra payments cut the cost when money allows. It only
        works if you actually pay the extra and the loan has no prepayment charge. The same idea on a mortgage is covered in{" "}
        <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link>, and you can watch each payment split into
        principal and interest in the <Link href="/calculators/loan-amortization">loan amortization calculator</Link>.
      </p>

      <h2>How do you decide?</h2>
      <ul>
        <li><strong>Start from the shortest term you can afford.</strong> Pick the shortest term whose payment fits your budget with room to spare, not the lowest payment on offer.</li>
        <li><strong>Treat 60 months or less as a guideline.</strong> It is a common rule of thumb, not a law. Beyond it, negative equity and total interest grow quickly.</li>
        <li><strong>Compare totals, not payments.</strong> Use total interest and total paid for each term, as in the tables above.</li>
        <li><strong>Consider a cheaper car or a larger down payment</strong> if only a long term makes the payment fit. That is often a sign the purchase is too big for the budget.</li>
        <li><strong>Ask about early repayment.</strong> Confirm there is no penalty before relying on extra payments.</li>
        <li><strong>Include the full cost of owning the car.</strong> Insurance, fuel, maintenance and tax sit on top of the loan payment.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Shopping by monthly payment alone.</strong> A dealer can hit almost any payment by stretching the term, and you pay for it in interest.</li>
        <li><strong>Rolling old debt into a new loan.</strong> Negative equity carried over starts the new loan underwater.</li>
        <li><strong>Skipping gap cover on a long loan with little down.</strong> If the car is written off, you may still owe the difference.</li>
        <li><strong>Outliving the car&apos;s useful life.</strong> A 7-year loan can still be running when major repairs arrive.</li>
        <li><strong>Not comparing lenders.</strong> A bank, credit union or building society may beat the dealer&apos;s finance offer.</li>
        <li><strong>Financing add-ons.</strong> Extras rolled into the loan accrue interest for the full term.</li>
      </ul>
      <p>
        If you also carry other debts, see <Link href="/guides/debt-consolidation-loans">debt consolidation loans</Link> for how term and
        fees affect the cost of one combined loan.
      </p>

      <h2>Where can I get official guidance?</h2>
      <p>
        See the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a> for rules on car
        finance in your country. Products and protections differ between the US, UK and EU, so read your agreement carefully. This
        guide is general information, not financial advice.
      </p>
    </GuideLayout>
  );
}
