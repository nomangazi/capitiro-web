import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "15-vs-30-year-mortgage";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Choosing a mortgage term is one of the biggest money decisions most households make. The two most popular options in the
        US are the 15-year and the 30-year fixed-rate mortgage. The trade-off is simple to state — a higher payment now versus a
        much larger interest bill later — but the right answer depends on your budget, goals and risk tolerance.
      </p>

      <h2>The numbers side by side</h2>
      <p>
        Here is a <strong>$320,000 loan</strong> (a $400,000 home with 20% down). Fifteen-year loans usually carry lower rates, so
        we assume 6.5% for 30 years and 5.9% for 15 years. Figures cover principal and interest only.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>30-year at 6.5%</th>
            <th>15-year at 5.9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly payment</td>
            <td>$2,023</td>
            <td>$2,683</td>
          </tr>
          <tr>
            <td>Total interest</td>
            <td>$408,142</td>
            <td>$162,955</td>
          </tr>
          <tr>
            <td>Balance after 10 years</td>
            <td>$271,284</td>
            <td>$139,118</td>
          </tr>
        </tbody>
      </table>
      <p>
        The 15-year loan costs about <strong>$660 more per month</strong> but saves roughly <strong>$245,000 in interest</strong>{" "}
        — and after ten years you would owe about half as much.
      </p>

      <h2>Why a 15-year mortgage saves so much</h2>
      <ul>
        <li><strong>Lower rate:</strong> lenders take less risk over a shorter term, so they usually charge less.</li>
        <li><strong>Less time for interest to accrue:</strong> interest is charged on the outstanding balance every month, and the balance falls much faster.</li>
        <li><strong>Faster equity:</strong> more of each payment goes to principal from day one.</li>
      </ul>

      <h2>Why many people still choose 30 years</h2>
      <ul>
        <li><strong>Affordability:</strong> the lower payment can make the difference between qualifying for a home or not.</li>
        <li><strong>Flexibility:</strong> you can always pay extra on a 30-year loan, but you can&apos;t pay less on a 15-year one when money is tight.</li>
        <li><strong>Opportunity cost:</strong> the monthly difference could fund retirement accounts that may earn more than your mortgage rate — especially with an employer match.</li>
        <li><strong>Emergency cushion:</strong> a lower fixed cost makes it easier to build and keep an emergency fund.</li>
      </ul>

      <h2>A middle path: 30-year loan, 15-year habits</h2>
      <p>
        Some borrowers take a 30-year mortgage for safety, then voluntarily pay extra each month. You won&apos;t get the lower
        15-year rate, but you keep the option to drop back to the minimum payment during a hard year. Use the extra-payment field in
        our <Link href="/calculators/loan-amortization">loan amortization calculator</Link> to see how much time and interest this
        could save.
      </p>

      <h2>How to decide</h2>
      <ol>
        <li>Make sure the 15-year payment — plus taxes, insurance and any PMI — stays within about 28% of gross income.</li>
        <li>Check that you&apos;ll still have three to six months of expenses saved after closing.</li>
        <li>Confirm you can keep contributing to retirement, at least enough to get any employer match.</li>
        <li>If all three are true, the 15-year loan is usually the cheaper choice. If not, a 30-year loan with optional extra payments is the safer one.</li>
      </ol>
      <p>Run your own numbers with the full payment breakdown below.</p>
    </GuideLayout>
  );
}
