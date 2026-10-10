"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateMortgage } from "@/lib/math";
import { formatDuration, formatPercent } from "@/lib/format";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { Segmented } from "./shared/Segmented";
import { BreakdownDonut } from "./shared/charts";
import { ScheduleTable } from "./shared/ScheduleTable";

export function Mortgage() {
  const { symbol, money } = useCurrency();
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [annualRate, setAnnualRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [homeInsurance, setHomeInsurance] = useState(1500);
  const [pmiRate, setPmiRate] = useState(0.5);
  const [hoaMonthly, setHoaMonthly] = useState(0);

  const m = calculateMortgage({ homePrice, downPayment, annualRate, years, propertyTaxRate, homeInsurance, pmiRate, hoaMonthly });

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="price" label="Home price" prefix={symbol} value={homePrice} onChange={setHomePrice} sliderMax={2000000} step={5000} />
          <NumberField
            id="down"
            label="Down payment"
            prefix={symbol}
            hint={formatPercent(m.downPaymentPercent, 1)}
            value={downPayment}
            onChange={setDownPayment}
            sliderMax={Math.max(homePrice || 0, 1000)}
            step={1000}
          />
          <NumberField id="rate" label="Interest rate" suffix="%" value={annualRate} onChange={setAnnualRate} max={30} sliderMax={12} step={0.05} />
          <Segmented
            label="Loan term"
            value={years}
            onChange={setYears}
            options={[
              { value: 10, label: "10 yr" },
              { value: 15, label: "15 yr" },
              { value: 20, label: "20 yr" },
              { value: 30, label: "30 yr" },
            ]}
          />
          <details className="group rounded-lg border px-4 py-3 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="cursor-pointer text-sm font-medium select-none">
              Taxes, insurance &amp; fees
              <span className="ml-1 text-muted-foreground group-open:hidden">(show)</span>
            </summary>
            <div className="mt-4 space-y-6">
              <NumberField id="tax" label="Property tax" suffix="%/yr" hint={`${money(m.monthlyTax)}/mo`} value={propertyTaxRate} onChange={setPropertyTaxRate} max={10} sliderMax={4} step={0.05} />
              <NumberField id="insurance" label="Home insurance" prefix={symbol} suffix="/yr" value={homeInsurance} onChange={setHomeInsurance} sliderMax={10000} step={50} />
              <NumberField id="pmi" label="PMI rate" suffix="%/yr" hint="If < 20% down" value={pmiRate} onChange={setPmiRate} max={5} sliderMax={2} step={0.05} />
              <NumberField id="hoa" label="HOA fees" prefix={symbol} suffix="/mo" value={hoaMonthly} onChange={setHoaMonthly} sliderMax={1500} step={10} />
            </div>
          </details>
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: "Estimated monthly payment", value: money(m.totalMonthly), hint: "Principal, interest, taxes, insurance, PMI and HOA" },
          { label: "Loan amount", value: money(m.loanAmount) },
          { label: "Principal & interest", value: money(m.principalAndInterest) },
          { label: "Total interest", value: money(m.totalInterest), tone: "negative" },
        ]}
      />
      {m.monthlyPmi > 0 && (
        <Notice tone="info">
          With less than 20% down you&apos;ll likely pay PMI of about <strong>{money(m.monthlyPmi)}/month</strong> for roughly{" "}
          <strong>{formatDuration(m.pmiMonths)}</strong>, until the balance reaches 78% of the home&apos;s price ({money(m.totalPmi)} in total).
        </Notice>
      )}
      <Panel title="Monthly payment breakdown">
        <BreakdownDonut
          ariaLabel="Monthly mortgage payment breakdown"
          centerLabel="per month"
          centerValue={money(m.totalMonthly)}
          slices={[
            { key: "pi", label: "Principal & interest", value: m.principalAndInterest, color: "var(--chart-1)" },
            { key: "tax", label: "Property tax", value: m.monthlyTax, color: "var(--chart-4)" },
            { key: "insurance", label: "Home insurance", value: m.monthlyInsurance, color: "var(--chart-2)" },
            { key: "pmi", label: "PMI", value: m.monthlyPmi, color: "var(--chart-3)" },
            { key: "hoa", label: "HOA fees", value: m.hoaMonthly, color: "var(--chart-5)" },
          ]}
        />
      </Panel>
      <Panel title="Lifetime cost" description={`Over the full ${years}-year term, including your down payment.`}>
        <dl className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Total of all payments</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{money(m.totalCost)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Interest</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-destructive">{money(m.totalInterest)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">PMI</dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums">{money(m.totalPmi)}</dd>
          </div>
        </dl>
      </Panel>
      <Panel title="Amortization schedule" description="Principal and interest only.">
        <ScheduleTable yearly={m.yearly} />
      </Panel>
    </CalculatorShell>
  );
}
