"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateCreditCardPayoff, monthlyPayment } from "@/lib/math";
import { formatDuration } from "@/lib/format";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { TimeSeriesChart } from "./shared/charts";

const TARGETS = [12, 24, 36];

export function CreditCardPayoff() {
  const { symbol, money } = useCurrency();
  const [balance, setBalance] = useState(6000);
  const [apr, setApr] = useState(22.9);
  const [payment, setPayment] = useState(250);

  const result = calculateCreditCardPayoff(balance, apr, payment);
  const chartData = result.balances.filter((_, i, all) => all.length <= 120 || i % 3 === 0 || i === all.length - 1);

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="balance" label="Card balance" prefix={symbol} value={balance} onChange={setBalance} sliderMax={50000} step={100} />
          <NumberField id="apr" label="Interest rate (APR)" suffix="%" value={apr} onChange={setApr} max={100} sliderMax={36} step={0.1} />
          <NumberField id="payment" label="Monthly payment" prefix={symbol} value={payment} onChange={setPayment} sliderMax={3000} step={10} />
        </>
      }
    >
      {result.payable ? (
        <ResultSummary
          stats={[
            { label: "Debt-free in", value: formatDuration(result.months) },
            { label: "Total interest", value: money(result.totalInterest), tone: "negative" },
            { label: "Total paid", value: money(result.totalPaid) },
            { label: "First month's interest", value: money(result.firstMonthInterest, 2) },
          ]}
        />
      ) : (
        <Notice tone="warning">
          A payment of <strong>{money(payment || 0)}</strong> doesn&apos;t cover the{" "}
          <strong>{money(result.firstMonthInterest, 2)}</strong> of interest charged each month, so this balance would never be
          paid off. Pay at least <strong>{money(result.firstMonthInterest + 1)}</strong> per month to start reducing it.
        </Notice>
      )}

      <Panel title="Pay it off faster" description="The fixed monthly payment needed to clear this balance by a target date.">
        <div className="grid gap-3 sm:grid-cols-3">
          {TARGETS.map((months) => {
            const needed = monthlyPayment(balance, apr, months);
            const interest = needed * months - (balance || 0);
            return (
              <button
                key={months}
                type="button"
                onClick={() => setPayment(Math.ceil(needed))}
                className="rounded-lg border p-4 text-left transition-colors hover:border-primary hover:bg-primary/5 focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
              >
                <span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">In {months} months</span>
                <span className="mt-1 block text-lg font-semibold tabular-nums">{money(needed)}/mo</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{money(interest)} interest</span>
              </button>
            );
          })}
        </div>
      </Panel>

      {result.payable && result.months > 0 && (
        <Panel title="Balance over time">
          <TimeSeriesChart
            ariaLabel="Credit card balance over time"
            data={chartData}
            xKey="month"
            xLabel="Month"
            series={[{ key: "balance", label: "Remaining balance", color: "var(--chart-3)" }]}
          />
        </Panel>
      )}
    </CalculatorShell>
  );
}
