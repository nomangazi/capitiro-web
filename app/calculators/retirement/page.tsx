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
  {
    question: "Is it too late to start saving for retirement at 45?",
    answer:
      "No. Starting at 45 gives you about 22 years to retire at 67. Saving 1,000 a month at 6% builds roughly 546,000, and 2,000 a month builds about 1.09 million, before inflation. Saving more, working a little longer and using tax-advantaged accounts all help.",
  },
  {
    question: "How much does retiring later help?",
    answer:
      "Quite a lot. A 35-year-old saving 500 a month at 6% would have about 403,000 at 62, 579,000 at 67 and 712,000 at 70. Each extra year adds contributions and growth while shortening the time the money must last.",
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

          <h2>How much does your starting age change the result?</h2>
          <p>
            Enormously. Saving <strong>500 a month</strong> at 6% until age 67 builds about 1.14 million if you start at 25, about
            579,000 if you start at 35 and about 273,000 if you start at 45.
          </p>
          <table>
            <thead>
              <tr>
                <th>Start age</th>
                <th>Total contributed</th>
                <th>Nest egg at 67</th>
                <th>In today&apos;s money</th>
                <th>Monthly income (today&apos;s money)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>25</td><td>252,000</td><td>1,135,080</td><td>402,369</td><td>1,341</td></tr>
              <tr><td>35</td><td>192,000</td><td>578,840</td><td>262,661</td><td>876</td></tr>
              <tr><td>45</td><td>132,000</td><td>273,113</td><td>158,642</td><td>529</td></tr>
            </tbody>
          </table>
          <p>
            The table assumes no starting balance, 2.5% inflation and a 4% withdrawal rate. Starting at 25 instead of 35 means
            contributing 60,000 more, yet the nest egg is almost twice as large, because the early money has an extra decade to
            compound (the <a href="/guides/rule-of-72">Rule of 72</a> shows how quickly money doubles). Halving the contribution to 250 a month from age 25 still reaches about 568,000, close to the 35-year-old
            saving 500.
          </p>

          <h2>Is it too late to start at 45?</h2>
          <p>
            No, but you need to save more each month to catch up. Starting at 45 with nothing saved, 1,000 a month reaches about
            546,000 by 67 and 2,000 a month reaches about 1.09 million, roughly what 500 a month would build from age 25.
          </p>
          <p>
            Other levers help too. Retiring at 70 instead of 67, for example, adds three years of contributions and growth and
            shortens the time your savings must last. To work out the monthly amount for a specific target, use the{" "}
            <a href="/calculators/savings-goal">savings goal calculator</a>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Retire at (start at 35, 500 a month)</th>
                <th>Nest egg</th>
                <th>Monthly income (today&apos;s money)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>62</td><td>403,273</td><td>690</td></tr>
              <tr><td>67</td><td>578,840</td><td>876</td></tr>
              <tr><td>70</td><td>712,355</td><td>1,001</td></tr>
            </tbody>
          </table>

          <h2>What if returns or inflation differ from your assumptions?</h2>
          <p>
            Small changes in the assumptions move the answer a lot. For a 35-year-old saving 500 a month until 67, a 4% return gives
            about 388,000, 6% gives about 579,000 and 8% gives about 887,000.
          </p>
          <p>
            Inflation changes what the same number buys. That 579,000 nest egg is worth about 263,000 in today&apos;s money at 2.5%
            inflation but only about 165,000 at 4%. Test a few combinations, and use the{" "}
            <a href="/calculators/inflation">inflation calculator</a> to see how prices could change over your timeline.
          </p>

          <h2>How do retirement accounts differ in the US, UK and EU?</h2>
          <p>
            The projection works the same in every country, but the account you use changes how much you keep after tax.
          </p>
          <ul>
            <li><strong>US:</strong> a 401(k) often comes with an employer match, and an IRA is open to most earners. Traditional accounts defer tax until withdrawal, while Roth versions are funded with after-tax money.</li>
            <li><strong>UK:</strong> workplace pensions add employer contributions and tax relief, a SIPP offers a self-directed pension, and an ISA lets investments grow free of UK tax.</li>
            <li><strong>EU:</strong> systems vary a lot by country, with a mix of state, occupational and private pensions. Check your national rules.</li>
          </ul>
          <p>
            Contribution limits and tax rules change, so confirm current figures with the IRS, HMRC or your national pension authority.
          </p>

          <h2>What does the retirement calculator not include?</h2>
          <ul>
            <li><strong>Social Security and the State Pension:</strong> these are separate income streams that reduce how much your own savings must provide.</li>
            <li><strong>Taxes and fees:</strong> withdrawals may be taxed, and fund fees lower your return every year.</li>
            <li><strong>Sequence-of-returns risk:</strong> poor market returns in the first years of retirement can hurt more than the same returns later, which is why the 4% rule is a guideline.</li>
            <li><strong>Rising contributions:</strong> the calculator keeps your monthly amount flat. Try the <a href="/calculators/sip-return">SIP calculator</a> to model yearly increases.</li>
          </ul>

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
