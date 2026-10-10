import { cn } from "@/lib/utils";

/** Brand mark: rising bars in a rounded square + wordmark. Keep in sync with app/icon.svg. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-8", className)}>
      <rect width="32" height="32" rx="8" fill="var(--primary)" />
      <rect x="7" y="17" width="4" height="8" rx="1.5" fill="#fff" opacity="0.7" />
      <rect x="14" y="12" width="4" height="13" rx="1.5" fill="#fff" opacity="0.85" />
      <rect x="21" y="7" width="4" height="18" rx="1.5" fill="#fff" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <span className="text-xl font-bold tracking-tight text-foreground">Capitiro</span>
    </span>
  );
}
