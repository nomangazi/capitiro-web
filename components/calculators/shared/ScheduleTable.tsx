"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCurrency } from "@/components/providers/currency";
import type { AmortizationRow, AmortizationYear } from "@/lib/math";
import { Segmented } from "./Segmented";

/** Amortization schedule with a Yearly / Monthly toggle. Monthly view is capped for performance. */
export function ScheduleTable({ yearly, monthly }: { yearly: AmortizationYear[]; monthly?: AmortizationRow[] }) {
  const { money } = useCurrency();
  const [view, setView] = useState<"yearly" | "monthly">("yearly");
  const rows =
    view === "yearly" || !monthly
      ? yearly.map((y) => ({ key: y.year, period: `Year ${y.year}`, principal: y.principal, interest: y.interest, balance: y.balance }))
      : monthly.map((m) => ({ key: m.month, period: `Month ${m.month}`, principal: m.principal, interest: m.interest, balance: m.balance }));

  return (
    <div className="space-y-4">
      {monthly && (
        <Segmented
          label="Schedule view"
          hideLabel
          value={view}
          onChange={setView}
          options={[
            { value: "yearly", label: "Yearly" },
            { value: "monthly", label: "Monthly" },
          ]}
          className="max-w-56"
        />
      )}
      <div className="max-h-[28rem] overflow-y-auto rounded-lg border">
        <Table>
          <TableHeader className="sticky top-0 bg-muted">
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead className="text-right">Principal</TableHead>
              <TableHead className="text-right">Interest</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell className="font-medium">{row.period}</TableCell>
                <TableCell className="text-right tabular-nums">{money(row.principal)}</TableCell>
                <TableCell className="text-right tabular-nums">{money(row.interest)}</TableCell>
                <TableCell className="text-right tabular-nums">{money(row.balance)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
