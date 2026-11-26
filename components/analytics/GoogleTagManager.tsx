import Script from "next/script";

/**
 * Google tag (GA4), served first-party through Cloudflare Google tag gateway at /4wcb (only on the Cloudflare-proxied domain;
 * Vercel preview URLs and localhost get a 404 here, so no analytics there).
 * In the EEA/UK, Google's consent message (loaded with AdSense) sets Consent Mode for this tag.
 */
export function GoogleTagManager({ id }: { id: string }) {
  return (
    <>
      <Script id="gtm-src" strategy="afterInteractive" src={`/4wcb/gtm.js?id=${id}`} />
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
    </>
  );
}
