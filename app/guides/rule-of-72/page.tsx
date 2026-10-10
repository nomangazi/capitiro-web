import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "rule-of-72";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.title, description: guide.description, path: guidePath(SLUG), type: "article" });

const ROWS = [
  { rate: 4, rule: "18.0", exact: "17.7" },
  { rate: 6, rule: "12.0", exact: "11.9" },
  { rate: 8, rule: "9.0", exact: "9.0" },
  { rate: 10, rule: "7.2", exact: "7.3" },
  { rate: 12, rule: "6.0", exact: "6.1" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        The Rule of 72 is a mental-math shortcut that tells you roughly how many years it takes for money to double at a given
        annual rate of return. It needs no calculator and is surprisingly accurate for everyday rates.
      </p>

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

      <h2>Three practical uses</h2>
      <h3>1. Investing</h3>
      <p>
        If a diversified portfolio averages 7%, money doubles about every ten years. A 25-year-old&apos;s investment could double
        about four times by 65 — growing to roughly 15 times its original value (1.07<sup>40</sup> ≈ 15). That is why starting early matters so much.
      </p>
      <h3>2. Debt</h3>
      <p>
        The rule works against you too. An unpaid credit card balance at 24% APR doubles in roughly three years (72 ÷ 24). See how to
        stop that with the <Link href="/calculators/credit-card-payoff">credit card payoff calculator</Link>.
      </p>
      <h3>3. Inflation</h3>
      <p>
        Divide 72 by the inflation rate to find how long it takes prices to double — or your cash to lose half its purchasing power.
        At 3% inflation that is about 24 years. Explore it with the <Link href="/calculators/inflation">inflation calculator</Link>.
      </p>

      <h2>Limits of the rule</h2>
      <ul>
        <li>It assumes a constant rate. Real investment returns go up and down from year to year.</li>
        <li>It ignores taxes, fees and new contributions.</li>
        <li>It is an estimate — use a full compound interest calculation for planning.</li>
      </ul>
      <p>For a precise projection with regular contributions, use the calculator below.</p>
    </GuideLayout>
  );
}
