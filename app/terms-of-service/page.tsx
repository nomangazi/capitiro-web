import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Service for Using Our Calculators",
  description:
    "The terms for using Capitiro's free financial calculators and guides: educational use only, no warranty, acceptable use and limitation of liability.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" path="/terms-of-service" updated={siteConfig.legalUpdated}>
      <p>
        By accessing or using {siteConfig.name} (the &quot;Site&quot;), you agree to these terms. If you don&apos;t agree, please
        don&apos;t use the Site.
      </p>

      <h2>1. Educational use only</h2>
      <p>
        The calculators, guides and other content on the Site are provided for general information and educational purposes. They
        do not constitute financial, investment, tax, legal or other professional advice, and they are not an offer or
        recommendation to buy or sell any financial product. See our <Link href="/disclaimer">disclaimer</Link> for details.
      </p>

      <h2>2. No guarantee of accuracy</h2>
      <p>
        We work hard to keep our formulas correct and our content up to date, but results are estimates based on the information you
        enter and on simplifying assumptions. Real-world figures from lenders, banks and investment providers may differ. The Site is
        provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied.
      </p>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Site in any way that breaks applicable law;</li>
        <li>attempt to disrupt, overload or gain unauthorised access to the Site or its infrastructure;</li>
        <li>scrape, copy or republish substantial parts of the Site&apos;s content without permission;</li>
        <li>interfere with advertising on the Site, including generating artificial clicks or impressions.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        The Site&apos;s design, text, graphics and code are owned by {siteConfig.name} or its licensors and are protected by
        copyright and other laws. You may use the calculators and share links to our pages freely.
      </p>

      <h2>5. Third-party links and advertising</h2>
      <p>
        The Site displays advertising and may link to third-party websites. We don&apos;t control and aren&apos;t responsible for
        their content, products or privacy practices.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {siteConfig.name} will not be liable for any indirect, incidental or consequential
        loss, or for any financial loss arising from decisions made using the Site. Nothing in these terms limits liability that
        cannot be limited by law, including under consumer protection laws in the UK and EU.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these terms at any time. The &quot;Last updated&quot; date shows the latest version. Continued use of the Site
        means you accept the updated terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
