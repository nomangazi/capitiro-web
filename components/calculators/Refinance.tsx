"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { calculateRefinance } from "@/lib/math";
import { formatDuration } from "@/lib/format";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { Segmented } from "./shared/Segmented";
import { TimeSeriesChart } from "./shared/charts";

type CostMode = "upfront" | "roll";

export function Refinance() {
  const { symbol, money } = useCurrency();
  const [balance, setBalance] = useState(310000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [yearsLeft, setYearsLeft] = useState(27);
  const [newRate, setNewRate] = useState(6.25);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(7750);
  const [costMode, setCostMode] = useState<CostMode>("upfront");
  const [cashOut, setCashOut] = useState(0);

  const r = calculateRefinance({
    currentBalance: balance,
    currentRate,
    yearsRemaining: yearsLeft,
    newRate,
    newTermYears: newTerm,
    closingCosts,
    rollClosingCosts: costMode === "roll",
    cashOut,
  });

  const payDown = r.paymentFalls;
  const breakEvenText =
    r.breakEvenMonths === null
      ? "Never"
      : r.breakEvenMonths <= 0
        ? "Immediately"
        : `${Math.max(1, Math.round(r.breakEvenMonths))} ${Math.max(1, Math.round(r.breakEvenMonths)) === 1 ? "month" : "months"}`;
  const lifetimeGood = r.lifetimeSavings >= 0;
  const extending = r.newMonths > r.currentMonths;
  const shortening = r.newMonths < r.currentMonths;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="balance" label="Current loan balance" prefix={symbol} value={balance} onChange={setBalance} sliderMax={1000000} step={1000} />
          <NumberField id="current-rate" label="Current interest rate" suffix="%" value={currentRate} onChange={setCurrentRate} max={30} sliderMax={12} step={0.05} />
          <NumberField id="years-left" label="Years remaining on current loan" suffix="years" value={yearsLeft} onChange={setYearsLeft} min={1} max={50} sliderMax={30} />
          <NumberField id="new-rate" label="New interest rate" suffix="%" value={newRate} onChange={setNewRate} max={30} sliderMax={12} step={0.05} />
          <Segmented
            label="New loan term"
            value={newTerm}
            onChange={setNewTerm}
            options={[
              { value: 15, label: "15 yr" },
              { value: 20, label: "20 yr" },
              { value: 30, label: "30 yr" },
            ]}
          />
          <NumberField id="closing" label="Closing costs" prefix={symbol} value={closingCosts} onChange={setClosingCosts} sliderMax={30000} step={250} />
          <Segmented
            label="How you pay closing costs"
            value={costMode}
            onChange={setCostMode}
            options={[
              { value: "upfront", label: "Pay upfront" },
              { value: "roll", label: "Roll into loan" },
            ]}
          />
          <NumberField id="cash-out" label="Cash-out amount" prefix={symbol} hint="Optional" value={cashOut} onChange={setCashOut} sliderMax={200000} step={1000} />
        </>
      }
    >
      <ResultSummary
        stats={[
          {
            label: payDown ? "Monthly savings" : "Monthly payment change",
            value: payDown ? money(r.monthlySavings, 2) : r.monthlySavings < -0.005 ? `+${money(-r.monthlySavings, 2)}` : money(0, 2),
            tone: payDown ? "positive" : r.monthlySavings < -0.005 ? "negative" : "default",
            hint: `${money(r.currentPayment, 2)} now → ${money(r.newPayment, 2)} new`,
          },
          {
            label: "Break-even",
            value: breakEvenText,
            hint: payDown ? "Closing costs ÷ monthly savings" : "Payment does not fall",
          },
          {
            label: lifetimeGood ? "Lifetime saving" : "Lifetime extra cost",
            value: money(Math.abs(r.lifetimeSavings)),
            tone: lifetimeGood ? "positive" : "negative",
            hint: "Interest difference less closing costs",
          },
          { label: "Interest left, current loan", value: money(r.currentRemainingInterest), tone: "negative" },
          { label: "Interest, new loan", value: money(r.newTotalInterest), tone: "negative" },
        ]}
      />
      {!payDown && (
        <Notice tone="warning">
          The new payment is not lower than your current one, so the closing costs can never be earned back through monthly savings.
          {lifetimeGood
            ? " The refinance can still pay off if you keep the new, shorter loan, because it cuts total interest."
            : " Try a lower rate, a longer term or smaller closing costs."}
        </Notice>
      )}
      {extending ? (
        <Notice tone="info">
          <strong>Watch the term.</strong> Your current loan has {formatDuration(r.currentMonths)} left and the new one runs{" "}
          {formatDuration(r.newMonths)}. Stretching the term can lower the payment but add interest:{" "}
          {r.interestDifference >= 0
            ? `here the new rate still leaves you ${money(r.interestDifference)} better off on interest.`
            : `here you would pay ${money(-r.interestDifference)} more in interest over the life of the loans.`}
        </Notice>
      ) : (
        <Notice tone="info">
          <strong>Compare the whole loan, not just the payment.</strong>{" "}
          {shortening
            ? "A shorter term usually raises the payment but cuts total interest."
            : "Your new term matches the time left on your current loan, so the payment saving comes from the rate."}{" "}
          Extending the term instead can lower the payment but raise lifetime interest.
        </Notice>
      )}
      {costMode === "roll" && closingCosts > 0 && (
        <Notice tone="info">
          Rolling in <strong>{money(r.financed)}</strong> of closing costs makes the new loan <strong>{money(r.newLoanAmount)}</strong>.
          You pay nothing at closing, but the costs now earn interest for the life of the loan.
        </Notice>
      )}
      {cashOut > 0 && (
        <Notice tone="info">
          The <strong>{money(r.cashOut)}</strong> cash-out is borrowed money that you repay with interest. It raises the new loan to{" "}
          {money(r.newLoanAmount)}, and the extra interest is part of the lifetime figure. The chart adds the cash you receive.
        </Notice>
      )}
      <Panel
        title="Cumulative savings after closing costs"
        description="Monthly payments saved to date, plus any cash-out received, minus closing costs paid at closing. The last point on the line is the lifetime figure above."
      >
        <TimeSeriesChart
          data={r.series}
          xKey="year"
          series={[{ key: "cumulativeSavings", label: "Net savings", color: "var(--chart-1)" }]}
          ariaLabel="Chart of cumulative refinance savings by year after closing costs"
        />
      </Panel>
      <Panel title="Current loan vs new loan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular-nums">
            <thead>
              <tr className="border-b text-left text-xs tracking-wide text-muted-foreground uppercase">
                <th scope="col" className="py-2 pr-3 font-medium"><span className="sr-only">Measure</span></th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Current loan</th>
                <th scope="col" className="py-2 pl-3 text-right font-medium">New loan</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Loan balance</th>
                <td className="px-3 py-2.5 text-right">{money(Math.max(0, balance || 0))}</td>
                <td className="py-2.5 pl-3 text-right">{money(r.newLoanAmount)}</td>
              </tr>
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Rate</th>
                <td className="px-3 py-2.5 text-right">{Number.isFinite(currentRate) ? currentRate : 0}%</td>
                <td className="py-2.5 pl-3 text-right">{Number.isFinite(newRate) ? newRate : 0}%</td>
              </tr>
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Term left</th>
                <td className="px-3 py-2.5 text-right">{formatDuration(r.currentMonths)}</td>
                <td className="py-2.5 pl-3 text-right">{formatDuration(r.newMonths)}</td>
              </tr>
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Monthly payment</th>
                <td className="px-3 py-2.5 text-right">{money(r.currentPayment, 2)}</td>
                <td className="py-2.5 pl-3 text-right">{money(r.newPayment, 2)}</td>
              </tr>
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Interest still to pay</th>
                <td className="px-3 py-2.5 text-right">{money(r.currentRemainingInterest)}</td>
                <td className="py-2.5 pl-3 text-right">{money(r.newTotalInterest)}</td>
              </tr>
              <tr>
                <th scope="row" className="py-2.5 pr-3 text-left font-medium">Closing costs paid at closing</th>
                <td className="px-3 py-2.5 text-right">{money(0)}</td>
                <td className="py-2.5 pl-3 text-right">{money(r.paidUpfront)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Panel>
    </CalculatorShell>
  );
}
