import { Html, Head, Main, NextScript } from "next/document";

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
        <meta name="keywords" content="카페원두, 원두, 디저트, 시럽, 원두납품, 원두도매, 카페재료, 카페시럽, 디저트납품, 카페우유, 카페원두납품, 디저트레시피, 카페창업, 사업자원두, 업소용원두, 카페원두납품, 개인카페창업, 카페, 베이커리납품, 소자본카페" />
        <meta name="author" content="https://www.cafemanagershop.com" />
        <meta name="Robots" content="index, follow" />
        <meta name="naver-site-verification" content="" />
        <meta name="google-site-verification" content=" " />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
