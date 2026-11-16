import Link from "next/link";
import { GuideLayout } from "@/components/site/GuideLayout";
import { getGuide, guidePath } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

const SLUG = "biweekly-mortgage-payments";
const guide = getGuide(SLUG);

export const metadata = buildMetadata({ title: guide.seoTitle ?? guide.title, description: guide.description, path: guidePath(SLUG), type: "article", published: guide.published, modified: guide.updated });

export default function Page() {
  return (
    <GuideLayout slug={SLUG}>
      <p>
        Bi-weekly mortgage payments do save money, but only because they add one extra monthly payment a year. They are not a
        special kind of loan. On a $400,000 loan at 6.5%, that extra payment saves about $116,342 in interest and cuts about 5
        years 10 months from a 30-year term. You can get the same result yourself without a paid program.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>Paying half your monthly payment every two weeks means 26 half-payments, which equals <strong>13 full payments a year</strong> instead of 12.</li>
        <li>On a <strong>$400,000</strong> loan at 6.5% for 30 years, that one extra payment a year saves about <strong>$116,342</strong> of interest and about <strong>5 years 10 months</strong>.</li>
        <li>Adding 1/12 of your payment to each monthly payment (about <strong>$210.69</strong> here) gives the same extra amount without a third-party service.</li>
        <li>Before you sign up, check how your lender applies the half-payments, whether a service charges fees and whether the loan has a prepayment penalty.</li>
      </ul>

      <h2>What are bi-weekly mortgage payments?</h2>
      <p>
        A standard mortgage is paid once a month, 12 times a year. A bi-weekly plan splits that payment in half and pays one half
        every two weeks. A year has 52 weeks, so you make 26 half-payments. That is 13 full payments, so you pay one extra monthly
        payment a year without noticing it in your budget.
      </p>
      <p>
        On a $400,000 loan at 6.5% for 30 years the required payment is <strong>$2,528.27</strong>. Half of that is $1,264.14, and 26
        halves add up to $32,867.54 a year, compared with $30,339.27 for 12 monthly payments. The difference of $2,528.27 is one extra
        payment, and it goes straight to principal.
      </p>

      <h2>How was this modelled?</h2>
      <p>
        We modelled the bi-weekly plan as the monthly schedule plus an extra payment each month of 1/12 of the scheduled payment, using
        the same math as the{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link>. This is an approximation. It spreads the extra
        payment evenly across the year. A true bi-weekly schedule credits money every two weeks, so some principal falls sooner and the
        result can differ a little, usually by saving slightly more. Treat the figures below as a close estimate, not as a quote
        from any lender.
      </p>

      <h2>Do bi-weekly payments save money? The numbers</h2>
      <p>
        All loans below are 30-year fixed. The extra amount is 1/12 of the scheduled payment, added to every monthly payment. Interest
        saved is measured against making only the scheduled payment.
      </p>
      <table>
        <thead>
          <tr>
            <th>Loan</th>
            <th>Rate</th>
            <th>Monthly payment</th>
            <th>Extra each month</th>
            <th>Interest saved</th>
            <th>Time saved</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>$300,000</td><td>6%</td><td>$1,798.65</td><td>$149.89</td><td>$73,665</td><td>5 yrs 5 mo</td></tr>
          <tr><td>$300,000</td><td>6.5%</td><td>$1,896.20</td><td>$158.02</td><td>$87,256</td><td>5 yrs 10 mo</td></tr>
          <tr><td>$300,000</td><td>7%</td><td>$1,995.91</td><td>$166.33</td><td>$102,424</td><td>6 yrs 3 mo</td></tr>
          <tr><td>$400,000</td><td>6%</td><td>$2,398.20</td><td>$199.85</td><td>$98,220</td><td>5 yrs 5 mo</td></tr>
          <tr><td>$400,000</td><td>6.5%</td><td>$2,528.27</td><td>$210.69</td><td>$116,342</td><td>5 yrs 10 mo</td></tr>
          <tr><td>$400,000</td><td>7%</td><td>$2,661.21</td><td>$221.77</td><td>$136,566</td><td>6 yrs 3 mo</td></tr>
        </tbody>
      </table>
      <p>
        Two patterns stand out. The time saved depends only on the rate, because the extra payment is always the same share of the
        payment: 5 years 5 months at 6%, 5 years 10 months at 6.5% and 6 years 3 months at 7%. The dollars saved grow with both the
        loan size and the rate, because a higher rate means more of each payment is interest.
      </p>

      <h2>A worked example: $400,000 at 6.5%</h2>
      <p>Here is the same loan under three approaches. The second and third are the same math.</p>
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>Cash paid each month</th>
            <th>Total interest</th>
            <th>Payoff time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monthly, as scheduled</td><td>$2,528.27</td><td>$510,178</td><td>30 years</td></tr>
          <tr><td>Bi-weekly program (modelled)</td><td>$2,738.96 equivalent</td><td>$393,836</td><td>24 yrs 2 mo</td></tr>
          <tr><td>Monthly plus 1/12 yourself</td><td>$2,738.96</td><td>$393,836</td><td>24 yrs 2 mo</td></tr>
        </tbody>
      </table>
      <p>
        Over the life of the loan, total payments fall from $910,178 to $793,836, a saving of about $116,342. The first month shows
        why. Interest that month is $2,166.67. The scheduled payment pays $361.61 of principal, while the payment with the extra $210.69
        pays $572.29. A lower balance means a lower interest charge every month after that.
      </p>
      <p>
        The key point is the third row. If you add $210.69 to your monthly payment, you get the same modelled result as a bi-weekly
        program, and you stay in control of the timing. You can also stop or change the amount whenever your budget needs it, which a
        fixed plan may not allow.
      </p>

      <h2>Is it better to pay bi-weekly or just add 1/12 yourself?</h2>
      <p>
        Often the second. The benefit comes from the extra payment, not from the calendar. Adding 1/12 of your payment to each
        monthly payment, or making one extra payment a year, delivers the same saving in this model. For a deeper look at the extra
        payment itself, including lump sums and how timing matters, see our guide to{" "}
        <Link href="/guides/extra-mortgage-payments">extra mortgage payments</Link>.
      </p>
      <p>
        A genuine bi-weekly plan can still help if you are paid every two weeks, because the payments line up with your income and
        the habit is automatic. That is a behavioural benefit. If you prefer it, you do not need a separate company to do it. Ask
        whether your lender offers it directly.
      </p>

      <h2>What should you check with your lender?</h2>
      <ol>
        <li>
          <strong>How half-payments are applied.</strong> Some servicers hold a half-payment until the second half arrives, which
          delays the benefit. Ask when each payment is credited and whether the extra goes to principal.
        </li>
        <li>
          <strong>Fees for third-party services.</strong> Some outside companies charge a setup or ongoing fee to collect your
          payments. Ask for every fee in writing and compare it with the simple monthly alternative, which has no such cost.
        </li>
        <li>
          <strong>Prepayment penalties.</strong> Check your loan documents for any prepayment penalty before paying extra.
        </li>
        <li>
          <strong>Whether your payment includes escrow.</strong> Taxes and insurance are separate. Only the principal and interest
          part of the loan is modelled here.
        </li>
        <li>
          <strong>Confirmation on your statement.</strong> After the first few payments, check that your balance falls by the amount
          you expect.
        </li>
      </ol>

      <h2>How do you decide?</h2>
      <p>Bi-weekly or extra payments are worth considering if most of these are true:</p>
      <ul>
        <li>You have no high-interest debt and a solid emergency fund, as covered in the <Link href="/guides/extra-mortgage-payments">extra payments guide</Link>.</li>
        <li>Your budget can handle about 8% more per month. The extra is always 1/12 of the payment, or 8.33%.</li>
        <li>Your loan has no prepayment penalty and your servicer applies extra money to principal.</li>
        <li>You value a guaranteed return equal to your mortgage rate over a market return that is uncertain.</li>
      </ul>
      <p>
        If you want a bigger effect, compare the options on size. On the $400,000, 6.5% loan, a 15-year term has a payment of
        $3,484.43 and total interest of $227,197, but it is a firm commitment. The bi-weekly equivalent is flexible. See the{" "}
        <Link href="/guides/15-vs-30-year-mortgage">15 vs 30 year mortgage guide</Link> for the trade-off. If your rate is well
        above what you could get today, a <Link href="/calculators/refinance">refinance</Link> may help as well, though it adds closing
        costs.
      </p>

      <h2>What about the UK and Europe?</h2>
      <p>
        Most UK mortgages are paid monthly, so a bi-weekly plan is less common. The same idea still works as an overpayment, which
        usually goes through your lender. Many lenders allow overpayments up to an allowance each year, and a common guideline is
        about 10% of the balance, before early repayment charges apply. Check your own offer document, because the rules differ by
        lender and deal, and rules in Europe vary again.
      </p>
      <p>
        As an example, take a <strong>£200,000 loan at 5% over 25 years</strong>. The payment is about <strong>£1,169.18</strong> a
        month, and 1/12 of that is £97.43. Overpaying that amount each month saves about £23,982 in interest and 3 years 6 months.
        The extra comes to about £1,169 a year, which is around 0.6% of the original balance. Whether this suits you is a different
        question from the US one. Our guide on{" "}
        <Link href="/guides/overpay-mortgage-or-invest">whether to overpay your mortgage or invest</Link> covers that.
      </p>

      <h2>What mistakes should you avoid?</h2>
      <ul>
        <li><strong>Paying a fee for something you can do free.</strong> Adding 1/12 to your monthly payment gives the same modelled saving.</li>
        <li><strong>Assuming the plan lowers your required payment.</strong> It shortens the loan. The scheduled payment stays the same.</li>
        <li><strong>Not checking where the money goes.</strong> If the servicer holds half-payments, you lose part of the benefit.</li>
        <li><strong>Stretching your budget.</strong> You can adjust extra payments, so start with an amount you can keep up.</li>
        <li><strong>Ignoring other priorities.</strong> High-interest debt and an emergency fund usually come first.</li>
      </ul>

      <h2>Run it on your own loan</h2>
      <p>
        Enter your balance, rate and remaining term in the{" "}
        <Link href="/calculators/loan-amortization">loan amortization calculator</Link>, then put your payment divided by 12 into the{" "}
        <strong>Extra monthly payment</strong> field to see your own interest saved and new payoff date. To see the full monthly cost,
        including taxes and insurance, use the <Link href="/calculators/mortgage">mortgage calculator</Link>. The CFPB also publishes
        plain-language guidance on{" "}
        <a href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">mortgage basics</a>.
      </p>

      <p>
        This guide is general education, not personal financial advice. The rates and loans above are illustrative, and the
        bi-weekly figures are an approximation based on a monthly extra payment. Real results depend on your lender&apos;s rules.
        Speak to a qualified adviser about your own situation.
      </p>
    </GuideLayout>
  );
}
