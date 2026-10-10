import { Inflation } from "@/components/calculators/Inflation";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "inflation";

export const metadata = buildMetadata({
  title: "Inflation Calculator – Future Value & Purchasing Power",
  description:
    "See how inflation affects your money: what today's prices will cost in the future and how much purchasing power your savings lose over time.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is inflation?",
    answer:
      "Inflation is the general rise in prices over time. When inflation is 3%, something that costs 100 today costs about 103 next year — so each unit of money buys a little less.",
  },
  {
    question: "What inflation rate should I use?",
    answer:
      "The US Federal Reserve, the European Central Bank and the Bank of England all target about 2% a year over the long run. Actual inflation has varied widely, so 2–3% is a common planning assumption.",
  },
  {
    question: "What is purchasing power?",
    answer:
      "Purchasing power is how much your money can buy. If prices double, the same amount of money has half the purchasing power.",
  },
  {
    question: "How do I protect my savings from inflation?",
    answer:
      "Over the long term, assets such as diversified stocks, inflation-linked bonds (TIPS in the US, index-linked gilts in the UK) and real estate have tended to outpace inflation. Cash savings only keep up if the interest rate exceeds inflation.",
  },
  {
    question: "Can I enter a negative rate (deflation)?",
    answer: "Yes. Enter a negative number in the rate field to model falling prices.",
  },
];

export default function InflationPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Find out what today's money will be worth in the future — and how much more everyday costs could be — at any inflation rate."
      calculator={<Inflation />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the inflation calculator</h2>
          <ol>
            <li>Enter an <strong>amount</strong> in today&apos;s money — a salary, a monthly budget or a savings balance.</li>
            <li>Set the expected <strong>annual inflation rate</strong>.</li>
            <li>Choose the <strong>number of years</strong> to look ahead.</li>
          </ol>
          <p>You get two answers: what the same goods will cost in the future, and what your money will be able to buy then.</p>

          <h2>Inflation formula explained</h2>
          <p><strong>Future cost = Amount × (1 + inflation)<sup>years</sup></strong></p>
          <p><strong>Purchasing power = Amount ÷ (1 + inflation)<sup>years</sup></strong></p>
          <p>Both use the same compounding principle as interest — just working against you instead of for you.</p>

          <h2>Worked example</h2>
          <p>
            At <strong>3% inflation</strong>, a basket of goods costing <strong>1,000</strong> today will cost about{" "}
            <strong>1,344 in 10 years</strong>. Put the other way, 1,000 kept in cash will only buy what about 744 buys today — a{" "}
            <strong>26% loss</strong> of purchasing power.
          </p>

          <h2>Why inflation matters for your plans</h2>
          <ul>
            <li><strong>Retirement:</strong> a target that looks big today may be modest in 30 years. Our <a href="/calculators/retirement">retirement calculator</a> shows both values.</li>
            <li><strong>Salary:</strong> a raise below inflation is a real-terms pay cut.</li>
            <li><strong>Savings:</strong> compare your account&apos;s interest rate with inflation — the difference is your real return.</li>
          </ul>
        </>
      }
    />
  );
}
