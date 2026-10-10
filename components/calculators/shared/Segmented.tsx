"use client";

import { cn } from "@/lib/utils";

interface SegmentedProps<T extends string | number> {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  /** Hide the visible label (it is still announced to screen readers) */
  hideLabel?: boolean;
  className?: string;
}

/** Small radio-button group for discrete choices (loan term, compounding, table view). */
export function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
  hideLabel,
  className,
}: SegmentedProps<T>) {
  return (
    <div className={cn("space-y-2", className)}>
      <span className={cn("block text-sm font-medium", hideLabel && "sr-only")}>{label}</span>
      <div role="radiogroup" aria-label={label} className="inline-flex w-full rounded-lg bg-muted p-1">
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={String(option.value)}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                selected ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
