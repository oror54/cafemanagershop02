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
    best: false,
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
    best: false,
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
    best: false,
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
    best: false,
    new: false,
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
    best: false,
    new: false,
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
    best: false,
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
    best: false,
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
    best: false,
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
    best: false,
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
    best: false,
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
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // (주)랑케 써니비치
  {
    id: 24,
    category: "bean",
    subCategory: "mediumRoast",
    name: "써니비치",
    brand: "(주)랑케",
    imageUrl: images.mediumRoast15,
    description: images.mediumRoastDetail15,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // (주)랑케 써니비치
  {
    id: 25,
    category: "bean",
    subCategory: "mediumRoast",
    name: "킵고잉",
    brand: "(주)랑케",
    imageUrl: images.mediumRoast16,
    description: images.mediumRoastDetail16,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // GSHCOFFEE  C블랜딩
  {
    id: 26,
    category: "bean",
    subCategory: "mediumRoast",
    name: "C블랜딩",
    brand: "GSHCOFFEE",
    imageUrl: images.mediumRoast17,
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
  // GSHCOFFEE  G블랜딩
  {
    id: 27,
    category: "bean",
    subCategory: "mediumRoast",
    name: "G블랜딩",
    brand: "GSHCOFFEE",
    imageUrl: images.mediumRoast18,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: true,
    newItemBg: images.mediumRoastNewBg18,
  },
  // 원두
  //중배전
  // GSHCOFFEE  H블랜딩
  {
    id: 28,
    category: "bean",
    subCategory: "mediumRoast",
    name: "H블랜딩",
    brand: "GSHCOFFEE",
    imageUrl: images.mediumRoast19,
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
  // GSHCOFFEE  S블랜딩
  {
    id: 29,
    category: "bean",
    subCategory: "mediumRoast",
    name: "S블랜딩",
    brand: "GSHCOFFEE",
    imageUrl: images.mediumRoast20,
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
  // GSHCOFFEE  콜롬비아 슈가케인 디카페인
  {
    id: 30,
    category: "bean",
    subCategory: "mediumRoast",
    name: "콜롬비아 슈가케인 디카페인",
    brand: "GSHCOFFEE",
    imageUrl: images.mediumRoast21,
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
  // 디와이아이워크샵  Y Blend
  {
    id: 31,
    category: "bean",
    subCategory: "mediumRoast",
    name: "Y Blend",
    brand: "디와이아이워크샵",
    imageUrl: images.mediumRoast22,
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
  // 로스팅코리아  쉐이드트리 원두
  {
    id: 32,
    category: "bean",
    subCategory: "mediumRoast",
    name: "쉐이드트리",
    brand: "로스팅코리아",
    imageUrl: images.mediumRoast23,
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
  // 뤼미에르커피스탠드  오프블랜드
  {
    id: 33,
    category: "bean",
    subCategory: "mediumRoast",
    name: "오프블랜드",
    brand: "뤼미에르커피스탠드",
    imageUrl: images.mediumRoast24,
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
  // 미임커피  디카페인슈가케인
  {
    id: 34,
    category: "bean",
    subCategory: "mediumRoast",
    name: "디카페인슈가케인",
    brand: "미임커피",
    imageUrl: images.mediumRoast25,
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
  // 빈커스텀컴퍼니  오로라
  {
    id: 35,
    category: "bean",
    subCategory: "mediumRoast",
    name: "오로라",
    brand: "빈커스텀컴퍼니",
    imageUrl: images.mediumRoast26,
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
  // 솔룸커피로스터스  솔룸 브라운
  {
    id: 36,
    category: "bean",
    subCategory: "mediumRoast",
    name: "솔룸 브라운",
    brand: "솔룸커피로스터스",
    imageUrl: images.mediumRoast27,
    description: images.mediumRoastDetail27,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸다크
  {
    id: 37,
    category: "bean",
    subCategory: "mediumRoast",
    name: "솔룸다크",
    brand: "솔룸커피로스터스",
    imageUrl: images.mediumRoast28,
    description: images.mediumRoastDetail28,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸다크
  {
    id: 37,
    category: "bean",
    subCategory: "mediumRoast",
    name: "솔룸다크",
    brand: "솔룸커피로스터스",
    imageUrl: images.mediumRoast28,
    description: images.mediumRoastDetail28,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸브라이트
  {
    id: 38,
    category: "bean",
    subCategory: "mediumRoast",
    name: "솔룸브라이트",
    brand: "솔룸커피로스터스",
    imageUrl: images.mediumRoast29,
    description: images.mediumRoastDetail29,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  콜롬비아디카페인
  {
    id: 39,
    category: "bean",
    subCategory: "mediumRoast",
    name: "콜롬비아디카페인",
    brand: "솔룸커피로스터스",
    imageUrl: images.mediumRoast30,
    description: images.mediumRoastDetail30,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 전광수커피  30초 블렌드
  {
    id: 40,
    category: "bean",
    subCategory: "mediumRoast",
    name: "30초 블렌드",
    brand: "전광수커피",
    imageUrl: images.mediumRoast31,
    description: images.mediumRoastDetail31,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //중배전
  // 커피가이 블랙가이
  {
    id: 41,
    category: "bean",
    subCategory: "mediumRoast",
    name: "블랙가이",
    brand: "커피가이",
    imageUrl: images.mediumRoast32,
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
  // 커피가이 스윗가이
  {
    id: 42,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스윗가이",
    brand: "커피가이",
    imageUrl: images.mediumRoast33,
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
  // 커피가이 스타가이
  {
    id: 43,
    category: "bean",
    subCategory: "mediumRoast",
    name: "스타가이",
    brand: "커피가이",
    imageUrl: images.mediumRoast34,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: false,
    new: true,
    newItemBg: images.mediumRoastNewBg34,
  },
  // 원두
  //중배전
  // 커피가이 조이가이
  {
    id: 44,
    category: "bean",
    subCategory: "mediumRoast",
    name: "조이가이",
    brand: "커피가이",
    imageUrl: images.mediumRoast35,
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
  // 커피가이 커피가이
  {
    id: 45,
    category: "bean",
    subCategory: "mediumRoast",
    name: "커피가이",
    brand: "커피가이",
    imageUrl: images.mediumRoast36,
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
  // 토브공작소 베이직블렌드원두
  {
    id: 46,
    category: "bean",
    subCategory: "mediumRoast",
    name: "베이직블렌드원두",
    brand: "토브공작소",
    imageUrl: images.mediumRoast37,
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
  // 토브공작소 오손도손블렌드
  {
    id: 47,
    category: "bean",
    subCategory: "mediumRoast",
    name: "오손도손블렌드",
    brand: "토브공작소",
    imageUrl: images.mediumRoast38,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // (주)랑케 랑케블랙
  {
    id: 48,
    category: "bean",
    subCategory: "darkRoast",
    name: "랑케블랙",
    brand: "(주)랑케",
    imageUrl: images.darkRoast01,
    description: images.darkRoastDetail01,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // (주)랑케 샷인더다크
  {
    id: 49,
    category: "bean",
    subCategory: "darkRoast",
    name: "샷인더다크",
    brand: "(주)랑케",
    imageUrl: images.darkRoast02,
    description: images.darkRoastDetail02,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 디와이아이워크샵 I Blend
  {
    id: 50,
    category: "bean",
    subCategory: "darkRoast",
    name: "I Blend",
    brand: "디와이아이워크샵",
    imageUrl: images.darkRoast03,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 로스팅코리아 멜리플루어스
  {
    id: 51,
    category: "bean",
    subCategory: "darkRoast",
    name: "멜리플루어스",
    brand: "로스팅코리아",
    imageUrl: images.darkRoast04,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 로스팅코리아 엔프리미엄
  {
    id: 52,
    category: "bean",
    subCategory: "darkRoast",
    name: "엔프리미엄",
    brand: "로스팅코리아",
    imageUrl: images.darkRoast05,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 미임커피로스터스 데일리 블랜딩
  {
    id: 52,
    category: "bean",
    subCategory: "darkRoast",
    name: "데일리 블랜딩",
    brand: "미임커피로스터스",
    imageUrl: images.darkRoast06,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 브라더스커피로스팅컴퍼니 알파치노블랜드
  {
    id: 53,
    category: "bean",
    subCategory: "darkRoast",
    name: "알파치노블랜드",
    brand: "브라더스커피로스팅컴퍼니",
    imageUrl: images.darkRoast07,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 솔룸커피로스터스 솔룸 다크브라운
  {
    id: 54,
    category: "bean",
    subCategory: "darkRoast",
    name: "솔룸 다크브라운",
    brand: "솔룸커피로스터스",
    imageUrl: images.darkRoast08,
    description: images.darkRoastDetail08,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 스카이랩커피 더클래식
  {
    id: 55,
    category: "bean",
    subCategory: "darkRoast",
    name: "더클래식",
    brand: "스카이랩커피",
    imageUrl: images.darkRoast09,
    description: images.darkRoastDetail09,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 원두마을 1번원두
  {
    id: 56,
    category: "bean",
    subCategory: "darkRoast",
    name: "1번원두",
    brand: "원두마을",
    imageUrl: images.darkRoast10,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 전광수커피 콜롬비아 디카페인
  {
    id: 57,
    category: "bean",
    subCategory: "darkRoast",
    name: "콜롬비아 디카페인",
    brand: "전광수커피",
    imageUrl: images.darkRoast11,
    description: images.darkRoastDetail11,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 전광수커피 클래식 1996
  {
    id: 58,
    category: "bean",
    subCategory: "darkRoast",
    name: "클래식 1996",
    brand: "전광수커피",
    imageUrl: images.darkRoast12,
    description: images.darkRoastDetail12,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 전광수커피 클래식골드
  {
    id: 59,
    category: "bean",
    subCategory: "darkRoast",
    name: "클래식골드",
    brand: "전광수커피",
    imageUrl: images.darkRoast13,
    description: images.darkRoastDetail13,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 청휘와 커피공장 청휘디카페인
  {
    id: 60,
    category: "bean",
    subCategory: "darkRoast",
    name: "청휘디카페인",
    brand: "청휘와 커피공장",
    imageUrl: images.darkRoast14,
    description: images.darkRoastDetail14,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 원두
  //강배전
  // 청휘와 커피공장 청휘커피
  {
    id: 61,
    category: "bean",
    subCategory: "darkRoast",
    name: "청휘커피",
    brand: "청휘와 커피공장",
    imageUrl: images.darkRoast15,
    description: images.darkRoastDetail15,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: true,
    newItemBg: images.darkRoastNewBg15,
  },
  // 원두
  //강배전
  // 토브공작소 딥브라운블렌드
  {
    id: 62,
    category: "bean",
    subCategory: "darkRoast",
    name: "딥브라운블렌드",
    brand: "토브공작소",
    imageUrl: images.darkRoast16,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 식재료
  //시럽
  // 토브공작소 바닐라시럽
  {
    id: 63,
    category: "ingredient",
    subCategory: "syrup",
    name: "바닐라시럽",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: images.syrup01,
    description: images.defaultImage,
    categoryKo: '식재료',
    categoryDetail: '시럽',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런브라운
  {
    id: 64,
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런브라운",
    brand: "이해랩",
    imageUrl: images.subMaterial01,
    description: images.subMaterialDetail01,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런블랙
  {
    id: 65,
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런블랙",
    brand: "이해랩",
    imageUrl: images.subMaterial02,
    description: images.subMaterialDetail02,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런블루
  {
    id: 66,
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런블루",
    brand: "이해랩",
    imageUrl: images.subMaterial03,
    description: images.subMaterialDetail03,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런핑크
  {
    id: 67,
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런핑크",
    brand: "이해랩",
    imageUrl: images.subMaterial04,
    description: images.subMaterialDetail04,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
  },
];
