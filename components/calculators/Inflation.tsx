"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateInflation } from "@/lib/math";
import { formatPercent } from "@/lib/format";
import { CalculatorShell, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { TimeSeriesChart } from "./shared/charts";

export function Inflation() {
  const { symbol, money } = useCurrency();
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(3);
  const [years, setYears] = useState(10);

  const r = calculateInflation(amount, rate, years);

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="amount" label="Amount today" prefix={symbol} value={amount} onChange={setAmount} sliderMax={100000} step={100} />
          <NumberField id="rate" label="Annual inflation rate" suffix="%" value={rate} onChange={setRate} min={-5} max={50} sliderMin={0} sliderMax={12} step={0.1} />
          <NumberField id="years" label="Number of years" suffix="years" value={years} onChange={setYears} min={1} max={100} sliderMax={50} />
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: `What ${money(amount || 0)} of goods will cost in ${years || 0} years`, value: money(r.futureCost) },
          { label: `Future buying power of ${money(amount || 0)}`, value: money(r.purchasingPower), tone: "negative" },
          { label: "Purchasing power lost", value: formatPercent(r.powerLostPercent, 1), tone: "negative" },
        ]}
      />
      <Panel title="Cost vs. purchasing power" description="Rising prices on one line, shrinking real value on the other.">
        <TimeSeriesChart
          ariaLabel="Inflation impact chart"
          data={r.rows}
          xKey="year"
          series={[
            { key: "futureCost", label: "Future cost of today's goods", color: "var(--chart-4)" },
            { key: "purchasingPower", label: "Real value of your money", color: "var(--chart-3)", variant: "line" },
          ]}
        />
      </Panel>
    </CalculatorShell>
  );
}
