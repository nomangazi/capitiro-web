import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "investment-fees-impact";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        A 1% annual investment fee sounds trivial, but it is charged every year on your whole balance, including all the growth you
        have already earned. Over 30 years, that small percentage takes about a quarter of what you would otherwise have. This guide
        shows the cost in dollars for a lump sum and for monthly saving, then explains where fees hide and how to lower them.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>At a 7% gross return over 30 years, $100,000 grows to $811,650 with no fee but only $602,258 with a 1% fee. That is $209,392, or 25.8%, lost.</li>
        <li>Saving $500 a month for 30 years ends at $609,985 before fees and $502,258 after a 1% fee, a loss of $107,727 (17.7%).</li>
        <li>The longer the period, the bigger the share lost. A 1% fee costs 18.0% of a $100,000 lump sum after 20 years and 32.8% after 40 years.</li>
        <li>A 0.25% fee costs far less. On $100,000 over 30 years, the gap between 0.25% and 1% is $151,067, assuming the same gross return.</li>
        <li>Fees are one of the few investment inputs you can know in advance. Returns are uncertain, but the percentage you pay is on the page.</li>
      </ul>

      <h2>How do investment fees reduce your returns?</h2>
      <p>
        Most fees are charged as a percentage of the assets you hold, deducted from fund prices or from your account. If an
        investment earns 7% before costs and you pay 1%, you keep about 6%. That 1% comes off the balance every year, so you lose the
        fee itself <em>and</em> the future growth that money would have earned.
      </p>
      <p>
        In the examples below, we model the fee as a <strong>reduction in the annual rate</strong>: a 7% gross return with a 0.25%
        fee becomes 6.75%, with a 1% fee 6%, and with a 2% fee 5%. This is an approximation. Real fees are charged on the balance
        at intervals and the exact result depends on how and when. As a check, charging a 1% fee monthly on a $100,000 balance over
        30 years gave about $601,210, roughly $1,048 (0.17%) below the $602,258 in the table, so the simplification is close but
        very slightly understates the cost of the fee. All figures assume a constant return, monthly compounding, no taxes and no other costs, and
        you can recreate them with the <Link href="/calculators/compound-interest">compound interest calculator</Link>.
      </p>

      <h2>What does a 1% fee cost on a $100,000 investment?</h2>
      <p>
        Here is $100,000 invested once and left alone, with 7% gross growth before the fee. The last two columns show how much less
        you end up with than in the no-fee case:
      </p>
      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Annual fee (net rate)</th>
            <th>Final balance</th>
            <th>Lost to fees</th>
            <th>Share of no-fee balance lost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20</td>
            <td>None (7%)</td>
            <td>$403,874</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>20</td>
            <td>0.25% (6.75%)</td>
            <td>$384,286</td>
            <td>$19,588</td>
            <td>4.8%</td>
          </tr>
          <tr>
            <td>20</td>
            <td>1% (6%)</td>
            <td>$331,020</td>
            <td>$72,854</td>
            <td>18.0%</td>
          </tr>
          <tr>
            <td>20</td>
            <td>2% (5%)</td>
            <td>$271,264</td>
            <td>$132,610</td>
            <td>32.8%</td>
          </tr>
          <tr>
            <td>30</td>
            <td>None (7%)</td>
            <td>$811,650</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>30</td>
            <td>0.25% (6.75%)</td>
            <td>$753,325</td>
            <td>$58,325</td>
            <td>7.2%</td>
          </tr>
          <tr>
            <td>30</td>
            <td>1% (6%)</td>
            <td>$602,258</td>
            <td>$209,392</td>
            <td>25.8%</td>
          </tr>
          <tr>
            <td>30</td>
            <td>2% (5%)</td>
            <td>$446,774</td>
            <td>$364,876</td>
            <td>45.0%</td>
          </tr>
          <tr>
            <td>40</td>
            <td>None (7%)</td>
            <td>$1,631,141</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>40</td>
            <td>0.25% (6.75%)</td>
            <td>$1,476,759</td>
            <td>$154,382</td>
            <td>9.5%</td>
          </tr>
          <tr>
            <td>40</td>
            <td>1% (6%)</td>
            <td>$1,095,745</td>
            <td>$535,396</td>
            <td>32.8%</td>
          </tr>
          <tr>
            <td>40</td>
            <td>2% (5%)</td>
            <td>$735,842</td>
            <td>$895,299</td>
            <td>54.9%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Over 40 years, a 2% fee takes more than half of the final balance. The fee in the first year is easy to see: 1% of $100,000
        is $1,000, and 0.25% is $250. The damage that follows is harder to see, because each year&apos;s fee also removes the growth
        it would have earned later.
      </p>

      <h2>What does a 1% fee cost if you invest $500 a month?</h2>
      <p>
        Most people build wealth with regular deposits rather than one large sum. The table assumes $500 deposited at the end of each
        month at the same rates as above. The money you pay in is the same in every row, so every dollar of difference is growth you
        lose.
      </p>
      <table>
        <thead>
          <tr>
            <th>Years (total paid in)</th>
            <th>Annual fee (net rate)</th>
            <th>Final balance</th>
            <th>Lost to fees</th>
            <th>Share of no-fee balance lost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20 ($120,000)</td>
            <td>None (7%)</td>
            <td>$260,463</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>20 ($120,000)</td>
            <td>0.25% (6.75%)</td>
            <td>$252,699</td>
            <td>$7,764</td>
            <td>3.0%</td>
          </tr>
          <tr>
            <td>20 ($120,000)</td>
            <td>1% (6%)</td>
            <td>$231,020</td>
            <td>$29,443</td>
            <td>11.3%</td>
          </tr>
          <tr>
            <td>20 ($120,000)</td>
            <td>2% (5%)</td>
            <td>$205,517</td>
            <td>$54,946</td>
            <td>21.1%</td>
          </tr>
          <tr>
            <td>30 ($180,000)</td>
            <td>None (7%)</td>
            <td>$609,985</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>30 ($180,000)</td>
            <td>0.25% (6.75%)</td>
            <td>$580,733</td>
            <td>$29,252</td>
            <td>4.8%</td>
          </tr>
          <tr>
            <td>30 ($180,000)</td>
            <td>1% (6%)</td>
            <td>$502,258</td>
            <td>$107,727</td>
            <td>17.7%</td>
          </tr>
          <tr>
            <td>30 ($180,000)</td>
            <td>2% (5%)</td>
            <td>$416,129</td>
            <td>$193,856</td>
            <td>31.8%</td>
          </tr>
          <tr>
            <td>40 ($240,000)</td>
            <td>None (7%)</td>
            <td>$1,312,407</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>40 ($240,000)</td>
            <td>0.25% (6.75%)</td>
            <td>$1,223,785</td>
            <td>$88,622</td>
            <td>6.8%</td>
          </tr>
          <tr>
            <td>40 ($240,000)</td>
            <td>1% (6%)</td>
            <td>$995,745</td>
            <td>$316,662</td>
            <td>24.1%</td>
          </tr>
          <tr>
            <td>40 ($240,000)</td>
            <td>2% (5%)</td>
            <td>$763,010</td>
            <td>$549,397</td>
            <td>41.9%</td>
          </tr>
        </tbody>
      </table>

      <h2>Why does a 1% fee take far more than 1% of your money?</h2>
      <p>
        Because it is a share of your <em>growth</em>, not your balance. On the $100,000 lump sum, a 1% fee takes a seventh of a
        7% return each year, and over 30 years it removes 29.4% of the total gain ($711,650 gross gain against $502,258 net). Over
        40 years it removes 35.0%. For the monthly saver, the 30-year figure is 25.1% of growth.
      </p>
      <p>
        You can see the same effect with the <Link href="/guides/rule-of-72">Rule of 72</Link>. At 7% a year, money doubles about
        every 10.2 years, and at 6% about every 11.9 years. That 1.7-year difference per doubling is why the gap widens each
        decade.
      </p>

      <h2>How much extra would you need to save to make up for a 1% fee?</h2>
      <p>
        Suppose you plan on $500 a month at 7% but a 1% fee brings the net return to 6%. To end with the same balance as the no-fee
        case, you would need to save more every month:
      </p>
      <table>
        <thead>
          <tr>
            <th>Years</th>
            <th>Balance to match (7%, $500 a month)</th>
            <th>Monthly saving needed at 6%</th>
            <th>Extra each month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20</td>
            <td>$260,463</td>
            <td>$564</td>
            <td>$64 (12.7% more)</td>
          </tr>
          <tr>
            <td>30</td>
            <td>$609,985</td>
            <td>$607</td>
            <td>$107 (21.4% more)</td>
          </tr>
          <tr>
            <td>40</td>
            <td>$1,312,407</td>
            <td>$659</td>
            <td>$159 (31.8% more)</td>
          </tr>
        </tbody>
      </table>
      <p>
        In other words, to offset a 1% fee over 30 years you would need to save about 21% more every month. Retirement planning
        rules are sensitive to this too: in our <Link href="/guides/4-percent-rule">4% rule guide</Link>, a 1% fee on a $1,000,000
        portfolio costs $10,000 a year, a quarter of a $40,000 withdrawal.
      </p>

      <h2>What kinds of fees do investors pay?</h2>
      <table>
        <thead>
          <tr>
            <th>Cost</th>
            <th>What it is</th>
            <th>Where to find it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fund expense ratio (called ongoing charges, OCF, or total expense ratio, TER, in the UK and Europe)</td>
            <td>An annual percentage of fund assets, deducted inside the fund.</td>
            <td>Fund fact sheet, prospectus fee table, or the Key Information Document (KID) for UK and EU funds.</td>
          </tr>
          <tr>
            <td>Adviser or advisory fee</td>
            <td>Often a percentage of the assets managed, charged on top of fund costs. Some advisers charge flat or hourly fees instead.</td>
            <td>The adviser&apos;s fee schedule or written agreement.</td>
          </tr>
          <tr>
            <td>Platform or account fee</td>
            <td>What a broker or investment platform charges to hold your investments, either a percentage of assets or a flat amount. It is common in the UK.</td>
            <td>The provider&apos;s pricing page.</td>
          </tr>
          <tr>
            <td>Trading and transaction costs</td>
            <td>Commissions, spreads and currency conversion fees when you buy or sell.</td>
            <td>The provider&apos;s pricing page and trade confirmations.</td>
          </tr>
        </tbody>
      </table>
      <p>
        These stack. For example, a fund costing 0.50% inside an account with a 0.30% platform fee and a 1% adviser fee costs 1.80%
        a year, which is close to the 2% row in the tables above. Always add up every layer rather than looking at one number.
      </p>

      <h2>How can you reduce investment fees?</h2>
      <ol>
        <li><strong>Find your total cost.</strong> List the fund expense ratio, platform fee and any adviser fee, then add them up as a percentage of your balance.</li>
        <li><strong>Compare similar funds.</strong> Broad index funds, which track a market rather than try to beat it, generally have lower expense ratios than actively managed funds. Compare funds with similar holdings before you switch.</li>
        <li><strong>Check how your platform charges.</strong> A flat fee tends to suit large balances, and a percentage fee tends to suit small ones, but run the numbers for your own balance.</li>
        <li><strong>Ask what an adviser fee buys.</strong> Planning, tax help and keeping you from panic-selling can have real value, but make sure you know what you are paying and whether it recurs every year.</li>
        <li><strong>Trade less.</strong> Every trade can bring costs, and frequent changes make results harder to predict.</li>
        <li><strong>Mind the tax cost of switching.</strong> In a taxable account, selling to move to a cheaper fund can create a tax bill that offsets the saving for a while.</li>
      </ol>
      <p>
        Both the US regulator&apos;s investor education site,{" "}
        <a href="https://www.investor.gov/" target="_blank" rel="noopener noreferrer">Investor.gov</a>, and the UK&apos;s
        independent{" "}
        <a href="https://www.moneyhelper.org.uk/en" target="_blank" rel="noopener noreferrer">MoneyHelper</a> service publish
        plain-language guidance on investment costs. Regular investing also affects what your fees add up to, which we cover in{" "}
        <Link href="/guides/sip-vs-lump-sum">SIP vs lump sum investing</Link>.
      </p>

      <h2>Is a higher fee ever worth paying?</h2>
      <p>
        Sometimes. A fee can be reasonable if you get something you need and would not do yourself, such as a financial plan, help
        with tax or support to stay invested in a downturn. The tables above assume the same gross return whatever you pay. In
        reality, returns differ by fund and no one knows in advance which will do better, so a higher fee does not guarantee higher
        returns, and a low fee does not guarantee good ones. Fees matter because they are certain, while returns are not.
      </p>

      <h2>How should you decide?</h2>
      <ul>
        <li><strong>Long horizon, regular saving:</strong> fees matter most here, so prioritise low-cost options for the core of your portfolio.</li>
        <li><strong>Small balance:</strong> watch flat fees, which can take a large percentage of a small pot.</li>
        <li><strong>Large balance:</strong> a percentage fee grows with your balance, so check whether a flat or tiered fee is available.</li>
        <li><strong>Considering an adviser:</strong> compare the fee with the value you expect, and ask for the cost in dollars or pounds per year, not only as a percentage.</li>
      </ul>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Adding up only one layer of fees.</strong> The fund, the platform and the adviser each take a cut.</li>
        <li><strong>Calling 1% small.</strong> Compare it with the return you expect: 1% out of 7% is about 14% of your gain every year.</li>
        <li><strong>Choosing on fees alone.</strong> Cost is one factor next to diversification, risk and your goals.</li>
        <li><strong>Forgetting that returns vary.</strong> The tables use a constant 7%. Real results move up and down.</li>
      </ul>

      <h2>Do fees work differently in the UK and Europe?</h2>
      <p>
        The maths is the same, but the labels differ. UK and EU funds show costs in the KID, and UK investors often pay a separate
        platform charge as well as the fund&apos;s ongoing charges. US investors will see an expense ratio and, for advised accounts,
        an advisory fee. Check which costs are shown as a percentage and which as a flat amount, because the two types behave
        differently as your balance grows.
      </p>
      <p>
        This guide is general education, not personal financial advice. Figures use hypothetical constant returns and are not
        forecasts.
      </p>
    </GuideLayout>
  );
}
