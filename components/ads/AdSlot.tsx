"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    googlefc?: { callbackQueue?: unknown[]; showRevocationMessage?: () => void };
  }
}

interface AdSlotProps {
  /** AdSense ad unit id. Defaults to the in-content unit from NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT. */
  slot?: string;
  className?: string;
}

/**
 * Manual responsive AdSense unit. Renders nothing in production until AdSense is
 * configured, and a labelled placeholder in development so layouts can be checked.
 * Placement rules live in .claude/skills/adsense-compliance.
 */
export function AdSlot({ slot = siteConfig.adsense.inContentSlot, className }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);
  const client = siteConfig.adsense.client;
  const enabled = Boolean(client && slot);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || el.getAttribute("data-adsbygoogle-status")) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a not-yet-approved account — fail silently, the page must still work.
    }
  }, [enabled]);

  if (!enabled) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <div
        className={cn(
          "flex min-h-24 items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground",
          className
        )}
      >
        Ad slot (set NEXT_PUBLIC_ADSENSE_CLIENT and NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT)
      </div>
    );
  }

  return (
    <aside aria-label="Advertisement" className={cn("min-h-24 text-center", className)}>
      <span className="mb-1 block text-[10px] tracking-widest text-muted-foreground uppercase">Advertisement</span>
      <ins
        ref={ref}
        className="adsbygoogle block"
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
