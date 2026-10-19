import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "401k-vs-ira";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A 401(k) is a retirement plan offered through an employer, and an IRA is an account you open yourself. For most people the
        order that works best is simple: contribute enough to the 401(k) to get the full employer match, then compare an IRA with
        the rest of the 401(k) on fees, investment choices and tax treatment. This guide explains the differences with 2026 limits
        and a worked example.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>An employer match is part of your pay. In the example below, a 50% match on the first 6% of salary adds about $244,000 over 30 years.</li>
        <li>For 2026 the 401(k) employee limit is $24,500 and the IRA limit is $7,500, so a 401(k) can shelter far more each year.</li>
        <li>Both account types come in traditional (tax break now, taxed later) and Roth (no break now, tax-free qualified withdrawals) versions.</li>
        <li>Fees matter. A 0.8 percentage-point gap in annual fees cost about $69,000 in the example.</li>
        <li>You can use both. Having a 401(k) does not stop you contributing to an IRA, though it can limit the tax deduction.</li>
      </ul>

      <h2>What is the difference between a 401(k) and an IRA?</h2>
      <p>
        A 401(k) is set up by your employer. Contributions come out of your paycheck, and the plan chooses the investment menu and
        the provider. An individual retirement account (IRA) is opened by you at a brokerage or bank, and you choose from almost
        any stock, bond or fund that provider offers.
      </p>
      <p>
        Both are tax-advantaged. Neither is an investment by itself. It is a container that holds investments, so the funds you
        pick inside matter as much as the account type.
      </p>

      <h2>How do the 2026 limits and rules compare?</h2>
      <p>
        These figures come from the IRS announcement of 2026 limits. They are adjusted most years, so check the current amounts
        before you contribute.
      </p>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>401(k)</th>
            <th>IRA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026 contribution limit</td>
            <td>$24,500 (employee deferrals)</td>
            <td>$7,500 (traditional and Roth combined)</td>
          </tr>
          <tr>
            <td>Catch-up at age 50 or older</td>
            <td>$8,000 extra ($11,250 at ages 60 to 63 if the plan allows)</td>
            <td>$1,100 extra</td>
          </tr>
          <tr>
            <td>Employer match</td>
            <td>Possible, set by your employer</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Income limits</td>
            <td>None on contributing; Roth catch-ups required above a pay threshold</td>
            <td>Roth eligibility and traditional deduction phase out with income</td>
          </tr>
          <tr>
            <td>Investment choices</td>
            <td>A limited menu chosen by the plan</td>
            <td>Wide choice at most providers</td>
          </tr>
          <tr>
            <td>Typical costs</td>
            <td>Fund fees plus possible plan fees</td>
            <td>Fund fees only; many index funds are very cheap</td>
          </tr>
          <tr>
            <td>Roth option</td>
            <td>Only if your plan offers it</td>
            <td>Yes, if your income is under the limit</td>
          </tr>
        </tbody>
      </table>
      <p>
        The 401(k) limit counts your own contributions. Employer contributions are on top of it, subject to a separate overall
        limit. From 2026, if your wages from the plan sponsor were above $150,000 in the prior year, catch-up contributions must
        go in as Roth contributions where the plan offers a Roth option.
      </p>

      <h2>Which income limits apply to IRAs?</h2>
      <p>
        You can always contribute to an IRA if you have earned income, but the tax benefit can shrink as income rises. For 2026:
      </p>
      <ul>
        <li>Roth IRA contributions phase out between $153,000 and $168,000 of modified adjusted gross income for single filers, and between $242,000 and $252,000 for married couples filing jointly.</li>
        <li>The traditional IRA deduction, if you are covered by a workplace plan, phases out between $81,000 and $91,000 for single filers and $129,000 and $149,000 for joint filers.</li>
        <li>If you are not covered by a workplace plan but your spouse is, the deduction phases out between $242,000 and $252,000 for joint filers.</li>
      </ul>
      <p>
        Married filing separately has much lower ranges. The IRS explains the details in its{" "}
        <a
          href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500"
          target="_blank"
          rel="noopener noreferrer"
        >
          announcement of 2026 retirement plan limits
        </a>
        .
      </p>

      <h2>What is the difference between traditional and Roth?</h2>
      <p>
        Traditional contributions are generally made before tax (or are deductible), grow tax-deferred, and are taxed as ordinary
        income when withdrawn. Roth contributions are made with money that has already been taxed, and qualified withdrawals are
        tax-free. Both the 401(k) and the IRA come in both flavors, though a Roth 401(k) depends on your employer.
      </p>
      <p>
        The choice mostly comes down to your tax rate now compared with your expected rate in retirement. If your rate will be
        lower in retirement, traditional tends to win. If it will be higher, Roth tends to win. If it is the same, the two end up
        about equal. Nobody knows future tax rates, so many people split contributions between the two.
      </p>

      <h2>How much is an employer match worth?</h2>
      <p>
        Take a 35-year-old earning $80,000 who plans to retire at 65 and earns a 7% average annual return. They contribute 6% of
        pay, or $400 a month, and the employer matches 50% of that, or $200 a month. These are example assumptions, not a typical
        or guaranteed plan. All results were calculated with the same formulas as our retirement calculator and are before tax and
        inflation.
      </p>
      <table>
        <thead>
          <tr>
            <th>Scenario (30 years, 7%)</th>
            <th>Monthly saved</th>
            <th>Balance at 65</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IRA or 401(k) without a match</td>
            <td>$400</td>
            <td>$487,988</td>
          </tr>
          <tr>
            <td>401(k) with the 50% match</td>
            <td>$600 ($400 + $200 match)</td>
            <td>$731,983</td>
          </tr>
          <tr>
            <td>The match alone</td>
            <td>$200</td>
            <td>$243,994</td>
          </tr>
        </tbody>
      </table>
      <p>
        The same $400 a month leaves the paycheck either way, yet the match adds $2,400 a year and about $244,000 by age 65. That
        is why contributing up to the match comes first for most people. Check your plan&apos;s vesting schedule, which can
        require you to stay for some years before the match is fully yours.
      </p>

      <h2>How much do fees and investment choices matter?</h2>
      <p>
        A 401(k) menu can include expensive funds, while an IRA lets you pick low-cost index funds. Suppose the 401(k) fund costs
        0.9% a year and an IRA index fund costs 0.1%. From the same 7% gross return, the net returns are about 6.1% and 6.9%. We
        use that simple subtraction as an approximation. On $400 a month for 30 years:
      </p>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Net return</th>
            <th>Balance at 65</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Low-cost IRA fund</td>
            <td>6.9%</td>
            <td>$478,468</td>
          </tr>
          <tr>
            <td>Higher-cost 401(k) fund, no match</td>
            <td>6.1%</td>
            <td>$409,578</td>
          </tr>
          <tr>
            <td>Higher-cost 401(k) fund with the $200 match</td>
            <td>6.1% on $600</td>
            <td>$614,367</td>
          </tr>
        </tbody>
      </table>
      <p>
        Without a match, the cheaper IRA wins by $68,890. With the match, the 401(k) still comes out well ahead despite the higher
        fees, because the match adds money you would not otherwise get (once it vests). Our guide on{" "}
        <Link href="/guides/investment-fees-impact">how investment fees reduce your returns</Link> goes deeper.
      </p>

      <h2>Traditional or Roth: what does the math look like?</h2>
      <p>
        Assume you have $4,800 a year of pay to put aside. A traditional account takes the full $4,800 (about $400 a month). In a
        22% tax bracket, a Roth account takes only $3,744 after tax (about $312 a month) for the same take-home pay. Both grow at
        7% for 30 years:
      </p>
      <table>
        <thead>
          <tr>
            <th>Tax rate in retirement</th>
            <th>Traditional, after tax</th>
            <th>Roth (tax-free)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12%</td>
            <td>$429,430</td>
            <td>$380,631</td>
          </tr>
          <tr>
            <td>22% (same as now)</td>
            <td>$380,631</td>
            <td>$380,631</td>
          </tr>
          <tr>
            <td>32%</td>
            <td>$331,832</td>
            <td>$380,631</td>
          </tr>
        </tbody>
      </table>
      <p>
        The traditional balance before tax is $487,988, so each tax rate is applied to that. When the rates are equal, the two are
        the same, which is why the comparison depends on your tax rate now and later. This ignores state tax, the effect of
        withdrawals on your bracket, and any investing of the tax savings, so treat it as an illustration.
      </p>

      <h2>What are the withdrawal rules?</h2>
      <ul>
        <li>Withdrawals before age 59½ are generally subject to income tax (on the taxable part) plus a 10% additional tax, unless an exception applies.</li>
        <li>Traditional accounts require minimum distributions to begin at age 73 or 75, depending on your birth year. Workplace plan participants may be able to delay until they retire.</li>
        <li>Qualified Roth withdrawals are tax-free, but they must meet age and holding-period tests.</li>
      </ul>
      <p>
        The IRS publishes the{" "}
        <a
          href="https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs"
          target="_blank"
          rel="noopener noreferrer"
        >
          required minimum distribution FAQs
        </a>{" "}
        and the early-withdrawal rules. Our <Link href="/guides/4-percent-rule">4% rule guide</Link> covers how to turn a
        balance into retirement income.
      </p>

      <h2>How should I decide between a 401(k) and an IRA?</h2>
      <ol>
        <li>Contribute to your 401(k) up to the full employer match, if there is one.</li>
        <li>Check your 401(k) fees and fund choices. If they are high and an IRA is cheaper, consider putting the next dollars into an IRA.</li>
        <li>Decide between traditional and Roth based on your tax rate now versus later, and the income limits above.</li>
        <li>If you can save more, go back to the 401(k) and increase contributions toward the $24,500 limit.</li>
        <li>Use the <Link href="/calculators/retirement">retirement calculator</Link> to see whether your total savings are on track, and compare the result with the benchmarks in our guide to <Link href="/guides/retirement-savings-by-age">retirement savings by age</Link>.</li>
      </ol>

      <h2>What happens to my 401(k) if I change jobs?</h2>
      <p>
        You can usually leave the money in the old plan, move it to a new employer&apos;s plan, cash it out or roll it into an
        IRA. A direct rollover from a 401(k) to an IRA keeps the tax benefits and avoids the early-withdrawal tax. Cashing out
        generally triggers income tax and possibly the 10% additional tax. A rollover also lets you choose cheaper investments,
        but compare fees and features first.
      </p>

      <h2>Frequently asked questions</h2>
      <h3>Can I have both a 401(k) and an IRA?</h3>
      <p>
        Yes. The limits are separate, so you can contribute to both in the same year. Having a workplace plan can reduce or remove
        the deduction for traditional IRA contributions at higher incomes, but it does not stop you contributing.
      </p>
      <p>
        This guide is general information, not personal financial or tax advice. Tax rules and limits change, and your own
        situation may differ, so check with the IRS or a qualified adviser.
      </p>
    </GuideLayout>
  );
}
