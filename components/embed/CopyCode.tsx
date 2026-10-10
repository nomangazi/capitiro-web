"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Embed snippet with a "Copy code" button. The code stays selectable if the clipboard API is blocked. */
export function CopyCode({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the user can still select the code manually.
    }
  }
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium">Embed code</span>
        <Button type="button" variant="outline" className="h-10" onClick={copy} aria-label={`Copy embed code for the ${label}`}>
          {copied ? <Check /> : <Copy />}
          {copied ? "Copied" : "Copy code"}
        </Button>
      </div>
      <pre className="max-w-full overflow-x-auto rounded-lg border bg-muted p-3 text-xs leading-relaxed break-all whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
      <span className="sr-only" aria-live="polite">
        {copied ? "Embed code copied" : ""}
      </span>
    </div>
  );
}
