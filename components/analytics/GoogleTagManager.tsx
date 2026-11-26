import Script from "next/script";

/**
 * Google tag (GA4 via googletagmanager.com). Loaded after the page is interactive so it never blocks rendering.
 * In the EEA/UK, Google's consent message (loaded with AdSense) sets Consent Mode for this tag.
 */
export function GoogleTagManager({ id }: { id: string }) {
  return (
    <>
      <Script id="gtm-src" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtm.js?id=${id}`} />
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
    </>
  );
}
