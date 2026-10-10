import { CreditCardPayoff } from "@/components/calculators/CreditCardPayoff";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "credit-card-payoff";

export const metadata = buildMetadata({
  title: "Credit Card Payoff Calculator",
  description:
    "See how long it takes to pay off your credit card, how much interest you'll pay, and the monthly payment needed to be debt-free in 1, 2 or 3 years.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "How is credit card interest calculated?",
    answer:
      "Card issuers convert your APR into a daily or monthly rate and charge it on your balance. This calculator uses APR ÷ 12 each month, which closely matches a typical statement. Card issuers that compound daily will charge very slightly more.",
  },
  {
    question: "Why does paying only the minimum take so long?",
    answer:
      "Minimum payments are often just interest plus 1% of the balance, so only a small part reduces what you owe. At high APRs, that can stretch repayment over decades. A fixed payment well above the minimum is the fastest way out.",
  },
  {
    question: "Should I use the avalanche or snowball method?",
    answer:
      "The avalanche method pays off the highest-APR card first and saves the most interest. The snowball method clears the smallest balance first for quicker wins. Both work if you stick with them; avalanche is cheaper mathematically.",
  },
  {
    question: "Is a balance transfer worth it?",
    answer:
      "A 0% balance transfer card can save a lot of interest if you can clear the balance before the promotional period ends. Factor in the transfer fee (often 3–5%) and avoid new spending on the card.",
  },
  {
    question: "What if my payment is lower than the monthly interest?",
    answer:
      "Then the balance never goes down. The calculator warns you and shows the minimum amount needed to start making progress.",
  },
  {
    question: "How much should I pay each month to clear a card in two or three years?",
    answer:
      "To clear $6,000 at 22.9% APR in 24 months you need about $314 a month and pay about $1,535 in interest. For 36 months it is about $232 a month and about $2,350 in interest. The calculator shows the payment for your own balance and APR.",
  },
];

export default function CreditCardPayoffPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Enter your balance, APR and monthly payment to see your debt-free date and total interest — or pick a target and get the payment you need."
      calculator={<CreditCardPayoff />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the credit card payoff calculator</h2>
          <ol>
            <li>Enter your current <strong>card balance</strong>.</li>
            <li>Enter the card&apos;s <strong>APR</strong> (on your statement or in your card app).</li>
            <li>Enter the fixed <strong>monthly payment</strong> you can afford.</li>
          </ol>
          <p>
            The result shows how many months it will take to reach zero and how much interest you&apos;ll pay. The &quot;Pay it off
            faster&quot; cards show the payment needed to clear the debt in 12, 24 or 36 months — click one to apply it.
          </p>

          <h2>Formula explained</h2>
          <p>Each month the calculator applies:</p>
          <p><strong>New balance = balance + (balance × APR ÷ 12) − payment</strong></p>
          <p>and repeats until the balance reaches zero. The payment needed to clear a balance in a fixed number of months uses the standard loan formula:</p>
          <p><strong>Payment = B × r ÷ [1 − (1 + r)<sup>−n</sup>]</strong>, where r = APR ÷ 12 and n = number of months.</p>

          <h2>Worked example</h2>
          <p>
            A <strong>$6,000 balance at 22.9% APR</strong> with a fixed <strong>$250 payment</strong> takes about 33 months to repay
            and costs roughly $2,100 in interest. Raising the payment to about $564 clears it in 12 months and cuts interest to
            under $800.
          </p>

          <h2>How much does the monthly payment change the cost?</h2>
          <p>
            Doubling the payment from $125 to $250 on a $6,000 balance at 22.9% APR cuts interest by about 80% and pays the card off
            in a quarter of the time. In the first month, interest alone is about $114.50, so a payment barely above that makes
            very little progress.
          </p>
          <table>
            <thead>
              <tr>
                <th>Monthly payment</th>
                <th>Months to pay off</th>
                <th>Total interest</th>
                <th>Total paid</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>$125</td><td>132</td><td>$10,379</td><td>$16,379</td></tr>
              <tr><td>$150</td><td>77</td><td>$5,435</td><td>$11,435</td></tr>
              <tr><td>$200</td><td>45</td><td>$2,991</td><td>$8,991</td></tr>
              <tr><td>$250</td><td>33</td><td>$2,101</td><td>$8,101</td></tr>
              <tr><td>$300</td><td>26</td><td>$1,630</td><td>$7,630</td></tr>
              <tr><td>$400</td><td>18</td><td>$1,136</td><td>$7,136</td></tr>
              <tr><td>$500</td><td>14</td><td>$880</td><td>$6,880</td></tr>
            </tbody>
          </table>
          <p>
            Many issuers set the minimum at interest plus 1% of the balance. On this card that is about $175 in month one, and it
            shrinks as the balance falls, so the debt lingers. A fixed payment avoids that trap.
          </p>

          <h2>Does a lower APR or a balance transfer help?</h2>
          <p>
            Yes. At the same $250 payment, the payoff time on a $6,000 balance runs from 24 months at 0% to 38 months at 29.9%, and
            interest runs from $0 to about $3,257.
          </p>
          <table>
            <thead>
              <tr>
                <th>APR</th>
                <th>Months to pay off</th>
                <th>Total interest</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0%</td><td>24</td><td>$0</td></tr>
              <tr><td>12%</td><td>28</td><td>$895</td></tr>
              <tr><td>17.9%</td><td>30</td><td>$1,483</td></tr>
              <tr><td>22.9%</td><td>33</td><td>$2,101</td></tr>
              <tr><td>29.9%</td><td>38</td><td>$3,257</td></tr>
            </tbody>
          </table>
          <p>
            A balance transfer can work if you clear the debt before the 0% period ends. With a 3% fee, moving $6,000 costs $180.
            Paying $515 a month ($6,180 ÷ 12) would clear it within a 12-month offer. Paying the same $515 on the 22.9% card takes 14
            months and costs about $852 in interest, so the transfer saves roughly $672. If the offer ends first, the rest of the
            balance goes back to the regular rate. With several cards, see
            {" "}<a href="/guides/debt-avalanche-vs-snowball">avalanche vs snowball</a> to pick an order.
          </p>

          <h2>Strategies to get out of credit card debt</h2>
          <ul>
            <li><strong>Stop adding new charges</strong> to the card you are paying down.</li>
            <li><strong>Pay more than the minimum</strong> — automate a fixed amount each payday.</li>
            <li><strong>Call your issuer</strong> and ask for a lower APR; it works more often than you&apos;d expect.</li>
            <li><strong>Consider consolidation</strong> with a lower-rate personal loan. Compare it with our <a href="/calculators/loan-amortization">loan calculator</a>.</li>
            <li><strong>Build a small emergency fund</strong> so surprises don&apos;t go back on the card. Our <a href="/calculators/savings-goal">savings goal calculator</a> can help.</li>
          </ul>

          <h2>What the credit card calculator does not include</h2>
          <p>
            It assumes you stop using the card and pay the same amount every month. Real statements are messier, so treat the result
            as a plan to beat, not a promise.
          </p>
          <ul>
            <li><strong>New purchases.</strong> Every new charge adds to the balance and delays the payoff date.</li>
            <li><strong>Daily interest.</strong> Issuers often compound daily, so the true cost can be slightly higher than APR ÷ 12.</li>
            <li><strong>Fees and rate changes.</strong> Late fees, annual fees and a rise in your variable APR are not included.</li>
            <li><strong>UK and EU cards.</strong> The advertised APR is often a representative rate that only some customers receive. Use the rate on your own statement.</li>
          </ul>
          <p>
            Credit card interest is the same compounding effect that grows savings, but working against you. See it from the other
            side with the <a href="/calculators/compound-interest">compound interest calculator</a>.
          </p>
        </>
      }
    />
  );
}
