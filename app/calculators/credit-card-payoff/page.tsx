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
];

export default function CreditCardPayoffPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      updated="2026-10-10"
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

          <h2>Strategies to get out of credit card debt</h2>
          <ul>
            <li><strong>Stop adding new charges</strong> to the card you are paying down.</li>
            <li><strong>Pay more than the minimum</strong> — automate a fixed amount each payday.</li>
            <li><strong>Call your issuer</strong> and ask for a lower APR; it works more often than you&apos;d expect.</li>
            <li><strong>Consider consolidation</strong> with a lower-rate personal loan. Compare it with our <a href="/calculators/loan-amortization">loan calculator</a>.</li>
            <li><strong>Build a small emergency fund</strong> so surprises don&apos;t go back on the card. Our <a href="/calculators/savings-goal">savings goal calculator</a> can help.</li>
          </ul>
        </>
      }
    />
  );
}
