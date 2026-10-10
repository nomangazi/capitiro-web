import { Inflation } from "@/components/calculators/Inflation";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "inflation";

export const metadata = buildMetadata({
  title: "Inflation Calculator – Future Value & Purchasing Power",
  description:
    "See how inflation affects your money: what today's prices will cost in the future and how much purchasing power your savings lose over time.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is inflation?",
    answer:
      "Inflation is the general rise in prices over time. When inflation is 3%, something that costs 100 today costs about 103 next year — so each unit of money buys a little less.",
  },
  {
    question: "What inflation rate should I use?",
    answer:
      "The US Federal Reserve, the European Central Bank and the Bank of England all target about 2% a year over the long run. Actual inflation has varied widely, so 2–3% is a common planning assumption.",
  },
  {
    question: "What is purchasing power?",
    answer:
      "Purchasing power is how much your money can buy. If prices double, the same amount of money has half the purchasing power.",
  },
  {
    question: "How do I protect my savings from inflation?",
    answer:
      "Over the long term, assets such as diversified stocks, inflation-linked bonds (TIPS in the US, index-linked gilts in the UK) and real estate have tended to outpace inflation. Cash savings only keep up if the interest rate exceeds inflation.",
  },
  {
    question: "Can I enter a negative rate (deflation)?",
    answer: "Yes. Enter a negative number in the rate field to model falling prices.",
  },
  {
    question: "How long does it take for prices to double?",
    answer:
      "Use the Rule of 72: divide 72 by the annual inflation rate. At 3% prices double in about 24 years, at 2% in about 36 years and at 5% in about 14 years. The calculator confirms this: at 3%, a cost of 1 becomes about 2.03 after 24 years.",
  },
  {
    question: "Is my personal inflation rate the same as the official rate?",
    answer:
      "Usually not. Official figures average a broad basket of goods, but your spending mix differs. If much of your budget goes to rent, healthcare or education, your own rate may be higher or lower. Try a range of rates rather than one number.",
  },
];

export default function InflationPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Find out what today's money will be worth in the future — and how much more everyday costs could be — at any inflation rate."
      calculator={<Inflation />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the inflation calculator</h2>
          <ol>
            <li>Enter an <strong>amount</strong> in today&apos;s money — a salary, a monthly budget or a savings balance.</li>
            <li>Set the expected <strong>annual inflation rate</strong>.</li>
            <li>Choose the <strong>number of years</strong> to look ahead.</li>
          </ol>
          <p>You get two answers: what the same goods will cost in the future, and what your money will be able to buy then.</p>

          <h2>Inflation formula explained</h2>
          <p><strong>Future cost = Amount × (1 + inflation)<sup>years</sup></strong></p>
          <p><strong>Purchasing power = Amount ÷ (1 + inflation)<sup>years</sup></strong></p>
          <p>Both use the same compounding principle as interest — just working against you instead of for you.</p>

          <h2>Worked example</h2>
          <p>
            At <strong>3% inflation</strong>, a basket of goods costing <strong>1,000</strong> today will cost about{" "}
            <strong>1,344 in 10 years</strong>. Put the other way, 1,000 kept in cash will only buy what about 744 buys today — a{" "}
            <strong>26% loss</strong> of purchasing power.
          </p>

          <h2>How much do prices rise at 2%, 3% and 5% inflation?</h2>
          <p>
            Over 30 years, something that costs 1,000 today would cost about 1,811 at 2% inflation, 2,427 at 3% and 4,322 at 5%.
            Small differences in the rate compound into large differences in price.
          </p>
          <table>
            <thead>
              <tr>
                <th>Inflation rate</th>
                <th>Cost after 10 years</th>
                <th>Cost after 20 years</th>
                <th>Cost after 30 years</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2%</td><td>1,219</td><td>1,486</td><td>1,811</td></tr>
              <tr><td>3%</td><td>1,344</td><td>1,806</td><td>2,427</td></tr>
              <tr><td>5%</td><td>1,629</td><td>2,653</td><td>4,322</td></tr>
            </tbody>
          </table>
          <p>The same rates, seen from the other side, show what 1,000 kept in cash can buy in today&apos;s terms.</p>
          <table>
            <thead>
              <tr>
                <th>Inflation rate</th>
                <th>After 10 years</th>
                <th>After 20 years</th>
                <th>After 30 years</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2%</td><td>820</td><td>673</td><td>552</td></tr>
              <tr><td>3%</td><td>744</td><td>554</td><td>412</td></tr>
              <tr><td>5%</td><td>614</td><td>377</td><td>231</td></tr>
            </tbody>
          </table>

          <h2>How long until prices double?</h2>
          <p>
            Divide 72 by the inflation rate for a quick estimate. At 3% prices double in about 24 years, at 2% in about 36 years
            and at 5% in about 14 years. The <a href="/guides/rule-of-72">Rule of 72 guide</a> explains the shortcut, and the
            calculator gives the exact figure: after 24 years at 3%, today&apos;s 1 costs about 2.03.
          </p>

          <h2>What do the Fed, ECB and Bank of England target?</h2>
          <p>
            All three aim for about 2% a year over the medium term, but they measure it differently. The US Federal Reserve uses
            the PCE price index, the Bank of England uses the UK CPI and the European Central Bank uses the euro area HICP.
          </p>
          <p>
            Actual inflation can be well above or below those targets for several years, so many planners test a range such as 2%,
            3% and 5%. If you are modeling the rest of your life, a slightly higher assumption is the safer error.
          </p>

          <h2>How does inflation affect savings interest?</h2>
          <p>
            Your real return is roughly the interest rate minus inflation. With 3% inflation, 10,000 earning 1% grows to about
            11,051 in 10 years but buys only what about 8,223 buys today. At 4% it grows to about 14,908, worth about 11,093 in
            today&apos;s money.
          </p>
          <p>
            That is why long-term goals usually rely on investments, not cash alone. Test the possibilities with the{" "}
            <a href="/calculators/compound-interest">compound interest calculator</a>, plan monthly saving with the{" "}
            <a href="/calculators/savings-goal">savings goal calculator</a>, or build a regular plan with the{" "}
            <a href="/calculators/sip-return">SIP calculator</a>.
          </p>

          <h2>What does the inflation calculator not include?</h2>
          <p>
            It applies one steady rate to everything, which real prices never do. Four limits are worth knowing.
          </p>
          <ul>
            <li><strong>Your personal inflation:</strong> official figures average a basket of goods. Rent, healthcare, education and energy can rise faster or slower than that average.</li>
            <li><strong>Pay rises:</strong> to keep up at 3%, a 50,000 salary would need to reach about 67,196 in 10 years, and a 3,000 monthly budget would grow to about 5,418 in 20 years.</li>
            <li><strong>Not a forecast:</strong> the rate you enter is an assumption, not a prediction of what will happen.</li>
            <li><strong>Taxes and returns:</strong> the tool does not model interest, investment gains or tax. It only shows price changes.</li>
          </ul>

          <h2>Why inflation matters for your plans</h2>
          <ul>
            <li><strong>Retirement:</strong> a target that looks big today may be modest in 30 years. Our <a href="/calculators/retirement">retirement calculator</a> shows both values.</li>
            <li><strong>Salary:</strong> a raise below inflation is a real-terms pay cut.</li>
            <li><strong>Savings:</strong> compare your account&apos;s interest rate with inflation — the difference is your real return.</li>
          </ul>
        </>
      }
    />
  );
}
