import { Retirement } from "@/components/calculators/Retirement";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "retirement";

export const metadata = buildMetadata({
  title: "Retirement Calculator – How Much Will I Have?",
  description:
    "Free retirement calculator: project your nest egg, see its value in today's money after inflation, and estimate the monthly income it could support.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "How much do I need to retire?",
    answer:
      "A popular rule of thumb is 25 times your expected annual spending in retirement, which matches a 4% withdrawal rate. If you'll need 40,000 a year beyond any pension or Social Security, that suggests a target of around 1,000,000.",
  },
  {
    question: "What is the 4% rule?",
    answer:
      "The 4% rule suggests withdrawing 4% of your savings in the first year of retirement and adjusting for inflation after that. Historically this lasted at least 30 years in most US market periods. It is a guideline, not a guarantee.",
  },
  {
    question: "Why show values in today's money?",
    answer:
      "Prices rise over time, so a large number 30 years from now buys less than it does today. Dividing by cumulative inflation shows what your future savings would feel like in current purchasing power.",
  },
  {
    question: "Does this include Social Security, the State Pension or employer pensions?",
    answer:
      "No. It only projects personal savings such as a 401(k), IRA, ISA or SIPP. Add any guaranteed pension income separately when planning your budget.",
  },
  {
    question: "What return should I assume?",
    answer:
      "Many planners use 5–7% nominal for a balanced portfolio. More aggressive portfolios may return more on average but with higher volatility. Running a few scenarios is wiser than relying on a single number.",
  },
];

export default function RetirementPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Project how much you could have saved by retirement, what that's worth in today's money, and the monthly income it might support using a safe withdrawal rate."
      calculator={<Retirement />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the retirement calculator</h2>
          <ol>
            <li>Enter your <strong>current age</strong> and the age you plan to <strong>retire</strong>.</li>
            <li>Add your <strong>current retirement savings</strong> across all accounts.</li>
            <li>Enter your <strong>monthly contribution</strong>, including any employer match.</li>
            <li>Set an <strong>expected annual return</strong> and <strong>inflation</strong> rate.</li>
            <li>Choose a <strong>withdrawal rate</strong> — 4% is the classic starting point.</li>
          </ol>

          <h2>How the projection is calculated</h2>
          <p>Your savings grow monthly at the expected return, with contributions added at the end of each month:</p>
          <p><strong>Balance<sub>next</sub> = Balance × (1 + r/12) + contribution</strong></p>
          <p>The value in today&apos;s money divides the future balance by cumulative inflation:</p>
          <p><strong>Real value = Future value ÷ (1 + inflation)<sup>years</sup></strong></p>
          <p>Estimated monthly income = nest egg × withdrawal rate ÷ 12.</p>

          <h2>Worked example</h2>
          <p>
            A 35-year-old with <strong>50,000 saved</strong>, contributing <strong>750 a month</strong> at <strong>6%</strong> until
            67, could build roughly <strong>1.2 million</strong>. With 2.5% inflation that is worth about 548,000 in today&apos;s
            money, supporting around 1,830 a month (today&apos;s money) at a 4% withdrawal rate.
          </p>

          <h2>How to boost your retirement savings</h2>
          <ul>
            <li><strong>Capture the full employer match</strong> — it is an instant 50–100% return.</li>
            <li><strong>Use tax-advantaged accounts</strong>: 401(k) and IRA in the US, ISA and SIPP in the UK, or your country&apos;s equivalent.</li>
            <li><strong>Increase contributions by 1% each year</strong> until you reach 15% or more of income.</li>
            <li><strong>Delay retirement a couple of years</strong> — it adds contributions, growth and shortens the drawdown period.</li>
            <li>See the power of time with the <a href="/calculators/compound-interest">compound interest calculator</a>.</li>
          </ul>
        </>
      }
    />
  );
}
