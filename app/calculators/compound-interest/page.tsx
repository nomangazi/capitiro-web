import { CompoundInterest } from "@/components/calculators/CompoundInterest";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "compound-interest";

export const metadata = buildMetadata({
  title: "Compound Interest Calculator with Contributions",
  description:
    "Free compound interest calculator. Project how an initial deposit and monthly contributions grow with daily, monthly, quarterly or yearly compounding.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is compound interest?",
    answer:
      "Compound interest is interest earned on both your original money and on the interest it has already earned. Over long periods this 'interest on interest' makes balances grow faster and faster.",
  },
  {
    question: "How often is interest compounded?",
    answer:
      "It depends on the account. Savings accounts often compound daily or monthly, bonds semi-annually, and long-term investment returns are usually quoted annually. Use the compounding selector to match your account; contributions are added at the end of each month.",
  },
  {
    question: "What is the Rule of 72?",
    answer:
      "The Rule of 72 is a quick way to estimate doubling time: divide 72 by the annual interest rate. At 8% your money doubles in about 9 years; at 6% in about 12 years.",
  },
  {
    question: "What interest rate should I use?",
    answer:
      "For savings accounts, use the advertised APY. For a diversified stock portfolio, many planners use 5–7% after inflation or 7–10% before inflation, but returns are never guaranteed and past performance does not predict future results.",
  },
  {
    question: "Does this calculator include taxes or inflation?",
    answer:
      "No. Results are before tax and in future (nominal) money. To see what a future amount is worth today, use our inflation calculator.",
  },
  {
    question: "What is the difference between APR, APY and AER?",
    answer:
      "APR is a nominal yearly rate that ignores compounding. APY (US) and AER (UK and EU) include compounding, so they show what you actually earn in a year. For example, 5% compounded monthly is an APY of about 5.12%. Use APY or AER when comparing savings accounts.",
  },
];

export default function CompoundInterestPage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="See how your savings grow when interest earns interest. Enter a starting amount, a monthly contribution and a rate to project your future balance."
      calculator={<CompoundInterest />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the compound interest calculator</h2>
          <ol>
            <li><strong>Initial deposit</strong> — the amount you are starting with (can be zero).</li>
            <li><strong>Monthly contribution</strong> — what you plan to add each month.</li>
            <li><strong>Years to grow</strong> — how long the money stays invested.</li>
            <li><strong>Annual interest rate</strong> — the expected yearly rate of return.</li>
            <li><strong>Compounding frequency</strong> — how often interest is added to the balance.</li>
          </ol>
          <p>The chart compares your growing balance with the money you actually put in. The gap between the two lines is compound interest at work.</p>

          <h2>Compound interest formula explained</h2>
          <p>For a single deposit, the classic formula is:</p>
          <p><strong>A = P × (1 + r/n)<sup>n×t</sup></strong></p>
          <ul>
            <li><strong>A</strong> = final amount, <strong>P</strong> = initial deposit</li>
            <li><strong>r</strong> = annual rate (as a decimal), <strong>n</strong> = compounding periods per year</li>
            <li><strong>t</strong> = number of years</li>
          </ul>
          <p>
            Monthly contributions add the future value of a series of payments: <strong>PMT × [(1 + i)<sup>m</sup> − 1] ÷ i</strong>,
            where i is the monthly rate equivalent to your compounding frequency and m is the number of months. The calculator
            simulates every month so both parts are combined precisely.
          </p>

          <h2>Worked example</h2>
          <p>
            Investing <strong>$10,000</strong> and adding <strong>$500 a month</strong> for <strong>20 years at 7%</strong>, compounded
            monthly, grows to roughly <strong>$300,000</strong>. You contribute $130,000; the other ~$170,000 is interest — more than
            half of the final balance.
          </p>

          <h2>Does compounding frequency matter?</h2>
          <p>
            Only a little. On $10,000 at 5% for one year, yearly compounding earns $500 and daily compounding earns about $513.
            Over 20 years at 7% the gap is about $1,850, which is small next to the effect of time and rate.
          </p>
          <table>
            <thead>
              <tr>
                <th>Compounding</th>
                <th>Effective yearly rate at 5%</th>
                <th>$10,000 at 7% after 20 years</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Yearly</td><td>5.00%</td><td>$38,697</td></tr>
              <tr><td>Quarterly</td><td>5.09%</td><td>$40,064</td></tr>
              <tr><td>Monthly</td><td>5.12%</td><td>$40,387</td></tr>
              <tr><td>Daily</td><td>5.13%</td><td>$40,547</td></tr>
            </tbody>
          </table>
          <p>
            US banks quote APY and UK and EU banks quote AER. Both already include compounding. If you only know the APY or AER,
            choose yearly compounding and enter it as the rate.
          </p>

          <h2>How much do time and rate change the result?</h2>
          <p>
            Time matters most. With $10,000 and $500 a month at 7%, the balance reaches about $106,639 after 10 years, $300,851 after
            20 and $691,150 after 30.
          </p>
          <table>
            <thead>
              <tr>
                <th>Years</th>
                <th>You contribute</th>
                <th>Interest earned</th>
                <th>Final balance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>10</td><td>$70,000</td><td>$36,639</td><td>$106,639</td></tr>
              <tr><td>20</td><td>$130,000</td><td>$170,851</td><td>$300,851</td></tr>
              <tr><td>30</td><td>$190,000</td><td>$501,150</td><td>$691,150</td></tr>
              <tr><td>40</td><td>$250,000</td><td>$1,225,521</td><td>$1,475,521</td></tr>
            </tbody>
          </table>
          <p>
            Starting later has a clear cost. Saving $500 a month from zero at 7% gives about $609,985 after 30 years but only about
            $260,463 after 20, so the extra decade more than doubles the result. Rate matters too. Over 20 years with the same deposits,
            3% reaches about $182,359, 5% reaches $232,643 and 9% reaches $394,035. To estimate doubling time, try the{" "}
            <a href="/guides/rule-of-72">Rule of 72 guide</a>.
          </p>

          <h2>How to make compounding work harder for you</h2>
          <ul>
            <li><strong>Start early.</strong> Time is the most powerful input — ten extra years can double the result.</li>
            <li><strong>Contribute consistently.</strong> Automate monthly deposits so you never skip.</li>
            <li><strong>Keep fees low.</strong> A 1% annual fee can consume a quarter of long-term growth.</li>
            <li><strong>Reinvest returns</strong> instead of withdrawing dividends or interest.</li>
            <li>Planning for later life? Try the <a href="/calculators/retirement">retirement calculator</a>.</li>
          </ul>

          <h2>What the compound interest calculator does not include</h2>
          <p>
            It shows a smooth, pre-tax, nominal projection. Real returns are uneven, and several costs sit outside the result, so
            treat it as an estimate and never as a forecast.
          </p>
          <ul>
            <li><strong>Inflation.</strong> At 3% a year, the $300,851 from the example buys what about $166,574 buys today. Use the <a href="/calculators/inflation">inflation calculator</a> to adjust your own result.</li>
            <li><strong>Fees.</strong> Dropping the rate from 7% to 6% over 30 years lowers the example balance from $691,150 to $562,483, a difference of about $128,667.</li>
            <li><strong>Taxes.</strong> Tax rules vary. Accounts such as a 401(k) or IRA in the US and an ISA or pension in the UK change how growth is taxed.</li>
            <li><strong>Uneven returns.</strong> Investments rise and fall. Savings accounts pay variable rates that can change. For regular investing, compare with the <a href="/calculators/sip-return">SIP calculator</a>.</li>
          </ul>
        </>
      }
    />
  );
}
