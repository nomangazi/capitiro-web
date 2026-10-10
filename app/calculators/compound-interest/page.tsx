import { CompoundInterest } from "@/components/calculators/CompoundInterest";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "compound-interest";

export const metadata = buildMetadata({
  title: "Compound Interest Calculator with Monthly Contributions",
  description:
    "Free compound interest calculator. Project how an initial deposit and monthly contributions grow with daily, monthly, quarterly or yearly compounding.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is compound interest?",
    answer:
      "Compound interest is interest earned on both your original money and on the interest it has already earned. Over long periods this 'interest on interest' makes balances grow faster and faster.",
  },
  {
    question: "How often is interest compounded?",
    answer:
      "It depends on the account. Savings accounts often compound daily or monthly, bonds semi-annually, and long-term investment returns are usually quoted annually. Use the compounding selector to match your account; contributions are added at the end of each month.",
  },
  {
    question: "What is the Rule of 72?",
    answer:
      "The Rule of 72 is a quick way to estimate doubling time: divide 72 by the annual interest rate. At 8% your money doubles in about 9 years; at 6% in about 12 years.",
  },
  {
    question: "What interest rate should I use?",
    answer:
      "For savings accounts, use the advertised APY. For a diversified stock portfolio, many planners use 5–7% after inflation or 7–10% before inflation, but returns are never guaranteed and past performance does not predict future results.",
  },
  {
    question: "Does this calculator include taxes or inflation?",
    answer:
      "No. Results are before tax and in future (nominal) money. To see what a future amount is worth today, use our inflation calculator.",
  },
];

export default function CompoundInterestPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="See how your savings grow when interest earns interest. Enter a starting amount, a monthly contribution and a rate to project your future balance."
      calculator={<CompoundInterest />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the compound interest calculator</h2>
          <ol>
            <li><strong>Initial deposit</strong> — the amount you are starting with (can be zero).</li>
            <li><strong>Monthly contribution</strong> — what you plan to add each month.</li>
            <li><strong>Years to grow</strong> — how long the money stays invested.</li>
            <li><strong>Annual interest rate</strong> — the expected yearly rate of return.</li>
            <li><strong>Compounding frequency</strong> — how often interest is added to the balance.</li>
          </ol>
          <p>The chart compares your growing balance with the money you actually put in. The gap between the two lines is compound interest at work.</p>

          <h2>Compound interest formula explained</h2>
          <p>For a single deposit, the classic formula is:</p>
          <p><strong>A = P × (1 + r/n)<sup>n×t</sup></strong></p>
          <ul>
            <li><strong>A</strong> = final amount, <strong>P</strong> = initial deposit</li>
            <li><strong>r</strong> = annual rate (as a decimal), <strong>n</strong> = compounding periods per year</li>
            <li><strong>t</strong> = number of years</li>
          </ul>
          <p>
            Monthly contributions add the future value of a series of payments: <strong>PMT × [(1 + i)<sup>m</sup> − 1] ÷ i</strong>,
            where i is the monthly rate equivalent to your compounding frequency and m is the number of months. The calculator
            simulates every month so both parts are combined precisely.
          </p>

          <h2>Worked example</h2>
          <p>
            Investing <strong>$10,000</strong> and adding <strong>$500 a month</strong> for <strong>20 years at 7%</strong>, compounded
            monthly, grows to roughly <strong>$300,000</strong>. You contribute $130,000; the other ~$170,000 is interest — more than
            half of the final balance.
          </p>

          <h2>How to make compounding work harder for you</h2>
          <ul>
            <li><strong>Start early.</strong> Time is the most powerful input — ten extra years can double the result.</li>
            <li><strong>Contribute consistently.</strong> Automate monthly deposits so you never skip.</li>
            <li><strong>Keep fees low.</strong> A 1% annual fee can consume a quarter of long-term growth.</li>
            <li><strong>Reinvest returns</strong> instead of withdrawing dividends or interest.</li>
            <li>Planning for later life? Try the <a href="/calculators/retirement">retirement calculator</a>.</li>
          </ul>
        </>
      }
    />
  );
}
