import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "4-percent-rule";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        The 4% rule says you can withdraw 4% of your portfolio in your first year of retirement, then raise that dollar amount with
        inflation each year, and have a good chance your money lasts about 30 years. To find your target, multiply the yearly
        income you want from savings by 25. It is a starting point for planning, not a guarantee, and this guide shows where it
        works and where it breaks down.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The 4% rule comes from US historical data and a 30-year retirement. Your own situation may need a lower or more flexible rate.</li>
        <li>Nest egg needed = yearly spending paid from savings × 25 at 4%, or × 28.6 at 3.5%.</li>
        <li>Each $1 million supports roughly $2,500 to $3,333 a month at withdrawal rates of 3% to 4%, before tax.</li>
        <li>The biggest risks are bad returns early in retirement, a retirement longer than 30 years, fees and taxes.</li>
        <li>Flexible withdrawals, such as guardrails, can make a plan more resilient than a fixed rule.</li>
      </ul>

      <h2>What is the 4% rule?</h2>
      <p>
        The 4% rule is a rule of thumb for how much you can spend from a portfolio without running out of money. In year one you
        withdraw 4% of the starting balance. In every later year you withdraw the same amount plus inflation, no matter what the
        market did. A $1,000,000 portfolio therefore pays $40,000 in year one.
      </p>
      <p>
        The idea comes from financial planner William Bengen, who published research in the <em>Journal of Financial Planning</em> in
        1994. He tested every 30-year retirement start date in US history back to 1926 using a mix of stocks and bonds. His
        worst-case retiree began in 1966, just before a long period of high inflation and weak returns, and could still withdraw a
        little over 4% in the first year. The &quot;4% rule&quot; is that figure, rounded.
      </p>
      <p>
        A 1998 paper by three Trinity University professors (Cooley, Hubbard and Walz), usually called the Trinity study, reached a
        similar conclusion for portfolios holding roughly 50% to 75% stocks. Both studies assume US markets, a fixed 30-year horizon
        and a diversified portfolio.
      </p>

      <h2>How much do you need to retire with the 4% rule?</h2>
      <p>
        Divide your yearly spending by 0.04, which is the same as multiplying by 25. Use the amount your savings must cover, not your
        total spending. Social Security, a pension or rental income can pay part of it. The table also shows 3.5% and 3%, which more
        cautious planners prefer.
      </p>
      <table>
        <thead>
          <tr>
            <th>Yearly spending from savings</th>
            <th>Nest egg at 4% (×25)</th>
            <th>Nest egg at 3.5% (×28.6)</th>
            <th>Nest egg at 3% (×33.3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$30,000</td>
            <td>$750,000</td>
            <td>$857,143</td>
            <td>$1,000,000</td>
          </tr>
          <tr>
            <td>$40,000</td>
            <td>$1,000,000</td>
            <td>$1,142,857</td>
            <td>$1,333,333</td>
          </tr>
          <tr>
            <td>$60,000</td>
            <td>$1,500,000</td>
            <td>$1,714,286</td>
            <td>$2,000,000</td>
          </tr>
          <tr>
            <td>$80,000</td>
            <td>$2,000,000</td>
            <td>$2,285,714</td>
            <td>$2,666,667</td>
          </tr>
        </tbody>
      </table>
      <p>
        Social Security matters here. If you want $40,000 a year and expect $20,000 from Social Security, your portfolio only has to
        cover $20,000, so the 4% target is $500,000 instead of $1,000,000. You can estimate your benefit on the{" "}
        <a href="https://www.ssa.gov/benefits/retirement/" target="_blank" rel="noopener noreferrer">
          Social Security Administration website
        </a>
        .
      </p>

      <h2>How much monthly income will my savings produce?</h2>
      <p>
        Multiply the portfolio by the withdrawal rate and divide by 12. These figures are before tax and ignore Social Security and
        other income.
      </p>
      <table>
        <thead>
          <tr>
            <th>Portfolio</th>
            <th>At 3%</th>
            <th>At 3.5%</th>
            <th>At 4%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$500,000</td>
            <td>$1,250 a month</td>
            <td>$1,458 a month</td>
            <td>$1,667 a month</td>
          </tr>
          <tr>
            <td>$1,000,000</td>
            <td>$2,500 a month</td>
            <td>$2,917 a month</td>
            <td>$3,333 a month</td>
          </tr>
          <tr>
            <td>$1,500,000</td>
            <td>$3,750 a month</td>
            <td>$4,375 a month</td>
            <td>$5,000 a month</td>
          </tr>
        </tbody>
      </table>
      <p>
        To see what your own savings could grow to before you retire, use the{" "}
        <Link href="/calculators/retirement">retirement calculator</Link>. It applies a withdrawal rate to your projected nest egg
        and shows the result in today&apos;s money.
      </p>

      <h2>Why does inflation matter for withdrawals?</h2>
      <p>
        The rule raises your withdrawal each year, so the dollar amount grows even if your portfolio does not. At 3% inflation, a
        $40,000 first-year withdrawal becomes about $53,757 in year 10, $72,244 in year 20 and $97,090 in year 30. The{" "}
        <Link href="/calculators/inflation">inflation calculator</Link> shows how fast prices can erode a fixed income.
      </p>

      <h2>What are the limits of the 4% rule?</h2>
      <h3>Sequence-of-returns risk</h3>
      <p>
        Poor returns early in retirement hurt more than poor returns later, because you are withdrawing from a shrinking balance.
        The example below uses a $1,000,000 portfolio and a $40,000 first withdrawal that rises 3% a year. Both retirees get the same
        ten annual returns, in opposite order. The average return is identical, yet the outcomes differ sharply. This is a
        hypothetical illustration, not a forecast.
      </p>
      <table>
        <thead>
          <tr>
            <th>Balance after year</th>
            <th>Good returns first</th>
            <th>Bad returns first</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$1,094,400</td>
            <td>$768,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$1,250,014</td>
            <td>$581,100</td>
          </tr>
          <tr>
            <td>5</td>
            <td>$1,333,256</td>
            <td>$556,487</td>
          </tr>
          <tr>
            <td>10</td>
            <td>$842,097</td>
            <td>$555,610</td>
          </tr>
        </tbody>
      </table>
      <p>
        The returns were +14%, +10%, +12%, +8%, +6%, +5%, +7%, −5%, −10% and −20%, and the reverse. After ten years the second
        retiree has about $286,000 less, and the withdrawals are still rising.
      </p>

      <h3>Longer retirements</h3>
      <p>
        The studies used 30 years. If you retire at 50 or 55, you may need money for 40 or 45 years, and a lower starting rate is
        more prudent. The reverse also holds: a shorter horizon or a late start can justify a higher rate.
      </p>

      <h3>Fees and taxes</h3>
      <p>
        The historical results ignored investment costs and taxes. A 1% annual fee on a $1,000,000 portfolio costs $10,000 a year,
        a quarter of a $40,000 withdrawal. Withdrawals from traditional 401(k) or IRA accounts are generally taxed as income. If
        15% of a $40,000 withdrawal went to tax, you would keep $34,000. Treat the 4% as a pre-tax figure and plan for the tax bill
        separately. Fees compound over time, as the <Link href="/calculators/compound-interest">compound interest calculator</Link>{" "}
        makes clear.
      </p>

      <h2>What are the alternatives to a fixed 4% withdrawal?</h2>
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>How it works</th>
            <th>Trade-off</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixed 4% rule</td>
            <td>Withdraw 4% in year one, then adjust for inflation.</td>
            <td>Simple and predictable, but ignores market conditions.</td>
          </tr>
          <tr>
            <td>Fixed percentage</td>
            <td>Withdraw a set percentage of the current balance every year.</td>
            <td>The portfolio never runs out, but income moves with the market.</td>
          </tr>
          <tr>
            <td>Guardrails</td>
            <td>Start at a chosen rate. Cut spending if the rate climbs above an upper limit; raise it if the rate falls below a lower limit.</td>
            <td>Higher starting income is possible, but you must accept occasional cuts.</td>
          </tr>
          <tr>
            <td>Required minimum distributions</td>
            <td>Withdraw a percentage based on age, following IRS tables.</td>
            <td>Adapts to a shrinking horizon, but starts low and rises with age.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Flexibility is the cheapest protection: skipping an inflation raise after a bad year can matter more than a fraction of a
        percentage point in the starting rate. The IRS publishes the{" "}
        <a
          href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions"
          target="_blank"
          rel="noopener noreferrer"
        >
          required minimum distribution rules
        </a>{" "}
        for US retirement accounts.
      </p>

      <h2>How should I use the 4% rule in my own plan?</h2>
      <ol>
        <li>Estimate your yearly spending in retirement and subtract guaranteed income such as Social Security or a pension.</li>
        <li>Multiply the gap by 25 for a baseline target, and by about 28.6 for a more cautious one.</li>
        <li>Compare the target with your projection. Use the <Link href="/calculators/savings-goal">savings goal calculator</Link> to see what monthly amount closes the gap, or the <Link href="/calculators/sip-return">SIP calculator</Link> to model regular investing.</li>
        <li>Choose a withdrawal approach you can live with, and decide in advance what you would cut in a bad year.</li>
        <li>Review the plan every year or two and update the numbers.</li>
      </ol>
      <p>
        If you are still building your savings, our guide to{" "}
        <Link href="/guides/retirement-savings-by-age">how much you should have saved by age</Link> shows common benchmarks and what
        it takes to catch up. The <Link href="/guides/rule-of-72">Rule of 72</Link> is a quick way to see how long money takes to
        double along the way.
      </p>

      <h2>Common mistakes with the 4% rule</h2>
      <ul>
        <li>Treating 4% as a guarantee, rather than a historical result.</li>
        <li>Using total spending instead of the amount your savings must cover.</li>
        <li>Forgetting taxes, fees and healthcare costs.</li>
        <li>Planning for 30 years when retirement could last 40 or more.</li>
        <li>Ignoring inflation when estimating how far a target will go.</li>
        <li>Having no plan for spending cuts if markets fall early.</li>
      </ul>

      <h2>What about the UK and Europe?</h2>
      <p>
        The 4% rule was built on US data. Research that tested other countries&apos; market histories has found lower sustainable
        rates in several of them, so many UK and European planners use a more cautious figure.
      </p>
      <p>
        In the UK, the State Pension changes the sum. The full new State Pension was £230.25 a week in 2025/26, about £11,973 a
        year, and it rises each year; check the{" "}
        <a href="https://www.gov.uk/new-state-pension" target="_blank" rel="noopener noreferrer">
          GOV.UK State Pension page
        </a>{" "}
        for the current amount. If you want £30,000 a year, the portfolio only needs to cover about £18,027. At 4% that is
        £450,675, and at 3.5% about £515,057.
      </p>
      <p>
        UK savers usually draw income through pension drawdown, where you take money from an invested pension pot as you need it.
        Up to 25% of the pot can generally be taken tax free, and the rest is taxed as income. Drawdown carries the same
        market-risk questions as the 4% rule. The independent{" "}
        <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/taking-your-pension" target="_blank" rel="noopener noreferrer">
          MoneyHelper service
        </a>{" "}
        explains the options. In much of continental Europe, state pensions replace a larger share of earnings, so the personal
        portfolio often has a smaller job to do. Rules differ widely by country.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Is the 4% rule still safe?</h3>
      <p>
        It has never been guaranteed. It worked for every 30-year US retirement in the historical data, but future markets can
        differ. Using 3.5% or a flexible method adds a margin of safety.
      </p>
      <p>
        This guide is general information, not personal financial advice. Returns are never guaranteed, and a licensed adviser can
        review your own situation.
      </p>
    </GuideLayout>
  );
}
