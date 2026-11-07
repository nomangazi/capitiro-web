"use client";

import clarity from "@microsoft/clarity";
import { useEffect } from "react";

let initialized = false;

/**
 * Microsoft Clarity (heatmaps and session recordings) via the official npm package.
 * Masking must stay "Strict" in the Clarity dashboard so calculator inputs are never recorded
 * (we promise visitors their numbers stay private).
 */
export function Clarity({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (!projectId || initialized) return;
    initialized = true;
    clarity.init(projectId);
  }, [projectId]);
  return null;
}
