import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "isa-vs-sipp";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A <strong>Stocks &amp; Shares ISA</strong> and a <strong>SIPP</strong> (self-invested personal pension) both let your money
        grow free of UK tax on gains and income inside the account. The difference is when you get your tax break. An ISA takes
        money you have already paid tax on, and you can take it out tax-free at any time. A SIPP adds tax relief on the way in, but you
        cannot touch it until pension age, and most withdrawals beyond the first 25% are taxed as income. This guide compares them
        with a worked example. All figures are illustrative assumptions, not forecasts.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>With basic-rate (20%) relief, every £400 you pay into a SIPP becomes £500 in the pot. £400 a month for 25 years at an assumed 5% a year grows to £297,755 in a SIPP, compared with £238,204 in an ISA.</li>
        <li>After tax on withdrawals, that SIPP pot is worth about £253,092 if the taxable part is taxed at 20%, and about £208,428 if it is taxed at 40%. Both are before any State Pension or other income is counted.</li>
        <li>In this example the two come out level when the taxable 75% is taxed at about 26.7% on average. Lower than that, the SIPP wins. Higher, the ISA wins.</li>
        <li>An employer contribution or match is usually the strongest reason to pay into a workplace pension first, because it is money you would not otherwise receive.</li>
        <li>Many people use both: the pension for the tax relief and the ISA for flexibility before pension age.</li>
      </ul>

      <h2>What is the difference between an ISA and a SIPP?</h2>
      <p>
        The tax treatment is mirrored. An ISA is &quot;tax paid, then tax-free&quot;. A SIPP is &quot;tax relief now, then mostly taxed later&quot;.
        The table summarises the main points. Rules and limits change, so check the official pages linked in this guide.
      </p>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Stocks &amp; Shares ISA</th>
            <th>SIPP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tax on money going in</td>
            <td>None. You pay in from income that has already been taxed.</td>
            <td>Tax relief. A relief-at-source pension adds 20% to what you pay in.</td>
          </tr>
          <tr>
            <td>Yearly limit</td>
            <td>£20,000 across all your ISAs</td>
            <td>Relief is limited to your UK earnings, and a £60,000 annual allowance applies before tax charges</td>
          </tr>
          <tr>
            <td>Tax on growth</td>
            <td>None</td>
            <td>None inside the SIPP</td>
          </tr>
          <tr>
            <td>When you can access it</td>
            <td>Any time</td>
            <td>From the minimum pension age: 55 now, rising to 57 on 6 April 2028</td>
          </tr>
          <tr>
            <td>Tax on withdrawals</td>
            <td>None</td>
            <td>Usually up to 25% tax-free, the rest taxed as income</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Flexible goals, early retirement bridge, tax-free income later</td>
            <td>Long-term retirement saving, especially at higher tax rates</td>
          </tr>
        </tbody>
      </table>

      <h2>How much can you put into each one?</h2>
      <p>
        The ISA allowance is <strong>£20,000 per tax year</strong>, shared across all your ISAs, and unused allowance does not roll
        over. See the{" "}
        <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer">ISA rules on GOV.UK</a>.
      </p>
      <p>
        For pensions, tax relief is limited by your earnings, and there is a £60,000 annual allowance for total pension saving in a tax
        year, including employer contributions. Higher earners can have a reduced allowance, and unused allowance from earlier years
        can sometimes be carried forward. The details are on the{" "}
        <a href="https://www.gov.uk/tax-on-your-private-pension/pension-tax-relief" target="_blank" rel="noopener noreferrer">pension tax relief page on GOV.UK</a>.
        Most people will never reach either limit, so for many savers the question is which to fill first, not how to fit everything in.
      </p>

      <h2>How does pension tax relief work?</h2>
      <p>
        In a relief-at-source scheme, which is how most SIPPs work, you pay in from your net (after-tax) pay and the provider claims
        20% basic-rate relief from HMRC and adds it to your pot. A £400 payment becomes £500 gross, because £400 is 80% of £500.
      </p>
      <p>
        If you pay income tax at 40% or more, the extra relief is not added automatically. You claim it through Self Assessment or
        by contacting HMRC. In round numbers, a higher-rate taxpayer who pays £400 into a SIPP gets £500 in the pot, then claims about
        £100 more, so the pot costs around £300 net. Check your own position, because the claim depends on the rate you actually pay.
      </p>

      <h2>Which grows more, an ISA or a SIPP?</h2>
      <p>
        Take someone who can set aside £400 a month from their take-home pay for 25 years. The growth rate is the same in both
        wrappers: an assumed 5% a year, compounded monthly, with fees ignored. In the ISA, £400 a month is paid in. In the SIPP, the same
        £400 becomes £500 a month with basic-rate relief. The pot values come from the{" "}
        <Link href="/calculators/compound-interest">compound interest calculator</Link> with monthly compounding and
        monthly contributions.
      </p>
      <table>
        <thead>
          <tr>
            <th>After 25 years</th>
            <th>Stocks &amp; Shares ISA</th>
            <th>SIPP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>You pay in (£400 a month)</td>
            <td>£120,000</td>
            <td>£120,000 (becomes £150,000 with relief)</td>
          </tr>
          <tr>
            <td>Pot value</td>
            <td>£238,204</td>
            <td>£297,755</td>
          </tr>
          <tr>
            <td>Growth</td>
            <td>£118,204</td>
            <td>£147,755</td>
          </tr>
        </tbody>
      </table>
      <p>
        The SIPP pot is exactly 25% larger, because £500 buys 25% more than £400 at the same growth rate. That head start is only
        the first half of the story, because the SIPP is taxed when you take money out.
      </p>

      <h2>What do you keep after tax on withdrawals?</h2>
      <p>
        You can usually take up to 25% of a pension as a tax-free lump sum, up to a maximum set by the government, and the rest is
        taxed as income. See{" "}
        <a href="https://www.gov.uk/tax-on-pension/tax-free" target="_blank" rel="noopener noreferrer">what&apos;s tax-free on GOV.UK</a>.
        To keep the comparison simple, we assume that 25% comes out tax-free and the other 75% is taxed at a single flat rate. Real
        pension income is taxed at your marginal rates, and your Personal Allowance and any State Pension affect which rates apply.
      </p>
      <table>
        <thead>
          <tr>
            <th>After 25 years</th>
            <th>ISA</th>
            <th>SIPP, taxable part at 20%</th>
            <th>SIPP, taxable part at 40%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pot value</td>
            <td>£238,204</td>
            <td>£297,755</td>
            <td>£297,755</td>
          </tr>
          <tr>
            <td>Tax-free 25% of pot</td>
            <td>Not applicable</td>
            <td>£74,439</td>
            <td>£74,439</td>
          </tr>
          <tr>
            <td>Tax on the other 75%</td>
            <td>£0</td>
            <td>£44,663</td>
            <td>£89,326</td>
          </tr>
          <tr>
            <td>Money you keep</td>
            <td>£238,204</td>
            <td>£253,092</td>
            <td>£208,428</td>
          </tr>
        </tbody>
      </table>
      <p>
        With a 20% rate on the taxable part, the SIPP leaves you £14,888 ahead of the ISA. With a 40% rate, it leaves you £29,776
        behind. The break-even is where the SIPP&apos;s 25% head start is cancelled out: taxing the taxable 75% at about 26.7% on average is
        equivalent to taxing 100% of the pot at 20%, which matches the 20% relief you got going in.
      </p>
      <p>
        The result also depends on the growth assumption. Using the same method, at 3% a year the ISA grows to £178,403 and the SIPP
        pot to £223,004; at 7% they reach £324,029 and £405,036. The SIPP ratio stays at 1.25, so the tax rate on withdrawal drives
        the comparison. Returns are not guaranteed, and the real figures will depend on fees and how your investments perform.
      </p>

      <h2>Why does your tax rate matter so much?</h2>
      <p>
        The pension&apos;s advantage is the gap between the relief you get now and the tax you pay later. If you get 40% relief going in and
        pay 20% later, the SIPP looks very strong. If you get 20% relief and later pay higher-rate tax on a large income, the ISA can
        come out ahead. Two things move the odds towards the SIPP for many people: the tax-free quarter, and the fact that retirement
        income is often lower than working income.
      </p>
      <p>
        There are also practical differences that the table does not capture. ISA money can be spent at any age, so it can bridge the
        years before pension age or fund a house deposit. Pension money is locked away, which can be a benefit if it stops you dipping into
        it. The tax treatment of pensions on death is also changing: from 6 April 2027, most unused pension funds will fall within the
        value of an estate for Inheritance Tax. See the{" "}
        <a href="https://www.gov.uk/government/publications/inheritance-tax-unused-pension-funds-and-death-benefits" target="_blank" rel="noopener noreferrer">GOV.UK guidance on unused pension funds</a>{" "}
        if estate planning matters to you.
      </p>

      <h2>What about employer contributions and the State Pension?</h2>
      <p>
        Check your workplace pension first. If your employer adds money when you contribute, that is an immediate return that neither an
        ISA nor a personal SIPP can match, so it usually makes sense to capture the full match before putting extra into either. Your
        State Pension will also form part of your retirement income, and it uses up some of your tax-free Personal Allowance, which can
        push pension withdrawals into higher bands. Read{" "}
        <Link href="/guides/4-percent-rule">the 4% rule guide</Link> to turn a pot into income, and{" "}
        <Link href="/guides/retirement-savings-by-age">retirement savings by age</Link> for common benchmarks. Remember that{" "}
        <Link href="/guides/investment-fees-impact">investment fees</Link> reduce the pot in both wrappers, and they are ignored in
        the example above.
      </p>

      <h2>How do you decide between an ISA and a SIPP?</h2>
      <ol>
        <li><strong>Take any employer match first.</strong> It is free money, normally paid into a workplace pension.</li>
        <li><strong>Think about when you need the money.</strong> If it could be needed before pension age, favour the ISA. The minimum pension age is 55 today and rises to 57 on 6 April 2028, see the <a href="https://www.gov.uk/government/publications/increasing-normal-minimum-pension-age/increasing-normal-minimum-pension-age" target="_blank" rel="noopener noreferrer">GOV.UK announcement</a>.</li>
        <li><strong>Compare your tax rates.</strong> Relief at 40% or more going in and a lower rate later favours the SIPP. A similar or higher rate later narrows the gap or reverses it.</li>
        <li><strong>Consider splitting.</strong> A pension for the long-term core and an ISA for flexibility and tax-free income is a common approach.</li>
        <li><strong>Check the limits and costs.</strong> Compare platform fees and fund charges, and keep within the allowances.</li>
      </ol>
      <p>
        To see how your own numbers play out, try the <Link href="/calculators/retirement">retirement calculator</Link> with your
        age, contributions and expected return, then test different growth rates.
      </p>

      <p>
        This guide is general information, not personal financial advice. Tax rules and allowances depend on your circumstances and
        can change, so check the linked GOV.UK pages or speak to a regulated adviser or Pension Wise before making a decision.
      </p>
    </GuideLayout>
  );
}
