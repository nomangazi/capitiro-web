import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { calculators } from "@/lib/calculators";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us: Free, Accurate Financial Calculators",
  description:
    "Capitiro builds free, accurate and private financial calculators to help people in the US, UK and Europe make better money decisions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <LegalPage
      title="About Capitiro"
      path="/about"
      intro="We build free, accurate and private financial calculators that make complex money decisions easier to understand."
    >
      <h2>Our mission</h2>
      <p>
        Big financial decisions — buying a home, taking out a loan, paying off a credit card or planning for retirement — usually
        come down to a few numbers. Too often those numbers are hidden behind sign-up forms, sales pitches or confusing
        spreadsheets. {siteConfig.name} exists to give everyone fast, transparent answers they can trust.
      </p>

      <h2>What makes our calculators different</h2>
      <ul>
        <li>
          <strong>Transparent formulas.</strong> Every calculator explains the exact formula it uses, with a worked example you can
          check by hand.
        </li>
        <li>
          <strong>Tested accuracy.</strong> Our calculation engine is covered by automated tests against standard financial formulas
          (amortization, annuity and compound growth equations) before any change goes live.
        </li>
        <li>
          <strong>Private by design.</strong> All calculations run locally in your browser. We don&apos;t ask for your name, email
          or financial details, and the numbers you enter are never sent to our servers.
        </li>
        <li>
          <strong>Built for the US, UK and Europe.</strong> Switch between dollars, pounds and euros at any time.
        </li>
      </ul>

      <h2>Our tools</h2>
      <p>We currently offer {calculators.length} calculators:</p>
      <ul>
        {calculators.map((c) => (
          <li key={c.slug}>
            <Link href={`/calculators/${c.slug}`}>{c.title}</Link> — {c.summary}
          </li>
        ))}
      </ul>

      <h2>Editorial standards</h2>
      <p>
        Our guides and calculator explanations are written and reviewed by the {siteConfig.name} editorial team. We aim to use
        neutral, plain-English language, cite widely accepted rules of thumb only as guidelines, and show the date each page was last
        reviewed. If you spot an error, please <Link href="/contact">contact us</Link> — we correct mistakes promptly.
      </p>

      <h2>How we&apos;re funded</h2>
      <p>
        {siteConfig.name} is free to use and supported by advertising. Advertisers never influence our calculations or content, and
        we don&apos;t recommend specific financial products.
      </p>

      <h2>Important note</h2>
      <p>
        Our calculators provide estimates for educational purposes. They are not financial advice. Please read our{" "}
        <Link href="/disclaimer">disclaimer</Link> and speak to a qualified professional before making major financial decisions.
      </p>
    </LegalPage>
  );
}
