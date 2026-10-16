import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "high-yield-savings-vs-cds";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Neither is better for everyone. A <strong>high-yield savings account (HYSA)</strong> pays a variable rate and lets you take
        your money out whenever you like. A <strong>certificate of deposit (CD)</strong> locks in a fixed rate for a set term, and
        charges you if you leave early. The right choice depends on when you need the money and what you expect rates to do. All
        rates below are examples, not current offers.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>On $10,000, an example 4.5% CD earns $2,462 over 5 years, compared with $2,167 for an HYSA that stays at 4.0%, a gap of $295.</li>
        <li>If the HYSA rate falls to 3.0% after year 1, the 5-year gap grows to $757. If it rises to 5.0%, the HYSA comes out $179 ahead.</li>
        <li>An early withdrawal penalty of 90 days of interest (a common example, which varies by bank) costs about $111 on a $10,000 CD at 4.5%.</li>
        <li>Money you might need at short notice, such as an emergency fund, usually belongs in an HYSA. Money with a known date can suit a CD.</li>
        <li>A CD ladder splits the money across several terms so part of it matures every year.</li>
      </ul>

      <h2>What is the difference between a high-yield savings account and a CD?</h2>
      <p>
        Both are deposit accounts at banks and credit unions, and both are normally insured up to a limit. The differences are in
        how the rate works and how you access the money.
      </p>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>High-yield savings</th>
            <th>CD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Interest rate</td>
            <td>Variable. The bank can change it at any time.</td>
            <td>Fixed for the whole term.</td>
          </tr>
          <tr>
            <td>Access to your money</td>
            <td>Usually available at any time.</td>
            <td>Locked until maturity. Early withdrawal typically costs interest.</td>
          </tr>
          <tr>
            <td>Adding money</td>
            <td>Usually add whenever you want.</td>
            <td>Usually a single deposit at the start.</td>
          </tr>
          <tr>
            <td>Typical term</td>
            <td>None</td>
            <td>Commonly a few months to 5 years</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Emergency funds and flexible goals</td>
            <td>Money with a known date, and locking in a rate</td>
          </tr>
          <tr>
            <td>Main risk</td>
            <td>The rate falls</td>
            <td>Penalty if you need the money, and missing out if rates rise</td>
          </tr>
        </tbody>
      </table>

      <h2>Which earns more on $10,000?</h2>
      <p>
        Take $10,000 with no further deposits. We use an example HYSA at 4.0% (variable, assumed to stay put) and an example CD at 4.5%
        fixed for the matching term. Both rates are treated as APY, with interest compounding yearly, so the rate you enter equals
        the yield. The numbers come from the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link> with compounding set to yearly.
      </p>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>HYSA at 4.0%</th>
            <th>CD at 4.5%</th>
            <th>CD advantage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 year</td>
            <td>$10,400 (interest $400)</td>
            <td>$10,450 (interest $450)</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>3 years</td>
            <td>$11,249 (interest $1,249)</td>
            <td>$11,412 (interest $1,412)</td>
            <td>$163</td>
          </tr>
          <tr>
            <td>5 years</td>
            <td>$12,167 (interest $2,167)</td>
            <td>$12,462 (interest $2,462)</td>
            <td>$295</td>
          </tr>
        </tbody>
      </table>
      <p>
        The CD wins here simply because its example rate is half a point higher. In practice, the gap between the two moves around, and
        sometimes the HYSA pays more. Compare the real offers, not the product type.
      </p>

      <h2>What happens if the savings rate changes?</h2>
      <p>
        This is the main reason to consider a CD: it fixes the rate when you open it. The table adds two scenarios in which the HYSA
        rate moves after the first year, starting from the same $10,000.
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>After 3 years</th>
            <th>After 5 years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HYSA stays at 4.0%</td>
            <td>$11,249</td>
            <td>$12,167</td>
          </tr>
          <tr>
            <td>HYSA 4.0% in year 1, then falls to 3.0%</td>
            <td>$11,033</td>
            <td>$11,705</td>
          </tr>
          <tr>
            <td>HYSA 4.0% in year 1, then rises to 5.0%</td>
            <td>$11,466</td>
            <td>$12,641</td>
          </tr>
          <tr>
            <td>CD fixed at 4.5%</td>
            <td>$11,412</td>
            <td>$12,462</td>
          </tr>
        </tbody>
      </table>
      <p>
        If rates drop, the CD ends $757 ahead after five years. If they rise, the HYSA ends $179 ahead. With a 4.0% first year, the
        HYSA needs to average about 4.63% for years 2 to 5 to match the 4.5% CD over five years. At 4.5% it still trails by $60, and at
        4.75% it leads by $59. Nobody can predict rates reliably, so the decision is partly about how much certainty you want.
      </p>

      <h2>What is the early withdrawal penalty on a CD?</h2>
      <p>
        Banks charge a penalty if you cash out a CD before maturity. Penalties are often quoted as a number of days of interest, and 90
        days is a common example, with longer terms often carrying larger penalties. This varies by bank, so read the disclosure before
        you open one. Here is the effect on a $10,000 CD at 4.5% with a 90-day penalty of about $111 (calculated as $10,000 × 4.5% × 90 ÷ 365).
      </p>
      <table>
        <thead>
          <tr>
            <th>If you cash out after</th>
            <th>Interest earned</th>
            <th>Penalty</th>
            <th>Net interest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 days</td>
            <td>$36</td>
            <td>$111</td>
            <td>-$75</td>
          </tr>
          <tr>
            <td>6 months</td>
            <td>$223</td>
            <td>$111</td>
            <td>$112</td>
          </tr>
          <tr>
            <td>1 year</td>
            <td>$450</td>
            <td>$111</td>
            <td>$339</td>
          </tr>
        </tbody>
      </table>
      <p>
        After 30 days the penalty exceeds the interest earned, and some banks then take the difference from your principal. After a
        full year the CD would still have paid $339, but the 4.0% HYSA would have paid $400 with no penalty. Some banks offer
        no-penalty CDs, usually at lower rates.
      </p>

      <h2>What is a CD ladder?</h2>
      <p>
        A ladder spreads money across CDs of different lengths so that one matures each year. You get higher long-term rates on
        part of the money, plus regular access to cash. Here is an example with $10,000 split into five $2,000 rungs at example rates.
      </p>
      <table>
        <thead>
          <tr>
            <th>Rung</th>
            <th>Amount</th>
            <th>Example APY</th>
            <th>Value at maturity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-year CD</td>
            <td>$2,000</td>
            <td>4.0%</td>
            <td>$2,080</td>
          </tr>
          <tr>
            <td>2-year CD</td>
            <td>$2,000</td>
            <td>4.1%</td>
            <td>$2,167</td>
          </tr>
          <tr>
            <td>3-year CD</td>
            <td>$2,000</td>
            <td>4.2%</td>
            <td>$2,263</td>
          </tr>
          <tr>
            <td>4-year CD</td>
            <td>$2,000</td>
            <td>4.3%</td>
            <td>$2,367</td>
          </tr>
          <tr>
            <td>5-year CD</td>
            <td>$2,000</td>
            <td>4.5%</td>
            <td>$2,492</td>
          </tr>
        </tbody>
      </table>
      <p>
        In year one the ladder earns $422, a blended 4.22%. That sits between $400 from putting everything in the 1-year CD and $450
        from the 5-year. When the 1-year rung matures, you can spend it or reinvest it in a new 5-year CD, and repeat each year until
        every rung is a 5-year CD maturing annually. The cost is more admin and, when rates are falling, reinvesting at lower rates.
      </p>

      <h2>Are both options safe?</h2>
      <p>
        In the US, deposits at an FDIC-insured bank are protected up to $250,000 per depositor, per insured bank, per ownership
        category. See the{" "}
        <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer">FDIC website</a> for details. Credit unions have equivalent
        coverage through the NCUA. Interest on both is generally taxable as ordinary income in the US. Within the insurance limit, the
        main risks are not losing the deposit but an HYSA rate that falls, or a CD that locks you in when rates rise.
      </p>

      <h2>How do you decide?</h2>
      <ol>
        <li><strong>Might you need it within a year?</strong> If so, use an HYSA, or a short CD that matures before you need the cash.</li>
        <li><strong>Do you have a known date?</strong> A tuition bill or a house deposit in 3 years suits a CD maturing near that date.</li>
        <li><strong>Do you think rates will fall?</strong> A CD locks in today&apos;s rate. If you expect rises, stay flexible.</li>
        <li><strong>Do you want both?</strong> Keep an emergency fund in an HYSA and put the rest in CDs or a ladder.</li>
        <li><strong>Compare real offers.</strong> Check the APY, the term, the penalty and the insurance status.</li>
      </ol>
      <p>
        If you are still building your cash reserve, read{" "}
        <Link href="/guides/emergency-fund-size">how big your emergency fund should be</Link>, then use the{" "}
        <Link href="/calculators/savings-goal">savings goal calculator</Link> to plan the monthly amount.
      </p>

      <h2>What are the UK equivalents?</h2>
      <p>
        In the UK, an <strong>easy-access savings account</strong> is the equivalent of an HYSA, and a{" "}
        <strong>fixed-rate bond</strong> is the equivalent of a CD. Many fixed-rate bonds do not allow early withdrawals at all, or charge
        for them, so check the terms. Rates are quoted as AER, which is the UK term for the annual yield. A cash ISA can hold either type, and
        the interest is tax-free within your allowance; the{" "}
        <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer">ISA rules are on GOV.UK</a>. The
        Financial Services Compensation Scheme protects eligible deposits up to a limit that has changed recently, so check{" "}
        <a href="https://www.fscs.org.uk/" target="_blank" rel="noopener noreferrer">fscs.org.uk</a> for the current figure.
      </p>

      <h2>APY or APR: which number should you compare?</h2>
      <p>
        APY includes the effect of compounding, so use it to compare savings products. APR is a stated annual rate that leaves
        compounding out, so it understates what a savings account actually pays. If you enter a rate into a calculator
        with monthly compounding, you are treating it as a nominal rate: 4% compounded monthly gives a 4.07% APY, or $407 of
        interest on $10,000 in a year instead of $400.
      </p>

      <p>
        This guide is general information, not personal financial advice. Rates, penalties and terms differ between providers and
        change over time, so confirm the details before you open anything.
      </p>
    </GuideLayout>
  );
}
