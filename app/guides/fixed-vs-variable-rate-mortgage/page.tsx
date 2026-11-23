import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "fixed-vs-variable-rate-mortgage";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A fixed-rate mortgage locks your payment for a set period. A variable-rate mortgage usually starts lower but can rise or
        fall with the market. Fixed buys certainty, variable buys a lower starting cost and takes on rate risk. Which is better
        depends on how much of a payment increase your budget could absorb.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>On a <strong>$300,000</strong> 30-year loan, a fixed 6.5% costs <strong>$1,896</strong> a month. A variable loan starting at an assumed 5.5% costs <strong>$1,703</strong>, which is $193 a month less.</li>
        <li>If the variable rate rises by 2 points after 5 years, the payment jumps to <strong>$2,050</strong> (up 20%) and total interest ends up <strong>$34,517 higher</strong> than the fixed loan.</li>
        <li>In this example the variable loan only beats the fixed one if its rate averages below about <strong>6.85%</strong> after year 5, roughly 1.35 points above where it started.</li>
        <li>Rate caps limit how fast a US adjustable-rate mortgage can rise, but they do not stop the payment climbing.</li>
        <li>The real test is whether you could afford the higher payment, not whether you can guess the rate.</li>
      </ul>

      <h2>What is the difference between fixed and variable rate mortgages?</h2>
      <p>
        With a <strong>fixed rate</strong>, the interest rate does not change during the fixed period, so the principal-and-interest
        payment stays the same. With a <strong>variable rate</strong> the lender can change the rate, usually following a published
        benchmark or its own pricing. Variable loans often start cheaper because the borrower, not the lender, carries the risk of
        rates rising.
      </p>
      <p>
        Names differ by country, and a loan can be fixed for part of its life and variable after that. Always check what happens
        when the fixed period ends.
      </p>

      <h2>How do fixed and variable mortgages work in the US, UK and EU?</h2>
      <p>
        <strong>United States.</strong> The 30-year fixed-rate mortgage is the standard: the rate is set for the full term. The main
        alternative is the adjustable-rate mortgage (ARM). A 5/1 ARM has a fixed rate for 5 years and then adjusts once a year; a
        7/1 ARM is fixed for 7 years. ARMs have caps that limit how much the rate can move at the first adjustment, at each later
        adjustment and over the life of the loan. The exact caps are in your Loan Estimate.
      </p>
      <p>
        <strong>United Kingdom.</strong> Most borrowers take a fixed deal, commonly for 2 or 5 years, on a mortgage that runs 25
        years or more. When the deal ends the loan usually moves to the lender&apos;s standard variable rate (SVR), which is often
        higher than deals on offer, so many people remortgage or switch to a new deal before then. A <strong>tracker</strong> moves
        with a stated reference rate, typically the Bank of England base rate plus a set margin. Early repayment charges often apply
        if you leave a fixed deal early.
      </p>
      <p>
        <strong>Euro area.</strong> Practice varies a lot by country. In some markets long fixed periods are normal, in others
        variable loans linked to Euribor (a benchmark for euro interbank lending) are common, and some loans reset every few years.
        Check your offer for the reference rate, the margin, how often the rate resets and any cap.
      </p>

      <h2>Fixed vs variable: how do they compare?</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Fixed rate</th>
            <th>Variable / ARM</th>
            <th>Tracker (UK)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Payment</td>
            <td>Same during the fixed period</td>
            <td>Changes at each reset</td>
            <td>Moves with the reference rate</td>
          </tr>
          <tr>
            <td>Starting rate</td>
            <td>Often higher</td>
            <td>Often lower</td>
            <td>Depends on the margin</td>
          </tr>
          <tr>
            <td>Main risk</td>
            <td>Rate falls and you are locked in</td>
            <td>Rate rises and the payment jumps</td>
            <td>Reference rate rises</td>
          </tr>
          <tr>
            <td>Typical limits</td>
            <td>Early repayment charges</td>
            <td>Adjustment and lifetime caps (US)</td>
            <td>Some have a collar or exit fees</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Tight budgets, certainty</td>
            <td>Short stays, spare cash flow</td>
            <td>Those who can absorb rises</td>
          </tr>
        </tbody>
      </table>

      <h2>What does the difference cost? A worked example</h2>
      <p>
        Take a <strong>$300,000</strong> loan over 30 years. These are <strong>assumed rates, not market quotes</strong>: a fixed
        rate of 6.5% and a variable loan that starts 1 point lower at 5.5%. The same figures work in pounds or euros. We compare
        principal and interest only.
      </p>
      <p>
        Fixed: the payment is <strong>$1,896</strong> a month and total interest over 30 years is <strong>$382,633</strong>.
        Variable: the starting payment is <strong>$1,703</strong>, saving $193 a month. Over the first 5 years that adds up to
        about $11,570 less in payments, and you pay about $15,021 less interest.
      </p>
      <p>
        For rate changes we calculate the remaining balance after the change, then recalculate the payment on that balance over the
        remaining months. Simplifications: one rate change only, no fees or caps, and the loan is held to the end of the term.
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Balance at change</th>
            <th>New payment</th>
            <th>Change in payment</th>
            <th>Total interest</th>
            <th>vs fixed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixed 6.5% throughout</td>
            <td>n/a</td>
            <td>$1,896</td>
            <td>none</td>
            <td>$382,633</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Variable stays at 5.5%</td>
            <td>n/a</td>
            <td>$1,703</td>
            <td>none</td>
            <td>$313,212</td>
            <td>$69,421 less</td>
          </tr>
          <tr>
            <td>Falls to 4.5% after year 5</td>
            <td>$277,382</td>
            <td>$1,542</td>
            <td>$162 lower</td>
            <td>$264,735</td>
            <td>$117,898 less</td>
          </tr>
          <tr>
            <td>Rises to 7.5% after year 5</td>
            <td>$277,382</td>
            <td>$2,050</td>
            <td>$346 higher (20%)</td>
            <td>$417,150</td>
            <td>$34,517 more</td>
          </tr>
          <tr>
            <td>Rises to 7.5% after year 2</td>
            <td>$291,690</td>
            <td>$2,079</td>
            <td>$376 higher</td>
            <td>$439,546</td>
            <td>$56,912 more</td>
          </tr>
        </tbody>
      </table>
      <p>
        The variable loan wins easily if rates hold or fall, but loses if they rise by 2 points. Solving for the break-even, a
        variable rate after year 5 can average up to about <strong>6.85%</strong> before total interest matches the fixed loan. If
        the rise comes after year 2, the break-even is about <strong>6.62%</strong>, because there is less time to enjoy the saving.
      </p>
      <p>
        Caps can slow the climb without removing it. Suppose a 5/1 ARM starting at 5.5% rose by the maximum each year, with a cap of
        2 points a year and 5 over the life of the loan. The payment would go from $1,703 to $2,050 in year 6, $2,414 in year 7 and
        $2,600 from year 8, which is $897, or 53%, above the starting payment. This is a stress test, not a forecast.
      </p>
      <p>
        Explore your own figures in the <Link href="/calculators/mortgage">mortgage calculator</Link> and see the balance year by
        year in the <Link href="/calculators/loan-amortization">loan amortization calculator</Link>.
      </p>

      <h2>How do you decide between fixed and variable?</h2>
      <ol>
        <li><strong>Stress-test the payment.</strong> Enter a rate 2 or 3 points above the starting rate. If that payment would strain your budget, choose fixed.</li>
        <li><strong>Check your cushion.</strong> Do you have three to six months of expenses saved, and room to absorb a higher payment?</li>
        <li><strong>Think about how long you will stay.</strong> If you expect to sell or refinance before the fixed period ends, a lower starting rate matters more and the reset matters less.</li>
        <li><strong>Read the exit terms.</strong> Look at early repayment charges, caps, margins and what the rate becomes after the fixed period.</li>
        <li><strong>Compare in total, not only month one.</strong> Ask for the quote on both products and run each through the tables above.</li>
      </ol>
      <p>
        A shorter term is another way to cut interest; our <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</Link>{" "}
        shows how. If you are thinking of switching later, the <Link href="/guides/refinance-break-even">refinance break-even guide</Link>{" "}
        explains how to check the costs, and our guide on{" "}
        <Link href="/guides/overpay-mortgage-or-invest">overpaying a mortgage or investing</Link> covers what to do with spare cash.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>Choosing on the starting rate alone and ignoring the reset.</li>
        <li>Assuming you can simply refinance later. Rates, property values and your finances may not allow it.</li>
        <li>Forgetting to act at the end of a UK fixed deal and drifting onto the SVR.</li>
        <li>Overlooking fees: arrangement fees, early repayment charges and valuation costs can change the comparison.</li>
      </ul>
      <p>
        For plain-English help, see the Consumer Financial Protection Bureau&apos;s{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">home-buying guide</a>{" "}
        and, in the UK, <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer">MoneyHelper</a>. All
        figures here are illustrations from assumed rates, not quotes or advice.
      </p>
    </GuideLayout>
  );
}
