"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateCompoundInterest } from "@/lib/math";
import { formatPercent } from "@/lib/format";
import { CalculatorShell, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { Segmented } from "./shared/Segmented";
import { TimeSeriesChart } from "./shared/charts";

const COMPOUNDING_OPTIONS = [
  { value: 1, label: "Yearly" },
  { value: 4, label: "Quarterly" },
  { value: 12, label: "Monthly" },
  { value: 365, label: "Daily" },
];

export function CompoundInterest() {
  const { symbol, money } = useCurrency();
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(20);
  const [annualRate, setAnnualRate] = useState(7);
  const [compounding, setCompounding] = useState(12);

  const rows = calculateCompoundInterest(principal, monthlyContribution, years, annualRate, compounding);
  const last = rows[rows.length - 1];
  const growthShare = last.balance > 0 ? (last.interest / last.balance) * 100 : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="principal" label="Initial deposit" prefix={symbol} value={principal} onChange={setPrincipal} sliderMax={250000} step={500} />
          <NumberField id="monthly" label="Monthly contribution" prefix={symbol} value={monthlyContribution} onChange={setMonthlyContribution} sliderMax={5000} step={50} />
          <NumberField id="years" label="Years to grow" suffix="years" value={years} onChange={setYears} min={1} max={100} sliderMax={50} />
          <NumberField id="rate" label="Annual interest rate" suffix="%" value={annualRate} onChange={setAnnualRate} max={50} sliderMax={15} step={0.1} />
          <Segmented label="Compounding frequency" value={compounding} onChange={setCompounding} options={COMPOUNDING_OPTIONS} />
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: `Future balance after ${last.year} years`, value: money(last.balance) },
          { label: "Total contributions", value: money(last.principal) },
          { label: "Interest earned", value: money(last.interest), tone: "positive" },
          { label: "Growth share", value: formatPercent(growthShare, 0), hint: "of the final balance is interest" },
        ]}
      />
      <Panel title="Growth over time" description="Your balance compared with the money you put in.">
        <TimeSeriesChart
          ariaLabel="Compound interest growth chart"
          data={rows}
          xKey="year"
          series={[
            { key: "balance", label: "Total balance", color: "var(--chart-1)" },
            { key: "principal", label: "Total contributions", color: "var(--chart-2)", variant: "line" },
          ]}
        />
      </Panel>
    </CalculatorShell>
  );
}
