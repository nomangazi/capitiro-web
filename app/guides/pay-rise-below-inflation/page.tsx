import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "pay-rise-below-inflation";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** One year, pay measured in last year's prices: new pay ÷ (1 + inflation). */
const SCENARIOS = [
  { salary: "$60,000", raise: "3%", inflation: "5%", pay: "$61,800", worth: "$58,857", real: "-1.9%" },
  { salary: "$60,000", raise: "4%", inflation: "4%", pay: "$62,400", worth: "$60,000", real: "0.0%" },
  { salary: "$60,000", raise: "5%", inflation: "2.5%", pay: "$63,000", worth: "$61,463", real: "+2.4%" },
  { salary: "£40,000", raise: "3%", inflation: "5%", pay: "£41,200", worth: "£39,238", real: "-1.9%" },
  { salary: "£40,000", raise: "4%", inflation: "4%", pay: "£41,600", worth: "£40,000", real: "0.0%" },
  { salary: "£40,000", raise: "5%", inflation: "2.5%", pay: "£42,000", worth: "£40,976", real: "+2.4%" },
];

/** Exact real pay change for a raise (rows) against inflation (columns). */
const GRID = [
  { raise: "2%", cells: ["0.00%", "-0.97%", "-1.92%", "-2.86%", "-3.77%"] },
  { raise: "3%", cells: ["+0.98%", "0.00%", "-0.96%", "-1.90%", "-2.83%"] },
  { raise: "4%", cells: ["+1.96%", "+0.97%", "0.00%", "-0.95%", "-1.89%"] },
  { raise: "5%", cells: ["+2.94%", "+1.94%", "+0.96%", "0.00%", "-0.94%"] },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Yes, in real terms it is. A pay rise (in the US, a raise) smaller than inflation leaves you with more money on your payslip but
        less buying power. <strong>A 3% raise when prices rise 5% takes a $60,000 salary to $61,800, which buys only what $58,857 bought a
        year earlier, a real cut of 1.9%.</strong> This guide shows the formula, worked examples in dollars and pounds, and how to
        decide what to do.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Real pay change = (1 + raise) ÷ (1 + inflation) − 1. The shortcut raise − inflation is close for small numbers.</li>
        <li>A 3% raise at 5% inflation is a 1.9% real cut. A 4% raise at 4% inflation is flat. A 5% raise at 2.5% inflation is a 2.4% real gain.</li>
        <li>To get a 1% real increase at 4% inflation you need a raise of about 5.04%, not 5%.</li>
        <li>Shortfalls compound. Three years of 2% raises at 4% inflation leave pay 5.7% behind in real terms.</li>
        <li>A catch-up after that is steep: about 6.0% in one go just to get back to where you started.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: the raise takes effect at the start of the year; inflation is a single steady rate applied to
          everything you buy; amounts are before tax; the salaries and rates are illustrative examples, not forecasts or current
          figures. Amounts are rounded to the nearest dollar or pound.
        </small>
      </p>

      <h2>How do you calculate whether a pay rise beats inflation?</h2>
      <p>
        <strong>Real pay change = (1 + raise) ÷ (1 + inflation) − 1</strong>
      </p>
      <p>
        You can also divide your new salary by (1 + inflation) to see it in last year&apos;s prices, which is the purchasing power
        calculation used by the <Link href="/calculators/inflation">inflation calculator</Link>. For a $60,000 salary with a 3% raise
        and 5% inflation: $61,800 ÷ 1.05 = $58,857. Compared with $60,000, that is a drop of $1,143, or 1.9%. The quick version, 3% − 5%,
        gives −2%, which is close.
      </p>
      <p>
        The formula also shows what you need to stand still. To keep up, the new salary must equal the old salary times (1 + inflation):
        $60,000 × 1.05 = $63,000.
      </p>

      <h2>Is a 3% raise at 5% inflation really a pay cut?</h2>
      <p>
        The table compares three combinations for a $60,000 and a £40,000 salary. &quot;Worth in last year&apos;s money&quot; is the new
        pay divided by (1 + inflation).
      </p>
      <table>
        <thead>
          <tr>
            <th>Salary</th>
            <th>Raise</th>
            <th>Inflation</th>
            <th>New pay</th>
            <th>Worth in last year&apos;s money</th>
            <th>Real change</th>
          </tr>
        </thead>
        <tbody>
          {SCENARIOS.map((row) => (
            <tr key={`${row.salary}-${row.raise}`}>
              <td>{row.salary}</td>
              <td>{row.raise}</td>
              <td>{row.inflation}</td>
              <td>{row.pay}</td>
              <td>{row.worth}</td>
              <td>{row.real}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        In the first case you would need $63,000 (or £42,000) just to keep your buying power, so the shortfall is $1,200 a year, about
        $100 a month (or £800 a year, about £67 a month). In the second the raise exactly matches prices: no loss, no gain. In the
        third the raise beats inflation, adding about $1,463 (or £976) of real buying power. A pay freeze is the extreme case: 0% at 4%
        inflation is a real cut of 3.8%, so $60,000 is worth $57,692.
      </p>

      <h2>What raise do you need to get a real increase?</h2>
      <p>
        Matching inflation only holds your position. To get ahead, multiply: required raise = (1 + wanted real increase) × (1 +
        inflation) − 1.
      </p>
      <table>
        <thead>
          <tr>
            <th>Inflation</th>
            <th>Raise to stand still</th>
            <th>Raise for +1% real</th>
            <th>Raise for +2% real</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3%</td>
            <td>3.00%</td>
            <td>4.03%</td>
            <td>5.06%</td>
          </tr>
          <tr>
            <td>4%</td>
            <td>4.00%</td>
            <td>5.04%</td>
            <td>6.08%</td>
          </tr>
          <tr>
            <td>5%</td>
            <td>5.00%</td>
            <td>6.05%</td>
            <td>7.10%</td>
          </tr>
        </tbody>
      </table>
      <p>
        The grid below shows the real change for a wider range of raises (rows) against inflation rates (columns).
      </p>
      <table>
        <thead>
          <tr>
            <th>Raise</th>
            <th>2% inflation</th>
            <th>3% inflation</th>
            <th>4% inflation</th>
            <th>5% inflation</th>
            <th>6% inflation</th>
          </tr>
        </thead>
        <tbody>
          {GRID.map((row) => (
            <tr key={row.raise}>
              <td>{row.raise}</td>
              {row.cells.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>What happens when raises trail inflation for several years?</h2>
      <p>
        One year of lag is annoying. Several years add up because both pay and prices compound. Take $60,000 with a 2% raise each year
        while prices rise 4% each year:
      </p>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Salary after raises</th>
            <th>Salary needed to keep up</th>
            <th>Worth in starting prices</th>
            <th>Real change since start</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$61,200</td>
            <td>$62,400</td>
            <td>$58,846</td>
            <td>-1.9%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$62,424</td>
            <td>$64,896</td>
            <td>$57,714</td>
            <td>-3.8%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$63,672</td>
            <td>$67,492</td>
            <td>$56,605</td>
            <td>-5.7%</td>
          </tr>
        </tbody>
      </table>
      <p>
        After three years the salary has risen 6.1% on paper (1.02<sup>3</sup>) and prices 12.5% (1.04<sup>3</sup>), so real pay has
        fallen 5.7%. The gap in year three alone is $3,819 a year, about $318 a month. For £40,000 the same pattern gives £42,448
        against £44,995 needed, which is worth £37,736 in starting prices.
      </p>
      <p>
        The hole is hard to fill. To get back to the original buying power you would need a single raise of about 6.0% on top, in a
        year when prices may still be rising. A steady 3% raise against 5% inflation does similar damage over three years: salary
        $65,564, worth $56,636 in starting prices, down 5.6%. Use the{" "}
        <Link href="/calculators/inflation">inflation calculator</Link> to run your own salary and years.
      </p>

      <h2>Does it matter that a pay rise is before tax?</h2>
      <p>
        Everything above is before tax, and take-home pay is what you spend. We do not model tax rules here, but the direction is easy to
        describe. Tax and other deductions are usually taken from your pay, so a raise below inflation usually means a cut in take-home
        buying power too. When a raise pushes part of your pay across a tax threshold, or reduces a benefit you receive, the after-tax gain can be
        smaller than the pre-tax percentage suggests. If tax thresholds do not move with prices, a larger share of pay can be taxed
        over time. Check your payslip before and after a change to see the real figure, and speak to a tax adviser if the numbers are
        large.
      </p>

      <h2>How do you make the case for a raise?</h2>
      <ol>
        <li><strong>Know the numbers.</strong> Find the inflation measure for your country from an official source (links below) and calculate the raise that keeps your buying power.</li>
        <li><strong>Separate two requests.</strong> A cost-of-living adjustment protects what you have. A performance or market adjustment recognises your work.</li>
        <li><strong>Document your contribution.</strong> List results, new responsibilities and skills since your last increase.</li>
        <li><strong>Check market pay</strong> for similar roles, using public salary surveys and job adverts, and note that employers weigh budget and pay bands too.</li>
        <li><strong>Ask for a specific figure at a sensible time,</strong> such as a review cycle, and be open to alternatives like a bonus, extra leave, flexible working or pension contributions.</li>
      </ol>
      <p>
        Inflation is a good opening for the conversation, but it is not the only factor and no raise is guaranteed. This is general
        information, not employment or legal advice.
      </p>

      <h2>What should you do if your raise is below inflation?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Real change</th>
            <th>What to consider</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Raise above inflation</td>
            <td>Positive</td>
            <td>Your buying power grew. Consider saving or paying down debt with part of the gain.</td>
          </tr>
          <tr>
            <td>Raise equals inflation</td>
            <td>Zero</td>
            <td>You stood still. Ask whether the gap to market pay is widening.</td>
          </tr>
          <tr>
            <td>Raise slightly below</td>
            <td>Small cut</td>
            <td>Request a mid-year review or a one-off payment, and track this year&apos;s shortfall.</td>
          </tr>
          <tr>
            <td>Raise far below, or a freeze</td>
            <td>Large cut</td>
            <td>Build the case above, review your budget, and compare other opportunities.</td>
          </tr>
        </tbody>
      </table>
      <p>
        While you wait, adjust your savings. If inflation outpaces your pay, the money you save also loses ground when held as cash,
        which is covered in our guide to{" "}
        <Link href="/guides/real-vs-nominal-returns">real vs nominal returns</Link>.
      </p>

      <h2>Is your personal inflation the same as the headline rate?</h2>
      <p>
        Probably not. Official rates average a broad basket of goods. If rent, energy, childcare or commuting make up a larger part of
        your spending, your own rate may differ, so test a range, such as 3%, 4% and 5%. For current official figures, see the US Bureau of
        Labor Statistics{" "}
        <a href="https://www.bls.gov/cpi/" target="_blank" rel="noopener noreferrer">Consumer Price Index pages</a>, the UK Office for
        National Statistics{" "}
        <a href="https://www.ons.gov.uk/economy/inflationandpriceindices" target="_blank" rel="noopener noreferrer">inflation and price indices section</a>{" "}
        and Eurostat&apos;s{" "}
        <a href="https://ec.europa.eu/eurostat/web/hicp" target="_blank" rel="noopener noreferrer">harmonised index of consumer prices (HICP)</a>{" "}
        for the euro area. We do not quote a current rate here because it changes every month.
      </p>
    </GuideLayout>
  );
}
