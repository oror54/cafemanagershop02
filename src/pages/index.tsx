import React from 'react';
import Seo from '@/data/Seo';
import Section01 from './main/Section01';
import Section02 from './main/Section02';
import Section03 from './main/Section03';
import Section04 from './main/Section04';
import Section05 from './main/Section05';
import Section06 from './main/Section06';


export default function Home() {
  const siteUrl = "https://www.cafemanagershop.kr";

  return (
    <>
      <Seo
        title="카페사장님을 위한 일 잘하는 매니저 - 카페매니저"
        description="카페 운영을 위한 다양한 도구와 정보를 제공합니다."
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