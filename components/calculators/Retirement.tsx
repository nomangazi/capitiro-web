"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateRetirement } from "@/lib/math";
import { CalculatorShell, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { TimeSeriesChart } from "./shared/charts";

export function Retirement() {
  const { symbol, money } = useCurrency();
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(750);
  const [annualReturn, setAnnualReturn] = useState(6);
  const [inflationRate, setInflationRate] = useState(2.5);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const r = calculateRetirement({ currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, inflationRate, withdrawalRate });

  return (
    <CalculatorShell
      inputs={
        <>
          <div className="grid grid-cols-2 gap-4">
            <NumberField id="age" label="Current age" value={currentAge} onChange={setCurrentAge} min={16} max={90} showSlider={false} />
            <NumberField id="retire" label="Retire at" value={retirementAge} onChange={setRetirementAge} min={30} max={90} showSlider={false} />
          </div>
          <NumberField id="savings" label="Current savings" prefix={symbol} value={currentSavings} onChange={setCurrentSavings} sliderMax={1000000} step={1000} />
          <NumberField id="monthly" label="Monthly contribution" prefix={symbol} value={monthlyContribution} onChange={setMonthlyContribution} sliderMax={5000} step={50} />
          <NumberField id="return" label="Expected annual return" suffix="%" value={annualReturn} onChange={setAnnualReturn} max={30} sliderMax={12} step={0.1} />
          <NumberField id="inflation" label="Expected inflation" suffix="%" value={inflationRate} onChange={setInflationRate} max={20} sliderMax={8} step={0.1} />
          <NumberField id="withdrawal" label="Withdrawal rate" suffix="%" hint="4% rule" value={withdrawalRate} onChange={setWithdrawalRate} max={10} sliderMax={8} step={0.1} />
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: `Projected savings at age ${r.rows[r.rows.length - 1].age}`, value: money(r.nestEgg) },
          { label: "In today's money", value: money(r.realNestEgg), hint: `adjusted for ${inflationRate || 0}% inflation` },
          { label: "Monthly income", value: money(r.monthlyIncome), tone: "positive", hint: `${withdrawalRate || 0}% withdrawal, future money` },
          { label: "Income in today's money", value: money(r.realMonthlyIncome), hint: "per month" },
        ]}
      />
      <Panel title="Savings by age" description="Nominal balance vs. the same balance in today's purchasing power.">
        <TimeSeriesChart
          ariaLabel="Retirement savings by age chart"
          data={r.rows}
          xKey="age"
          xLabel="Age"
          series={[
            { key: "balance", label: "Projected balance", color: "var(--chart-1)" },
            { key: "realBalance", label: "In today's money", color: "var(--chart-5)", variant: "line" },
            { key: "contributions", label: "Total contributions", color: "var(--chart-2)", variant: "line" },
          ]}
        />
      </Panel>
    </CalculatorShell>
  );
}
