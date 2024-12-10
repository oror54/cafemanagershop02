import milk01 from "$/assets/images/sub/fresh/milk/item01_서울우유 신림5동_우유.png";
import dairy01 from "$/assets/images/sub/fresh/dairy/item01_서울우유 신림5동_생크림.png";
import dairy02 from "$/assets/images/sub/fresh/dairy/item02_서울우유 신림5동_연유.png";
import fresh01 from "$/assets/images/sub/fresh/others/item01_빈커스텀컴퍼니_181라운지 더치커피.png";
import freshDetail01 from "$/assets/images/sub/fresh/others/detail01_빈커스텀컴퍼니_181라운지 더치커피.jpg";
import otherNewBg01 from "$/assets/images/sub/fresh/others/item01_빈커스텀컴퍼니_181라운지 더치커피_newbg.jpg"
import fresh02 from "$/assets/images/sub/fresh/others/item02_빈커스텀컴퍼니_181라운지 디카페인 더치커피.png";
import fresh03 from "$/assets/images/sub/fresh/others/item03_GSHCOFFEE_예가체프콜드브루.png";
import fresh04 from "$/assets/images/sub/fresh/others/item04_로스팅코리아_콜드브루 디카페인.png";
import fresh05 from "$/assets/images/sub/fresh/others/item05_로스팅코리아_콜드브루 블렌딩.png";
import fresh06 from "$/assets/images/sub/fresh/others/item06_솔룸커피로스터스_솔룸다크콜드브루원액.png";
import fresh07 from "$/assets/images/sub/fresh/others/item07_솔룸커피로스터스_콜롬비아디카페인콜드브루원액.png";

import freshDetail02 from "$/assets/images/sub/fresh/others/detail02_빈커스텀컴퍼니_181라운지 디카페인 더치커피.jpg"
import freshDetail04 from "$/assets/images/sub/fresh/others/detail04_로스팅코리아_콜드브루 디카페인.jpg"
import freshDetail05 from "$/assets/images/sub/fresh/others/detail05_로스팅코리아_콜드브루 블렌딩.jpg"
import freshDetail06 from "$/assets/images/sub/fresh/others/detail06_솔룸커피로스터스_솔룸다크골드브루원액.png"
import freshDetail07 from "$/assets/images/sub/fresh/others/detail07_솔룸커피로스터스_콜롬비아디카페인골드브루원액.png"

import lightRoast01 from "$/assets/images/sub/beans/weak/item01_미임커피_특별한날.png"

import mediumRoast01 from "$/assets/images/sub/beans/mid/item01_넥타_과테말라세리스.png"

import defaultImage from "$/default-image.png";
import { StaticImageData } from "next/image";

type dataType = {
  id: number;
  category: string;
  subCategory: string;
  brand: string;
  name: string;
  imageUrl: string | StaticImageData;
  description: string | StaticImageData;
  categoryDetail: string;
  categoryKo: string;
  url: string;
  best: boolean,
  new:boolean,
  newItemBg:string | StaticImageData;
};

export const allData: dataType[] = [
  {
    id: 0,
    category: "fresh",
    subCategory: "milk",
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: milk01,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '우유',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 1,
    category: "fresh",
    subCategory: "dairy",
    name: "신선한 우유로 만든 생크림",
    brand: "서울우유",
    imageUrl: dairy01,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 2,
    category: "fresh",
    subCategory: "dairy",
    name: "서울우유 연유",
    brand: "서울우유",
    imageUrl: dairy02,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 3,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: fresh01,
    description: freshDetail01,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:true,
    newItemBg: otherNewBg01,
  },
  {
    id: 4,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 디카페인 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: fresh02,
    description: freshDetail02,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:true,
    newItemBg: otherNewBg01,
  },
  {
    id: 5,
    category: "fresh",
    subCategory: "other",
    name: "예가체프콜드브루",
    brand: "GSHCOFFEE",
    imageUrl: fresh03,
    description: defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 6,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 디카페인",
    brand: "로스팅코리아",
    imageUrl: fresh04,
    description: freshDetail04,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 7,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 블렌딩",
    brand: "로스팅코리아",
    imageUrl: fresh05,
    description: freshDetail05,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 8,
    category: "fresh",
    subCategory: "other",
    name: "솔룸다크콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: fresh06,
    description: freshDetail06,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 9,
    category: "fresh",
    subCategory: "other",
    name: "콜롬비아디카페인콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: fresh07,
    description: freshDetail07,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 10,
    category: "bean",
    subCategory: "lightRoast",
    name: "특별한날 블랜딩",
    brand: "미임커피로스터스",
    imageUrl: lightRoast01,
    description: defaultImage,
    categoryKo: '원두',
    categoryDetail: '약배전',
    url: "",
    best: false,
    new:false,
    newItemBg: defaultImage,
  },

  {
    id: 11,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 과테말라 세리스",
    brand: "(주)넥타홀딩스",
    imageUrl: mediumRoast01,
    description: defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new:false,
    newItemBg: defaultImage,
  },
  {
    id: 11,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 과테말라 세리스",
    brand: "(주)넥타홀딩스",
    imageUrl: mediumRoast01,
    description: defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new:false,
    newItemBg: defaultImage,
  },
];
