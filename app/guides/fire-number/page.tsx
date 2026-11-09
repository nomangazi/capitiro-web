import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "fire-number";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Your FIRE number is the investment pot that could cover your yearly spending without a paycheck. A common guideline is to
        multiply your annual spending by 25, which is the same as taking 4% of the pot each year. It is a planning target built on
        assumptions, not a promise, and the sections below show how to calculate it and how long it can take to reach.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>FIRE number = annual spending ÷ withdrawal rate. At 4% that is spending × 25; at 3.5% it is about × 28.6; at 3.25% about × 30.8.</li>
        <li>It is built on what you spend, not what you earn. Cutting $10,000 of yearly spending lowers the target by $250,000 at 4%.</li>
        <li>In the hypothetical example below, $50,000 of spending gives a target of $1,250,000 at 4%, or $1,428,571 at 3.5%.</li>
        <li>Saving $2,000 a month from $100,000 at a constant 7% reaches $1,250,000 in 19 years in nominal dollars, but 26 years once inflation is taken out.</li>
        <li>The 4% rule comes from US data. If you live in the UK or the EU, treat it as a starting point and test a lower rate.</li>
      </ul>

      <h2>What is a FIRE number?</h2>
      <p>
        FIRE stands for Financial Independence, Retire Early. The idea is to build a portfolio large enough that withdrawals cover
        your costs, so working becomes optional. The FIRE number is the size of that portfolio.
      </p>
      <p>
        The formula is short: <strong>FIRE number = annual spending ÷ withdrawal rate</strong>. The withdrawal rate is the share of
        the pot you take out in the first year, and the 4% rule is the best-known choice. Our{" "}
        <Link href="/guides/4-percent-rule">4% rule guide</Link> explains where it comes from and where it falls short. The
        examples here use dollars, but the maths is identical in pounds or euros.
      </p>

      <h2>How much is your FIRE number at different spending levels?</h2>
      <p>
        Start with your yearly spending, not your salary. These are <strong>hypothetical</strong> spending levels, shown at three
        withdrawal rates. A lower rate is more cautious and needs a bigger pot.
      </p>
      <table>
        <thead>
          <tr>
            <th>Annual spending</th>
            <th>At 4% (× 25)</th>
            <th>At 3.5% (÷ 0.035)</th>
            <th>At 3.25% (÷ 0.0325)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$30,000</td><td>$750,000</td><td>$857,143</td><td>$923,077</td></tr>
          <tr><td>$40,000</td><td>$1,000,000</td><td>$1,142,857</td><td>$1,230,769</td></tr>
          <tr><td>$50,000</td><td>$1,250,000</td><td>$1,428,571</td><td>$1,538,462</td></tr>
          <tr><td>$60,000</td><td>$1,500,000</td><td>$1,714,286</td><td>$1,846,154</td></tr>
          <tr><td>$80,000</td><td>$2,000,000</td><td>$2,285,714</td><td>$2,461,538</td></tr>
          <tr><td>$100,000</td><td>$2,500,000</td><td>$2,857,143</td><td>$3,076,923</td></tr>
        </tbody>
      </table>
      <p>
        Dropping from 4% to 3.5% raises every target by about 14%, and dropping to 3.25% by about 23%. Which rate to use is a
        judgment about how cautious you want to be, not a fact.
      </p>

      <h2>What are Lean, Regular, Fat and Coast FIRE?</h2>
      <p>
        These are informal labels, not official categories, and people draw the lines differently. The dollar amounts are
        illustrative only.
      </p>
      <table>
        <thead>
          <tr>
            <th>Style</th>
            <th>The idea</th>
            <th>Illustration at 4%</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Lean FIRE</td><td>A frugal lifestyle with a small yearly budget</td><td>$30,000 a year needs $750,000</td></tr>
          <tr><td>Regular FIRE</td><td>A comfortable, middle-of-the-road budget</td><td>$60,000 a year needs $1,500,000</td></tr>
          <tr><td>Fat FIRE</td><td>A generous budget with a lot of room</td><td>$100,000 a year needs $2,500,000</td></tr>
          <tr><td>Coast FIRE</td><td>Enough invested today that growth alone reaches the target by a later date; you only cover current costs</td><td>See the example below</td></tr>
        </tbody>
      </table>
      <p>
        Coast FIRE is the odd one out because it is a checkpoint, not a finish line. You stop adding to the pot and let it grow,
        while your income covers your living costs until you stop working.
      </p>

      <h2>How long does it take to reach your FIRE number?</h2>
      <p>
        Take a hypothetical saver who spends $50,000 a year, so the 4% target is $1,250,000. They have $100,000 invested and add
        $2,000 at the end of every month. We assume a constant 7% annual return compounded monthly, no fees or taxes, and flat
        contributions. Real returns vary a lot from year to year and can be negative, so treat the timeline as a rough guide.
      </p>
      <table>
        <thead>
          <tr>
            <th>Monthly saving</th>
            <th>Years to reach $1,250,000 (nominal)</th>
            <th>Balance at that point</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$1,500</td><td>21</td><td>$1,289,536</td></tr>
          <tr><td>$2,000</td><td>19</td><td>$1,325,147</td></tr>
          <tr><td>$2,500</td><td>17</td><td>$1,302,889</td></tr>
        </tbody>
      </table>
      <p>
        At $2,000 a month, the 19 years include $556,000 of your own money (the $100,000 start plus $456,000 of deposits). You can
        try your own figures in the <Link href="/calculators/retirement">retirement calculator</Link>.
      </p>

      <h2>What does inflation do to the timeline?</h2>
      <p>
        The table above is in nominal dollars, and the result is flattering. If spending rises with inflation, the target rises
        too. At an assumed 2.5% inflation, $50,000 of spending today becomes about $72,415 after 15 years, and the 4% target
        grows with it from $1,250,000 to about $1,810,373.
      </p>
      <p>
        The fairer test is to ask when the pot is worth $1,250,000 in today&apos;s money. With the same inputs and 2.5% inflation, that
        takes 26 years, not 19. At that point the nominal balance is $2,375,980, which equals $1,250,323 in today&apos;s money. The
        saver is also assumed to keep contributing a flat $2,000, so raising contributions with pay would shorten this. Our guide
        to <Link href="/guides/real-vs-nominal-returns">real vs nominal returns</Link> covers the difference in more detail.
      </p>

      <h2>What does Coast FIRE look like in numbers?</h2>
      <p>
        Using the same 7% constant return, $1 invested today grows to about $5.73 in 25 years. So to reach $1,250,000 in 25 years
        with no more contributions, you would need about $218,325 invested today. This is in nominal dollars and assumes the
        return holds; at a lower return or after inflation, the amount needed today is much higher.
      </p>

      <h2>Does the FIRE number work in the UK and the EU?</h2>
      <p>
        The 4% rule is derived from US market history, so it may not map neatly onto UK or euro-area investments. A cautious reader
        outside the US might test a lower rate such as 3.25% or 3.5%, and the table above shows what that costs. Note
        too that the rules for pension access, including when you can draw from a pension and how withdrawals are taxed, differ
        by country and change over time. Check your national pension provider or government guidance before you plan around an
        early retirement date. Taxes, healthcare costs and the state pension you may get later are not part of the simple formula.
      </p>

      <h2>How should you decide?</h2>
      <ol>
        <li><strong>Track real spending for a few months.</strong> Your target is only as good as the yearly figure you start from.</li>
        <li><strong>Choose a withdrawal rate you can defend.</strong> 4% is the common default; a longer retirement is a reason to test 3.5% or lower.</li>
        <li><strong>Pick a nominal return you could live with.</strong> A cautious assumption beats an optimistic one. Rerun the numbers at a lower rate.</li>
        <li><strong>Work in today&apos;s money.</strong> Use a real return or adjust the target for inflation, as in the example above.</li>
        <li><strong>Check your pace against your age.</strong> The <Link href="/guides/retirement-savings-by-age">retirement savings by age</Link> guide shows common benchmarks.</li>
        <li><strong>Lower the target as well as raising savings.</strong> Spending less cuts the target and adds to savings at the same time.</li>
      </ol>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Basing the number on your salary.</strong> The target depends on spending, not income.</li>
        <li><strong>Forgetting inflation.</strong> A nominal target quietly shrinks in real terms every year.</li>
        <li><strong>Assuming a steady return.</strong> Constant-rate projections hide bad early years, which matter most when you start withdrawing.</li>
        <li><strong>Ignoring taxes and healthcare.</strong> Withdrawals may be taxed, and costs before state benefits start can be large.</li>
        <li><strong>Treating 4% as a law.</strong> It is a guideline from US history that is usually discussed for retirements of around 30 years; a longer one may call for a lower rate.</li>
        <li><strong>Counting only your home equity or a single holding.</strong> A diversified, accessible pot is what funds withdrawals.</li>
      </ul>
      <p>
        This guide is general education, not personal financial advice. Investments can fall as well as rise, and past performance
        does not predict future returns. All spending levels, returns and inflation rates above are hypothetical.
      </p>
    </GuideLayout>
  );
}
