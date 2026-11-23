import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "mortgage-payment-with-taxes-insurance-pmi";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Your monthly mortgage bill is usually more than the loan repayment. Lenders quote <strong>PITI</strong>: principal,
        interest, property taxes and homeowners insurance, with private mortgage insurance (PMI) added when you put down less than
        20%. This guide shows how each part is estimated, how much they add up to in a real example, and what you can change.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>PITI stands for principal, interest, taxes and insurance. PMI is a fifth line that applies mainly to conventional loans with less than 20% down.</li>
        <li>On a $350,000 home with 5% down, using the example assumptions below, principal and interest is $2,102 but the full payment is <strong>$2,686</strong>, about $584 more.</li>
        <li>With 20% down the same home costs <strong>$2,216</strong> a month: $470 less, but it takes $52,500 more cash at closing.</li>
        <li>PMI is a percentage of the loan, so it varies widely. At an assumed 1.4% it is about $388 a month on the 5%-down loan; at 0.3% it is about $83.</li>
        <li>PMI ends automatically when the balance is scheduled to reach 78% of the original value, and you can ask to cancel at 80%. In the 5%-down example, PMI runs for 135 months.</li>
      </ul>

      <h2>What are the four parts of PITI?</h2>
      <ol>
        <li><strong>Principal</strong> is the part of the payment that reduces the amount you borrowed.</li>
        <li><strong>Interest</strong> is the lender&apos;s charge for the loan. Together, principal and interest (P&amp;I) stay the same on a fixed-rate loan.</li>
        <li><strong>Taxes</strong> means property tax set by your local authority, usually a percentage of the home&apos;s assessed value each year.</li>
        <li><strong>Insurance</strong> means homeowners insurance, which the lender requires to protect the property.</li>
      </ol>
      <p>
        P&amp;I is the only part fixed by your loan terms. Taxes and insurance are set by third parties and can change every year.
        HOA dues, if you have them, are separate and usually paid directly to the association.
      </p>

      <h2>How is PMI added to the payment?</h2>
      <p>
        PMI is quoted as an <strong>annual percentage of the original loan amount</strong>, divided by 12. Lenders price it by
        risk, so the rate depends on your credit score, your down payment and the loan type. Because it varies by lender and
        borrower, this guide does not claim a typical rate. Every PMI rate here is an <strong>example assumption</strong>: ask
        lenders for quotes at your own credit score. For what PMI is and how it protects the lender, see{" "}
        <Link href="/guides/what-is-pmi">what PMI is and how to avoid it</Link>.
      </p>

      <h2>What does a full monthly payment look like?</h2>
      <p>
        Take a $350,000 home with 5% down ($17,500), leaving a $332,500 loan. The example assumptions, not quotes, are a 6.5%
        30-year rate, 1.1% property tax per year, $1,500 a year of homeowners insurance and a 0.5% PMI rate.
      </p>
      <table>
        <thead>
          <tr>
            <th>Part</th>
            <th>How it is calculated</th>
            <th>Per month</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Principal and interest</td><td>$332,500 at 6.5% over 360 payments</td><td>$2,101.63</td></tr>
          <tr><td>Property tax</td><td>1.1% × $350,000 ÷ 12</td><td>$320.83</td></tr>
          <tr><td>Homeowners insurance</td><td>$1,500 ÷ 12</td><td>$125.00</td></tr>
          <tr><td>PMI</td><td>0.5% × $332,500 ÷ 12</td><td>$138.54</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td><strong>$2,686.00</strong></td></tr>
        </tbody>
      </table>
      <p>
        Principal and interest is about 78% of the bill. A buyer who budgets only for the $2,102 would be about $584 a month short.
      </p>

      <h2>How are property tax and insurance paid through escrow?</h2>
      <p>
        Many lenders collect taxes and insurance with each mortgage payment and hold the money in an <strong>escrow account</strong>.
        They then pay the tax bill and insurance premium for you when they fall due. In the example, tax of $3,850 a year plus
        insurance of $1,500 comes to $5,350, or $445.83 a month. Whether escrow is required or optional depends on your lender
        and loan type, so check your Loan Estimate.
      </p>
      <p>
        The escrow part of your payment is not fixed. If your tax bill and premium both rise 10% (an illustrative figure, not a
        forecast), the example payment goes up by $44.58 to $2,730.58 a month, even though your interest rate has not changed. That
        is why a fixed-rate mortgage payment can still increase over time.
      </p>

      <h2>How do 5%, 10% and 20% down compare?</h2>
      <p>
        The same $350,000 home and the same assumptions, with only the down payment changed. At 20% down the loan is no more than
        80% of the price, so PMI is not charged.
      </p>
      <table>
        <thead>
          <tr>
            <th>Down payment</th>
            <th>Loan</th>
            <th>P&amp;I</th>
            <th>Tax</th>
            <th>Insurance</th>
            <th>PMI</th>
            <th>Total / month</th>
            <th>PMI lasts</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>5% ($17,500)</td><td>$332,500</td><td>$2,102</td><td>$321</td><td>$125</td><td>$139</td><td>$2,686</td><td>135 months</td></tr>
          <tr><td>10% ($35,000)</td><td>$315,000</td><td>$1,991</td><td>$321</td><td>$125</td><td>$131</td><td>$2,568</td><td>109 months</td></tr>
          <tr><td>20% ($70,000)</td><td>$280,000</td><td>$1,770</td><td>$321</td><td>$125</td><td>$0</td><td>$2,216</td><td>None</td></tr>
        </tbody>
      </table>
      <p>
        Totals are calculated before rounding, so a row can differ from the sum of its columns by $1. Total PMI paid is $18,703 at
        5% down and $14,306 at 10% down. Moving from 5% to 20% down saves $470 a month but needs $52,500 more cash, which is why
        PMI can be worth paying for a few years. The <Link href="/guides/what-is-pmi">PMI guide</Link> covers that trade-off in
        more depth.
      </p>

      <h2>How much does the PMI rate change the payment?</h2>
      <p>
        On the 5%-down loan ($332,500), these illustrative PMI rates show how much a quote matters. The monthly PMI is charged for
        the same 135 months in every row.
      </p>
      <table>
        <thead>
          <tr>
            <th>Example PMI rate</th>
            <th>PMI / month</th>
            <th>Total PMI</th>
            <th>Total payment / month</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0.3%</td><td>$83</td><td>$11,222</td><td>$2,631</td></tr>
          <tr><td>0.5%</td><td>$139</td><td>$18,703</td><td>$2,686</td></tr>
          <tr><td>0.9%</td><td>$249</td><td>$33,666</td><td>$2,797</td></tr>
          <tr><td>1.4%</td><td>$388</td><td>$52,369</td><td>$2,935</td></tr>
        </tbody>
      </table>

      <h2>How much do property taxes change the total?</h2>
      <p>
        Property tax rates differ a lot between places, so test your own. With 5% down and the other assumptions unchanged, a 0.6%
        rate means $175 a month in tax and a $2,540 payment. At 1.1% it is $321 and $2,686. At 2.0% it is $583 and $2,949. The
        same price and loan can therefore cost about $408 a month more at the highest rate than at the lowest. Your local tax
        authority or the listing usually shows the current bill, though the amount can be reassessed after a sale.
      </p>

      <h2>When does PMI drop off?</h2>
      <p>
        For conventional loans, the Homeowners Protection Act sets two points, based on the home&apos;s original value. You can
        request cancellation once your balance reaches <strong>80%</strong>, if your payment history is good. The lender must end
        PMI automatically when the balance is scheduled to reach <strong>78%</strong>, if you are current. The Consumer Financial
        Protection Bureau explains the rules in{" "}
        <a
          href="https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          When can I remove PMI from my loan?
        </a>{" "}
        In the 5%-down example the balance is scheduled to reach 78% of $350,000 after 135 payments, or 11 years 3 months. Rules
        for FHA and other loan types differ, and lender-paid PMI is not cancelable the same way.
      </p>

      <h2>How do you lower a PITI payment?</h2>
      <ul>
        <li><strong>Raise your down payment.</strong> It cuts the loan, the PMI and often the rate. Weigh it against keeping an emergency fund.</li>
        <li><strong>Shop PMI and rates.</strong> Compare Loan Estimates from several lenders, and see if improving your credit score first would lower the quote.</li>
        <li><strong>Shop homeowners insurance.</strong> Premiums vary between insurers for the same home.</li>
        <li><strong>Check the tax assessment.</strong> If it looks wrong, ask your local authority how appeals work.</li>
        <li><strong>Pay extra principal.</strong> It gets you to the 80% mark sooner. See <Link href="/guides/extra-mortgage-payments">how extra mortgage payments save money</Link>.</li>
        <li><strong>Compare loan terms.</strong> A shorter term raises the payment but cuts interest, as in the <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</Link>.</li>
      </ul>

      <h2>How do you decide what payment you can afford?</h2>
      <ol>
        <li>Estimate the full PITI payment, not just principal and interest, for a few prices and down payments.</li>
        <li>Compare it with your income. A common guideline keeps housing at or below 28% of gross monthly income; our guide on <Link href="/guides/how-much-house-can-i-afford">how much house you can afford</Link> explains it.</li>
        <li>Leave room for tax and insurance increases, maintenance and closing costs, which sit outside PITI.</li>
        <li>Decide whether a larger down payment now or a few years of PMI fits your savings better.</li>
      </ol>
      <p>
        The <Link href="/calculators/mortgage">mortgage calculator</Link> does this arithmetic. Enter the price, down payment,
        rate and term, then open &ldquo;Taxes, insurance &amp; fees&rdquo; to set property tax as a percentage of the home&apos;s
        value per year, your yearly insurance premium, the PMI rate and monthly HOA dues. It shows the total monthly payment, a
        breakdown chart, how many months of PMI you will pay (until 78%) and the total PMI cost. To work backwards from your
        income to a price, use the <Link href="/calculators/home-affordability">home affordability calculator</Link>.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Is PMI included in a mortgage payment?</h3>
      <p>
        It is added to the payment when it applies, usually on conventional loans with less than 20% down. It is not part of the
        basic principal, interest, tax and insurance figure, so ask lenders whether a quote includes it.
      </p>
      <h3>Is a lower payment with PMI better than waiting to save 20%?</h3>
      <p>
        It depends on your savings, local prices and the PMI quote. PMI can be temporary, and its total cost can be compared with
        the cost of waiting. The figures here use example rates, so rerun them with your own quotes.
      </p>
      <h3>Do UK and EU mortgages include PITI?</h3>
      <p>
        Not in the same way. PMI is a US product, and in the UK and much of Europe property taxes and insurance are generally paid
        separately rather than through the mortgage. Set tax, insurance and PMI to zero in the calculator for a repayment-only
        estimate.
      </p>
      <h3>Can PITI go up on a fixed-rate loan?</h3>
      <p>
        Yes. Principal and interest are fixed, but tax and insurance can rise, which changes the escrow part of the payment. PMI
        ends once the 78% point is reached, which lowers the payment.
      </p>
      <p>
        All figures in this guide are illustrations based on the stated assumptions, not offers, quotes or advice. For general
        home buying information, see the{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">
          Consumer Financial Protection Bureau&apos;s Owning a Home tools
        </a>
        .
      </p>
    </GuideLayout>
  );
}
