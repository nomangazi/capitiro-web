import Link from "next/link";
import { CopyCode } from "@/components/embed/CopyCode";
import { calculatorComponents } from "@/components/embed/registry";
import { LegalPage } from "@/components/site/LegalPage";
import { calculatorPath, calculators } from "@/lib/calculators";
import { embedPath, embedSnippet } from "@/lib/embed";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Free Calculator Widgets for Your Website",
  description:
    "Embed free mortgage, loan, savings and retirement calculators on your blog or website. Copy one line of HTML; no sign-up, no ads, no tracking of inputs.",
  path: "/embed",
});

const embeddable = calculators.filter((c) => calculatorComponents[c.slug]);

export default function EmbedDirectoryPage() {
  return (
    <LegalPage
      title="Free calculator widgets for your website"
      path="/embed"
      intro={`Add any ${siteConfig.name} calculator to your blog or website for free. Copy the code, paste it into your page's HTML, and your readers get a fully working calculator.`}
    >
      <h2>How it works</h2>
      <ol>
        <li>Pick a calculator below and check the live preview.</li>
        <li>Click &ldquo;Copy code&rdquo; and paste the snippet into an HTML or &ldquo;custom code&rdquo; block in your CMS.</li>
        <li>The widget resizes to your content width (it works from 320px phones to 800px columns).</li>
      </ol>
      <h2>The terms, in plain English</h2>
      <ul>
        <li>The widgets are free for personal and commercial sites. No sign-up and no API key.</li>
        <li>
          Keep the &ldquo;Powered by {siteConfig.name}&rdquo; credit and the link under the iframe. That credit is the only thing
          we ask in return.
        </li>
        <li>The widgets show no ads. Calculations run in your reader&rsquo;s browser and we never store their numbers.</li>
        <li>
          Results are estimates for educational purposes, not financial advice. See our <Link href="/disclaimer">disclaimer</Link>.
        </li>
      </ul>

      <h2>Available widgets</h2>
      <div className="mt-6 space-y-8">
        {embeddable.map((calc) => (
          <section key={calc.slug} aria-labelledby={`embed-${calc.slug}`} className="space-y-4 rounded-xl border bg-card p-4 shadow-sm sm:p-6">
            <div className="space-y-1">
              <h3 id={`embed-${calc.slug}`} className="text-lg font-semibold">
                {calc.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {calc.summary}{" "}
                <Link href={calculatorPath(calc.slug)} className="text-primary underline-offset-4 hover:underline">
                  Open the full page
                </Link>
              </p>
            </div>
            <iframe
              src={embedPath(calc.slug)}
              title={`${calc.title} widget preview`}
              loading="lazy"
              className="h-[640px] w-full rounded-lg border bg-background"
            />
            <CopyCode code={embedSnippet(calc)} label={calc.title} />
          </section>
        ))}
      </div>
    </LegalPage>
  );
}
