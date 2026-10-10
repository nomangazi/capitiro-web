import { SIPReturn } from "@/components/calculators/SIPReturn";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "sip-return";

export const metadata = buildMetadata({
  title: "SIP Calculator: Monthly Investment Returns",
  description:
    "Estimate the future value of a systematic investment plan (SIP) or any regular monthly investment, with an optional yearly step-up in contributions.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is a SIP?",
    answer:
      "A systematic investment plan (SIP) means investing a fixed amount at regular intervals — usually monthly — into a fund, ETF or portfolio. It is the same idea as dollar-cost averaging or a regular savings plan.",
  },
  {
    question: "What is a step-up SIP?",
    answer:
      "A step-up SIP increases your monthly investment by a set percentage each year, typically in line with pay rises. Even a 5–10% annual step-up can increase the final value significantly.",
  },
  {
    question: "Are SIP returns guaranteed?",
    answer:
      "No. The calculator assumes a constant annual return for illustration. Real market returns vary from year to year and can be negative. Use a conservative rate and treat the result as an estimate.",
  },
  {
    question: "How is this different from the compound interest calculator?",
    answer:
      "The SIP calculator assumes each investment is made at the start of the month (so it earns that month's return) and supports a yearly step-up. The compound interest calculator supports an initial lump sum and different compounding frequencies.",
  },
  {
    question: "What does 'money multiple' mean?",
    answer:
      "It is the final portfolio value divided by the total amount you invested. A multiple of 2× means your money doubled in total.",
  },
  {
    question: "Is a SIP better than investing a lump sum?",
    answer:
      "If you already hold a lump sum, investing it all at once has often done better historically because markets tend to rise over time, but not always. Spreading it over months reduces the risk of poor timing. For money coming from your salary, a regular plan is the natural fit.",
  },
  {
    question: "How much should I invest each month?",
    answer:
      "A common guideline is to put 15% of gross income toward retirement, including any employer contribution. If that is too much now, start with an amount you can keep up and raise it each year using the step-up option.",
  },
];

export default function SIPPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Find out what a regular monthly investment could grow to. Add an annual step-up to see the effect of increasing your contributions as your income grows."
      calculator={<SIPReturn />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the SIP calculator</h2>
          <ol>
            <li>Enter your <strong>monthly investment</strong> amount.</li>
            <li>Choose the <strong>investment period</strong> in years.</li>
            <li>Set the <strong>expected annual return</strong> — use a realistic long-term figure.</li>
            <li>Optionally add an <strong>annual step-up</strong> to raise your contribution each year.</li>
          </ol>

          <h2>SIP formula explained</h2>
          <p>Without step-up, the future value of a SIP is:</p>
          <p><strong>FV = P × [(1 + i)<sup>n</sup> − 1] ÷ i × (1 + i)</strong></p>
          <ul>
            <li><strong>P</strong> = monthly investment</li>
            <li><strong>i</strong> = monthly rate = annual return ÷ 12 ÷ 100</li>
            <li><strong>n</strong> = number of monthly investments</li>
          </ul>
          <p>
            The extra <strong>(1 + i)</strong> term reflects that each payment is invested at the start of the month. With a
            step-up, the monthly amount for year y is P × (1 + step-up)<sup>y−1</sup>; the calculator simulates every month to
            combine them.
          </p>

          <h2>Worked example</h2>
          <p>
            Investing <strong>500 a month for 15 years at 10%</strong> gives a total investment of 90,000 and an estimated value of
            about <strong>209,000</strong>. With a <strong>10% annual step-up</strong>, you invest about 191,000 and the estimate
            rises to roughly <strong>372,000</strong>.
          </p>

          <h2>How much does the return rate change a SIP?</h2>
          <p>
            A lot, because the gain compounds. Investing <strong>500 a month for 15 years</strong> always puts in 90,000, but the
            estimated value ranges from about 146,000 at 6% to about 252,000 at 12%.
          </p>
          <table>
            <thead>
              <tr>
                <th>Annual return</th>
                <th>Total invested</th>
                <th>Estimated value</th>
                <th>Growth</th>
                <th>Money multiple</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>6%</td><td>90,000</td><td>146,136</td><td>56,136</td><td>1.62×</td></tr>
              <tr><td>8%</td><td>90,000</td><td>174,173</td><td>84,173</td><td>1.94×</td></tr>
              <tr><td>10%</td><td>90,000</td><td>208,962</td><td>118,962</td><td>2.32×</td></tr>
              <tr><td>12%</td><td>90,000</td><td>252,288</td><td>162,288</td><td>2.80×</td></tr>
            </tbody>
          </table>
          <p>
            These rates are illustrations, not forecasts. Broad stock-market returns have varied widely from year to year, and a
            balanced portfolio usually earns less than an all-stock one, so run the lower rows as well as the higher ones.
          </p>

          <h2>Is a step-up SIP worth it?</h2>
          <p>
            Yes, if your income grows. At 10% a year for 15 years, raising a 500 monthly investment by 5% a year lifts the estimate
            from about 209,000 to about 275,000, and a 10% step-up lifts it to about 372,000.
          </p>
          <table>
            <thead>
              <tr>
                <th>Annual step-up</th>
                <th>Total invested</th>
                <th>Estimated value</th>
                <th>Money multiple</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>None</td><td>90,000</td><td>208,962</td><td>2.32×</td></tr>
              <tr><td>5%</td><td>129,471</td><td>274,997</td><td>2.12×</td></tr>
              <tr><td>10%</td><td>190,635</td><td>371,892</td><td>1.95×</td></tr>
            </tbody>
          </table>
          <p>
            The money multiple falls because the extra contributions arrive later and have less time to grow. A larger final value
            comes from investing more, so choose a step-up you can actually afford.
          </p>

          <h2>Is it better to start earlier or invest more?</h2>
          <p>
            Starting earlier usually wins, because time does more of the work than the contribution size. At 8%, <strong>500 a month
            for 30 years</strong> grows to about 750,000, while <strong>1,000 a month for 15 years</strong> puts in the same 180,000
            but reaches only about 348,000.
          </p>
          <p>
            The same effect shows up at a constant 10% return and 500 a month. Ten years gives about 103,000, twenty years about
            383,000 and thirty years about 1.14 million. Going from 20 to 30 years multiplies the result almost three times
            while the amount invested rises by only half. The <a href="/guides/rule-of-72">Rule of 72 guide</a> explains why
            growth speeds up the longer you stay invested.
          </p>

          <h2>What does the SIP calculator not include?</h2>
          <p>
            The result is a pre-tax, pre-fee estimate at a smooth return, so a real portfolio will differ. Four things matter most.
          </p>
          <ul>
            <li>
              <strong>Fees:</strong> a 1 percentage point lower return, such as 9% instead of 10%, trims the 20-year result for 500 a
              month from about 383,000 to about 336,000, a difference of roughly 46,000.
            </li>
            <li>
              <strong>Taxes:</strong> gains and dividends may be taxed unless the money sits in a tax-advantaged account, such as a
              401(k) or IRA in the US or an ISA or SIPP in the UK. EU rules differ by country.
            </li>
            <li>
              <strong>Inflation:</strong> the result is in future money. Check what it could buy with the{" "}
              <a href="/calculators/inflation">inflation calculator</a>.
            </li>
            <li>
              <strong>Uneven returns:</strong> markets do not deliver a steady rate. A bad run just before you need the money hurts
              more than the same loss early on.
            </li>
          </ul>
          <p>
            SIP is the term used mainly in India. The same idea is called dollar-cost averaging or regular investing in the US,
            a monthly direct debit into an ISA or SIPP in the UK, and an ETF savings plan with many EU brokers. To plan the long
            term, feed the result into the <a href="/calculators/retirement">retirement calculator</a> or work backward from a
            target with the <a href="/calculators/savings-goal">savings goal calculator</a>.
          </p>

          <h2>Getting the most from regular investing</h2>
          <ul>
            <li><strong>Stay invested through downturns</strong> — regular buying lowers your average cost when prices fall.</li>
            <li><strong>Raise contributions with every pay rise</strong> using the step-up option.</li>
            <li><strong>Choose low-cost, diversified funds</strong> such as broad index funds.</li>
            <li>Compare against a one-off lump sum with the <a href="/calculators/compound-interest">compound interest calculator</a>.</li>
          </ul>
        </>
      }
    />
  );
}
