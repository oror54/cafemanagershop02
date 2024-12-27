import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <meta charSet="UTF-8" />
        <meta name="description" content="카페사장님 전용 쇼핑몰 카페매니저에서 원두부터 디저트까지 한번에 손쉽게 견적받고 저렴하게 구입하세요. 다양한 레시피, 운영팁, 각종 혜택까지 !" />
        <meta name="keywords" content="카페매니저, 카페원두, 원두, 디저트, 시럽, 원두납품, 원두도매, 카페재료, 바닐라시럽, 디저트납품, 우유, 카페원두납품, 디저트레시피, 카페창업, 사업자원두, 업소용원두, 카페원두도매, 개인카페창업, 카페, 베이커리납품, 소자본카페" />
        <meta name="author" content="https://www.cafemanagershop.com" />
        <meta name="Robots" content="index, follow" />
        <meta name="title" content="카페 사장님 전용 쇼핑몰 - 카페매니저" />
        <meta name="naver-site-verification" content="" />
        <meta name="google-site-verification" content=" " />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <meta name="Googlebot" content="index,follow" />
        <meta name="daumoa" content="index,follow" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="카페 사장님 전용 쇼핑몰 - 카페매니저" />
        <meta property="og:description" content="카페사장님 전용 쇼핑몰 카페매니저에서 원두부터 디저트까지 한번에 손쉽게 견적받고 저렴하게 구입하세요. 다양한 레시피, 운영팁, 각종 혜택까지 !" />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:url" content="https://www.cafemanagershop.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="카페매니저 상품홈페이지" />
        <meta property="og:locale" content="ko_KR" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
