"use client";

import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis } from "recharts";
import type { TooltipContentProps } from "recharts";
import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart";
import { useCurrency } from "@/components/providers/currency";
import { cn } from "@/lib/utils";

export interface SeriesDef {
  key: string;
  label: string;
  /** CSS color, normally one of var(--chart-1..5) */
  color: string;
  /** "area" = filled gradient (use for the headline series), "line" = dashed reference line */
  variant?: "area" | "line";
}

function toConfig(series: SeriesDef[]): ChartConfig {
  return Object.fromEntries(series.map((s) => [s.key, { label: s.label, color: s.color }]));
}

function MoneyTooltip({
  active,
  payload,
  label,
  labelPrefix,
}: Partial<TooltipContentProps> & { labelPrefix: string }) {
  const { money } = useCurrency();
  if (!active || !payload?.length) return null;
  return (
    <div className="min-w-44 rounded-lg border bg-background px-3 py-2 text-xs shadow-lg">
      <p className="mb-1.5 font-semibold">
        {labelPrefix} {label}
      </p>
      <div className="space-y-1">
        {payload.map((item) => (
          <div key={String(item.dataKey)} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span className="size-2 rounded-sm" style={{ backgroundColor: item.color }} />
              {item.name}
            </span>
            <span className="font-medium tabular-nums">{money(Number(item.value))}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ series }: { series: SeriesDef[] }) {
  return (
    <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
      {series.map((s) => (
        <li key={s.key} className="flex items-center gap-1.5">
          <span
            className={cn("inline-block h-0.5 w-4", s.variant === "line" && "border-t-2 border-dashed bg-transparent")}
            style={s.variant === "line" ? { borderColor: s.color } : { backgroundColor: s.color, height: 8, borderRadius: 2 }}
          />
          {s.label}
        </li>
      ))}
    </ul>
  );
}

/**
 * Money-over-time chart used by the growth calculators. One "area" series is the
 * headline value; "line" series are references such as total contributions.
 */
export function TimeSeriesChart({
  data,
  xKey,
  xLabel = "Year",
  series,
  ariaLabel,
  height = 320,
}: {
  data: object[];
  xKey: string;
  xLabel?: string;
  series: SeriesDef[];
  ariaLabel: string;
  height?: number;
}) {
  const { compact } = useCurrency();
  return (
    <figure aria-label={ariaLabel}>
      <ChartContainer config={toConfig(series)} className="aspect-auto w-full" style={{ height }}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 4, bottom: 0 }} accessibilityLayer>
          <defs>
            {series.map((s) => (
              <linearGradient key={s.key} id={`fill-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${s.key})`} stopOpacity={0.35} />
                <stop offset="95%" stopColor={`var(--color-${s.key})`} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey={xKey} tickLine={false} axisLine={false} tickMargin={8} minTickGap={24} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={64}
            tickFormatter={(v: number) => compact(v)}
          />
          <ChartTooltip content={(props) => <MoneyTooltip {...props} labelPrefix={xLabel} />} />
          {series.map((s) => (
            <Area
              key={s.key}
              dataKey={s.key}
              name={s.label}
              type="monotone"
              stroke={`var(--color-${s.key})`}
              strokeWidth={2}
              strokeDasharray={s.variant === "line" ? "5 4" : undefined}
              fill={s.variant === "line" ? "transparent" : `url(#fill-${s.key})`}
              isAnimationActive={false}
            />
          ))}
        </AreaChart>
      </ChartContainer>
      <Legend series={series} />
    </figure>
  );
}

export interface Slice {
  key: string;
  label: string;
  value: number;
  color: string;
}

/** Donut + value list. Used for "where does my payment go" style breakdowns. */
export function BreakdownDonut({ slices, ariaLabel, centerLabel, centerValue }: {
  slices: Slice[];
  ariaLabel: string;
  centerLabel?: string;
  centerValue?: string;
}) {
  const { money } = useCurrency();
  const visible = slices.filter((s) => s.value > 0);
  const total = visible.reduce((sum, s) => sum + s.value, 0);
  const config = Object.fromEntries(slices.map((s) => [s.key, { label: s.label, color: s.color }]));

  return (
    <figure aria-label={ariaLabel} className="grid items-center gap-6 sm:grid-cols-[13rem_1fr]">
      <div className="relative mx-auto size-52">
        <ChartContainer config={config} className="aspect-square size-52" initialDimension={{ width: 208, height: 208 }}>
          <PieChart>
            <Pie
              data={visible}
              dataKey="value"
              nameKey="label"
              innerRadius={62}
              outerRadius={96}
              paddingAngle={visible.length > 1 ? 2 : 0}
              strokeWidth={0}
              isAnimationActive={false}
            >
              {visible.map((s) => (
                <Cell key={s.key} fill={s.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        {centerValue && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-lg font-bold tabular-nums">{centerValue}</span>
            {centerLabel && <span className="text-xs text-muted-foreground">{centerLabel}</span>}
          </div>
        )}
      </div>
      <ul className="space-y-2.5 text-sm">
        {slices.map((s) => (
          <li key={s.key} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="size-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
              {s.label}
            </span>
            <span className="font-medium tabular-nums">
              {money(s.value)}
              {total > 0 && (
                <span className="ml-2 text-xs text-muted-foreground">{Math.round((s.value / total) * 100)}%</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
