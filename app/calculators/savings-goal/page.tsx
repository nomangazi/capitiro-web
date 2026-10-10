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
  {
    question: "Should I adjust my savings goal for inflation?",
    answer:
      "For goals more than a year or two away, yes. If prices rise 3% a year, a 30,000 goal costs about 32,782 in 3 years, which raises the monthly amount from about 727 to about 800 at 4% interest. Add a cushion or re-check the goal each year.",
  },
  {
    question: "Is the interest I earn on savings taxable?",
    answer:
      "It depends on where you live and the account. In the US, savings interest is generally taxable income. In the UK, interest in a cash ISA is tax-free, while other savings may use allowances. EU rules vary by country, so check official guidance.",
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

          <h2>How much does the interest rate change the monthly amount?</h2>
          <p>
            Less than most people expect over a short goal. Reaching <strong>30,000 in 3 years from 2,000 saved</strong> takes about
            778 a month at 0% interest and about 714 a month at 5%, a gap of roughly 64 a month.
          </p>
          <table>
            <thead>
              <tr>
                <th>Interest rate</th>
                <th>Monthly deposit</th>
                <th>Total deposited</th>
                <th>Interest earned</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0%</td><td>778</td><td>28,000</td><td>0</td></tr>
              <tr><td>2%</td><td>752</td><td>27,072</td><td>928</td></tr>
              <tr><td>4%</td><td>727</td><td>26,160</td><td>1,840</td></tr>
              <tr><td>5%</td><td>714</td><td>25,711</td><td>2,289</td></tr>
            </tbody>
          </table>
          <p>
            Interest helps, but the amount you save and the time you allow matter far more. Use 0% as a worst case, then see how
            much a better account would add. The <a href="/calculators/compound-interest">compound interest calculator</a> shows how
            growth builds when you save for many years.
          </p>

          <h2>Is it better to save for longer or save more each month?</h2>
          <p>
            Saving for longer lowers the monthly amount sharply and lets interest do more, but it delays the goal. Using the same
            30,000 target, 2,000 starting balance and 4% rate, the monthly deposit falls from about 2,284 over one year to about 183
            over ten.
          </p>
          <table>
            <thead>
              <tr>
                <th>Time allowed</th>
                <th>Monthly deposit</th>
                <th>Total deposited</th>
                <th>Interest earned</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1 year</td><td>2,284</td><td>27,410</td><td>590</td></tr>
              <tr><td>2 years</td><td>1,116</td><td>26,782</td><td>1,218</td></tr>
              <tr><td>3 years</td><td>727</td><td>26,160</td><td>1,840</td></tr>
              <tr><td>5 years</td><td>416</td><td>24,940</td><td>3,060</td></tr>
              <tr><td>10 years</td><td>183</td><td>22,018</td><td>5,982</td></tr>
            </tbody>
          </table>
          <p>
            Pick the timeline that fits your budget, not the one that looks best. A goal you can afford each month is one you are
            more likely to finish.
          </p>

          <h2>What are common savings goal mistakes?</h2>
          <p>
            The most common mistakes are ignoring inflation, trusting a rate that can change and forgetting tax.
          </p>
          <ul>
            <li>
              <strong>Ignoring inflation:</strong> if prices rise 3% a year, a 30,000 goal costs about 32,782 in 3 years. Saving for the
              higher figure at 4% takes about 800 a month instead of 727, roughly 73 more. Estimate it with the{" "}
              <a href="/calculators/inflation">inflation calculator</a>.
            </li>
            <li>
              <strong>Assuming the rate stays fixed:</strong> easy-access rates move with central bank rates. Re-run the calculator
              when your rate changes, or lock a fixed-term rate if you want certainty.
            </li>
            <li>
              <strong>Forgetting tax on interest:</strong> in the US, savings interest is generally taxable income. A UK cash ISA pays
              interest tax-free, and EU rules vary by country.
            </li>
            <li>
              <strong>Mixing up rate types:</strong> enter the account&apos;s quoted rate (APY in the US, AER in the UK). The calculator
              compounds monthly, so using an APY or AER makes the result very slightly optimistic. Ignore any bonus rate that lasts only
              a few months.
            </li>
          </ul>

          <h2>How to plan for a house deposit or an emergency fund</h2>
          <p>
            Both use the same calculation. For a 15,000 emergency fund in 2 years from nothing, you would save 625 a month at 0% or
            about 601 a month at 4%, with roughly 567 of the total coming from interest.
          </p>
          <p>
            For a deposit, work out the target first with the{" "}
            <a href="/guides/how-much-house-can-i-afford">how much house can I afford guide</a>. Keep money you need within a few
            years in a savings account, and consider a longer-term plan such as the{" "}
            <a href="/calculators/retirement">retirement calculator</a> for goals decades away.
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
