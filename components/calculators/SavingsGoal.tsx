"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateSavingsGoal } from "@/lib/math";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { TimeSeriesChart } from "./shared/charts";

export function SavingsGoal() {
  const { symbol, money } = useCurrency();
  const [goal, setGoal] = useState(30000);
  const [currentSavings, setCurrentSavings] = useState(2000);
  const [years, setYears] = useState(3);
  const [annualRate, setAnnualRate] = useState(4);

  const r = calculateSavingsGoal(goal, currentSavings, years, annualRate);

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="goal" label="Savings goal" prefix={symbol} value={goal} onChange={setGoal} sliderMax={250000} step={500} />
          <NumberField id="current" label="Already saved" prefix={symbol} value={currentSavings} onChange={setCurrentSavings} sliderMax={100000} step={500} />
          <NumberField id="years" label="Time to reach goal" suffix="years" value={years} onChange={setYears} min={0.5} max={50} sliderMax={30} step={0.5} />
          <NumberField id="rate" label="Interest / return rate" suffix="%" value={annualRate} onChange={setAnnualRate} max={30} sliderMax={12} step={0.1} />
        </>
      }
    >
      {r.alreadyReached ? (
        <Notice tone="success">
          Good news — at {annualRate || 0}% your current savings of <strong>{money(currentSavings || 0)}</strong> will grow past{" "}
          <strong>{money(goal || 0)}</strong> on their own. No monthly deposits needed.
        </Notice>
      ) : (
        <ResultSummary
          stats={[
            { label: "Save each month", value: money(r.monthlyContribution, 2), hint: `for ${years || 0} years to reach ${money(goal || 0)}` },
            { label: "Your total deposits", value: money(r.totalContributions) },
            { label: "Interest earned", value: money(r.interestEarned), tone: "positive" },
          ]}
        />
      )}
      <Panel title="Progress toward your goal">
        <TimeSeriesChart
          ariaLabel="Savings goal progress chart"
          data={r.rows}
          xKey="year"
          series={[
            { key: "balance", label: "Balance", color: "var(--chart-1)" },
            { key: "principal", label: "Money deposited", color: "var(--chart-2)", variant: "line" },
          ]}
        />
      </Panel>
    </CalculatorShell>
  );
}
