import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "how-much-car-can-i-afford";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** 20% down, 48 months, 7% APR, no tax or fees. Running costs assumed at $350 a month. 10% of gross monthly income is the cap. */
const BUDGETS = [
  { income: "$60,000", monthly: "$5,000.00", cap: "$500.00", allInPayment: "$150.00", allInPrice: "$7,830", loanOnlyPrice: "$26,100" },
  { income: "$80,000", monthly: "$6,666.67", cap: "$666.67", allInPayment: "$316.67", allInPrice: "$16,530", loanOnlyPrice: "$34,800" },
  { income: "$100,000", monthly: "$8,333.33", cap: "$833.33", allInPayment: "$483.33", allInPrice: "$25,230", loanOnlyPrice: "$43,500" },
  { income: "$120,000", monthly: "$10,000.00", cap: "$1,000.00", allInPayment: "$650.00", allInPrice: "$33,930", loanOnlyPrice: "$52,200" },
];

/** $35,000 car, 20% down ($7,000), $28,000 financed at 7% APR. */
const TERMS = [
  { term: "48 months", payment: "$670.49", interest: "$4,183.75", total: "$32,183.75" },
  { term: "60 months", payment: "$554.43", interest: "$5,266.01", total: "$33,266.01" },
  { term: "72 months", payment: "$477.37", interest: "$6,370.80", total: "$34,370.80" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Before you walk onto a car lot, it helps to know what number you are shopping for. The 20/4/10 rule is a popular rule of
        thumb for that number: put at least 20% down, borrow for no more than 4 years, and keep your total monthly car costs at
        or under 10% of your gross income.{" "}
        <strong>
          On a $100,000 income, with $350 a month of assumed running costs, that points to a car of about $25,230 (or about
          $43,500 if only the loan payment counts).
        </strong>{" "}
        It is a guideline that many people use, not an official standard, and your own budget may justify something different.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The 20/4/10 rule means 20% down, a loan of 4 years (48 months) or less, and car costs of 10% or less of gross monthly income.</li>
        <li>Versions differ. The common one counts payment, insurance, fuel and maintenance in the 10%. Some versions count only the loan payment.</li>
        <li>At an assumed 7% APR, the all-in version caps a $100,000 earner at about $25,230. The loan-only version allows about $43,500.</li>
        <li>Stretching a $35,000 car from 48 to 72 months lowers the payment by $193.12 but adds $2,187.05 of interest.</li>
        <li>Treat the result as a ceiling to check against your real budget, not a target.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: US dollars, a fixed 7% APR (an illustrative rate, not a current offer), equal monthly
          payments, no sales tax or fees financed, and $350 a month for insurance, fuel and maintenance (an assumed figure, so
          replace it with your own). All figures were calculated with the same maths as the{" "}
          <Link href="/calculators/auto-loan">auto loan calculator</Link> and are rounded.
        </small>
      </p>

      <h2>What is the 20/4/10 rule?</h2>
      <p>The rule has three parts:</p>
      <ul>
        <li><strong>20 (down payment):</strong> pay at least 20% of the price up front. A bigger down payment means a smaller loan and less interest, and it helps you avoid owing more than the car is worth.</li>
        <li><strong>4 (loan term):</strong> finance for no more than 4 years, which is 48 months. Shorter loans cost less in total interest.</li>
        <li><strong>10 (monthly cost):</strong> spend no more than 10% of your <em>gross</em> (pre-tax) monthly income on the car.</li>
      </ul>
      <p>
        There is no single official definition. The version used in this guide, which is the one you will see most often, counts
        the loan payment <em>plus</em> insurance, fuel and maintenance inside the 10%. Some sources count only the loan payment.
        Both are shown below, so you can see how much the choice matters. The rule is also a US idea, so use it as a starting
        point rather than a requirement.
      </p>

      <h2>How much car can you afford at different incomes?</h2>
      <p>
        The table works backwards from the 10% limit. Take gross monthly income, multiply by 10%, and (in the all-in version)
        subtract $350 for running costs. What is left is the most you can pay on the loan. At 7% APR over 48 months, that payment
        supports a loan of a certain size. Because 20% is paid up front, that loan is 80% of the price.
      </p>
      <table>
        <thead>
          <tr>
            <th>Gross income</th>
            <th>Monthly</th>
            <th>10% limit</th>
            <th>Loan payment (all-in)</th>
            <th>Max price (all-in)</th>
            <th>Max price (loan only)</th>
          </tr>
        </thead>
        <tbody>
          {BUDGETS.map((row) => (
            <tr key={row.income}>
              <td>{row.income}</td>
              <td>{row.monthly}</td>
              <td>{row.cap}</td>
              <td>{row.allInPayment}</td>
              <td>{row.allInPrice}</td>
              <td>{row.loanOnlyPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The all-in column is much lower because $350 of running costs takes a big bite out of a 10% budget, especially at lower
        incomes. At $60,000 the rule leaves only $150 a month for the loan, which supports a car of about $7,830. That does not
        mean you must buy a car that cheap. It shows that at lower incomes the rule can be hard to meet, and that the loan-only
        version is far more generous. Which one fits depends on how you want to treat insurance and fuel. Rates matter too: for
        the $100,000 earner, the all-in price is about $24,278 at 9% and about $26,235 at 5%.
      </p>

      <h2>A worked example</h2>
      <p>
        Say your household earns <strong>$100,000</strong> a year, which is $8,333.33 a month gross. Ten percent is{" "}
        <strong>$833.33</strong>. With $350 for insurance, fuel and maintenance, <strong>$483.33</strong> is left for the loan. At
        7% over 48 months, that supports a car priced at <strong>$25,230</strong>:
      </p>
      <ul>
        <li>Down payment (20%): $5,046</li>
        <li>Amount financed: $20,184</li>
        <li>Monthly payment: $483.33</li>
        <li>Payment plus running costs: $833.33, which is 10% of gross monthly income</li>
      </ul>
      <p>
        Now suppose you fall for a $35,000 car. Twenty percent down is $7,000, leaving $28,000 to finance. The 48-month payment
        is $670.49. Add $350 of running costs and the monthly total is $1,020.49, or{" "}
        <strong>12.25%</strong> of gross monthly income. That is above the rule&apos;s 10%, so you would need a larger down
        payment, a cheaper car or a higher income. Under the loan-only version, $670.49 is 8.05% of $8,333.33, so it passes, which
        shows why you should be explicit about which version you use.
      </p>
      <p>
        Sales tax and fees are not in these numbers. If your state charges, say, 6% sales tax (an assumed rate), the $35,000 car
        adds $2,100 of tax. If you pay it in cash at signing, the cash needed is $9,100 ($7,000 down plus $2,100) while the
        payment stays $670.49. Check your own state&apos;s rules and enter them in the{" "}
        <Link href="/calculators/auto-loan">auto loan calculator</Link>.
      </p>

      <h2>Why does the loan term matter so much?</h2>
      <p>
        A longer loan makes a car look more affordable, because the monthly payment falls. But you pay interest for longer. For
        the same $35,000 car with 20% down at 7%:
      </p>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Monthly payment</th>
            <th>Total interest</th>
            <th>Total of payments</th>
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
      <p>
        Moving from 48 to 72 months cuts the payment by $193.12, but adds $2,187.05 in interest. Pair that with a small down
        payment and the problem grows: with 10% down ($3,500) over 72 months, the payment is $537.04, the loan is $31,500 and the
        interest is $7,167.15. The 4-year limit and the 20% down payment work together to keep you from owing more than the car is
        worth. For the full comparison of terms, read{" "}
        <Link href="/guides/car-loan-48-vs-72-months">car loan 48 vs 72 months</Link>.
      </p>

      <h2>How do you decide what to spend?</h2>
      <ul>
        <li><strong>Start with your real running costs.</strong> Get an insurance quote for the model you want, and estimate fuel and maintenance from your own driving. Replace the $350 assumption.</li>
        <li><strong>Choose the version of the rule on purpose.</strong> The all-in version is more cautious. The loan-only version is a looser guide. Whichever you use, apply it consistently.</li>
        <li><strong>Treat the result as a ceiling.</strong> It does not know your rent, other debts or savings goals. See <Link href="/guides/how-much-house-can-i-afford">how much house can I afford</Link> for how car payments also affect a mortgage application.</li>
        <li><strong>Protect your cushion.</strong> Repairs and insurance rises arrive without warning, so check that your <Link href="/guides/emergency-fund-size">emergency fund</Link> is not drained by the down payment.</li>
        <li><strong>If the rule does not fit, change a lever.</strong> A larger down payment, a cheaper car or a used one all bring the numbers down. A longer term only hides the problem.</li>
        <li><strong>Compare lenders.</strong> A bank, credit union or dealer may quote different rates, and rate changes the maximum price as shown above.</li>
      </ul>

      <h2>What are the limits of the rule?</h2>
      <ul>
        <li><strong>It is a rule of thumb.</strong> No law or lender requires it, and lenders use their own approval limits.</li>
        <li><strong>It uses gross income.</strong> Take-home pay after tax, retirement contributions and benefits may be a better guide for your own budget.</li>
        <li><strong>It ignores other debts.</strong> Student loans or credit card balances reduce what you can comfortably spend.</li>
        <li><strong>It is hard to meet at lower incomes.</strong> If you need a car for work and the rule does not fit, aim for the lowest total cost you can reasonably manage and avoid very long terms.</li>
      </ul>

      <h2>Does this apply in the UK and EU?</h2>
      <p>
        The 20/4/10 rule comes from US car buying, but the idea carries over. In the UK and Europe, car finance is often arranged
        as hire purchase (HP) or personal contract purchase (PCP). The terms, deposits and protections differ from a US auto loan,
        so check the total cost and what happens at the end of the agreement. The arithmetic of deposit, term and monthly payment
        is the same in any currency, so you can read $ as £ or € for the examples here.
      </p>

      <h2>Where can I get official guidance?</h2>
      <p>
        The US Consumer Financial Protection Bureau has{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> on
        borrowing. Read your loan agreement closely. This guide is general information, not financial advice.
      </p>
    </GuideLayout>
  );
}
