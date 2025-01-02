import React from 'react';
import Seo from '@/data/Seo';
import Section01 from './main/Section01';
import Section02 from './main/Section02';
import Section03 from './main/Section03';
import Section04 from './main/Section04';
import Section05 from './main/Section05';
import Section06 from './main/Section06';


export default function Home() {
  const siteUrl = "https://www.cafemanagershop.com";

  return (
    <>
      <Seo
        title="사업자 전용 최저가 납품 쇼핑몰 - 카페매니저"
        description="원두, 디저트 등 다양한 카페재료를 최저가로 견적받고 손쉽게 구입해보세요. 그리고 카페사장님을 위한 다양한 혜택도 무료로 받아가세요."
        url={siteUrl}
      />
      <main>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </main>
    </>
  );
}