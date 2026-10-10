import { Mortgage } from "@/components/calculators/Mortgage";
import { CalculatorPage } from "@/components/site/CalculatorPage";
import { buildMetadata, type FaqItem } from "@/lib/seo";

const SLUG = "mortgage";

export const metadata = buildMetadata({
  title: "Mortgage Calculator with Taxes, Insurance & PMI",
  description:
    "Free mortgage calculator: estimate your monthly payment with property tax, homeowners insurance, PMI and HOA fees, plus a full amortization schedule.",
  path: `/calculators/${SLUG}`,
});

const faqs: FaqItem[] = [
  {
    question: "What is included in a monthly mortgage payment?",
    answer:
      "Most mortgage payments cover four things, often shortened to PITI: principal (repaying the loan), interest (the lender's charge), property taxes and homeowners insurance. If you put down less than 20%, private mortgage insurance (PMI) is usually added, and condos or planned communities may also charge HOA fees.",
  },
  {
    question: "How much house can I afford?",
    answer:
      "A common guideline is the 28/36 rule: keep your total housing payment below 28% of gross monthly income and all debt payments below 36%. Use this calculator to find the payment for a given price, then compare it with 28% of your monthly income.",
  },
  {
    question: "When does PMI go away?",
    answer:
      "On conventional US loans, lenders must cancel PMI automatically once your balance is scheduled to reach 78% of the home's original value, and you can request cancellation at 80%. This calculator estimates how many months of PMI you will pay based on the 78% rule.",
  },
  {
    question: "Is a 15-year or 30-year mortgage better?",
    answer:
      "A 15-year mortgage has a higher monthly payment but usually a lower rate and far less total interest. A 30-year loan keeps payments lower and more flexible. Switch the loan term in the calculator to compare total interest side by side.",
  },
  {
    question: "Does this calculator work for UK or European mortgages?",
    answer:
      "Yes for the core repayment — principal and interest are calculated the same way everywhere. Simply set property tax, insurance and PMI to zero if they are not paid through your mortgage, and switch the currency in the header to GBP or EUR.",
  },
  {
    question: "How much does a 1% higher interest rate cost?",
    answer:
      "On a $320,000, 30-year loan, moving from 6.5% to 7.5% raises principal and interest from about $2,023 to about $2,237 a month, roughly $215 more. Over the full term that adds about $77,000 in interest. Change the rate field to test your own loan.",
  },
  {
    question: "Does my mortgage payment stay the same for the whole loan?",
    answer:
      "On a fixed-rate loan, principal and interest stay the same. The full payment can still change: property tax and insurance premiums are reviewed each year and often rise, and PMI drops off once your balance reaches 78% of the original value. Adjustable-rate loans can also change principal and interest.",
  },
];

export default function MortgagePage() {
  return (
    <CalculatorPage
      slug={SLUG}
      intro="Estimate your full monthly house payment — principal, interest, property tax, insurance, PMI and HOA — and see how much the loan really costs over time."
      calculator={<Mortgage />}
      faqs={faqs}
      article={
        <>
          <h2>How to use the mortgage calculator</h2>
          <ol>
            <li><strong>Home price</strong> — the purchase price you are considering.</li>
            <li><strong>Down payment</strong> — the cash you put in up front. The percentage is shown next to the label; 20% or more avoids PMI on most conventional loans.</li>
            <li><strong>Interest rate</strong> — the annual rate from your lender quote (not the APR, which also includes fees).</li>
            <li><strong>Loan term</strong> — 30 years is the most common in the US; 15-year loans save interest.</li>
            <li><strong>Taxes, insurance &amp; fees</strong> — property tax as a % of the home&apos;s value per year, your annual insurance premium, the PMI rate and any monthly HOA dues.</li>
          </ol>
          <p>Results update instantly. The donut shows where each monthly dollar goes, and the schedule shows how the balance falls year by year.</p>

          <h2>Mortgage payment formula explained</h2>
          <p>The principal-and-interest part of the payment uses the standard amortization formula:</p>
          <p><strong>M = P × r(1 + r)<sup>n</sup> ÷ [(1 + r)<sup>n</sup> − 1]</strong></p>
          <ul>
            <li><strong>M</strong> = monthly principal and interest payment</li>
            <li><strong>P</strong> = loan amount (home price minus down payment)</li>
            <li><strong>r</strong> = monthly interest rate (annual rate ÷ 12)</li>
            <li><strong>n</strong> = number of monthly payments (years × 12)</li>
          </ul>
          <p>
            Property tax is the annual rate × home price ÷ 12, insurance is the annual premium ÷ 12, and PMI is the annual PMI rate
            × the original loan amount ÷ 12. PMI is charged until the scheduled balance falls to 78% of the purchase price.
          </p>

          <h2>Worked example</h2>
          <p>
            A $400,000 home with 20% down ($80,000) leaves a $320,000 loan. At 6.5% for 30 years, principal and interest come to
            about <strong>$2,023 per month</strong>. Add 1.1% property tax ($367/month) and $1,500/year insurance ($125/month) and
            the full payment is roughly <strong>$2,514</strong>. Over 30 years you would pay around $408,000 in interest — more than
            the original loan. Not sure which price to aim for? Start with our guide on{" "}
            <a href="/guides/how-much-house-can-i-afford">how much house you can afford</a>.
          </p>

          <h2>How much do the rate and term change your payment?</h2>
          <p>
            On a $320,000 loan, each extra percentage point adds about $205 to $215 to a 30-year payment, while a 15-year term raises the
            payment by $730 to $800 a month but cuts total interest by more than half. The table shows principal and interest only.
          </p>
          <table>
            <thead>
              <tr>
                <th>Interest rate</th>
                <th>30-year payment</th>
                <th>30-year interest</th>
                <th>15-year payment</th>
                <th>15-year interest</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>5.5%</td><td>$1,817</td><td>$334,093</td><td>$2,615</td><td>$150,640</td></tr>
              <tr><td>6.5%</td><td>$2,023</td><td>$408,142</td><td>$2,788</td><td>$181,758</td></tr>
              <tr><td>7.5%</td><td>$2,237</td><td>$485,495</td><td>$2,966</td><td>$213,959</td></tr>
            </tbody>
          </table>
          <p>
            Shorter loans usually carry a lower rate too. At 5.9%, the same loan over 15 years costs $2,683 a month and about
            $162,955 in interest. Our <a href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</a> walks through how to
            choose.
          </p>

          <h2>How much does PMI add with a small down payment?</h2>
          <p>
            On a $400,000 home at 6.5%, putting 5% down adds about $158 a month in PMI for roughly 11 years, while 20% down avoids it
            entirely. The table uses the calculator&apos;s default 0.5% PMI rate, 1.1% property tax and $1,500 a year in insurance.
          </p>
          <table>
            <thead>
              <tr>
                <th>Down payment</th>
                <th>Loan amount</th>
                <th>Principal &amp; interest</th>
                <th>PMI per month</th>
                <th>Months of PMI</th>
                <th>Total PMI</th>
                <th>Total monthly payment</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>5% ($20,000)</td><td>$380,000</td><td>$2,402</td><td>$158</td><td>135</td><td>$21,375</td><td>$3,052</td></tr>
              <tr><td>10% ($40,000)</td><td>$360,000</td><td>$2,275</td><td>$150</td><td>109</td><td>$16,350</td><td>$2,917</td></tr>
              <tr><td>15% ($60,000)</td><td>$340,000</td><td>$2,149</td><td>$142</td><td>75</td><td>$10,625</td><td>$2,782</td></tr>
              <tr><td>20% ($80,000)</td><td>$320,000</td><td>$2,023</td><td>$0</td><td>0</td><td>$0</td><td>$2,514</td></tr>
            </tbody>
          </table>
          <p>
            The 5% down payment costs about $538 more each month than 20% down, but needs $60,000 less cash up front. PMI rates vary
            with your credit score and down payment, so replace 0.5% with the rate on your quote. Read{" "}
            <a href="/guides/what-is-pmi">what PMI is and how to avoid it</a> for the ways to shorten or skip it.
          </p>

          <h2>What the mortgage calculator does not include</h2>
          <p>
            It estimates your monthly payment, not the full cost of buying a home. These costs sit outside the numbers above, so
            budget for them separately.
          </p>
          <ul>
            <li><strong>Closing costs.</strong> Lender fees, appraisal, title and similar charges are paid when you buy. Your Loan Estimate lists them.</li>
            <li><strong>Maintenance and repairs.</strong> A common guideline is to set aside about 1% of the home&apos;s value each year.</li>
            <li><strong>Changing bills.</strong> Property tax and insurance can rise after the first year, which raises your total payment even on a fixed-rate loan.</li>
            <li><strong>Rate changes.</strong> The calculator assumes one rate for the whole term. Adjustable-rate loans can reset.</li>
            <li><strong>UK and EU buyers.</strong> Set tax, insurance and PMI to zero. Add the purchase taxes that apply to you, such as Stamp Duty in England, and check whether your rate is fixed for the full term or only for an initial period.</li>
          </ul>

          <h2>Ways to lower your mortgage payment</h2>
          <ul>
            <li><strong>Put more down.</strong> Reaching 20% removes PMI and shrinks the loan.</li>
            <li><strong>Improve your credit score</strong> before applying — even 0.25% lower interest saves thousands.</li>
            <li><strong>Compare lenders.</strong> Rates and fees vary; get at least three Loan Estimates.</li>
            <li><strong>Shop insurance</strong> and appeal your property tax assessment if it looks high.</li>
            <li><strong>Pay extra principal</strong> when you can. An extra $200 a month on the $320,000 loan above cuts about $105,000 of interest and finishes about 6 years and 7 months early. See our <a href="/guides/extra-mortgage-payments">extra mortgage payments guide</a> or the <a href="/calculators/loan-amortization">loan amortization calculator</a>.</li>
            <li><strong>Refinance only if it pays off.</strong> Closing costs must be recovered through lower payments, so check the <a href="/guides/refinance-break-even">refinance break-even point</a> first.</li>
          </ul>
        </>
      }
    />
  );
}
