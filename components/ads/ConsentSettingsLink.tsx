"use client";

import { siteConfig } from "@/lib/site";

/**
 * Lets visitors reopen Google's consent (CMP) dialog — required so EEA/UK users can
 * withdraw consent as easily as they gave it. Only shown once AdSense is configured,
 * because the dialog comes from AdSense "Privacy & messaging".
 */
export function ConsentSettingsLink({ className }: { className?: string }) {
  if (!siteConfig.adsense.client) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.googlefc = window.googlefc || {};
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
        window.googlefc.callbackQueue.push({
          CONSENT_DATA_READY: () => window.googlefc?.showRevocationMessage?.(),
        });
      }}
    >
      Privacy &amp; cookie settings
    </button>
  );
}
