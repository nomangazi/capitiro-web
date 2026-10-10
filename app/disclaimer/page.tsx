import { LegalPage } from "@/components/site/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Capitiro's calculators and guides are for educational purposes only and are not financial, investment, tax or legal advice.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path="/disclaimer" updated={siteConfig.legalUpdated}>
      <h2>Not financial advice</h2>
      <p>
        All calculators, guides and other content on {siteConfig.name} are provided <strong>for educational and informational
        purposes only</strong>. Nothing on this Site is financial, investment, tax, legal or accounting advice, or a recommendation to
        buy, sell or hold any financial product.
      </p>

      <h2>Estimates, not guarantees</h2>
      <p>
        Calculator results are estimates based on the figures you enter and on simplifying assumptions — for example, a constant
        interest rate or rate of return, payments made on a regular schedule, and no taxes or fees unless stated. Actual results
        will vary. Investment returns are never guaranteed, and past performance is not a reliable indicator of future results. The
        value of investments can go down as well as up.
      </p>

      <h2>Check with your provider</h2>
      <p>
        Lenders, banks and investment providers may calculate interest, fees and payments differently. Always confirm figures with
        the provider and read official documents (such as a US Loan Estimate or a UK/EU key facts illustration) before committing.
      </p>

      <h2>Seek professional advice</h2>
      <p>
        Your personal circumstances matter. Before making significant financial decisions, consult a qualified, licensed
        professional — such as a certified financial planner, a mortgage adviser, an accountant or a solicitor/attorney.
      </p>

      <h2>No liability</h2>
      <p>
        {siteConfig.name} accepts no liability for any loss or damage arising from reliance on information or results from this Site,
        to the extent permitted by law.
      </p>

      <h2>Advertising</h2>
      <p>
        This Site is supported by advertising. The appearance of an advertisement does not mean we endorse the advertiser or its
        products, and advertisers have no influence over our calculations or editorial content.
      </p>
    </LegalPage>
  );
}
