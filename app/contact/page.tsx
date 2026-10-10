import { LegalPage } from "@/components/site/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the Capitiro team with questions, feedback, corrections or partnership enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact us"
      path="/contact"
      intro="We'd love to hear from you — whether it's a question, a suggestion for a new calculator or a correction."
    >
      <h2>Email</h2>
      <p>
        The best way to reach us is by email at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. We aim to reply within two business days.
      </p>

      <h2>What we can help with</h2>
      <ul>
        <li>Questions about how a calculator works or the formula it uses</li>
        <li>Reporting a bug or a calculation you believe is wrong</li>
        <li>Suggestions for new calculators or features</li>
        <li>Privacy requests (access, deletion or objection under GDPR, UK GDPR or CCPA)</li>
        <li>Advertising and partnership enquiries</li>
      </ul>

      <h2>What we can&apos;t help with</h2>
      <p>
        We are not licensed financial advisers and can&apos;t give personal financial, tax or legal advice. For decisions about your own
        situation, please consult a qualified professional.
      </p>
    </LegalPage>
  );
}
