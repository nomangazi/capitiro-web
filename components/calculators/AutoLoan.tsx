"use client";

import { useState } from "react";
import { useCurrency } from "@/components/providers/currency";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { calculateAutoLoan } from "@/lib/math";
import { CalculatorShell, Notice, Panel, ResultSummary } from "./shared/CalculatorShell";
import { NumberField } from "./shared/NumberField";
import { Segmented } from "./shared/Segmented";
import { TimeSeriesChart } from "./shared/charts";

const TERMS = [36, 48, 60, 72, 84];
const COMPARE_TERMS = [48, 60, 72];

export function AutoLoan() {
  const { symbol, money } = useCurrency();
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [tradeInOwed, setTradeInOwed] = useState(0);
  const [salesTaxRate, setSalesTaxRate] = useState(6);
  const [fees, setFees] = useState(500);
  const [annualRate, setAnnualRate] = useState(7);
  const [termMonths, setTermMonths] = useState(60);
  const [taxMode, setTaxMode] = useState<"financed" | "upfront">("financed");
  const [taxBasis, setTaxBasis] = useState<"net" | "full">("net");

  const input = {
    vehiclePrice,
    downPayment,
    tradeInValue,
    tradeInOwed,
    salesTaxRate,
    fees,
    annualRate,
    termMonths,
    financeTaxAndFees: taxMode === "financed",
    tradeInReducesTax: taxBasis === "net",
  };
  const loan = calculateAutoLoan(input);
  const comparison = COMPARE_TERMS.map((months) => ({ months, result: calculateAutoLoan({ ...input, termMonths: months }) }));
  const hasLoan = loan.amountFinanced > 0.005;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField id="price" label="Vehicle price" prefix={symbol} value={vehiclePrice} onChange={setVehiclePrice} sliderMax={150000} step={500} />
          <NumberField id="down" label="Down payment" prefix={symbol} value={downPayment} onChange={setDownPayment} sliderMax={Math.max(vehiclePrice || 0, 1000)} step={500} />
          <NumberField id="tradein" label="Trade-in value" prefix={symbol} hint="Optional" value={tradeInValue} onChange={setTradeInValue} sliderMax={60000} step={500} />
          <NumberField id="owed" label="Amount owed on trade-in" prefix={symbol} hint="Optional" value={tradeInOwed} onChange={setTradeInOwed} sliderMax={60000} step={500} />
          <NumberField id="rate" label="Interest rate (APR)" suffix="%" value={annualRate} onChange={setAnnualRate} max={30} sliderMax={20} step={0.1} />
          <Segmented
            label="Loan term"
            value={termMonths}
            onChange={setTermMonths}
            options={TERMS.map((value) => ({ value, label: `${value} mo` }))}
          />
          <details className="group rounded-lg border px-4 py-3 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="cursor-pointer text-sm font-medium select-none">
              Sales tax &amp; fees
              <span className="ml-1 text-muted-foreground group-open:hidden">(show)</span>
            </summary>
            <div className="mt-4 space-y-6">
              <NumberField id="tax" label="Sales tax rate" suffix="%" hint={money(loan.salesTax, 2)} value={salesTaxRate} onChange={setSalesTaxRate} max={30} sliderMax={12} step={0.05} />
              <NumberField id="fees" label="Title, registration & doc fees" prefix={symbol} value={fees} onChange={setFees} sliderMax={5000} step={50} />
              <Segmented
                label="Sales tax is charged on"
                value={taxBasis}
                onChange={setTaxBasis}
                options={[
                  { value: "net", label: "Price − trade-in" },
                  { value: "full", label: "Full price" },
                ]}
              />
              <Segmented
                label="Tax and fees are"
                value={taxMode}
                onChange={setTaxMode}
                options={[
                  { value: "financed", label: "Financed" },
                  { value: "upfront", label: "Paid upfront" },
                ]}
              />
            </div>
          </details>
        </>
      }
    >
      <ResultSummary
        stats={[
          { label: "Monthly payment", value: money(loan.monthlyPayment, 2), hint: `for ${loan.termMonths} months` },
          { label: "Amount financed", value: money(loan.amountFinanced) },
          { label: "Total interest", value: money(loan.totalInterest), tone: "negative" },
          { label: "Cash at signing", value: money(loan.cashAtSigning), hint: taxMode === "upfront" ? "Down payment + tax + fees" : "Down payment" },
          { label: "Total cost", value: money(loan.totalCost), hint: "Cash + all payments" },
        ]}
      />
      {loan.negativeEquityRolledIn > 0.005 && (
        <Notice tone="warning">
          You owe <strong>{money(loan.negativeEquityRolledIn)}</strong> more on your trade-in than it is worth. That negative equity is
          added to the new loan, so you pay interest on it for the whole term.
        </Notice>
      )}
      {!hasLoan && (
        <Notice tone="info">Your down payment and trade-in cover the whole purchase, so nothing needs to be financed.</Notice>
      )}
      {hasLoan && termMonths >= 72 && (
        <Notice tone="info">
          A {termMonths}-month term lowers the payment but costs more interest, and the balance can stay above the car&apos;s value
          for longer. Compare shorter terms below.
        </Notice>
      )}
      <p className="text-xs text-muted-foreground">
        Sales tax rules differ by US state (and by country). Some states tax the price after the trade-in credit, others tax the full
        price. Check your state&apos;s rule and your dealer&apos;s quote.
      </p>

      <Panel title="Loan balance over time" description="How the balance falls and how much interest you have paid by the end of each year.">
        <TimeSeriesChart
          ariaLabel="Auto loan balance and cumulative interest paid by year"
          data={loan.yearly}
          xKey="year"
          series={[
            { key: "balance", label: "Remaining balance", color: "var(--chart-1)" },
            { key: "interestPaid", label: "Interest paid so far", color: "var(--chart-3)", variant: "line" },
          ]}
        />
      </Panel>

      <Panel title="Compare loan terms" description="The same loan over 48, 60 and 72 months. A longer term lowers the payment but costs more interest.">
        <div className="overflow-x-auto rounded-lg border">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead className="text-right">Monthly payment</TableHead>
                <TableHead className="text-right">Total interest</TableHead>
                <TableHead className="text-right">Total cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map(({ months, result }) => (
                <TableRow key={months} className={months === termMonths ? "bg-primary/5" : undefined}>
                  <TableCell className="font-medium">
                    {months} months
                    {months === termMonths && <span className="ml-1.5 text-xs text-muted-foreground">(selected)</span>}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{money(result.monthlyPayment, 2)}</TableCell>
                  <TableCell className="text-right tabular-nums">{money(result.totalInterest)}</TableCell>
                  <TableCell className="text-right tabular-nums">{money(result.totalCost)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>
    </CalculatorShell>
  );
}
