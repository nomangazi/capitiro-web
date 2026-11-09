import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "overpay-mortgage-or-invest";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Overpaying your mortgage gives a guaranteed return equal to your mortgage rate, while investing gives an uncertain return that
        may be higher or lower. As a rough guide, the two come out about level when the investment return matches the mortgage rate,
        so the higher your rate, the stronger the case for overpaying.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Every extra pound or dollar you put into a mortgage earns your mortgage rate, risk-free, because it removes interest you would otherwise pay.</li>
        <li>On a <strong>$300,000</strong> loan at 6.5% for 30 years, <strong>$300 extra a month</strong> saves <strong>$135,115</strong> in interest and ends the loan <strong>9 years 2 months</strong> early.</li>
        <li>Compared like for like over 30 years, overpaying leaves you ahead if investments return 4% or 6% a year, and behind if they return 8%. The breakeven is about 6.4%.</li>
        <li>With a 3% mortgage the answer flips: investing wins at all three return assumptions tested here. With a 7% mortgage, overpaying wins at 4% and 6%.</li>
        <li>Investment returns here are hypothetical constants. Real returns vary year to year and are not guaranteed, and taxes and fees are ignored.</li>
      </ul>

      <h2>What does overpaying a mortgage actually earn?</h2>
      <p>
        Mortgage interest is charged on the outstanding balance. When you pay extra, the balance falls straight away, so you stop paying
        interest on that money for the rest of the loan. The saving is a guaranteed return equal to your mortgage rate: pay down a 6.5%
        mortgage and you effectively earn 6.5% a year with no market risk. Our guide to{" "}
        <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link> shows how the saving builds up.
      </p>
      <p>
        That return is interest you avoid paying rather than income you receive, so it is not an investment gain. It
        is also locked in: you cannot easily get the money back out of your house. Both points matter when you compare it with
        investing.
      </p>

      <h2>What does investing the same money earn?</h2>
      <p>
        Invested money can grow faster than a mortgage rate, slower, or even fall for a while. To keep the comparison fair we use
        hypothetical constant annual returns of 4%, 6% and 8%, compounded monthly. Real markets never move in a straight line, so treat
        these as scenarios, not forecasts. Taxes, account fees and fund charges are ignored, and all three would reduce the investing
        result. Our guide to <Link href="/guides/dollar-cost-averaging">dollar-cost averaging</Link> covers how regular investing works in
        practice.
      </p>

      <h2>How do you compare the two fairly?</h2>
      <p>
        A common mistake is to compare interest saved with investment growth over different time periods. Overpaying ends the loan early,
        so afterwards you no longer need that payment. For a fair comparison, both scenarios run for the full 30-year term and we compare
        net worth at the end:
      </p>
      <ul>
        <li><strong>Overpay:</strong> pay the regular payment plus the extra until the loan is gone, then invest the whole freed-up payment (regular plus extra) until year 30.</li>
        <li><strong>Invest:</strong> pay only the regular payment for 30 years and invest the extra amount every month.</li>
      </ul>
      <p>
        In both cases the house is fully paid off at year 30, so the difference comes down to the invested pot. Money is invested at the
        start of each month.
      </p>

      <h2>Worked example: $300,000 at 6.5%, $300 extra a month</h2>
      <p>
        The regular payment on a <strong>$300,000 loan at 6.5% for 30 years</strong> is <strong>$1,896.20</strong> a month, and the loan
        costs <strong>$382,633</strong> in interest if you pay only that. Adding $300 a month brings total interest down to $247,518, a
        saving of <strong>$135,115</strong>, and the loan ends after 20 years 10 months. You pay the extra for 250 months, which is{" "}
        $75,000 of overpayments. For the remaining 110 months you invest the freed-up $2,196.20 a month.
      </p>
      <p>
        In the invest scenario you put $300 a month into investments for 360 months, which is $108,000 of contributions. Here is the
        result at year 30:
      </p>
      <table>
        <thead>
          <tr>
            <th>Investment return</th>
            <th>Overpay, then invest the freed payment</th>
            <th>Invest $300 a month throughout</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>4% a year</td><td>$292,212</td><td>$208,909</td><td>Overpaying ahead by $83,303</td></tr>
          <tr><td>6% a year</td><td>$322,637</td><td>$302,861</td><td>Overpaying ahead by $19,776</td></tr>
          <tr><td>8% a year</td><td>$357,145</td><td>$450,089</td><td>Investing ahead by $92,944</td></tr>
        </tbody>
      </table>
      <p>
        The breakeven return is about <strong>6.4%</strong>, slightly below the 6.5% mortgage rate. The small gap exists because the
        overpay scenario also builds a pot during the final 110 months. Above that return, investing wins on paper. Below it, overpaying
        wins, and with a much steadier path.
      </p>

      <h2>How does your mortgage rate change the answer?</h2>
      <p>
        The same $300 extra on a $300,000, 30-year loan, at three mortgage rates. Each cell shows the year-30 net worth of overpaying
        minus the net worth of investing. A positive number means overpaying is ahead.
      </p>
      <table>
        <thead>
          <tr>
            <th>Mortgage rate</th>
            <th>Regular payment</th>
            <th>Interest saved</th>
            <th>Years cut</th>
            <th>Investing at 4%</th>
            <th>Investing at 6%</th>
            <th>Investing at 8%</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>3%</td><td>$1,265</td><td>$46,366</td><td>8 yrs 2 mo</td><td>-$27,294</td><td>-$104,607</td><td>-$233,231</td></tr>
          <tr><td>5%</td><td>$1,610</td><td>$91,741</td><td>8 yrs 8 mo</td><td>+$28,892</td><td>-$41,797</td><td>-$162,827</td></tr>
          <tr><td>7%</td><td>$1,996</td><td>$151,521</td><td>9 yrs 5 mo</td><td>+$106,568</td><td>+$46,464</td><td>-$62,233</td></tr>
        </tbody>
      </table>
      <p>
        The pattern is simple: overpaying wins when the investment return is below the mortgage rate and loses when it is above. The
        breakeven return is about 2.9% for the 3% loan, 5.0% for the 5% loan and 7.0% for the 7% loan. The real question is how likely you
        think it is that your investments will beat your mortgage rate after tax and fees, and how much risk you are happy to take to find
        out.
      </p>

      <h2>What do the US and UK rules change?</h2>
      <p>
        <strong>United States:</strong> many mortgages have no prepayment penalty, but not all, so check your loan documents. A common
        guideline is to capture any employer 401(k) match first, because a match is an instant return that a mortgage rate rarely
        matches. Tell your servicer that extra money is for principal only.
      </p>
      <p>
        <strong>United Kingdom:</strong> many fixed-rate deals limit how much you can overpay without an early repayment charge, and
        the rules differ between lenders and products. Check your lender&apos;s terms before overpaying, and ask whether an overpayment
        shortens your term or lowers your monthly payment. Tax-advantaged wrappers such as ISAs and pensions change the investing side
        of the comparison, so look at what is available to you.
      </p>
      <p>
        The maths above works the same in pounds or euros. Only the rates, the fees and the local rules differ.
      </p>

      <h2>How should you decide?</h2>
      <ol>
        <li><strong>Clear high-interest debt first.</strong> A credit card at 20% beats any realistic investment return and any mortgage rate.</li>
        <li><strong>Build an emergency fund.</strong> Cash in your house is hard to reach. See <Link href="/guides/emergency-fund-size">how big an emergency fund should be</Link>.</li>
        <li><strong>Take free money.</strong> A common guideline is to take any employer pension or 401(k) match before overpaying.</li>
        <li><strong>Compare your rate with a realistic return.</strong> The higher your mortgage rate, the higher the guaranteed return from overpaying. At 3%, investing has a wider margin for error.</li>
        <li><strong>Consider your risk tolerance.</strong> Overpaying gives a certain outcome. Investing could finish well ahead or well behind, and a market fall can arrive just when you need the money.</li>
        <li><strong>Consider doing both.</strong> Splitting the extra, for example half each way, gives a guaranteed saving and exposure to growth.</li>
        <li><strong>Check your fixed term.</strong> If your deal is about to end, a refinance may change the picture. See <Link href="/guides/refinance-break-even">refinance break-even</Link>.</li>
      </ol>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Comparing interest saved with investment growth over different periods.</strong> Overpaying ends the loan early, so remember to count what you do with the freed-up payment.</li>
        <li><strong>Assuming an investment return is guaranteed.</strong> An 8% average does not mean 8% every year, and the order of returns matters.</li>
        <li><strong>Ignoring taxes and fees.</strong> They cut the investing result in this guide and vary by country and account.</li>
        <li><strong>Forgetting liquidity.</strong> You can sell investments, but you cannot easily take money back out of a paid-down mortgage.</li>
        <li><strong>Breaching overpayment limits.</strong> Going over a lender&apos;s allowance can trigger charges, so check first.</li>
        <li><strong>Paying extra with no instructions.</strong> Make sure the money reduces principal rather than being held against next month&apos;s bill.</li>
      </ul>

      <h2>Try it with your own mortgage</h2>
      <p>
        Enter your balance, rate and remaining term in the <Link href="/calculators/loan-amortization">loan amortization calculator</Link>,
        then add an extra monthly amount to see the interest saved and the new payoff date. Compare that with what the same amount could
        grow to in our <Link href="/guides/sip-vs-lump-sum">SIP vs lump sum</Link> guide, and use your own rate and a cautious return
        assumption.
      </p>

      <p>
        This guide is general education, not personal financial advice. Investments can fall as well as rise, and past performance does
        not predict future returns. The investment returns above are hypothetical constants for illustration, and taxes, fees and local
        lender rules are not modelled. Speak to a qualified adviser about your own situation.
      </p>
    </GuideLayout>
  );
}
