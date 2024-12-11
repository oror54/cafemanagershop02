import { StaticImageData } from "next/image";
import { images } from "./imageAssets";

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
  new: boolean,
  newItemBg: string | StaticImageData;
};

export const allData: dataType[] = [
  {
    id: 0,
    category: "fresh",
    subCategory: "milk",
    name: "서울 흰우유(1,000mL)",
    brand: "서울우유",
    imageUrl: images.milk01,
    description: images.defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '우유',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 1,
    category: "fresh",
    subCategory: "dairy",
    name: "신선한 우유로 만든 생크림",
    brand: "서울우유",
    imageUrl: images.dairy01,
    description: images.defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 2,
    category: "fresh",
    subCategory: "dairy",
    name: "서울우유 연유",
    brand: "서울우유",
    imageUrl: images.dairy02,
    description: images.defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '유제품',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 3,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: images.freshothers01,
    description: images.freshothersDetail01,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: true,
    newItemBg: images.freshotherNewBg01,
  },
  {
    id: 4,
    category: "fresh",
    subCategory: "other",
    name: "181라운지 디카페인 더치커피",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: images.freshothers02,
    description: images.freshothersDetail02,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: true,
    newItemBg: images.freshotherNewBg01,
  },
  {
    id: 5,
    category: "fresh",
    subCategory: "other",
    name: "예가체프콜드브루",
    brand: "GSHCOFFEE",
    imageUrl: images.freshothers03,
    description: images.defaultImage,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 6,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 디카페인",
    brand: "로스팅코리아",
    imageUrl: images.freshothers04,
    description: images.freshothersDetail04,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 7,
    category: "fresh",
    subCategory: "other",
    name: "콜드브루 블렌딩",
    brand: "로스팅코리아",
    imageUrl: images.freshothers05,
    description: images.freshothersDetail05,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 8,
    category: "fresh",
    subCategory: "other",
    name: "솔룸다크콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: images.freshothers06,
    description: images.freshothersDetail06,
    categoryKo: '신선식품',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  {
    id: 9,
    category: "fresh",
    subCategory: "other",
    name: "콜롬비아디카페인콜드브루원액",
    brand: "솔룸커피로스터스",
    imageUrl: images.freshothers07,
    description: images.freshothersDetail07,
    categoryKo: '콜드브루',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //약배전
  // 미임 특별한날
  {
    id: 10,
    category: "bean",
    subCategory: "lightRoast",
    name: "특별한날 블랜딩",
    brand: "미임커피로스터스",
    imageUrl: images.lightRoast01,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '약배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 과테말라 세리스
  {
    id: 11,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 과테말라 세리스",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast01,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 디카페인
  {
    id: 12,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 디카페인",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast02,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 에티오피아 이디도
  {
    id: 13,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 에티오피아 이디도",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast03,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 에티오피아 코케
  {
    id: 14,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 에티오피아 코케",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast04,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 에티오피아 헤토
  {
    id: 15,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 에티오피아 헤토",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast05,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 온두라스 마노스
  {
    id: 15,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 온두라스 마노스",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast06,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 코스타리카 린다
  {
    id: 16,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 코스타리카 린다",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast07,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 파나마 수아레즈
  {
    id: 17,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스페셜티 파나마 수아레즈",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast08,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 에티오피아 우간다 엘곤
  {
    id: 18,
    category: "bean",
    subCategory: "mediumRoast",
    name: "에티오피아 우간다 엘곤",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast09,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 딥레드
  {
    id: 19,
    category: "bean",
    subCategory: "mediumRoast",
    name: "하이엔드 블렌드 딥레드",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast10,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 블랙바카라
  {
    id: 20,
    category: "bean",
    subCategory: "mediumRoast",
    name: "하이엔드 블렌드 블랙바카라",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast11,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 폴카로즈
  {
    id: 21,
    category: "bean",
    subCategory: "mediumRoast",
    name: "하이엔드 블렌드 폴카로즈",
    brand: "(주)넥타홀딩스",
    imageUrl: images.mediumRoast12,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // (주)랑케 밤의유영
  {
    id: 22,
    category: "bean",
    subCategory: "mediumRoast",
    name: "밤의유영",
    brand: "(주)랑케",
    imageUrl: images.mediumRoast13,
    description: images.mediumRoastDetail13,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // (주)랑케 세븐레이크
  {
    id: 23,
    category: "bean",
    subCategory: "mediumRoast",
    name: "세븐레이크",
    brand: "(주)랑케",
    imageUrl: images.mediumRoast14,
    description: images.mediumRoastDetail14,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },

];
