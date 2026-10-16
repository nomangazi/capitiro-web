"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateHomeAffordability } from "@/lib/math";
import { formatPercent } from "@/lib/format";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { Segmented } from "./shared/Segmented";
import { BreakdownDonut } from "./shared/charts";

type RatioPreset = "standard" | "stretch";

/** Typical lending guidelines, not rules: lenders and loan programs set their own limits. */
const RATIO_PRESETS: Record<RatioPreset, { front: number; back: number }> = {
  standard: { front: 28, back: 36 },
  stretch: { front: 31, back: 43 },
};

export function HomeAffordability() {
  const { symbol, money } = useCurrency();
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(400);
  const [downPayment, setDownPayment] = useState(60000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [preset, setPreset] = useState<RatioPreset>("standard");
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [homeInsurance, setHomeInsurance] = useState(1500);
  const [hoaMonthly, setHoaMonthly] = useState(0);
  const [pmiRate, setPmiRate] = useState(0.5);

  const { front, back } = RATIO_PRESETS[preset];
  const a = calculateHomeAffordability({
    annualIncome,
    monthlyDebts,
    downPayment,
    annualRate,
    years,
    propertyTaxRate,
    homeInsurance,
    pmiRate,
    hoaMonthly,
    frontRatio: front,
    backRatio: back,
  });

  const unusedBudget = a.maxHousingPayment - a.totalMonthly;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="income" label="Annual gross income" prefix={symbol} hint="Before tax" value={annualIncome} onChange={setAnnualIncome} sliderMax={400000} step={1000} />
          <NumberField id="debts" label="Monthly debt payments" prefix={symbol} suffix="/mo" hint="Car, student loans, card minimums" value={monthlyDebts} onChange={setMonthlyDebts} sliderMax={5000} step={25} />
          <NumberField
            id="down"
            label="Down payment"
            prefix={symbol}
            hint={a.affordable ? `${formatPercent(a.downPaymentPercent, 1)} of the price` : undefined}
            value={downPayment}
            onChange={setDownPayment}
            sliderMax={500000}
            step={1000}
          />
          <NumberField id="rate" label="Interest rate" suffix="%" value={annualRate} onChange={setAnnualRate} max={30} sliderMax={12} step={0.05} />
          <Segmented
            label="Loan term"
            value={years}
            onChange={setYears}
            options={[
              { value: 15, label: "15 yr" },
              { value: 30, label: "30 yr" },
            ]}
          />
          <div className="space-y-2">
            <Segmented
              label="Debt-to-income limits"
              value={preset}
              onChange={setPreset}
              options={[
                { value: "standard", label: "28/36 standard" },
                { value: "stretch", label: "31/43 stretch" },
              ]}
            />
            <p className="text-xs text-muted-foreground">
              Housing payment must stay under {front}% of gross income and all debts under {back}%. These are typical guidelines,
              not rules: each lender and loan program sets its own limits.
            </p>
          </div>
          <details className="group rounded-lg border px-4 py-3 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="cursor-pointer text-sm font-medium select-none">
              Taxes, insurance &amp; fees
              <span className="ml-1 text-muted-foreground group-open:hidden">(show)</span>
            </summary>
            <div className="mt-4 space-y-6">
              <NumberField id="tax" label="Property tax" suffix="%/yr" value={propertyTaxRate} onChange={setPropertyTaxRate} max={10} sliderMax={4} step={0.05} />
              <NumberField id="insurance" label="Home insurance" prefix={symbol} suffix="/yr" value={homeInsurance} onChange={setHomeInsurance} sliderMax={10000} step={50} />
              <NumberField id="hoa" label="HOA fees" prefix={symbol} suffix="/mo" hint="Optional" value={hoaMonthly} onChange={setHoaMonthly} sliderMax={1500} step={10} />
              <NumberField id="pmi" label="PMI rate" suffix="%/yr" hint="If < 20% down" value={pmiRate} onChange={setPmiRate} max={5} sliderMax={2} step={0.05} />
            </div>
          </details>
        </>
      }
    >
      <ResultSummary
        stats={[
          {
            label: "Estimated maximum home price",
            value: money(a.maxHomePrice),
            hint: a.affordable ? `With ${money(downPayment)} down and a ${money(a.loanAmount)} loan` : "No price fits these numbers",
          },
          { label: "Max monthly housing payment", value: money(a.maxHousingPayment), hint: "Principal, interest, taxes, insurance, PMI and HOA" },
          { label: "Loan amount", value: money(a.loanAmount) },
          { label: "Principal & interest", value: money(a.principalAndInterest) },
        ]}
      />
      {a.debtsExceedLimit ? (
        <Notice tone="warning">
          Your other debts ({money(monthlyDebts)}/month) already use the whole back-end limit of {back}% of income
          ({money(a.monthlyIncome * (back / 100))}/month), so this rule leaves nothing for housing. Paying down debt or raising
          income is the quickest way to open up a budget.
        </Notice>
      ) : !a.affordable ? (
        <Notice tone="warning">
          The housing budget of {money(a.maxHousingPayment)}/month does not cover the fixed costs (insurance
          {hoaMonthly > 0 ? " and HOA fees" : ""}), so no home price fits. Check the insurance and HOA fields or raise the budget.
        </Notice>
      ) : (
        <Notice tone="info">
          {a.bindingRatio === "front" ? (
            <>
              The <strong>{front}% front-end limit</strong> sets your budget: {money(a.frontLimit)}/month for housing, which is lower than
              the {money(a.backLimit)}/month left under the {back}% back-end limit after your other debts.
            </>
          ) : (
            <>
              The <strong>{back}% back-end limit</strong> sets your budget: after {money(monthlyDebts)}/month of other debts only{" "}
              {money(a.backLimit)}/month is left for housing, which is lower than the {money(a.frontLimit)}/month front-end limit.
            </>
          )}
        </Notice>
      )}
      {a.affordable && a.pmiApplies && (
        <Notice tone="info">
          Your down payment is under 20% of this price, so the estimate includes about <strong>{money(a.monthlyPmi)}/month</strong> of PMI.
          A larger down payment can raise your maximum price by removing PMI.
        </Notice>
      )}
      {a.affordable && unusedBudget > 1 && (
        <Notice tone="info">
          This price has exactly 20% down. One dollar more would add PMI and push the payment above your budget, so about{" "}
          <strong>{money(unusedBudget)}/month</strong> of the budget is left unused.
        </Notice>
      )}
      {preset === "stretch" && a.affordable && (
        <Notice tone="warning">
          The 31/43 preset is a stretch. It leaves less room for savings, repairs and rising bills, so treat the result as a ceiling
          and compare it with the standard 28/36 figure.
        </Notice>
      )}
      <Panel title="Monthly payment at your maximum price" description="Where your housing budget goes.">
        <BreakdownDonut
          ariaLabel="Monthly housing payment breakdown at the maximum home price"
          centerLabel="per month"
          centerValue={money(a.totalMonthly)}
          slices={[
            { key: "pi", label: "Principal & interest", value: a.principalAndInterest, color: "var(--chart-1)" },
            { key: "tax", label: "Property tax", value: a.monthlyTax, color: "var(--chart-4)" },
            { key: "insurance", label: "Home insurance", value: a.monthlyInsurance, color: "var(--chart-2)" },
            { key: "pmi", label: "PMI", value: a.monthlyPmi, color: "var(--chart-3)" },
            { key: "hoa", label: "HOA fees", value: a.hoaMonthly, color: "var(--chart-5)" },
          ]}
        />
      </Panel>
      <Panel title="How the two limits compare" description={`Gross monthly income: ${money(a.monthlyIncome)}.`}>
        <dl className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Front-end limit ({front}%)</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{money(a.frontLimit)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Back-end limit ({back}%) minus debts</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{money(Math.max(0, a.backLimit))}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Your housing budget</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-primary">{money(a.maxHousingPayment)}</dd>
          </div>
        </dl>
      </Panel>
    </CalculatorShell>
  );
}
