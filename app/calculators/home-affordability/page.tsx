import { HomeAffordability } from "@/components/calculators/HomeAffordability";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "home-affordability";

export const metadata = buildMetadata({
  title: "Home Affordability Calculator (28/36 Rule)",
  description:
    "Free home affordability calculator: see how much house you can afford with the 28/36 rule, including property tax, insurance, PMI and HOA fees.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "How much house can I afford on my income?",
    answer:
      "Lenders usually start from your gross monthly income. Under the 28/36 guideline your total housing payment should stay below 28% of it, and all debts below 36%. On a $100,000 income that is a housing budget of about $2,333 a month, which with $60,000 down, a 6.5% rate and typical taxes and insurance supports a home price near $341,000.",
  },
  {
    question: "What is the 28/36 rule?",
    answer:
      "The 28/36 rule is a debt-to-income guideline. The front-end ratio says your housing costs (principal, interest, property tax, insurance, PMI and HOA fees) should not exceed 28% of gross monthly income. The back-end ratio says housing plus all other monthly debt payments should not exceed 36%. You are held to whichever limit gives the lower housing budget.",
  },
  {
    question: "Is 31/43 a realistic limit?",
    answer:
      "Ratios near 31/43 are often cited for FHA-style loans, and some lenders approve even higher with strong credit or savings. They are guidelines, not promises, and each lender sets its own limits. Because they leave less room for savings, repairs and rising bills, treat the result as a ceiling and compare it with the standard 28/36 figure.",
  },
  {
    question: "Do my other debts change how much house I can afford?",
    answer:
      "Only once they are large enough to trigger the back-end limit. On a $100,000 income the 36% limit is $3,000 a month, so debts up to about $667 a month leave the 28% limit in charge. At $1,500 a month of other debts, the housing budget falls from $2,333 to $1,500 and the maximum price drops from about $341,000 to about $242,000.",
  },
  {
    question: "Does a bigger down payment raise what I can afford?",
    answer:
      "Yes, in two ways. It shrinks the loan, so the same monthly budget supports a higher price. And at 20% or more of the price you skip PMI. In the default example, raising the down payment from $60,000 to $100,000 lifts the maximum price from about $341,000 to about $392,000.",
  },
  {
    question: "Should I borrow the maximum the calculator shows?",
    answer:
      "Usually not. The maximum is a ceiling based on gross income, so it ignores income tax, retirement saving, childcare, maintenance and closing costs. Many buyers aim below it to keep room in their monthly budget. Compare the result with your real take-home pay and what you pay in rent today before deciding on a price range.",
  },
];

export default function HomeAffordabilityPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Find out how much house you can afford. Enter your income, debts and down payment to get the highest home price that fits the 28/36 rule, with taxes, insurance, PMI and HOA fees included."
      calculator={<HomeAffordability />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the home affordability calculator</h2>
          <ol>
            <li><strong>Annual gross income</strong> — your household income before tax. Lenders measure the ratios against gross, not take-home, pay.</li>
            <li><strong>Monthly debt payments</strong> — car loans, student loans, personal loans and minimum credit card payments. Do not include rent or the future mortgage.</li>
            <li><strong>Down payment</strong> — the cash you plan to put in. The percentage of the maximum price appears next to the label, and 20% or more avoids PMI on most conventional loans.</li>
            <li><strong>Interest rate and loan term</strong> — use a rate quote from a lender and pick a 15-year or 30-year term.</li>
            <li><strong>Debt-to-income limits</strong> — choose 28/36 for the standard guideline or 31/43 for a stretch scenario. Both are typical guidelines, not lender rules.</li>
            <li><strong>Taxes, insurance &amp; fees</strong> — property tax as a % of the home&apos;s value per year, your annual insurance premium, any monthly HOA dues and the PMI rate.</li>
          </ol>
          <p>
            The result shows the highest home price that fits, the loan amount, and where each month of your housing budget goes. The notice
            under the result tells you which limit is setting your budget.
          </p>

          <h2>How much house can I afford? The formula explained</h2>
          <p>The calculator first finds your monthly housing budget, then works backwards to the price that uses it up.</p>
          <p><strong>Budget B = the lower of (front% × income ÷ 12) and (back% × income ÷ 12 − other monthly debts)</strong></p>
          <p>
            The full monthly payment on a home of price P with a down payment D is principal and interest plus property tax, insurance,
            HOA fees and PMI. Without PMI it is a straight line in the price, so it can be solved directly:
          </p>
          <p><strong>P = (B − I ÷ 12 − H + D × k) ÷ (k + t ÷ 12)</strong></p>
          <ul>
            <li><strong>I</strong> = annual home insurance and <strong>H</strong> = monthly HOA fees</li>
            <li><strong>t</strong> = annual property tax rate (so the monthly tax is P × t ÷ 12)</li>
            <li><strong>k</strong> = monthly principal-and-interest payment per dollar borrowed, r ÷ (1 − (1 + r)<sup>−n</sup>), with r the monthly rate and n the number of payments</li>
            <li><strong>D</strong> = down payment, so the loan is P − D</li>
          </ul>
          <p>
            If that price needs more than 80% financing, PMI applies. PMI is charged on the whole loan at the annual PMI rate p ÷ 12, so the
            calculator replaces k with (k + p ÷ 12) in the loan terms and solves again. If your budget falls in the narrow gap where PMI
            switches on, the answer is the price with exactly 20% down.
          </p>

          <h2>Worked example</h2>
          <p>
            A household earns <strong>$100,000 a year</strong> ($8,333 a month gross) and pays <strong>$400 a month</strong> on a car loan. It has
            <strong> $60,000</strong> for a down payment and a 6.5% 30-year rate, with property tax of 1.1% a year, insurance of $1,500 a year, no HOA and PMI at
            0.5% a year.
          </p>
          <ul>
            <li>Front-end limit: 28% × $8,333 = <strong>$2,333</strong></li>
            <li>Back-end limit: 36% × $8,333 − $400 = <strong>$2,600</strong></li>
            <li>The lower figure sets the budget: <strong>$2,333 a month</strong></li>
          </ul>
          <p>
            That budget supports a maximum home price of about <strong>$341,334</strong>. The $60,000 down payment is 17.6% of the price, so the loan is
            $281,334 and PMI applies. The monthly payment is made up of:
          </p>
          <table>
            <thead>
              <tr>
                <th>Part of the payment</th>
                <th>Per month</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Principal &amp; interest</td><td>$1,778</td></tr>
              <tr><td>Property tax (1.1% a year)</td><td>$313</td></tr>
              <tr><td>Home insurance ($1,500 a year)</td><td>$125</td></tr>
              <tr><td>PMI (0.5% a year on the loan)</td><td>$117</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>$2,333</strong></td></tr>
            </tbody>
          </table>
          <p>
            You can check the answer in our <a href="/calculators/mortgage">mortgage calculator</a>: enter a $341,334 price and a $60,000 down payment
            and it returns the same monthly payment.
          </p>

          <h2>What changes how much house you can afford?</h2>
          <p>
            Starting from the example above, here is the maximum price when one input changes. Everything else stays the same, and each
            row is a separate scenario.
          </p>
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Monthly budget</th>
                <th>Maximum home price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Example (28/36, 6.5%, $60,000 down)</td><td>$2,333</td><td>$341,334</td></tr>
              <tr><td>31/43 stretch limits</td><td>$2,583</td><td>$373,996</td></tr>
              <tr><td>Interest rate 5.5%</td><td>$2,333</td><td>$367,127</td></tr>
              <tr><td>Interest rate 7.5%</td><td>$2,333</td><td>$318,644</td></tr>
              <tr><td>Down payment $100,000</td><td>$2,333</td><td>$392,464</td></tr>
              <tr><td>Down payment $20,000</td><td>$2,333</td><td>$306,124</td></tr>
              <tr><td>$300 a month in HOA fees</td><td>$2,333</td><td>$302,139</td></tr>
              <tr><td>Property tax 2.0% a year</td><td>$2,333</td><td>$310,872</td></tr>
              <tr><td>15-year loan at 5.9%</td><td>$2,333</td><td>$291,509</td></tr>
            </tbody>
          </table>
          <p>
            A shorter loan lowers the price you qualify for because each dollar borrowed costs more per month, even though the 15-year
            rate is lower. In return you pay far less interest overall. Our guide to the{" "}
            <a href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage</a> explains the trade-off.
          </p>

          <h2>How much house can I afford at different incomes?</h2>
          <p>
            The table keeps the same $60,000 down payment, 6.5% rate, 30-year term, 1.1% property tax, $1,500 insurance, 0.5% PMI and
            $400 of monthly debts, and changes only the income.
          </p>
          <table>
            <thead>
              <tr>
                <th>Gross income</th>
                <th>Monthly budget</th>
                <th>Maximum home price</th>
                <th>Loan amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>$60,000</td><td>$1,400</td><td>$228,570</td><td>$168,570</td></tr>
              <tr><td>$80,000</td><td>$1,867</td><td>$293,050</td><td>$233,050</td></tr>
              <tr><td>$100,000</td><td>$2,333</td><td>$341,334</td><td>$281,334</td></tr>
              <tr><td>$120,000</td><td>$2,800</td><td>$402,304</td><td>$342,304</td></tr>
              <tr><td>$150,000</td><td>$3,500</td><td>$493,759</td><td>$433,759</td></tr>
            </tbody>
          </table>

          <h2>How do other debts affect the answer?</h2>
          <p>
            Other debts only matter once they push the back-end limit below the front-end limit. With the $100,000 income above, the
            36% limit is $3,000 a month, so debts up to about $667 a month change nothing. After that, every extra dollar of debt
            takes a dollar from the housing budget.
          </p>
          <table>
            <thead>
              <tr>
                <th>Monthly debts</th>
                <th>Limit that applies</th>
                <th>Monthly budget</th>
                <th>Maximum home price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>$0 to $400</td><td>28% front-end</td><td>$2,333</td><td>$341,334</td></tr>
              <tr><td>$800</td><td>36% back-end</td><td>$2,200</td><td>$323,914</td></tr>
              <tr><td>$1,200</td><td>36% back-end</td><td>$1,800</td><td>$283,839</td></tr>
              <tr><td>$1,500</td><td>36% back-end</td><td>$1,500</td><td>$242,387</td></tr>
            </tbody>
          </table>
          <p>
            If your debts alone reach the back-end limit, the calculator shows that no price fits and tells you why. When the back-end
            limit is the one that binds, paying off a car loan or card balance before you apply raises your budget directly.
          </p>

          <h2>What the home affordability calculator does not include</h2>
          <ul>
            <li><strong>Take-home pay.</strong> The ratios use gross income, so the result can feel tight once income tax, retirement saving and childcare come out.</li>
            <li><strong>Closing costs and moving costs.</strong> Lender fees, appraisal and title charges are paid in cash when you buy, on top of your down payment.</li>
            <li><strong>Maintenance.</strong> A common guideline is to set aside about 1% of the home&apos;s value each year for repairs.</li>
            <li><strong>Lender-specific rules.</strong> Credit score, loan type, reserves and income stability all affect what a lender will approve. Ratios of 28/36 and 31/43 are typical guidelines, not rules.</li>
            <li><strong>UK and EU buyers.</strong> Lenders there usually work from income multiples and affordability stress tests rather than the 28/36 rule. Use this tool as a rough budget check, set PMI to zero, and ask your lender for its figure.</li>
          </ul>

          <h2>Tips for raising your budget</h2>
          <ul>
            <li><strong>Pay down monthly debts</strong> if the back-end limit is the one binding. It is the fastest lever.</li>
            <li><strong>Save a larger down payment.</strong> Reaching 20% removes PMI. Read what <a href="/guides/what-is-pmi">PMI is and how to avoid it</a>.</li>
            <li><strong>Shop for a lower rate</strong> by comparing several lenders, since each point changes the price noticeably.</li>
            <li><strong>Compare areas.</strong> Property tax and HOA fees can change the price you can afford by tens of thousands.</li>
            <li><strong>Test your chosen price</strong> in the <a href="/calculators/mortgage">mortgage calculator</a> to see the lifetime interest and a full amortization schedule.</li>
          </ul>
          <p>
            For the reasoning behind these limits, with more examples, read our guide on{" "}
            <a href="/guides/how-much-house-can-i-afford">how much house you can afford</a>.
          </p>
        </>
      }
    />
  );
}
