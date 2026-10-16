import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "emergency-fund-size";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A common rule of thumb says to keep <strong>three to six months of essential expenses</strong> in cash for emergencies. It is
        a starting point, not a law. The right size for you depends on how stable your income is, who depends on you and what could
        go wrong. This guide shows how to work out your own number, what the targets look like in dollars, how long they take to
        build and where to keep the money.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>The 3 to 6 month guideline applies to essential spending, not total spending. With $3,000 a month of essentials, that is $9,000 to $18,000.</li>
        <li>Aim for more if your income varies, one paycheck supports the household or you own a home. A smaller buffer can work with two steady incomes and few commitments.</li>
        <li>At an example 4% a year, saving $15,000 takes $1,227 a month for 1 year, $601 for 2 years or $393 for 3 years.</li>
        <li>Keep the money somewhere safe, instantly reachable and not tied to the stock market, such as an insured savings account.</li>
        <li>You do not need the full amount before you act. Start with a small buffer, then build toward your target.</li>
      </ul>

      <h2>How big should an emergency fund be?</h2>
      <p>
        The most quoted guideline is three to six months of essential expenses. It exists because a job search, a medical bill or a
        major repair can easily run for months, and credit cards are an expensive way to cover them. Treat the range as a rule of
        thumb. Nobody can tell you the exact figure, because it depends on your situation, and the sections below help you move
        up or down within it.
      </p>

      <h2>Should you count essential expenses or total spending?</h2>
      <p>
        Use <strong>essential expenses</strong>: the costs you must keep paying even in a crisis. That usually means housing,
        utilities, groceries, insurance premiums, transport to work, minimum debt payments and necessary medical costs. Leave out
        dining out, subscriptions, holidays and other costs you could pause.
      </p>
      <p>
        Basing the fund on total spending makes it larger and safer, but also slower to build. If you are unsure, work out both
        figures and aim between them. Review the number whenever your rent, mortgage or family situation changes.
      </p>

      <h2>How much is 3, 6 or 9 months of essentials?</h2>
      <p>
        The table multiplies three example levels of monthly essentials by 3, 6 and 9 months. Replace the examples with your own
        figure.
      </p>
      <table>
        <thead>
          <tr>
            <th>Monthly essentials</th>
            <th>3 months</th>
            <th>6 months</th>
            <th>9 months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$2,000</td>
            <td>$6,000</td>
            <td>$12,000</td>
            <td>$18,000</td>
          </tr>
          <tr>
            <td>$3,000</td>
            <td>$9,000</td>
            <td>$18,000</td>
            <td>$27,000</td>
          </tr>
          <tr>
            <td>$4,500</td>
            <td>$13,500</td>
            <td>$27,000</td>
            <td>$40,500</td>
          </tr>
        </tbody>
      </table>

      <h2>When should you aim for more than six months?</h2>
      <p>These situations raise the risk that a gap in income lasts longer or costs more:</p>
      <ul>
        <li><strong>Variable or irregular income.</strong> Freelancers, commission earners and business owners often have lean months. Many people in this position aim for six to twelve months.</li>
        <li><strong>A single earner.</strong> If one paycheck supports the household, losing it means losing everything at once.</li>
        <li><strong>Owning a home.</strong> A broken boiler or a leaking roof will not wait. Add a cushion for repairs, or keep a separate home-maintenance fund.</li>
        <li><strong>Dependants or health conditions.</strong> More people and more medical needs mean higher essentials and less room to cut.</li>
        <li><strong>A narrow job market.</strong> Specialised roles can take longer to replace.</li>
      </ul>

      <h2>When can you get away with less?</h2>
      <p>
        Two stable incomes, no dependants, low fixed costs and strong employer benefits may justify the three-month end of the range.
        Having other accessible resources, such as a separate investment account, also reduces the need for a large cash pile.
        Even then, many people keep a starter buffer of one month of essentials before working toward a bigger goal.
      </p>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Commonly suggested target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Two steady incomes, no dependants</td>
            <td>About 3 months</td>
          </tr>
          <tr>
            <td>One income or dependants</td>
            <td>About 6 months</td>
          </tr>
          <tr>
            <td>Variable income or self-employed</td>
            <td>6 to 12 months</td>
          </tr>
          <tr>
            <td>Homeowner</td>
            <td>Your range plus a repair cushion</td>
          </tr>
        </tbody>
      </table>
      <p>These ranges are guidelines that people commonly use, not rules.</p>

      <h2>How long does it take to build an emergency fund?</h2>
      <p>
        Suppose your essentials are $3,000 a month and you want about five months of cover, which is <strong>$15,000</strong>.
        The table shows the level monthly saving needed to reach it from zero. The 4% column is an example rate paid on the
        savings, credited monthly, not a forecast. Figures come from Capitiro&apos;s{" "}
        <Link href="/calculators/savings-goal">savings goal calculator</Link>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Time to reach $15,000</th>
            <th>Monthly saving at 0%</th>
            <th>Monthly saving at an example 4%</th>
            <th>Interest earned at 4%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 year</td>
            <td>$1,250</td>
            <td>$1,227</td>
            <td>$273</td>
          </tr>
          <tr>
            <td>2 years</td>
            <td>$625</td>
            <td>$601</td>
            <td>$567</td>
          </tr>
          <tr>
            <td>3 years</td>
            <td>$417</td>
            <td>$393</td>
            <td>$857</td>
          </tr>
        </tbody>
      </table>
      <p>
        Interest helps a little, saving about $23 to $24 a month, but your own contributions do nearly all the work. If you already
        have $3,000 set aside, the monthly amounts at 4% fall to $972, $471 and $304. The savings goal calculator lets you test
        your own target, timeline and starting balance.
      </p>
      <p>
        Rates matter more once the balance is large. On $15,000, an example 4% APY earns about $600 in a year, while an account
        paying 0.5% earns about $75. Both figures are before tax. APY includes the effect of compounding, whereas the savings goal
        calculator takes a nominal rate credited monthly, so its 4% equals roughly a 4.07% APY.
      </p>

      <h2>Where should you keep your emergency fund?</h2>
      <p>The fund has three jobs: it must be safe, easy to reach and boring. That points to cash, not investments.</p>
      <ul>
        <li><strong>High-yield savings account.</strong> The usual choice. It is instantly accessible, and the rate is variable. The{" "}
          <Link href="/guides/high-yield-savings-vs-cds">comparison of high-yield savings and CDs</Link> explains the trade-offs.</li>
        <li><strong>Money market account.</strong> Similar, sometimes with check-writing or a debit card. A bank money market account is deposit-insured; a money market fund is an investment and is not.</li>
        <li><strong>CDs for part of the fund.</strong> Money you are unlikely to need within a year can sit in a CD, but early withdrawal usually costs interest.</li>
        <li><strong>Not the stock market.</strong> A market fall often happens during recessions, which is exactly when job losses rise.</li>
      </ul>
      <p>
        In the US, check that the bank is insured by the{" "}
        <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer">FDIC</a>, which protects deposits up to $250,000 per
        depositor, per insured bank, per ownership category. Federally insured credit unions have similar coverage through the NCUA.
      </p>

      <h2>Should you build it before paying off debt?</h2>
      <p>
        Most people split the effort. A small starter buffer, often one month of essentials, keeps a surprise from landing on a
        credit card. After that, high-interest debt usually deserves priority because a card charging 24% costs far more than a
        savings account pays. See{" "}
        <Link href="/guides/how-long-to-pay-off-credit-card">how long it takes to pay off credit card debt</Link> for examples.
        Once the expensive debt is cleared, build the fund toward your full target.
      </p>

      <h2>How do you decide on your number?</h2>
      <ol>
        <li>Add up your monthly essentials. Check your bank statements rather than guessing.</li>
        <li>Pick a starting range of 3 to 6 months, then move up or down using the situations above.</li>
        <li>Multiply to get a dollar target and set a deadline you can live with.</li>
        <li>Use the savings goal calculator to find the monthly amount, and automate the transfer on payday.</li>
        <li>Reassess once a year, and refill the fund after you use it.</li>
      </ol>

      <h2>What about the UK and Europe?</h2>
      <p>
        The same logic applies. In the UK, an easy-access savings account or cash ISA is the usual home for an emergency fund, and
        deposits at authorised firms are covered by the Financial Services Compensation Scheme. The limit has changed recently, so check{" "}
        <a href="https://www.fscs.org.uk/" target="_blank" rel="noopener noreferrer">fscs.org.uk</a> for the current figure.
        UK rates are quoted as AER, the equivalent of APY. Across the euro area, national deposit guarantee schemes protect savings
        at banks, and the details vary by country.
      </p>

      <p>
        This guide is general information, not personal financial advice. Numbers use example rates and simple assumptions. To see
        what interest does to a growing balance, try the <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>
    </GuideLayout>
  );
}
