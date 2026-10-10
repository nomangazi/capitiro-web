import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "retirement-savings-by-age";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A common rule of thumb says you should have about 1 times your salary saved by 30, 3 times by 40, 6 times by 50, 8 times by 60
        and 10 times by 67. Those are guidelines, not requirements, and the right number for you depends on your spending, your
        other income and when you plan to stop working. This guide shows the benchmarks, then our own projections of what regular
        saving can add up to from different starting ages.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Salary multiples are a quick check on progress. They are not a plan.</li>
        <li>Starting early matters more than saving a lot later. $500 a month from age 25 reaches about $1.14 million by 67 in our projection; from 35 it reaches about $579,000.</li>
        <li>Inflation shrinks long-term targets. $1 million in 42 years is worth about $354,000 in today&apos;s money at 2.5% inflation.</li>
        <li>If you are behind, the main levers are saving more, retiring a little later and trimming costs.</li>
      </ul>

      <h2>How much should you have saved for retirement by age?</h2>
      <p>
        The best-known benchmark comes from Fidelity Investments, a US asset manager. Its published rule of thumb sets these targets
        as multiples of your current salary, and the figures assume you start saving early and retire around 67. Check{" "}
        <a
          href="https://www.fidelity.com/viewpoints/retirement/how-much-do-i-need-to-retire"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fidelity&apos;s own page
        </a>{" "}
        for its current assumptions, since they are updated from time to time. Other providers publish different numbers.
      </p>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Multiple of salary</th>
            <th>$50,000 salary</th>
            <th>$75,000 salary</th>
            <th>$100,000 salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30</td>
            <td>1×</td>
            <td>$50,000</td>
            <td>$75,000</td>
            <td>$100,000</td>
          </tr>
          <tr>
            <td>40</td>
            <td>3×</td>
            <td>$150,000</td>
            <td>$225,000</td>
            <td>$300,000</td>
          </tr>
          <tr>
            <td>50</td>
            <td>6×</td>
            <td>$300,000</td>
            <td>$450,000</td>
            <td>$600,000</td>
          </tr>
          <tr>
            <td>60</td>
            <td>8×</td>
            <td>$400,000</td>
            <td>$600,000</td>
            <td>$800,000</td>
          </tr>
          <tr>
            <td>67</td>
            <td>10×</td>
            <td>$500,000</td>
            <td>$750,000</td>
            <td>$1,000,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Count the money in retirement accounts such as a 401(k) or IRA, plus other savings you have set aside for retirement. Do not
        count your home equity or the emergency fund.
      </p>

      <h2>Are these benchmarks right for everyone?</h2>
      <p>
        No. A multiple of salary is a shortcut for a bigger question: how much will you spend, and how much will Social Security or
        a pension cover? Someone with a paid-off home, low spending and a good pension can need far less. Someone planning to retire
        at 55, or with high healthcare costs, may need more. The multiples also assume a steady career with rising pay, which many
        people do not have.
      </p>
      <p>
        A useful cross-check is the 25× rule from our guide to <Link href="/guides/4-percent-rule">the 4% rule</Link>: yearly
        spending paid from savings multiplied by 25. A 10× salary target and a spending-based target can differ a lot, so compute
        both.
      </p>

      <h2>How much do you need to save each month to reach a target by 67?</h2>
      <p>
        The table below shows the level monthly amount that reaches each target by age 67 starting from zero savings. It assumes a
        6% annual return compounded monthly, deposits at the end of each month, and no fees, taxes or inflation adjustment. The
        figures come from Capitiro&apos;s <Link href="/calculators/savings-goal">savings goal calculator</Link>. Returns are never
        guaranteed, and 6% is an assumption, not a forecast.
      </p>
      <table>
        <thead>
          <tr>
            <th>Start age</th>
            <th>Years to 67</th>
            <th>To reach $500,000</th>
            <th>To reach $1,000,000</th>
            <th>To reach $1,500,000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25</td>
            <td>42</td>
            <td>$220 a month</td>
            <td>$440 a month</td>
            <td>$661 a month</td>
          </tr>
          <tr>
            <td>35</td>
            <td>32</td>
            <td>$432 a month</td>
            <td>$864 a month</td>
            <td>$1,296 a month</td>
          </tr>
          <tr>
            <td>45</td>
            <td>22</td>
            <td>$915 a month</td>
            <td>$1,831 a month</td>
            <td>$2,746 a month</td>
          </tr>
          <tr>
            <td>55</td>
            <td>12</td>
            <td>$2,379 a month</td>
            <td>$4,759 a month</td>
            <td>$7,138 a month</td>
          </tr>
        </tbody>
      </table>
      <p>
        Reaching $1,000,000 costs $440 a month from 25 but $4,759 a month from 55. The 25-year-old contributes about $222,000 in
        total, and growth supplies the rest. The 55-year-old contributes about $685,000.
      </p>

      <h2>What will $300, $500 or $1,000 a month grow to?</h2>
      <p>
        This table works the other way around: a fixed monthly amount, invested at 6% until age 67, starting with no savings. It was
        calculated with the <Link href="/calculators/retirement">retirement calculator</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Monthly saving</th>
            <th>From age 25</th>
            <th>From age 35</th>
            <th>From age 45</th>
            <th>From age 55</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$300</td>
            <td>$681,048</td>
            <td>$347,304</td>
            <td>$163,868</td>
            <td>$63,045</td>
          </tr>
          <tr>
            <td>$500</td>
            <td>$1,135,080</td>
            <td>$578,840</td>
            <td>$273,113</td>
            <td>$105,075</td>
          </tr>
          <tr>
            <td>$1,000</td>
            <td>$2,270,160</td>
            <td>$1,157,681</td>
            <td>$546,226</td>
            <td>$210,150</td>
          </tr>
        </tbody>
      </table>
      <p>
        Waiting from 25 to 35 to start saving $500 a month cuts the result from $1,135,080 to $578,840, a loss of $556,240. You would
        have paid in only $60,000 less. That is compound interest at work, which you can explore with the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>What are those balances worth in today&apos;s money?</h2>
      <p>
        Prices rise, so a large number decades away buys less than it appears to. Using 2.5% annual inflation, here are the same
        balances in today&apos;s dollars.
      </p>
      <table>
        <thead>
          <tr>
            <th>Monthly saving</th>
            <th>From age 25</th>
            <th>From age 35</th>
            <th>From age 45</th>
            <th>From age 55</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$300</td>
            <td>$241,421</td>
            <td>$157,596</td>
            <td>$95,185</td>
            <td>$46,878</td>
          </tr>
          <tr>
            <td>$500</td>
            <td>$402,369</td>
            <td>$262,661</td>
            <td>$158,642</td>
            <td>$78,129</td>
          </tr>
          <tr>
            <td>$1,000</td>
            <td>$804,737</td>
            <td>$525,322</td>
            <td>$317,283</td>
            <td>$156,258</td>
          </tr>
        </tbody>
      </table>
      <p>
        For example, $500 a month from 25 gives $1,135,080 in future dollars, which is about $402,369 of today&apos;s buying power.
        At a 4% withdrawal that nest egg would pay roughly $3,784 a month in future dollars (about $1,341 in today&apos;s money), before tax. The{" "}
        <Link href="/calculators/inflation">inflation calculator</Link> lets you test other rates. Keep this in mind when you see a
        round target like &quot;$1 million&quot;.
      </p>

      <h2>How do you catch up if you are behind?</h2>
      <p>
        Being behind is common, and the options are practical. Here are two examples, both targeting $1,000,000 and using the same 6%
        assumption.
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Retire at 67</th>
            <th>Retire at 70</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Age 45 with $50,000 saved</td>
            <td>$1,489 a month</td>
            <td>$1,121 a month</td>
          </tr>
          <tr>
            <td>Age 50 with $100,000 saved</td>
            <td>$2,048 a month</td>
            <td>$1,448 a month</td>
          </tr>
        </tbody>
      </table>
      <p>
        Working three more years cuts the required monthly saving by roughly 25% to 29% in these cases. Savings keep
        growing, and you have fewer years to fund.
      </p>
      <p>
        A bigger monthly amount helps too. Take a 45-year-old with $100,000 already saved. Contributing $500 a month leads to
        $646,226 at 67, $700 a month to $755,471 and $1,000 a month to $919,339. Each extra $200 a month adds about $109,000.
      </p>
      <ol>
        <li><strong>Capture the full employer match.</strong> It is part of your pay.</li>
        <li><strong>Raise contributions with each pay rise.</strong> Moving 1% of salary into savings every year hurts little.</li>
        <li><strong>Use catch-up contributions.</strong> In the US, workers aged 50 and over can add extra to a 401(k) and IRA. The IRS publishes the{" "}
          <a
            href="https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions"
            target="_blank"
            rel="noopener noreferrer"
          >
            current limits
          </a>
          .</li>
        <li><strong>Delay Social Security if you can.</strong> Claiming later raises the monthly benefit.</li>
        <li><strong>Lower the target.</strong> Reducing planned spending by $500 a month cuts the 4% rule target by $150,000.</li>
      </ol>
      <p>
        Regular monthly investing can be modelled with the <Link href="/calculators/sip-return">SIP calculator</Link>, and the{" "}
        <Link href="/guides/rule-of-72">Rule of 72</Link> gives a quick feel for how long a balance takes to double.
      </p>

      <h2>How do you decide what to do next?</h2>
      <ol>
        <li>Add up what you have saved for retirement and compare it with the benchmark for your age.</li>
        <li>Estimate retirement spending and subtract guaranteed income to find your own target.</li>
        <li>Use the savings goal calculator to find the monthly amount needed.</li>
        <li>Automate that amount, then revisit it each year.</li>
      </ol>

      <h2>Common mistakes when saving for retirement</h2>
      <ul>
        <li>Waiting for a &quot;better time&quot; to start, when the first decade of saving does the most work.</li>
        <li>Missing the employer match.</li>
        <li>Ignoring inflation when reading a future balance.</li>
        <li>Cashing out retirement accounts when changing jobs.</li>
        <li>Holding everything in cash for decades, where growth may not keep up with prices.</li>
        <li>Copying a benchmark without checking your own spending.</li>
      </ul>

      <h2>What about the UK and Europe?</h2>
      <p>
        Salary multiples are US-style guidance, but the logic transfers. In the UK, a workplace pension is the main route. Under
        auto-enrolment, eligible employees aged 22 up to State Pension age who earn over £10,000 are enrolled automatically, with
        minimum total contributions of 8% of qualifying earnings, of which at least 3% comes from the employer. See{" "}
        <a href="https://www.gov.uk/workplace-pensions" target="_blank" rel="noopener noreferrer">
          GOV.UK workplace pensions
        </a>
        . A UK rule of thumb sometimes called the &quot;half your age&quot; rule suggests saving a percentage of pay equal to half
        your age when you start, so 15% if you begin at 30.
      </p>
      <p>
        Beyond the workplace scheme, many people add to a SIPP (self-invested personal pension), which gets tax relief on
        contributions, or to an ISA, which allows up to £20,000 a year of tax-free saving and investing. Details on the{" "}
        <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer">
          ISA rules are on GOV.UK
        </a>
        . Pension money generally cannot be accessed until 55, rising to 57 from April 2028, while ISA money can be withdrawn at any
        age. The State Pension age is rising to 67 between 2026 and 2028. Across the euro area, state pensions often replace more
        of earnings than in the US, so the personal savings gap can be smaller; check your national pension authority&apos;s
        estimate.
      </p>

      <p>
        This guide is general information, not personal financial advice. Projections use simple assumptions, and real returns,
        taxes and fees will differ. For a withdrawal plan once you reach retirement, read{" "}
        <Link href="/guides/4-percent-rule">the 4% rule explained</Link>.
      </p>
    </GuideLayout>
  );
}
