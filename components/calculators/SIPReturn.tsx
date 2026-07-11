"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSIP } from "@/lib/math";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function SIPReturn() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(12);

  const data = calculateSIP(monthlyInvestment, annualRate, years);
  
  const finalBalance = data.length > 0 ? data[data.length - 1].balance : 0;
  const totalInvested = data.length > 0 ? data[data.length - 1].principal : 0;
  const estReturns = data.length > 0 ? data[data.length - 1].interest : 0;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>SIP Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyInvestment">Monthly Investment ($)</Label>
            <Input id="monthlyInvestment" type="number" min={0} value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value) || 0)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Investment Period (Years)</Label>
            <Input id="years" type="number" min={1} max={50} value={years} onChange={(e) => setYears(Number(e.target.value) || 1)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualRate">Expected Return Rate (%)</Label>
            <Input id="annualRate" type="number" min={0} max={100} value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} />
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Wealth Projection</CardTitle>
          <div className="flex flex-wrap gap-6 text-sm mt-4">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Wealth</span>
              <span className="font-bold text-2xl text-foreground">${finalBalance.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Total Invested</span>
              <span className="font-bold text-xl text-muted-foreground">${totalInvested.toLocaleString()}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Est. Returns</span>
              <span className="font-bold text-xl text-primary">${estReturns.toLocaleString()}</span>
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
              <Area name="Total Wealth" type="monotone" dataKey="balance" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorBalance)" />
              <Area name="Total Invested" type="monotone" dataKey="principal" stroke="hsl(var(--secondary-foreground))" fill="transparent" strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
