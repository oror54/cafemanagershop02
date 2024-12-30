import 'swiper/css'; // 기본 스타일
import 'swiper/css/navigation'; // 네비게이션 스타일
import 'swiper/css/pagination'; // 페이지네이션 스타일

import "@/styles/globals.css";
import "@/styles/main.css"
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from 'src/common/Header/Header';
import Footer from 'src/common/Footer/Footer';



//글로벌 css, 공통 레이아웃 , 테마나 상태관리
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>사업자 전용 최저가 납품 쇼핑몰 - 카페매니저</title>
        <meta name="description" content="원두, 디저트 등 다양한 카페재료를 최저가로 견적받고 손쉽게 구입해보세요. 그리고 카페사장님을 위한 다양한 혜택도 무료로 받아가세요." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* 공통 헤더 */}
      <Header />
      <Component {...pageProps} />3
      <Footer />
    </>
  );
}