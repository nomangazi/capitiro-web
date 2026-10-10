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
