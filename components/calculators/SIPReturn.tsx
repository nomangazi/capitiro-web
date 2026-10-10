"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateSIP } from "@/lib/math";
import { formatNumber } from "@/lib/format";
import { CalculatorShell, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { TimeSeriesChart } from "./shared/charts";

export function SIPReturn() {
  const { symbol, money } = useCurrency();
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [years, setYears] = useState(15);
  const [annualRate, setAnnualRate] = useState(10);
  const [stepUp, setStepUp] = useState(0);

  const rows = calculateSIP(monthlyInvestment, annualRate, years, stepUp);
  const last = rows[rows.length - 1];
  const multiple = last.principal > 0 ? last.balance / last.principal : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="monthly" label="Monthly investment" prefix={symbol} value={monthlyInvestment} onChange={setMonthlyInvestment} sliderMax={5000} step={50} />
          <NumberField id="years" label="Investment period" suffix="years" value={years} onChange={setYears} min={1} max={60} sliderMax={40} />
          <NumberField id="rate" label="Expected annual return" suffix="%" value={annualRate} onChange={setAnnualRate} max={50} sliderMax={20} step={0.1} />
          <NumberField id="stepup" label="Annual step-up" suffix="%" hint="Optional" value={stepUp} onChange={setStepUp} max={50} sliderMax={20} step={1} />
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: `Estimated value after ${last.year} years`, value: money(last.balance) },
          { label: "Total invested", value: money(last.principal) },
          { label: "Estimated returns", value: money(last.interest), tone: "positive" },
          { label: "Money multiple", value: `${formatNumber(multiple, 2)}×`, hint: "final value ÷ amount invested" },
        ]}
      />
      <Panel title="Wealth projection" description="Investments are assumed at the start of each month.">
        <TimeSeriesChart
          ariaLabel="SIP wealth projection chart"
          data={rows}
          xKey="year"
          series={[
            { key: "balance", label: "Portfolio value", color: "var(--chart-1)" },
            { key: "principal", label: "Amount invested", color: "var(--chart-2)", variant: "line" },
          ]}
        />
      </Panel>
    </CalculatorShell>
  );
}
