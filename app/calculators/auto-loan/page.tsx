import { AutoLoan } from "@/components/calculators/AutoLoan";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "auto-loan";

export const metadata = buildMetadata({
  title: "Auto Loan Calculator with Trade-In & Tax",
  description:
    "Car loan calculator: find your monthly payment with trade-in, negative equity, sales tax and fees. Compare 48, 60 and 72 month terms and total interest.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "Is a 72-month car loan a bad idea?",
    answer:
      "It is not always bad, but it is usually costly. A longer term lowers the monthly payment while adding interest, and the balance can stay above the car's value for longer. On a $27,120 loan at 7%, 72 months costs about $2,118 more interest than 48 months. Use the comparison table to weigh the trade-off.",
  },
  {
    question: "How much car can I afford?",
    answer:
      "A common rule of thumb, often called 20/4/10, suggests 20% down, a loan of no more than 4 years, and total car costs under 10% of gross income. It is a guideline, not a rule. Enter your own budget, then adjust the price, down payment and term until the payment feels comfortable.",
  },
  {
    question: "Does a trade-in lower the sales tax I pay?",
    answer:
      "It depends on where you live. Some US states charge sales tax only on the price minus your trade-in value, while others tax the full price. This calculator lets you choose either method. Confirm your state's rule and your dealer's written quote, because the tax can change the amount financed.",
  },
  {
    question: "What is negative equity on a trade-in?",
    answer:
      "Negative equity means you owe more on your current car than it is worth. For example, an $8,000 trade-in with $11,000 owed leaves $3,000 uncovered. Dealers can add that amount to your new loan, which raises the amount financed, the payment and the interest you pay.",
  },
  {
    question: "Should I finance the sales tax and fees or pay them upfront?",
    answer:
      "Paying them upfront means a smaller loan and less interest, but you need more cash at signing. Financing keeps cash in your pocket but you pay interest on the tax and fees. In the example on this page, financing adds about $399 of interest over 60 months.",
  },
  {
    question: "Does this work for UK and EU car finance?",
    answer:
      "It works for a standard fixed-rate instalment loan, such as hire purchase, with equal monthly payments. Prices in the UK and most of the EU normally include VAT, so set the sales tax rate to 0%. Enter the APR, not a flat rate, if a dealer quotes both. It does not model PCP deals with a final balloon payment.",
  },
];

export default function AutoLoanPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Work out your monthly car payment, total interest and total cost, including your trade-in, sales tax and fees, and see how a 48, 60 or 72 month loan compares."
      calculator={<AutoLoan />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the auto loan calculator</h2>
          <ol>
            <li>Enter the <strong>vehicle price</strong> and the <strong>down payment</strong> you plan to pay in cash.</li>
            <li>If you are trading in a car, add its <strong>trade-in value</strong> and the <strong>amount you still owe</strong> on it. Leave both at zero if you are not.</li>
            <li>Enter the <strong>interest rate (APR)</strong> and choose the <strong>loan term</strong> from 36 to 84 months.</li>
            <li>Open <strong>Sales tax &amp; fees</strong> and enter your tax rate and the title, registration and documentation fees.</li>
            <li>Choose whether the tax is charged on the price minus the trade-in or on the full price, and whether tax and fees are financed or paid upfront.</li>
          </ol>
          <p>
            The summary shows your monthly payment, the amount financed, total interest, the cash you need at signing and the total
            cost. The chart shows the balance falling year by year, and the table compares the same loan over 48, 60 and 72 months.
          </p>
          <p>
            Sales tax rules differ by US state. Some states tax the price after the trade-in credit, others tax the full price, and
            a few charge no state sales tax at all. The calculator starts with tax on the price minus the trade-in, and you can
            switch it. Ask the dealer for an itemised quote to confirm your own state&apos;s treatment.
          </p>

          <h2>Car loan formula explained</h2>
          <p><strong>Amount financed = price + trade-in payoff + tax + fees − trade-in value − down payment</strong></p>
          <p><strong>Monthly payment = P × r ÷ [1 − (1 + r)<sup>−n</sup>]</strong></p>
          <ul>
            <li><strong>P</strong> = amount financed</li>
            <li><strong>r</strong> = monthly rate = APR ÷ 12 ÷ 100</li>
            <li><strong>n</strong> = number of monthly payments (the term in months)</li>
          </ul>
          <p>
            Sales tax = tax rate × the taxable price, where the taxable price is either the price minus the trade-in value or the
            full price. If you pay tax and fees upfront, they are left out of the amount financed and counted as cash at signing
            instead. With a 0% rate the payment is simply P ÷ n.
          </p>
          <p>
            <strong>Total cost</strong> here means your cash at signing plus every monthly payment. It does not count the value of
            the car you trade in. Everything is calculated at full precision and rounded only for display.
          </p>

          <h2>Worked example: $35,000 car with a trade-in</h2>
          <p>
            Say you buy a <strong>$35,000</strong> car with <strong>$5,000 down</strong>. You trade in a car worth <strong>$8,000</strong>{" "}
            on which you owe <strong>$3,000</strong>, so it has $5,000 of positive equity. Sales tax is <strong>6%</strong> on the
            price minus the trade-in, fees are <strong>$500</strong>, the APR is <strong>7%</strong>, and tax and fees are financed.
          </p>
          <ul>
            <li>Sales tax: 6% × ($35,000 − $8,000) = <strong>$1,620</strong></li>
            <li>Amount financed: $35,000 + $3,000 + $1,620 + $500 − $8,000 − $5,000 = <strong>$27,120</strong></li>
            <li>Monthly payment over 60 months: <strong>$537.01</strong></li>
            <li>Total interest: <strong>$5,100.51</strong></li>
            <li>Total cost: $5,000 + $32,220.51 in payments = <strong>$37,220.51</strong></li>
          </ul>
          <p>
            The trade-in matters twice. The $5,000 of equity reduces the loan, and the trade-in credit cuts the tax by $480
            (6% of $8,000). With no trade-in and the same other inputs, the amount financed is $32,600 and the payment is $645.52 a
            month, about $109 more.
          </p>

          <h2>How does the loan term change the cost?</h2>
          <p>
            A longer term spreads the same loan over more payments. Each payment is smaller, but interest builds on the balance for
            longer. The table uses the $27,120 loan above at 7%.
          </p>
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Monthly payment</th>
                <th>Total interest</th>
                <th>Total cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>36 months</td><td>$837.39</td><td>$3,025.93</td><td>$35,145.93</td></tr>
              <tr><td>48 months</td><td>$649.42</td><td>$4,052.26</td><td>$36,172.26</td></tr>
              <tr><td>60 months</td><td>$537.01</td><td>$5,100.51</td><td>$37,220.51</td></tr>
              <tr><td>72 months</td><td>$462.37</td><td>$6,170.57</td><td>$38,290.57</td></tr>
              <tr><td>84 months</td><td>$409.31</td><td>$7,262.33</td><td>$39,382.33</td></tr>
            </tbody>
          </table>
          <p>
            Going from 48 to 72 months cuts the payment by about $187 but adds about $2,118 of interest. Going from 60 to 84 months
            lowers the payment by about $128 and adds about $2,162.
          </p>

          <h2>What changes the payment most?</h2>
          <p>
            Four inputs move the numbers the most: the rate, the down payment, negative equity and whether tax and fees are
            financed. Each line below changes one input in the example and keeps the rest the same.
          </p>
          <table>
            <thead>
              <tr>
                <th>Change</th>
                <th>Amount financed</th>
                <th>Monthly payment</th>
                <th>Total interest</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Example (7%, $5,000 down)</td><td>$27,120</td><td>$537.01</td><td>$5,100.51</td></tr>
              <tr><td>APR of 3%</td><td>$27,120</td><td>$487.31</td><td>$2,118.65</td></tr>
              <tr><td>APR of 10%</td><td>$27,120</td><td>$576.22</td><td>$7,453.19</td></tr>
              <tr><td>$10,000 down</td><td>$22,120</td><td>$438.00</td><td>$4,160.15</td></tr>
              <tr><td>Tax and fees paid upfront</td><td>$25,000</td><td>$495.03</td><td>$4,701.80</td></tr>
              <tr><td>Tax on the full price</td><td>$27,600</td><td>$546.51</td><td>$5,190.78</td></tr>
              <tr><td>$11,000 owed on the trade-in</td><td>$35,120</td><td>$695.42</td><td>$6,605.09</td></tr>
            </tbody>
          </table>
          <p>
            The last row shows negative equity. The trade-in is still worth $8,000, but owing $11,000 instead of $3,000 adds
            $8,000 to the loan. Paying tax and fees upfront needs $7,120 in cash at signing instead of $5,000, and saves about $399
            of interest over the 60 months.
          </p>

          <h2>Tips for a cheaper car loan</h2>
          <ul>
            <li><strong>Compare the total cost, not only the payment.</strong> A low payment can hide a long term and a lot of interest.</li>
            <li><strong>Get pre-approved</strong> by a bank or credit union before visiting the dealer, so you have a rate to compare with the dealer&apos;s offer.</li>
            <li><strong>Pick the shortest term you can comfortably afford.</strong> A common rule of thumb is 20/4/10, as a starting point: 20% down, 4 years or less, and car costs under 10% of income.</li>
            <li><strong>Check what you owe on your trade-in</strong> before you shop. If it is negative, rolling it into a new loan makes the new loan larger.</li>
            <li><strong>Remember the running costs.</strong> Insurance, fuel and maintenance are not part of the loan, but they belong in your budget.</li>
          </ul>
          <p>
            To see the month-by-month split of interest and principal on any fixed-rate loan, use the{" "}
            <a href="/calculators/loan-amortization">loan amortization calculator</a>. If you also carry card debt, compare it with
            the <a href="/calculators/credit-card-payoff">credit card payoff calculator</a>, and read{" "}
            <a href="/guides/debt-avalanche-vs-snowball">debt avalanche vs snowball</a> to decide which debt to attack first.
          </p>

          <h2>What the auto loan calculator does not include</h2>
          <p>
            It models a fixed-rate loan with equal monthly payments. Real offers can differ, so compare these results with the
            lender&apos;s paperwork.
          </p>
          <ul>
            <li><strong>Other costs.</strong> Insurance, fuel, maintenance and add-ons such as extended warranties are not included unless you add them to the price or fees.</li>
            <li><strong>Local taxes.</strong> City, county or district taxes can add to the state rate. Enter the combined rate.</li>
            <li><strong>Lease and balloon finance.</strong> Leases and PCP deals with a final balloon payment work differently and are not modelled.</li>
            <li><strong>Rebates.</strong> A manufacturer rebate lowers the price you enter. A low promotional rate may only be offered instead of the rebate, so run both.</li>
          </ul>
        </>
      }
    />
  );
}
