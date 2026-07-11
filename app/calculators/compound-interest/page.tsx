import { Metadata } from "next";
import { CompoundInterest } from "@/components/calculators/CompoundInterest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Free Compound Interest Calculator | Capitiro",
  description: "Calculate how your money can grow over time with the power of compound interest. A free, accurate, and lightning-fast tool by Capitiro.",
};

export default function CompoundInterestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Compound Interest Calculator",
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
        <h1 className="text-4xl font-bold tracking-tight">Compound Interest Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover the power of compounding. Use our calculator to project how your initial investment and monthly contributions will grow over time.
        </p>
      </section>

      <CompoundInterest />

      <article className="max-w-4xl space-y-8 prose prose-slate dark:prose-invert">
        <section>
          <h2 className="text-2xl font-semibold mb-4">How to use this calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Using our compound interest calculator is simple. Start by entering your <strong>Initial Deposit</strong>. 
            Then, if you plan to add money regularly, enter that amount in the <strong>Monthly Contribution</strong> field.
            Input the <strong>Investment Time</strong> (how many years you plan to keep the money invested), and finally,
            enter the expected <strong>Annual Interest Rate</strong>. The chart will instantly update to show your projected growth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Formula Explained</h2>
          <p className="text-muted-foreground leading-relaxed">
            Compound interest is the interest on savings calculated on both the initial principal and the accumulated interest from previous periods. 
            The formula we use incorporates both your principal amount and any ongoing monthly contributions, compounding them over the specified time horizon.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is compound interest?</AccordionTrigger>
              <AccordionContent>
                Compound interest is the addition of interest to the principal sum of a loan or deposit, or in other words, interest on interest. It is the result of reinvesting interest, rather than paying it out, so that interest in the next period is then earned on the principal sum plus previously accumulated interest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How often is the interest compounded?</AccordionTrigger>
              <AccordionContent>
                Our calculator assumes monthly compounding and monthly contributions to provide a realistic projection of typical savings accounts and investment portfolios.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>
    </div>
  );
}
