"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { isEmbedWidgetPath } from "@/lib/embed";

/**
 * Renders the site chrome (navbar, footer, Clarity, AdSense) everywhere except the /embed/<slug> widgets,
 * which are iframed on third-party sites and must stay ad-free and recording-free.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return isEmbedWidgetPath(pathname) ? null : <>{children}</>;
}
