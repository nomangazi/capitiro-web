import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "debt-avalanche-vs-snowball";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        If you have several debts, the order you pay them off matters. Two strategies dominate: the <strong>debt avalanche</strong>{" "}
        and the <strong>debt snowball</strong>. Both start the same way — pay the minimum on everything, then throw every spare
        dollar at one target debt — but they pick that target differently.
      </p>

      <h2>How the two methods work</h2>
      <h3>Debt avalanche: highest interest rate first</h3>
      <p>
        List your debts from highest APR to lowest. Put all extra money toward the highest-rate debt. When it&apos;s gone, roll that
        payment into the next-highest rate. Because you eliminate the most expensive debt first, this method always costs the least
        interest.
      </p>
      <h3>Debt snowball: smallest balance first</h3>
      <p>
        List your debts from smallest balance to largest, regardless of rate. Clear the smallest one first, then roll its payment
        into the next. You pay a little more interest, but you get quick wins that can keep you motivated.
      </p>

      <h2>A worked example</h2>
      <p>Imagine three debts and a total budget of <strong>$700 a month</strong> for debt repayment:</p>
      <table>
        <thead>
          <tr>
            <th>Debt</th>
            <th>Balance</th>
            <th>APR</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Store card</td>
            <td>$1,200</td>
            <td>15.9%</td>
            <td>$35</td>
          </tr>
          <tr>
            <td>Credit card</td>
            <td>$6,000</td>
            <td>24.9%</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>Car loan</td>
            <td>$9,000</td>
            <td>6.9%</td>
            <td>$260</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Avalanche</th>
            <th>Snowball</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First debt cleared</td>
            <td>Month 18 (credit card)</td>
            <td>Month 5 (store card)</td>
          </tr>
          <tr>
            <td>Debt-free</td>
            <td>Month 27</td>
            <td>Month 27</td>
          </tr>
          <tr>
            <td>Total interest</td>
            <td>≈ $2,400</td>
            <td>≈ $2,560</td>
          </tr>
        </tbody>
      </table>
      <p>
        The avalanche saves about <strong>$155</strong> here. The snowball delivers its first win more than a year earlier. Both are
        debt-free in the same month, because the same $700 goes to debt every month either way.
      </p>

      <h2>Which one should you choose?</h2>
      <ul>
        <li><strong>Choose the avalanche</strong> if you are disciplined and motivated by saving the most money, or if your high-rate debt is also large.</li>
        <li><strong>Choose the snowball</strong> if you&apos;ve struggled to stick with a plan before. Research on consumer behaviour suggests early wins help many people keep going.</li>
        <li><strong>Hybrid:</strong> knock out one or two tiny balances for momentum, then switch to avalanche order.</li>
      </ul>
      <p>The best method is the one you will actually finish.</p>

      <h2>Speed up either method</h2>
      <ul>
        <li>Ask card issuers for a lower APR — a one-minute call can cut your rate.</li>
        <li>Consider a 0% balance transfer or a lower-rate consolidation loan (watch for fees).</li>
        <li>Put windfalls such as tax refunds straight onto the target debt.</li>
        <li>Keep a small emergency fund so new expenses don&apos;t go back on a card — our <Link href="/calculators/savings-goal">savings goal calculator</Link> can help you plan one.</li>
      </ul>
      <p>See exactly how long one card will take to clear with the calculator below.</p>
    </GuideLayout>
  );
}
