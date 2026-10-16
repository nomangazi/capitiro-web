import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "real-vs-nominal-returns";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** $10,000, annual compounding, 3% inflation. Nominal balance and its value in today's money. */
const ROWS = [
  { label: "7% investment", years: 10, nominal: "$19,672", real: "$14,637", change: "+46.4%" },
  { label: "7% investment", years: 20, nominal: "$38,697", real: "$21,426", change: "+114.3%" },
  { label: "7% investment", years: 30, nominal: "$76,123", real: "$31,361", change: "+213.6%" },
  { label: "4% savings account", years: 10, nominal: "$14,802", real: "$11,014", change: "+10.1%" },
  { label: "4% savings account", years: 20, nominal: "$21,911", real: "$12,132", change: "+21.3%" },
  { label: "4% savings account", years: 30, nominal: "$32,434", real: "$13,362", change: "+33.6%" },
  { label: "0% cash", years: 10, nominal: "$10,000", real: "$7,441", change: "-25.6%" },
  { label: "0% cash", years: 20, nominal: "$10,000", real: "$5,537", change: "-44.6%" },
  { label: "0% cash", years: 30, nominal: "$10,000", real: "$4,120", change: "-58.8%" },
];

const APPROX = [
  { nominal: "7%", inflation: "3%", approx: "4.00%", exact: "3.88%" },
  { nominal: "4%", inflation: "3%", approx: "1.00%", exact: "0.97%" },
  { nominal: "0%", inflation: "3%", approx: "-3.00%", exact: "-2.91%" },
  { nominal: "10%", inflation: "8%", approx: "2.00%", exact: "1.85%" },
  { nominal: "20%", inflation: "15%", approx: "5.00%", exact: "4.35%" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A nominal return is the percentage your money grows by, and a real return is what is left after inflation. The exact
        formula is <strong>real return = (1 + nominal) ÷ (1 + inflation) − 1</strong>. <strong>At a 7% nominal return and 3%
        inflation the real return is 3.88%, so $10,000 grows to $76,123 in 30 years but is worth only $31,361 in today&apos;s
        money.</strong> The same sum left in cash at 0% buys only $4,120 worth.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Nominal return = the growth you see on a statement. Real return = growth in what that money can actually buy.</li>
        <li>Exact formula: (1 + nominal) ÷ (1 + inflation) − 1. Quick approximation: nominal − inflation, which slightly overstates a positive real return.</li>
        <li>A 4% savings account with 3% inflation earns only 0.97% in real terms. Cash earning 0% loses 25.6% of its buying power in 10 years.</li>
        <li>A 7% return with 3% inflation is a 3.88% real return, so the real balance doubles in about 18 years, not 10.</li>
        <li>To earn a 2% real return when inflation is 3%, you need a nominal return of about 5.06%.</li>
      </ul>
      <p>
        <small>
          Assumptions for every figure: $10,000 invested once with nothing added; one steady annual rate, compounded yearly; a steady
          3% inflation rate; no tax and no fees. The rates are illustrative examples, not forecasts or today&apos;s market rates.
          Dollar figures are rounded to the nearest dollar.
        </small>
      </p>

      <h2>What is the difference between real and nominal returns?</h2>
      <p>
        Nominal means &quot;in face value&quot;. If a balance goes from $10,000 to $10,400, the nominal return is 4%. But if prices
        rose 3% over the same year, the $10,400 buys only slightly more than $10,000 did a year earlier. The real return adjusts the
        nominal figure for the change in prices, so it measures growth in purchasing power.
      </p>
      <p>
        That is why a nominal balance can rise every year while you get no richer. It is also why long-term plans should be judged
        in today&apos;s money, as the <Link href="/calculators/inflation">inflation calculator</Link> does.
      </p>

      <h2>What is the real return formula?</h2>
      <p>
        <strong>Real return = (1 + nominal return) ÷ (1 + inflation rate) − 1</strong>
      </p>
      <p>
        With a 7% nominal return and 3% inflation: 1.07 ÷ 1.03 − 1 = 0.0388, or 3.88%. This is the exact version, sometimes called
        the Fisher equation, because prices and balances both compound.
      </p>
      <p>
        The shortcut is <strong>real return ≈ nominal return − inflation rate</strong>, here 7% − 3% = 4%. It is quick enough to do
        in your head. The error grows as the numbers get bigger:
      </p>
      <table>
        <thead>
          <tr>
            <th>Nominal return</th>
            <th>Inflation</th>
            <th>Approximation</th>
            <th>Exact real return</th>
          </tr>
        </thead>
        <tbody>
          {APPROX.map((row) => (
            <tr key={`${row.nominal}-${row.inflation}`}>
              <td>{row.nominal}</td>
              <td>{row.inflation}</td>
              <td>{row.approx}</td>
              <td>{row.exact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        For everyday rates the shortcut is within about 0.15 percentage points. When inflation is high, as in the 20% and 15% row, the
        gap widens to 0.65 points, so use the exact formula.
      </p>

      <h2>What is $10,000 really worth after 10, 20 and 30 years?</h2>
      <p>
        The table follows three ways of holding $10,000 against 3% inflation. &quot;Today&apos;s money&quot; is the nominal balance
        divided by (1.03)<sup>years</sup>. The last column compares it with the original $10,000.
      </p>
      <table>
        <thead>
          <tr>
            <th>Where the money sits</th>
            <th>Years</th>
            <th>Nominal balance</th>
            <th>In today&apos;s money</th>
            <th>Buying power vs. $10,000</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={`${row.label}-${row.years}`}>
              <td>{row.label}</td>
              <td>{row.years}</td>
              <td>{row.nominal}</td>
              <td>{row.real}</td>
              <td>{row.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The nominal column makes every option look like a gain or, for cash, a tie. The real column tells a different story: after 30
        years the 7% investment has 3.1 times its original buying power, the 4% account only 1.3 times, and cash less than half. Past
        returns do not guarantee future ones, and a 7% return is never smooth. Treat it as a planning assumption.
      </p>

      <h2>How does inflation reduce purchasing power?</h2>
      <p>
        Prices rise, so each unit of money buys less. At 3% inflation, a basket of goods costing $10,000 today costs about $13,439 in 10
        years, $18,061 in 20 years and $24,273 in 30 years. Seen from the other side, $10,000 kept in cash buys what $7,441, $5,537 and
        $4,120 buys today. That is a loss of 25.6%, 44.6% and 58.8%.
      </p>
      <p>
        These are the same numbers the inflation calculator returns for $10,000 at 3%. Nothing leaves your account, which is why the
        loss is easy to miss. Only the price tags change.
      </p>

      <h2>Is a 4% savings account really earning 4%?</h2>
      <p>
        On paper, yes. After inflation of 3%, the real return is 1.04 ÷ 1.03 − 1 = 0.97%. Over 10 years, $10,000 becomes $14,802 but
        buys what $11,014 buys today. That is a real gain of $1,014, against a headline gain of $4,802. At that real rate, doubling your
        buying power would take about 72 years.
      </p>
      <p>
        If the rate falls below inflation, the real return turns negative. An account paying 2% against 3% inflation grows from
        $10,000 to $12,190 in 10 years, which buys what only $9,070 buys today. Savings accounts still do an important job for
        emergency money and short-term goals, but over decades the gap between nominal and real matters.
      </p>

      <h2>How long does it take to double your money in real terms?</h2>
      <p>
        Apply the Rule of 72 to the real return, not the nominal one. A 7% nominal return doubles money in 10.2 years, but at a real
        return of 3.88% the Rule of 72 gives about 18.6 years (72 ÷ 3.88), and the exact answer is 18.2. Our{" "}
        <Link href="/guides/rule-of-72">Rule of 72 guide</Link> explains the shortcut and its limits. Over 30 years the nominal
        multiple is 7.6 times but the real multiple is only 3.1 times.
      </p>

      <h2>What nominal return do I need to beat inflation?</h2>
      <p>
        To keep your buying power unchanged, your nominal return must equal inflation: 3% in this example. For a real return of 1% you
        need about 4.03% (1.01 × 1.03 − 1). For 2% you need about 5.06%. Fees and taxes come out of the nominal return first, so the
        required headline rate is higher still. Use the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link> to project the nominal balance, then divide by the
        price factor to get today&apos;s money.
      </p>

      <h2>How do I work out my own real return?</h2>
      <ol>
        <li><strong>Start with the net rate</strong> after fund fees. In the UK use the AER, in the US the APY, and for an investment your expected return.</li>
        <li><strong>Pick an inflation range</strong> rather than one number, for example 2%, 3% and 5%.</li>
        <li><strong>Apply the formula</strong> (1 + nominal) ÷ (1 + inflation) − 1 for each pair.</li>
        <li><strong>Convert the final balance</strong> to today&apos;s money by dividing by (1 + inflation)<sup>years</sup>.</li>
        <li><strong>Compare with your goal</strong>, which is also a price in today&apos;s money. A target of $500,000 in 30 years at 3% inflation needs about $1,213,631 in nominal terms to match $500,000 of today&apos;s buying power.</li>
      </ol>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Judging a plan by the nominal balance alone.</strong> A bigger number is not a bigger lifestyle.</li>
        <li><strong>Subtracting inflation from a high rate.</strong> The shortcut understates the gap when rates are large.</li>
        <li><strong>Assuming inflation is the same for everyone.</strong> Official figures average a broad basket. Your own costs may differ.</li>
        <li><strong>Ignoring tax and fees.</strong> Both reduce the nominal return before inflation does its work.</li>
        <li><strong>Treating illustrative rates as predictions.</strong> Real returns vary widely from year to year.</li>
      </ul>

      <h2>Where can I find official inflation data?</h2>
      <p>
        We do not quote a current rate here because it changes every month. For the latest figures, see the US Bureau of Labor
        Statistics{" "}
        <a href="https://www.bls.gov/cpi/" target="_blank" rel="noopener noreferrer">Consumer Price Index pages</a>, the UK Office for
        National Statistics{" "}
        <a href="https://www.ons.gov.uk/economy/inflationandpriceindices" target="_blank" rel="noopener noreferrer">inflation and price indices section</a>{" "}
        and the Eurostat{" "}
        <a href="https://ec.europa.eu/eurostat/web/hicp" target="_blank" rel="noopener noreferrer">harmonised index of consumer prices (HICP)</a>{" "}
        pages for euro-area countries. The US and UK headline measures are both called CPI, while the euro area uses HICP, so the
        definitions differ slightly between regions.
      </p>
      <p>
        The calculation is the same in dollars, pounds or euros. If you want to see how inflation affects your pay as well as your
        savings, read{" "}
        <Link href="/guides/pay-rise-below-inflation">is a pay rise below inflation really a pay cut</Link>.
      </p>
    </GuideLayout>
  );
}
