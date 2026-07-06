import type { ReactNode } from 'react';
import Script from 'next/script';

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function ADetLpLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {CLARITY_PROJECT_ID && (
        <Script id="adet-lp-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", ${JSON.stringify(CLARITY_PROJECT_ID)});
          `}
        </Script>
      )}
      {GA4_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="adet-lp-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(GA4_MEASUREMENT_ID)}, {
                page_path: window.location.pathname,
                page_location: window.location.href,
                page_title: document.title,
              });
            `}
          </Script>
        </>
      )}
      {children}
    </>
  );
}
