import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="카페매니저" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f15a24" />
        <meta name="msapplication-TileColor" content="#f15a24" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.cafemanagershop.com" />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="원두, 디저트 등 다양한 카페재료를 최저가 견적으로 손쉽게 구입할 수 있는 카페매니저입니다. 카페사장님을 위한 다양한 혜택을 무료로 받아가세요" />
        <meta name="keywords" content="카페원두, 원두, 디저트, 시럽, 원두납품, 원두도매, 카페재료, 카페시럽, 디저트납품, 카페우유, 카페원두납품, 디저트레시피, 카페창업, 사업자원두, 업소용원두, 개인카페창업, 카페, 베이커리납품, 소자본카페" />
        <meta name="author" content="https://www.cafemanagershop.com" />
        <meta name="robots" content="index, follow" />
        <meta name="NaverBot" content="All" />
        <meta name="Yeti" content="All" />
        <meta name="Googlebot" content="index,follow" />
        <meta name="daumoa" content="index,follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="twitter:description" content="원두, 디저트 등 다양한 카페재료를 최저가 견적으로 손쉽게 구입할 수 있는 카페매니저입니다. 카페사장님을 위한 다양한 혜택을 무료로 받아가세요." />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="사업자 전용 최저가 납품 쇼핑몰 - 카페매니저" />
        <meta property="og:description" content="원두, 디저트 등 다양한 카페재료를 최저가 견적으로 손쉽게 구입할 수 있는 카페매니저입니다. 카페사장님을 위한 다양한 혜택을 무료로 받아가세요." />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:url" content="https://www.cafemanagershop.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="사업자 전용 최저가 납품 쇼핑몰 - 카페매니저" />
        <meta property="og:locale" content="ko_KR" />

        {/* Site Verification */}
        <meta name="naver-site-verification" content="e48d395d4aff77fb8cc19027ac2b37e9d1d45b25" />
        <meta name="google-site-verification" content="iY8MNvrBwCorFcJBU8-rfiSpSssR4gfTfofiaFDcoUY" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFWBGTZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1263665402080556&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Main />
        <NextScript />

        {/* 아래에 Script 추가 */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WFWBGTZT');`,
          }}
        />

        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1263665402080556');
  fbq('track', 'PageView');`,
          }}
        />
      </body>
    </Html>
  );
}
