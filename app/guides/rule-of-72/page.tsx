import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "rule-of-72";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

const ROWS = [
  { rate: 4, rule: "18.0", exact: "17.7" },
  { rate: 6, rule: "12.0", exact: "11.9" },
  { rate: 8, rule: "9.0", exact: "9.0" },
  { rate: 10, rule: "7.2", exact: "7.3" },
  { rate: 12, rule: "6.0", exact: "6.1" },
];

/** Years to double: rule of 72, rule of 70, 69.3, and the exact value ln(2) / ln(1 + r). */
const COMPARE = [
  { rate: 1, r72: "72.0", r70: "70.0", r693: "69.3", exact: "69.7" },
  { rate: 2, r72: "36.0", r70: "35.0", r693: "34.7", exact: "35.0" },
  { rate: 3, r72: "24.0", r70: "23.3", r693: "23.1", exact: "23.4" },
  { rate: 5, r72: "14.4", r70: "14.0", r693: "13.9", exact: "14.2" },
  { rate: 7, r72: "10.3", r70: "10.0", r693: "9.9", exact: "10.2" },
  { rate: 9, r72: "8.0", r70: "7.8", r693: "7.7", exact: "8.0" },
  { rate: 15, r72: "4.8", r70: "4.7", r693: "4.6", exact: "5.0" },
  { rate: 24, r72: "3.0", r70: "2.9", r693: "2.9", exact: "3.2" },
  { rate: 36, r72: "2.0", r70: "1.9", r693: "1.9", exact: "2.3" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        The Rule of 72 is a mental-math shortcut that tells you roughly how many years it takes for money to double at a given
        annual rate of return. It needs no calculator and is surprisingly accurate for everyday rates.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Years to double ≈ 72 ÷ the annual rate. At 6% that is 12 years, at 8% it is 9 years and at 10% about 7.2 years.</li>
        <li>The rule is most accurate between roughly 6% and 10%. At 1% to 3% the rule of 70 fits slightly better.</li>
        <li>It works in reverse too. To double in 10 years you need roughly 7.2% a year (exactly 7.18%).</li>
        <li>It also measures damage. A 24% APR card balance doubles in under three years, and 3% inflation halves cash in about 24 years.</li>
        <li>A 1% lower return matters more than it sounds. Over 40 years, an assumed 7% grows money about 15.0 times and 6% about 10.3 times.</li>
      </ul>

      <h2>The formula</h2>
      <p>
        <strong>Years to double ≈ 72 ÷ annual interest rate (%)</strong>
      </p>
      <p>
        At 8% a year, 72 ÷ 8 = 9, so your money doubles in about nine years. At 6%, about twelve years. The rule assumes returns
        compound and are reinvested.
      </p>

      <h2>How accurate is it?</h2>
      <p>The exact doubling time is ln(2) ÷ ln(1 + r). Compared with the rule:</p>
      <table>
        <thead>
          <tr>
            <th>Annual rate</th>
            <th>Rule of 72</th>
            <th>Exact (years)</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.rate}>
              <td>{row.rate}%</td>
              <td>{row.rule}</td>
              <td>{row.exact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Between roughly 6% and 10% the estimate is almost perfect. For very low or very high rates it drifts, and some people use 70
        or 69.3 instead — but 72 is popular because it divides neatly by 2, 3, 4, 6, 8, 9 and 12.
      </p>

      <h2>Should you use 72, 70 or 69.3?</h2>
      <p>
        All three are shortcuts for the same curve. The number 69.3 comes from the natural logarithm of 2 and is exact for
        continuously compounded rates. Most savings and investment returns compound less often, and for those 72 works better in the
        middle of the range. Here is how each compares with the exact answer, in years:
      </p>
      <table>
        <thead>
          <tr>
            <th>Annual rate</th>
            <th>Rule of 72</th>
            <th>Rule of 70</th>
            <th>69.3</th>
            <th>Exact</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((row) => (
            <tr key={row.rate}>
              <td>{row.rate}%</td>
              <td>{row.r72}</td>
              <td>{row.r70}</td>
              <td>{row.r693}</td>
              <td>{row.exact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        For rates of 1% to 4%, the rule of 70 is closer. For 5% to 9%, 72 is closer or just as good. Above about 15% every version
        underestimates the true time, and at 36% the rule says 2.0 years when the real figure is 2.3. When precision matters, use the
        exact formula or the <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>Can you use it to find the rate you need?</h2>
      <p>
        Yes. Divide 72 by the number of years you have to find the return required to double your money. Here is how close the
        shortcut gets:
      </p>
      <table>
        <thead>
          <tr>
            <th>Years to double</th>
            <th>Rule of 72 rate</th>
            <th>Exact rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5</td>
            <td>14.4%</td>
            <td>14.87%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9.0%</td>
            <td>9.05%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>7.2%</td>
            <td>7.18%</td>
          </tr>
          <tr>
            <td>15</td>
            <td>4.8%</td>
            <td>4.73%</td>
          </tr>
          <tr>
            <td>20</td>
            <td>3.6%</td>
            <td>3.53%</td>
          </tr>
        </tbody>
      </table>
      <p>
        If you want $10,000 to become $20,000 in ten years, you need about 7.2% a year. That is a useful reality check before you
        set a goal. If the rate you need looks much higher than what savings accounts or diversified funds have historically
        delivered, you will likely need to save more instead. The{" "}
        <Link href="/calculators/savings-goal">savings goal calculator</Link> shows the monthly amount required.
      </p>

      <h2>Three practical uses</h2>
      <h3>1. Investing</h3>
      <p>
        If a diversified portfolio averages 7%, money doubles about every ten years. A 25-year-old&apos;s investment could double
        about four times by 65 — growing to roughly 15 times its original value (1.07<sup>40</sup> ≈ 15). That is why starting early matters so much.
      </p>
      <p>
        To see the compounding steps, here is $10,000 left to grow at 7% a year with nothing added: about $19,672 after 10 years,
        $38,697 after 20, $76,123 after 30 and $149,745 after 40. Each decade roughly doubles the total. Past returns do not
        guarantee future ones, so treat this as an illustration, not a forecast.
      </p>
      <h3>2. Debt</h3>
      <p>
        The rule works against you too. An unpaid credit card balance at 24% APR doubles in roughly three years (72 ÷ 24). See how to
        stop that with the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>
      <p>
        Cards compound monthly, so the real figure is a little faster. At 24% APR, $1,000 with no payments grows to about $2,040
        after three years, which is why the doubling time is nearer 2.9 years than 3. Other rates behave similarly: 18% APR doubles a
        balance in about 3.9 years and 29.99% in about 2.3 years. When you owe several debts, our guide to{" "}
        <Link href="/guides/debt-avalanche-vs-snowball">avalanche vs snowball</Link> helps you pick an order.
      </p>
      <h3>3. Inflation</h3>
      <p>
        Divide 72 by the inflation rate to find how long it takes prices to double — or your cash to lose half its purchasing power.
        At 3% inflation that is about 24 years. Explore it with the <Link href="/calculators/inflation">inflation calculator</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Inflation rate</th>
            <th>Rule of 72</th>
            <th>Exact</th>
            <th>$100 buys after 10 years</th>
            <th>After 20 years</th>
            <th>After 30 years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2%</td>
            <td>36 years</td>
            <td>35.0</td>
            <td>$82.03</td>
            <td>$67.30</td>
            <td>$55.21</td>
          </tr>
          <tr>
            <td>3%</td>
            <td>24 years</td>
            <td>23.4</td>
            <td>$74.41</td>
            <td>$55.37</td>
            <td>$41.20</td>
          </tr>
          <tr>
            <td>4%</td>
            <td>18 years</td>
            <td>17.7</td>
            <td>$67.56</td>
            <td>$45.64</td>
            <td>$30.83</td>
          </tr>
          <tr>
            <td>6%</td>
            <td>12 years</td>
            <td>11.9</td>
            <td>$55.84</td>
            <td>$31.18</td>
            <td>$17.41</td>
          </tr>
        </tbody>
      </table>
      <p>
        The last three columns show what $100 of today&apos;s spending power would buy in today&apos;s terms. At 3% inflation,
        $100,000 held in cash for 24 years would buy only what about $49,193 buys today, so a basket of goods costing $100,000 now
        would cost about $203,279. Major central banks such as the{" "}
        <a href="https://www.federalreserve.gov/faqs/economy_14400.htm" target="_blank" rel="noopener noreferrer">Federal Reserve</a>{" "}
        and the <a href="https://www.bankofengland.co.uk/monetary-policy/inflation" target="_blank" rel="noopener noreferrer">Bank of England</a>{" "}
        target inflation of 2% over time, though actual inflation varies.
      </p>

      <h2>What about tripling or quadrupling your money?</h2>
      <p>
        The same idea extends to larger multiples. A common shortcut is 114 ÷ rate to triple your money and 144 ÷ rate to quadruple
        it. They work best in the same middle range:
      </p>
      <table>
        <thead>
          <tr>
            <th>Annual rate</th>
            <th>Triple: rule 114</th>
            <th>Triple: exact</th>
            <th>Quadruple: rule 144</th>
            <th>Quadruple: exact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4%</td>
            <td>28.5</td>
            <td>28.0</td>
            <td>36.0</td>
            <td>35.3</td>
          </tr>
          <tr>
            <td>6%</td>
            <td>19.0</td>
            <td>18.9</td>
            <td>24.0</td>
            <td>23.8</td>
          </tr>
          <tr>
            <td>8%</td>
            <td>14.3</td>
            <td>14.3</td>
            <td>18.0</td>
            <td>18.0</td>
          </tr>
          <tr>
            <td>10%</td>
            <td>11.4</td>
            <td>11.5</td>
            <td>14.4</td>
            <td>14.5</td>
          </tr>
        </tbody>
      </table>

      <h2>Why does a 1% difference matter so much?</h2>
      <p>
        Because doubling time depends on the rate, small changes compound into large gaps. At 7% money doubles every 10.2 years. At
        6% it takes 11.9 years. Over 40 years, $1,000 grows to about $14,974 at 7% and about $10,286 at 6%, a difference of
        roughly 46%. A 1% annual fund fee can cause a gap like this, so compare costs before you invest. The same logic applies to
        mortgages: see how a small rate gap changes the total in our{" "}
        <Link href="/guides/15-vs-30-year-mortgage">15-year vs 30-year mortgage guide</Link>.
      </p>

      <h2>Limits of the rule</h2>
      <ul>
        <li>It assumes a constant rate. Real investment returns go up and down from year to year.</li>
        <li>It ignores taxes, fees and new contributions.</li>
        <li>It is an estimate — use a full compound interest calculation for planning.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Mixing up rate formats.</strong> Use the annual rate as a whole number: 72 ÷ 8, not 72 ÷ 0.08.</li>
        <li><strong>Using a nominal rate when inflation is high.</strong> Money that earns 4% while inflation runs at 3% grows only about 0.97% in real terms, which would take about 72 years to double its purchasing power.</li>
        <li><strong>Treating a historical average as a promise.</strong> A fund that averages 7% may lose money in some years, and the doubling dates will shift.</li>
        <li><strong>Forgetting to subtract fees.</strong> Use the net return after costs when you apply the rule.</li>
        <li><strong>Applying it to short horizons.</strong> Over a few years, contributions matter far more than the doubling time.</li>
      </ul>

      <h2>Does the Rule of 72 work in the UK and Europe?</h2>
      <p>
        Yes. The rule only needs a yearly rate. In the UK, use the AER (annual equivalent rate) quoted on a savings account, or the
        net return on an ISA or pension. In the US, use the APY on savings. Euro-area accounts usually quote a nominal annual rate,
        so check whether it already includes compounding. For US loans and cards, the quoted APR is a nominal rate, slightly lower than the true yearly cost
        when interest compounds monthly, which is why the debt doubling time came out a little shorter above. A UK APR already
        includes compounding, so you can use it directly.
      </p>
      <p>For a precise projection with regular contributions, use the calculator below.</p>
    </GuideLayout>
  );
}
