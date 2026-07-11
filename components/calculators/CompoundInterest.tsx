"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateCompoundInterest } from "@/lib/math";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function CompoundInterest() {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(8);

  const data = calculateCompoundInterest(principal, monthlyContribution, years, annualRate);
  
  const finalBalance = data.length > 0 ? data[data.length - 1].balance : 0;
  const totalPrincipal = data.length > 0 ? data[data.length - 1].principal : 0;
  const totalInterest = data.length > 0 ? data[data.length - 1].interest : 0;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Input Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Deposit ($)</Label>
            <Input id="principal" type="number" min={0} value={principal} onChange={(e) => setPrincipal(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
            <Input id="monthlyContribution" type="number" min={0} value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Investment Time (Years)</Label>
            <Input id="years" type="number" min={1} max={100} value={years} onChange={(e) => setYears(Number(e.target.value) || 1)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualRate">Annual Interest Rate (%)</Label>
            <Input id="annualRate" type="number" min={0} max={100} value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Growth Over Time</CardTitle>
          <div className="flex flex-wrap gap-6 text-sm mt-4">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Balance</span>
              <span className="font-bold text-2xl text-foreground">${finalBalance.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Principal</span>
              <span className="font-bold text-xl text-muted-foreground">${totalPrincipal.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="font-bold text-xl text-primary">${totalInterest.toLocaleString()}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tickFormatter={(v) => `Yr ${v}`} />
              <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} labelFormatter={(label) => `Year ${label}`} />
              <Legend />
              <Area name="Total Balance" type="monotone" dataKey="balance" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorBalance)" />
              <Area name="Total Principal" type="monotone" dataKey="principal" stroke="hsl(var(--secondary-foreground))" fill="transparent" strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
