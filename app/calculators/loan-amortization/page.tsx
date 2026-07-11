import { Metadata } from "next";
import { LoanAmortization } from "@/components/calculators/LoanAmortization";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Free Loan Amortization Calculator | Capitiro",
  description: "Calculate your monthly EMI and see the complete amortization schedule for your mortgage or loan. A free tool by Capitiro.",
};

export default function LoanAmortizationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Loan Amortization Calculator",
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
        <h1 className="text-4xl font-bold tracking-tight">Loan Amortization Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Plan your loan repayment effectively. Calculate your EMI and visualize your principal vs interest payments over the lifetime of your loan.
        </p>
      </section>

      <LoanAmortization />

      <article className="max-w-4xl space-y-8 prose prose-slate dark:prose-invert">
        <section>
          <h2 className="text-2xl font-semibold mb-4">How to use this calculator</h2>
          <p className="text-muted-foreground leading-relaxed">
            Enter your total <strong>Loan Amount</strong>, the <strong>Loan Term</strong> in years, and your <strong>Interest Rate</strong>.
            The calculator will instantly determine your monthly EMI and generate a pie chart showing how much total interest you will pay compared to the principal.
            You can also view a yearly summary of your amortization schedule.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Formula Explained</h2>
          <p className="text-muted-foreground leading-relaxed">
            The EMI is calculated using the standard amortization formula: <br/>
            <code>EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]</code><br/>
            Where P is the principal loan amount, R is the monthly interest rate, and N is the total number of monthly installments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Amortization?</AccordionTrigger>
              <AccordionContent>
                Amortization refers to the process of paying off a debt (often from a loan or mortgage) over time through regular payments. A portion of each payment goes towards the principal, and a portion goes towards interest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why is the interest higher at the beginning?</AccordionTrigger>
              <AccordionContent>
                In an amortized loan, the interest is calculated on the remaining balance. Since the balance is highest at the beginning of the loan, the interest portion of your EMI is also highest. Over time, as you pay down the principal, the interest portion decreases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </article>
    </div>
  );
}
