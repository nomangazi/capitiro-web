import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "sinking-funds";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Some bills arrive once a year, some arrive without warning, and both can wreck a monthly budget. A{" "}
        <strong>sinking fund</strong> is a pot of money you build in small steps for a cost you know is coming, so that when the
        bill lands you simply pay it. This guide explains how sinking funds work, how to size each one, where to keep the money and
        what the alternative of using a credit card actually costs. All rates are examples, not current offers.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>A sinking fund is a target, a deadline and a regular transfer. Target divided by months gives the monthly saving: $1,200 over 12 months is $100 a month.</li>
        <li>Five example costs totalling $5,400 a year need $450 a month at 0% interest, or about $442 a month in an account paying an example 4%.</li>
        <li>Interest is a small bonus on short timelines. On a $2,400 holiday saved over 12 months, an example 4% earns about $44.</li>
        <li>Paying the same $2,400 on a card at an example 24% APR and repaying $200 a month takes 14 months and costs about $372 in interest.</li>
        <li>A sinking fund is for expected costs. An emergency fund is for surprises. Keep them separate so neither raids the other.</li>
      </ul>

      <h2>What is a sinking fund?</h2>
      <p>
        A sinking fund is money set aside for a specific future expense. You pick the cost, estimate the amount, choose the date it
        is due and divide the total by the number of months you have. Then you move that amount into a labelled pot every payday.
        Businesses use the term for money earmarked to repay a debt, but in personal finance it simply means saving in advance for
        a known, irregular cost.
      </p>
      <p>
        Typical examples are car insurance renewals, holidays, servicing and repairs, gifts, annual subscriptions, vet or dental
        bills, school costs, taxes paid in lumps and a new phone or laptop. None of these are emergencies. They are just not
        monthly, so they feel like emergencies when nothing has been put aside.
      </p>

      <h2>How is a sinking fund different from an emergency fund?</h2>
      <p>
        An <Link href="/guides/emergency-fund-size">emergency fund</Link> covers the genuinely unpredictable: a job loss, a
        medical event, an urgent home repair. It is one pot, sized to several months of essential spending, and you hope not to
        touch it. A sinking fund covers things you can see coming. You expect to spend it, and the amount and date are known or
        reasonably estimated.
      </p>
      <p>
        Having both matters because they fail in opposite ways. Without sinking funds, predictable bills drain the emergency fund
        and leave you exposed. Without an emergency fund, a true surprise forces you to borrow. The table compares the two with
        the usual alternative, a credit card.
      </p>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Sinking fund</th>
            <th>Emergency fund</th>
            <th>Credit card</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Used for</td>
            <td>Known, irregular costs</td>
            <td>Unpredictable shocks</td>
            <td>Anything, paid for later</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>One target per cost</td>
            <td>Commonly 3 to 6 months of essentials</td>
            <td>Your credit limit</td>
          </tr>
          <tr>
            <td>Cost of using it</td>
            <td>None, you earn a little interest</td>
            <td>None, you earn a little interest</td>
            <td>Interest if not repaid in full</td>
          </tr>
          <tr>
            <td>When you pay</td>
            <td>Before the expense</td>
            <td>Before the emergency</td>
            <td>After the expense</td>
          </tr>
          <tr>
            <td>Refilled?</td>
            <td>Yes, for the next cycle</td>
            <td>Yes, after you use it</td>
            <td>Repay, or pay interest</td>
          </tr>
        </tbody>
      </table>

      <h2>How much should I put in each sinking fund?</h2>
      <p>
        Start with last year&apos;s statements to find what each cost really was, then divide by the months until it is due. The
        table uses five example costs, each saved over 12 months from zero. The 4% column is an example rate credited monthly,
        not a forecast. Figures come from Capitiro&apos;s <Link href="/calculators/savings-goal">savings goal calculator</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cost</th>
            <th>Target</th>
            <th>Monthly at 0%</th>
            <th>Monthly at an example 4%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Car insurance renewal</td>
            <td>$1,200</td>
            <td>$100</td>
            <td>$98</td>
          </tr>
          <tr>
            <td>Holiday</td>
            <td>$2,400</td>
            <td>$200</td>
            <td>$196</td>
          </tr>
          <tr>
            <td>Car maintenance and repairs</td>
            <td>$900</td>
            <td>$75</td>
            <td>$74</td>
          </tr>
          <tr>
            <td>Gifts and celebrations</td>
            <td>$600</td>
            <td>$50</td>
            <td>$49</td>
          </tr>
          <tr>
            <td>Medical, dental or vet</td>
            <td>$300</td>
            <td>$25</td>
            <td>$25</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>$5,400</strong></td>
            <td><strong>$450</strong></td>
            <td><strong>About $442</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        The total shows why this works: $5,400 sounds large, but it becomes about $450 a month, which is easier to plan than five
        separate lump sums. For uncertain costs such as repairs, use a sensible average of past years and top up the fund after a
        bad year. A shorter deadline raises the monthly amount quickly. The $2,400 holiday needs $400 a month over 6 months, $200
        over 12 months or $100 over 24 months at 0%.
      </p>

      <h2>What does it cost to put the expense on a credit card instead?</h2>
      <p>
        Take the $2,400 holiday. Saving for 12 months in an account paying an example 4% needs $196.36 a month and earns about $44
        in interest, so the trip costs slightly less than its price. Now suppose you book it on a card at an example 24% APR and
        repay $200 a month. That takes 14 months and about $372 in interest, so you pay about $2,772 in total.
      </p>
      <table>
        <thead>
          <tr>
            <th>$2,400 holiday</th>
            <th>Save first (example 4%)</th>
            <th>Card at example 24% APR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly amount</td>
            <td>About $196</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Months of payments</td>
            <td>12, before the trip</td>
            <td>14, after the trip</td>
          </tr>
          <tr>
            <td>Interest</td>
            <td>About $44 earned</td>
            <td>About $372 paid</td>
          </tr>
          <tr>
            <td>Total cost of the trip</td>
            <td>About $2,356</td>
            <td>About $2,772</td>
          </tr>
        </tbody>
      </table>
      <p>
        The monthly payment is almost the same. The difference is timing: with a sinking fund you pay before and earn interest,
        with a card you pay after and are charged interest. If you repay only $100 a month on the card, the same debt takes 34
        months and about $902 in interest. The{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">credit card payoff guide</Link> shows how payments and rates
        interact.
      </p>

      <h2>Where should I keep sinking fund money?</h2>
      <p>The right place depends on how soon you need the money.</p>
      <ul>
        <li><strong>Due within a year:</strong> an easy-access or high-yield savings account. It is safe, reachable and may pay interest.</li>
        <li><strong>Due in one to three years:</strong> a high-yield account is still simple. A fixed-term deposit can lock a rate if the date is certain, but check early withdrawal rules. The <Link href="/guides/high-yield-savings-vs-cds">guide to high-yield savings and CDs</Link> compares the trade-offs.</li>
        <li><strong>Not the stock market:</strong> a fall just before the bill is due leaves you short. Money needed on a known date should not be exposed to market swings.</li>
        <li><strong>Not your everyday account:</strong> money sitting next to daily spending tends to get spent.</li>
      </ul>
      <p>
        One account can hold several pots if you keep a clear record and the targets add up to the balance. Check that the bank is
        covered by a deposit guarantee scheme in your country, such as the FDIC in the US or the FSCS in the UK.
      </p>

      <h2>How do I decide how many sinking funds to have?</h2>
      <ol>
        <li>List every cost from the last 12 months that was not monthly. Check bank and card statements rather than memory.</li>
        <li>Add costs you know are coming, such as a renewal date or a planned trip.</li>
        <li>Give each one a target and a due date, and divide to get the monthly amount.</li>
        <li>Merge small items into one pot, such as &quot;annual extras&quot;, so you manage a handful of pots, not fifteen.</li>
        <li>Automate the transfer on payday. If the total is too high, extend a deadline or lower a target rather than skipping a fund.</li>
        <li>When a cost is paid, reset the pot and start saving for the next one.</li>
      </ol>
      <p>
        If the monthly total does not fit, rank the funds. Fixed, unavoidable costs such as insurance come first. Flexible ones such
        as holidays can wait or shrink. Test different amounts and deadlines in the savings goal calculator before you commit.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>How is a sinking fund different from a savings goal?</h3>
      <p>
        The mechanics are the same. &quot;Sinking fund&quot; usually describes a recurring or expected cost, while a savings goal
        can be a one-off target such as a deposit. Both use a target, a date and a monthly amount.
      </p>
      <h3>Do I need a separate account for each sinking fund?</h3>
      <p>
        No. One account with a clear record of each pot works, and some banks offer labelled pots. Separate accounts make it harder
        to spend the money by accident, but are optional.
      </p>
      <h3>Should I build sinking funds before an emergency fund?</h3>
      <p>
        Many people start with a small emergency buffer, then add sinking funds, then grow the emergency fund toward its full
        target. The buffer stops a surprise landing on a card, and sinking funds stop predictable bills draining the buffer.
      </p>
      <h3>What if I spend less than I saved?</h3>
      <p>
        The surplus stays in the pot and reduces what you need to save next cycle, or you can move it to another goal.
      </p>

      <p>
        This guide is general information, not personal financial advice. Numbers use example rates and simple assumptions, and
        the costs are illustrations rather than averages. Work out your own targets with the{" "}
        <Link href="/calculators/savings-goal">savings goal calculator</Link>.
      </p>
    </GuideLayout>
  );
}
