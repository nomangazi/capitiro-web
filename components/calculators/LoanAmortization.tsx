"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateLoanAmortization } from "@/lib/math";
import { formatDuration } from "@/lib/format";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { BreakdownDonut } from "./shared/charts";
import { ScheduleTable } from "./shared/ScheduleTable";

export function LoanAmortization() {
  const { symbol, money } = useCurrency();
  const [loanAmount, setLoanAmount] = useState(25000);
  const [annualRate, setAnnualRate] = useState(7.5);
  const [years, setYears] = useState(5);
  const [extra, setExtra] = useState(0);

  const loan = calculateLoanAmortization(loanAmount, annualRate, years, extra);
  const baseline = extra > 0 ? calculateLoanAmortization(loanAmount, annualRate, years) : loan;
  const interestSaved = baseline.totalInterest - loan.totalInterest;
  const monthsSaved = baseline.months - loan.months;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="amount" label="Loan amount" prefix={symbol} value={loanAmount} onChange={setLoanAmount} sliderMax={500000} step={500} />
          <NumberField id="rate" label="Interest rate (APR)" suffix="%" value={annualRate} onChange={setAnnualRate} max={50} sliderMax={25} step={0.1} />
          <NumberField id="years" label="Loan term" suffix="years" value={years} onChange={setYears} min={1} max={50} sliderMax={30} />
          <NumberField id="extra" label="Extra monthly payment" prefix={symbol} hint="Optional" value={extra} onChange={setExtra} sliderMax={2000} step={25} />
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: "Monthly payment", value: money(loan.monthlyPayment, 2), hint: extra > 0 ? `+ ${money(extra)} extra = ${money(loan.monthlyPayment + extra, 2)} per month` : undefined },
          { label: "Total interest", value: money(loan.totalInterest), tone: "negative" },
          { label: "Total repaid", value: money(loan.totalPaid) },
          { label: "Paid off in", value: formatDuration(loan.months) },
        ]}
      />
      {extra > 0 && interestSaved > 0 && (
        <Notice tone="success">
          Paying <strong>{money(extra)}</strong> extra each month saves <strong>{money(interestSaved)}</strong> in interest and
          clears the loan <strong>{formatDuration(monthsSaved)}</strong> sooner.
        </Notice>
      )}
      <Panel title="Principal vs. interest" description="Where your repayments go over the life of the loan.">
        <BreakdownDonut
          ariaLabel="Principal and interest breakdown"
          centerLabel="total repaid"
          centerValue={money(loan.totalPaid)}
          slices={[
            { key: "principal", label: "Principal", value: Math.max(0, loanAmount || 0), color: "var(--chart-1)" },
            { key: "interest", label: "Interest", value: loan.totalInterest, color: "var(--chart-3)" },
          ]}
        />
      </Panel>
      <Panel title="Amortization schedule">
        <ScheduleTable yearly={loan.yearly} monthly={loan.schedule} />
      </Panel>
    </CalculatorShell>
  );
}
