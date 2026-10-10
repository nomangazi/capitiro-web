import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Authorized Digital Sellers file required by AdSense. Generated from
 * NEXT_PUBLIC_ADSENSE_CLIENT ("ca-pub-XXXX") at build time.
 */
export function GET() {
  const publisherId = siteConfig.adsense.client.replace(/^ca-/, "");
  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : "# AdSense not configured yet. Set NEXT_PUBLIC_ADSENSE_CLIENT and redeploy.\n";
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
