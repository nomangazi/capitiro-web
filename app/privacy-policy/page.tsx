import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Capitiro handles your data: calculations stay in your browser, and how we and Google use cookies for advertising, with your GDPR, UK GDPR and CCPA rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const email = siteConfig.contactEmail;
  return (
    <LegalPage title="Privacy policy" path="/privacy-policy" updated={siteConfig.legalUpdated}>
      <p>
        This policy explains what information {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) collects when you use{" "}
        {siteConfig.url.replace(/^https?:\/\//, "")} (the &quot;Site&quot;), how it is used, and the choices and rights you have. It
        applies to visitors worldwide, including the European Economic Area (EEA), the United Kingdom and the United States.
      </p>

      <h2>1. The short version</h2>
      <ul>
        <li>The numbers you type into our calculators are processed <strong>only in your browser</strong>. We never receive or store them.</li>
        <li>We don&apos;t require accounts and don&apos;t ask for your name, email or financial details.</li>
        <li>We measure visits with cookieless, privacy-friendly analytics (Vercel Web Analytics).</li>
        <li>We show ads from Google AdSense. Google and its partners may use cookies to show and measure ads, subject to your consent where required by law.</li>
      </ul>

      <h2>2. Information we collect</h2>
      <h3>Calculator inputs</h3>
      <p>
        All calculations run locally using JavaScript in your browser. Inputs are not transmitted to us or stored on our servers.
      </p>
      <h3>Preferences stored on your device</h3>
      <p>
        If you change the display currency, we save that choice in your browser&apos;s local storage so it&apos;s remembered on your
        next visit. It never leaves your device, and you can clear it at any time through your browser settings.
      </p>
      <h3>Technical data</h3>
      <p>
        Like most websites, our hosting provider (Vercel Inc.) automatically processes technical information such as IP address,
        browser type, the pages requested and the time of the request, in order to deliver the Site securely and prevent abuse.
        These server logs are kept for a limited period.
      </p>
      <h3>Website analytics</h3>
      <p>
        We use Vercel Web Analytics to understand which pages are visited, from which country and on what type of device. It does
        not use cookies, does not track you across other websites and does not store your IP address; visitors are counted using
        an anonymous identifier that is discarded after 24 hours. We only see aggregated statistics.
      </p>
      <h3>If you contact us</h3>
      <p>If you email us, we receive your email address and the content of your message, and use them only to reply.</p>

      <h2>3. Cookies and advertising</h2>
      <p>
        We use Google AdSense to display advertising. Google, as a third-party vendor, uses cookies and similar technologies to serve
        ads based on your prior visits to this and other websites. Google&apos;s use of advertising cookies enables it and its
        partners to serve ads based on your visits to this Site and/or other sites on the Internet.
      </p>
      <ul>
        <li>
          Learn how Google uses information from sites that use its services:{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            policies.google.com/technologies/partner-sites
          </a>
        </li>
        <li>
          Opt out of personalised advertising from Google at{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">adssettings.google.com</a>.
        </li>
        <li>
          Opt out of personalised advertising from other participating vendors at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">aboutads.info</a> (US) or{" "}
          <a href="https://www.youronlinechoices.eu/" rel="noopener noreferrer" target="_blank">youronlinechoices.eu</a> (Europe).
        </li>
      </ul>
      <h3>Consent in the EEA, UK and Switzerland</h3>
      <p>
        If you visit from the EEA, the UK or Switzerland, we use a Google-certified consent management platform that asks for your
        consent before personalised advertising cookies are used. If you decline, you may still see non-personalised or limited ads.
        You can change or withdraw your choice at any time using the &quot;Privacy &amp; cookie settings&quot; link in the footer.
      </p>

      <h2>4. Legal bases for processing (GDPR / UK GDPR)</h2>
      <ul>
        <li><strong>Consent</strong> — for personalised advertising cookies where required.</li>
        <li><strong>Legitimate interests</strong> — to operate, secure and improve the Site and to show non-personalised ads.</li>
        <li><strong>Responding to you</strong> — when you contact us, to answer your enquiry.</li>
      </ul>

      <h2>5. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct or delete personal data we hold about you, to object
        to or restrict processing, to data portability, and to withdraw consent at any time. EEA and UK residents may also complain to
        their local data protection authority (in the UK, the Information Commissioner&apos;s Office).
      </p>
      <h3>California residents (CCPA/CPRA)</h3>
      <p>
        We do not sell personal information for money. Advertising cookies set by Google may be considered &quot;sharing&quot; for
        cross-context behavioural advertising under California law. You can opt out using the links in section 3 or by enabling the
        Global Privacy Control in your browser. We will not discriminate against you for exercising your rights.
      </p>
      <p>
        To exercise any right, email <a href={`mailto:${email}`}>{email}</a>. Because we hold very little personal data, many requests
        can be handled simply by clearing your browser&apos;s cookies and local storage.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Our hosting and advertising providers may process data in the United States and other countries. Where required, they rely on
        approved safeguards such as the EU–US Data Privacy Framework or Standard Contractual Clauses.
      </p>

      <h2>7. Children</h2>
      <p>The Site is not directed at children under 16, and we do not knowingly collect personal information from children.</p>

      <h2>8. Changes to this policy</h2>
      <p>We may update this policy from time to time. The &quot;Last updated&quot; date above shows when it was last changed.</p>

      <h2>9. Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${email}`}>{email}</a> or visit our <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
