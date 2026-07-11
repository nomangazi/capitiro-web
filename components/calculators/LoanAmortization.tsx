"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateLoanAmortization } from "@/lib/math";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function LoanAmortization() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [years, setYears] = useState(30);
  const [annualRate, setAnnualRate] = useState(6.5);

  const data = calculateLoanAmortization(loanAmount, annualRate, years);

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Total Interest", value: data.totalInterest },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--destructive))"];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 h-fit">
        <CardHeader>
          <CardTitle>Input Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount ($)</Label>
            <Input id="loanAmount" type="number" min={0} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Loan Term (Years)</Label>
            <Input id="years" type="number" min={1} max={50} value={years} onChange={(e) => setYears(Number(e.target.value) || 1)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualRate">Interest Rate (%)</Label>
            <Input id="annualRate" type="number" min={0} max={100} value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Repayment Summary</CardTitle>
          <div className="flex flex-wrap gap-6 text-sm mt-4">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Monthly EMI</span>
              <span className="font-bold text-2xl text-foreground">${data.emi.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Payment</span>
              <span className="font-bold text-xl text-muted-foreground">${data.totalPayment.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="font-bold text-xl text-destructive">${data.totalInterest.toLocaleString()}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Amortization Schedule (Yearly Summary)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Principal Paid</TableHead>
                <TableHead>Interest Paid</TableHead>
                <TableHead className="text-right">Remaining Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.schedule.filter(s => s.month % 12 === 0).map((row, i) => (
                <TableRow key={row.month}>
                  <TableCell className="font-medium">{row.month / 12}</TableCell>
                  <TableCell>${(row.principalComponent * 12).toLocaleString()}</TableCell>
                  <TableCell>${(row.interestComponent * 12).toLocaleString()}</TableCell>
                  <TableCell className="text-right">${row.balance.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
