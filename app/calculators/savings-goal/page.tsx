import { SavingsGoal } from "@/components/calculators/SavingsGoal";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "savings-goal";

export const metadata = buildMetadata({
  title: "Savings Goal Calculator – How Much to Save per Month",
  description:
    "Work out how much you need to save each month to reach a savings goal — a house deposit, emergency fund, car or holiday — including interest earned.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "How much should I have in an emergency fund?",
    answer:
      "Most guidance suggests three to six months of essential expenses, kept in an easy-access savings account. Self-employed people or single-income households often aim for six months or more.",
  },
  {
    question: "Where should I keep short-term savings?",
    answer:
      "For goals under about five years, a high-yield savings account, money market account or fixed-term deposit is usually more suitable than stocks, because your money won't be exposed to market falls right before you need it.",
  },
  {
    question: "What interest rate should I enter?",
    answer:
      "Use the APY or AER of the account you'll save into. If you are unsure, enter a conservative rate such as 2–4%, or 0% for a worst-case number.",
  },
  {
    question: "What if I already have enough saved?",
    answer:
      "If interest on your current savings alone will reach the goal in time, the calculator tells you no monthly deposits are needed.",
  },
  {
    question: "Are deposits made at the start or end of the month?",
    answer:
      "The calculator assumes deposits at the end of each month, which is slightly conservative compared with saving at the start of the month.",
  },
];

export default function SavingsGoalPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Set a target and a deadline, and find the exact monthly amount you need to save — with interest doing part of the work."
      calculator={<SavingsGoal />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the savings goal calculator</h2>
          <ol>
            <li>Enter your <strong>savings goal</strong> — for example a house deposit or emergency fund.</li>
            <li>Enter what you have <strong>already saved</strong> toward it.</li>
            <li>Choose <strong>how long</strong> you have to reach the goal.</li>
            <li>Enter the <strong>interest rate</strong> your savings account pays.</li>
          </ol>

          <h2>Formula explained</h2>
          <p>The calculator finds the monthly deposit (PMT) that satisfies:</p>
          <p><strong>Goal = PV × (1 + i)<sup>n</sup> + PMT × [(1 + i)<sup>n</sup> − 1] ÷ i</strong></p>
          <p>Rearranged:</p>
          <p><strong>PMT = [Goal − PV × (1 + i)<sup>n</sup>] × i ÷ [(1 + i)<sup>n</sup> − 1]</strong></p>
          <ul>
            <li><strong>PV</strong> = current savings, <strong>i</strong> = monthly rate, <strong>n</strong> = number of months</li>
            <li>At 0% interest this simplifies to (Goal − PV) ÷ n.</li>
          </ul>

          <h2>Worked example</h2>
          <p>
            To reach <strong>30,000 in 3 years</strong>, starting with <strong>2,000</strong> in an account paying <strong>4%</strong>,
            you&apos;d need to save about <strong>727 a month</strong>. Interest contributes around 1,840 of the total.
          </p>

          <h2>Tips for hitting your savings goal</h2>
          <ul>
            <li><strong>Automate it.</strong> Schedule a transfer the day after payday.</li>
            <li><strong>Use a separate account</strong> so the money isn&apos;t spent by accident.</li>
            <li><strong>Shop for a better rate</strong> — online banks often pay several times more than high-street accounts.</li>
            <li><strong>Pay off high-interest debt first</strong>; see the <a href="/calculators/credit-card-payoff">credit card payoff calculator</a>.</li>
          </ul>
        </>
      }
    />
  );
}
