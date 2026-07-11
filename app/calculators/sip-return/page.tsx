import { Metadata } from "next";
import { SIPReturn } from "@/components/calculators/SIPReturn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Free SIP Return Calculator | Capitiro",
  description: "Calculate your estimated returns on Systematic Investment Plans (SIP) and mutual funds with Capitiro's free calculator.",
};

export default function SIPReturnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SIP Return Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="container py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">SIP Return Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Estimate the wealth you can create by making regular monthly investments. Perfect for mutual funds, index funds, and stock market SIPs.
        </p>
      </section>

      <SIPReturn />

      <article className="max-w-4xl space-y-8 prose prose-slate dark:prose-invert">
        <section>
          <h2 className="text-2xl font-semibold mb-4">How to use this calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Enter the amount you plan to invest every month in the <strong>Monthly Investment</strong> field.
            Provide your expected <strong>Investment Period</strong> in years, and the <strong>Expected Return Rate</strong>.
            The calculator will show your total invested amount alongside your estimated returns and total wealth projection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Formula Explained</h2>
          <p className="text-muted-foreground leading-relaxed">
            The SIP calculator uses the future value of an annuity formula:<br/>
            <code>FV = P × [((1 + i)^n - 1) / i] × (1 + i)</code><br/>
            Where P is the monthly investment, i is the monthly return rate (annual rate / 12 / 100), and n is the total number of months.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a SIP?</AccordionTrigger>
              <AccordionContent>
                SIP stands for Systematic Investment Plan. It is a facility offered by mutual funds to investors to invest in a disciplined manner. It allows an investor to invest a fixed amount of money at pre-defined intervals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are the returns guaranteed?</AccordionTrigger>
              <AccordionContent>
                No, the returns on SIPs (especially in equity mutual funds) are linked to market performance and are not guaranteed. The expected return rate is just an estimate based on historical averages or your personal expectations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>
    </div>
  );
}
