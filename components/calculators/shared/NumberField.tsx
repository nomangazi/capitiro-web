"use client";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface NumberFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  /** Hard limits — values are clamped to these on blur */
  min?: number;
  max?: number;
  step?: number;
  /** Slider range when it should be narrower than the hard limits (e.g. home price) */
  sliderMin?: number;
  sliderMax?: number;
  prefix?: string;
  suffix?: string;
  hint?: string;
  showSlider?: boolean;
}

/**
 * Labelled numeric input with optional prefix/suffix and a synced slider.
 * An empty field reports NaN while typing (math functions treat it safely) and snaps to `min` on blur.
 */
export function NumberField({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  sliderMin,
  sliderMax,
  prefix,
  suffix,
  hint,
  showSlider = true,
}: NumberFieldProps) {
  const lo = sliderMin ?? min;
  const hi = sliderMax ?? Math.min(max, Number.MAX_SAFE_INTEGER);
  const sliderValue = Number.isFinite(value) ? Math.min(hi, Math.max(lo, value)) : lo;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-2.5">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        {hint && (
          <span id={hintId} className="text-xs text-muted-foreground">
            {hint}
          </span>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          aria-describedby={hintId}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(Number.parseFloat(e.target.value))}
          onBlur={() => {
            if (!Number.isFinite(value) || value < min) onChange(min);
            else if (value > max) onChange(max);
          }}
          className={cn("h-10 text-base tabular-nums", prefix && "pl-8", suffix && "pr-14")}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
      {showSlider && hi > lo && (
        <Slider
          aria-label={label}
          min={lo}
          max={hi}
          step={step}
          value={[sliderValue]}
          onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : next)}
          className="py-1"
        />
      )}
    </div>
  );
}
