import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "lease-vs-buy-car";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

/** Assumed $35,000 car, $3,000 down or due at signing, no tax or fees. Lease: 36 months, 60% residual, money factor 0.00292. Buy: 60-month loan at 7%. */
const COMPARE = [
  { row: "Cash at signing", lease: "$3,000.00", buy: "$3,000.00" },
  { row: "Monthly payment", lease: "$460.32 for 36 months", buy: "$633.64 for 60 months" },
  { row: "Payments after year 3", lease: "A second lease, same terms", buy: "$633.64 until month 60, then none" },
  { row: "Assumed value when you stop", lease: "Returned, no resale value to you", buy: "$21,000 at year 3, $14,000 at year 6" },
  { row: "Net cost, 3 years", lease: "$19,571.52", buy: "$18,963.36" },
  { row: "Net cost, 6 years", lease: "$39,143.04", buy: "$27,018.30" },
  { row: "Average per month, 6 years", lease: "$543.65", buy: "$375.25" },
];

/** Buy side at different assumed values after 6 years. */
const RESALE = [
  { value: "$10,500 (30% of price)", net: "$30,518.30", gap: "$8,624.74" },
  { value: "$14,000 (40% of price)", net: "$27,018.30", gap: "$12,124.74" },
  { value: "$17,500 (50% of price)", net: "$23,518.30", gap: "$15,624.74" },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Leasing means paying to use a car for a set period, while buying means paying for the whole car and keeping what is left of
        its value. Leasing usually has the lower monthly payment, and buying usually costs less the longer you keep the car.{" "}
        <strong>
          On an assumed $35,000 car, two back-to-back 3-year leases cost $39,143.04 over 6 years, against $27,018.30 net to buy with
          a 5-year loan at 7%, keep for 6 years and sell.
        </strong>{" "}
        The result depends heavily on the quote, the mileage you drive and what the car is really worth later.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The lease payment is lower ($460.32 against $633.64 a month in the example) because you pay for the car&apos;s expected loss in value, not the whole price.</li>
        <li>Over 3 years the two are close in this example: $19,571.52 to lease against $18,963.36 net to buy and sell.</li>
        <li>Over 6 years, leasing twice costs $12,124.74 more, because the buyer stops paying after year 5 and still owns a car.</li>
        <li>Everything hinges on the assumed resale value. If the car is worth less than assumed, the buying advantage shrinks.</li>
        <li>Mileage limits, wear charges and early-exit fees can change a lease quote. Read them before comparing payments.</li>
      </ul>
      <p>
        <small>
          Every figure is illustrative, not an offer. Assumptions: a $35,000 car with no tax or fees, and $3,000 paid at signing
          either way. Lease: 36 months, $21,000 residual value (60% of price), money factor 0.00292 (about 7.01% APR when
          multiplied by 2,400), and a second identical lease. Buy: $32,000 financed over 60 months at 7% APR, then kept to month 72.
          Assumed value of the car: $21,000 at year 3 and $14,000 at year 6. Real quotes, taxes and resale values vary. The
          arithmetic is the same in any currency. Figures are rounded to the cent.
        </small>
      </p>

      <h2>How does a car lease actually work?</h2>
      <p>
        A lease is a long rental. The lessor expects the car to be worth a set amount at the end, called the residual value. You
        pay for the drop from the starting price to that residual, plus a finance charge, over the term. You hand the car back at
        the end, or sometimes buy it for the residual price.
      </p>
      <p>The common US lease payment has two parts:</p>
      <ul>
        <li><strong>Depreciation fee:</strong> (adjusted price − residual value) ÷ months. Here ($32,000 − $21,000) ÷ 36 = $305.56.</li>
        <li><strong>Rent charge:</strong> (adjusted price + residual value) × money factor. Here ($32,000 + $21,000) × 0.00292 = $154.76.</li>
        <li><strong>Monthly payment:</strong> $305.56 + $154.76 = $460.32, before any tax or fees.</li>
      </ul>
      <p>
        The adjusted price is the negotiated price less any amount paid up front (here $35,000 − $3,000 = $32,000). The money
        factor is a lease interest rate written as a small decimal, and multiplying it by 2,400 gives an approximate APR. Ask the
        lessor for it, since it is not always quoted. In the UK, the lease-like products are personal contract hire (PCH), which is
        a pure rental with no option to buy, and personal contract purchase (PCP), which is a loan with a large final payment
        you can pay, refinance or usually walk away from, subject to mileage and condition terms. Terms and protections differ across the US, UK and EU.
      </p>

      <h2>How do leasing and buying compare over 3 and 6 years?</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Lease (two 3-year leases)</th>
            <th>Buy (60-month loan)</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((r) => (
            <tr key={r.row}>
              <td>{r.row}</td>
              <td>{r.lease}</td>
              <td>{r.buy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The buy figures are the cash you pay in, plus any loan still owed, minus the assumed sale value. At year 3 the buyer
        still owes $14,152.38 on a car assumed to be worth $21,000, so $6,847.62 of equity covers most of the cost. The loan costs
        $6,018.30 in interest over its 60 months. You can test your own price, rate and term in the{" "}
        <Link href="/calculators/auto-loan">auto loan calculator</Link>.
      </p>

      <h2>Why does buying win when you keep the car longer?</h2>
      <p>
        The biggest loss in value happens early in a car&apos;s life, and a lease charges for that stretch every time. A second lease
        starts the steep part of the curve again, with a fresh $3,000 and another 36 payments. The buyer pays a higher amount for 60
        months, then drives with no payment for the last 12 months of the 6-year period, which pulls the average down to $375.25 a
        month against $543.65 for leasing.
      </p>
      <p>
        If you would replace the car every 3 years anyway, leasing and buying come out close in this example, and leasing has
        fewer loose ends: no selling, often a warranty that covers most of the term, and a known exit price. The comparison is
        tilted by the assumption that the car is worth the same at year 3 as the lease residual. In practice the two differ, and
        any gap lands on the lessor in a lease and on you if you own the car.
      </p>

      <h2>What if the car is worth less than I assume?</h2>
      <p>
        Resale value is the least certain input. Here is the buy side after 6 years at three assumed values, against the $39,143.04
        lease total. These percentages are hypothetical assumptions, not forecasts for any car.
      </p>
      <table>
        <thead>
          <tr>
            <th>Assumed value at year 6</th>
            <th>Net cost to buy</th>
            <th>Lease costs more by</th>
          </tr>
        </thead>
        <tbody>
          {RESALE.map((r) => (
            <tr key={r.value}>
              <td>{r.value}</td>
              <td>{r.net}</td>
              <td>{r.gap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Even at 30%, buying and keeping the car for 6 years beats two leases in this example. Check what similar used cars are
        listed for, since value depends on the model, mileage, condition and market. Repairs and maintenance after the warranty
        ends are not included and tend to rise with age.
      </p>

      <h2>What extra costs can change a lease?</h2>
      <ul>
        <li><strong>Mileage limits.</strong> Leases set an annual allowance and charge for each mile over it. As an assumed example, 2,000 miles a year over the limit at $0.25 a mile adds $1,500 to each 3-year lease, or $3,000 over two. That would take the 6-year lease total to $42,143.04.</li>
        <li><strong>Wear and damage.</strong> Charges at return for dents, tyre or tire wear and interior damage can be significant.</li>
        <li><strong>Early termination.</strong> Ending a lease early can mean paying most of the remaining payments or a large fee.</li>
        <li><strong>Fees and taxes.</strong> Acquisition, disposition and documentation fees apply, and tax rules differ by country and US state.</li>
        <li><strong>Insurance.</strong> Lessors usually require higher cover levels, and gap cover is often included or required.</li>
      </ul>
      <p>
        Buying has its own risks: depreciation is yours, and a long loan can leave you owing more than the car is worth. See{" "}
        <Link href="/guides/car-loan-48-vs-72-months">car loan 48 vs 72 months</Link> for how term length changes the total cost.
      </p>

      <h2>How do you decide between leasing and buying?</h2>
      <ul>
        <li><strong>Think about how long you will keep it.</strong> Keeping a car 5 years or more usually favours buying. Replacing it every 2 to 4 years makes leasing more competitive.</li>
        <li><strong>Estimate your mileage honestly.</strong> If you drive more than the typical limit, buying avoids per-mile charges.</li>
        <li><strong>Compare the total, not the payment.</strong> Add cash at signing, all payments and fees, then subtract the realistic value you keep.</li>
        <li><strong>Check what you can afford.</strong> A lower lease payment can tempt you into a more expensive car. A common guideline is to keep total car costs within a modest share of take-home pay, as covered in{" "}
          <Link href="/guides/how-much-car-can-i-afford">how much car can I afford</Link>.</li>
        <li><strong>Get several quotes.</strong> Ask for the price, residual, money factor or interest rate, fees and mileage terms in writing, and compare lenders as well as the dealer.</li>
        <li><strong>Consider flexibility.</strong> Owning lets you sell or change plans. A lease locks you in for the full term.</li>
      </ul>

      <h2>Where can I get official guidance?</h2>
      <p>
        See the US Consumer Financial Protection Bureau{" "}
        <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer">consumer finance resources</a> and the UK
        Financial Conduct Authority{" "}
        <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">consumer pages</a> for rules on car
        finance and leasing in your country. This guide is general information, not financial advice, and real offers may differ
        from the assumptions above.
      </p>
    </GuideLayout>
  );
}
