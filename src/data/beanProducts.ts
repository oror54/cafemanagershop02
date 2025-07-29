import { ProductData } from './types';
import { images } from './imageAssets';

export const beanProducts: Omit<ProductData, 'id'>[] = [
  // 원두 250729추가시작
  // 약배전
  // 컵오브레거시
  {
    category: 'bean',
    subCategory: 'lightRoast',
    name: 'colorful',
    brand: '컵오브레거시',
    imageUrl: images.lightRoast03,
    description: images.lightRoastDetail03,
    categoryKo: '원두',
    categoryDetail: '약배전',
    url: '',
    best: false,
    new: true,
    newItemBg: images.lightRoastNewBg03,
    hashtag: '#블루베리 #포도 #사과',
  },

  // 원두 250729추가끝

  {
    category: 'bean',
    subCategory: 'lightRoast',
    brand: '전광수커피',
    name: '클래식 1996',
    imageUrl: images.darkRoast12,
    description: images.darkRoastDetail12,
    categoryDetail: '약배전',
    categoryKo: '원두',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#쟈스민 #시트러스 #땅콩',
  },
  {
    category: 'bean',
    subCategory: 'lightRoast',
    brand: '지구커피로스터스',
    name: '달 블랜드',
    imageUrl: images.lightRoast02,
    description: images.defaultImage,
    categoryDetail: '약배전',
    categoryKo: '원두',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#홍차 #라임 #리치',
  },
  // 원두
  //약배전
  // 미임 특별한날
  {
    category: 'bean',
    subCategory: 'lightRoast',
    name: '특별한날 블랜딩',
    brand: '미임커피로스터스',
    imageUrl: images.lightRoast01,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '약배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#와인 #플로럴',
  },

  //---------------- 250729중배전원두추가 시작-----------------------
  // 원두 중배전 세피아
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '올인커피 세피아',
    brand: '올인커피',
    imageUrl: images.mediumRoast49,
    description: images.mediumRoastDetail49,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: true,
    newItemBg: images.mediumRoastNewBg49,
    hashtag: '#설탕 #오렌지 #다크초콜렛',
  },

  // 원두 중배전 올인커피
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '올인커피 플레이버드',
    brand: '올인커피',
    imageUrl: images.mediumRoast48,
    description: images.mediumRoastDetail48,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#아카시아 #복숭아 #파인애플',
  },
  // 원두 중배전 올인커피
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '올인커피 버밀리온',
    brand: '올인커피',
    imageUrl: images.mediumRoast47,
    description: images.mediumRoastDetail47,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#꿀 #밀크초콜렛',
  },

  // 원두 중배전 페이버 커피 로스터스
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '페이버 제네시스',
    brand: '페이버 커피 로스터스',
    imageUrl: images.mediumRoast46,
    description: images.mediumRoastDetail46,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: true,
    newItemBg: images.mediumRoastNewBg46,
    hashtag: '#브라운슈가 #바닐라 #밀크초콜렛',
  },

  // 원두 중배전 컵오브레거시
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'colcol decaf',
    brand: '컵오브레거시',
    imageUrl: images.mediumRoast45,
    description: images.mediumRoastDetail45,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운아몬드 #배 #보리',
  },

  // 원두 중배전 컵오브레거시
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'sisicolcol',
    brand: '컵오브레거시',
    imageUrl: images.mediumRoast44,
    description: images.mediumRoastDetail44,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#밀크초콜렛 #아몬드 #카라멜',
  },

  // 원두 중배전 레이크커피
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '레이크커피 블루',
    brand: '레이크커피',
    imageUrl: images.mediumRoast43,
    description: images.mediumRoastDetail43,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '',
  },

  // -------------- 250729중배전원두추가 끝-----------------------

  // 원두
  //중배전
  // 지구커피로스터스 해 블랜드
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '해 블랜드',
    brand: '지구커피로스터스',
    imageUrl: images.mediumRoast42,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#자스민 #다크초콜릿 #카카오',
  },
  // 원두
  //중배전
  // 우즈커피 우즈달맞이 스페셜티
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '우즈달맞이 스페셜티',
    brand: 'woodscoffee',
    imageUrl: images.mediumRoast39,
    description: images.mediumRoastDetail39,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #말린오렌지 #캐러멜',
  },
  // 원두
  //중배전
  // 우즈커피 우즈벨벳
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '우즈벨벳',
    brand: 'woodscoffee',
    imageUrl: images.mediumRoast40,
    description: images.mediumRoastDetail40,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#맥아 #다크초콜릿 #캐러멜',
  },
  // 원두
  //중배전
  // 우즈커피 피크닉 스페셜티 블랜드
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '피크닉 스페셜티 블랜드',
    brand: 'woodscoffee',
    imageUrl: images.mediumRoast41,
    description: images.mediumRoastDetail41,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#견과류 #다크초콜릿 #캐러멜',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 과테말라 세리스
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 과테말라 세리스',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast01,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#갈설탕 #천혜향 #아몬드',
  },

  // 원두
  //중배전
  // 커피가이 커피가이
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '커피가이',
    brand: '커피가이',
    imageUrl: images.mediumRoast36,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운 아몬드 #갈색설탕 #쇼콜라',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 에티오피아 코케
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 에티오피아 코케',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast04,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#레몬그라스 #장미 #꿀',
  },
  // 원두
  //중배전
  // 전광수커피  30초 블렌드
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '30초 블렌드',
    brand: '전광수커피',
    imageUrl: images.mediumRoast31,
    description: images.mediumRoastDetail31,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#볶은견과류 #미디움바디감',
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  콜롬비아디카페인
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '콜롬비아디카페인',
    brand: '솔룸커피로스터스',
    imageUrl: images.mediumRoast30,
    description: images.mediumRoastDetail30,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#오렌지 #카라멜 #망고',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 디카페인
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 디카페인',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast02,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#보리차 #오트밀 #땅콩샌드',
  },
  // 원두
  //중배전
  // 빈커스텀컴퍼니  오로라
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '오로라',
    brand: '빈커스텀컴퍼니',
    imageUrl: images.mediumRoast26,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#마카다미아 #귤 #사탕수수',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 에티오피아 이디도
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 에티오피아 이디도',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast03,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#카카오 #버터 #갈설탕 #포도',
  },
  // 원두
  //중배전
  // 커피가이 스타가이
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스타가이',
    brand: '커피가이',
    imageUrl: images.mediumRoast34,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.mediumRoastNewBg34,
    hashtag: '#헤이즐넛초코 #바닐라 #밀크초콜릿',
  },
  // 원두
  //중배전
  // GSHCOFFEE  C블랜딩
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'C블랜딩',
    brand: 'GSHCOFFEE',
    imageUrl: images.mediumRoast17,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운 견과류 #카라멜 #초콜릿',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 온두라스 마노스
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 온두라스 마노스',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast06,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#사과잼 #시나몬 #청포도',
  },
  // 원두
  //중배전
  // GSHCOFFEE  G블랜딩
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'G블랜딩',
    brand: 'GSHCOFFEE',
    imageUrl: images.mediumRoast18,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.mediumRoastNewBg18,
    hashtag: '#카카오 #구운견과류 #갈설탕',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 파나마 수아레즈
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 파나마 수아레즈',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast08,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#홍차 #복숭아 #사과즙',
  },
  // 원두
  //중배전
  // GSHCOFFEE  S블랜딩
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'S블랜딩',
    brand: 'GSHCOFFEE',
    imageUrl: images.mediumRoast20,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#자스민 #블랙베리 #사탕수수',
  },
  // 원두
  //중배전
  // 넥타홀딩스 에티오피아 우간다 엘곤
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '에티오피아 우간다 엘곤',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast09,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#스카치캔디 #버터 #위스키',
  },
  // 원두
  //중배전
  // 디와이아이워크샵  Y Blend
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'Y Blend',
    brand: '디와이아이워크샵',
    imageUrl: images.mediumRoast22,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운견과류 #부드러운단맛',
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 폴카로즈
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '하이엔드 블렌드 폴카로즈',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast12,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#사과 #건자두 #피칸',
  },
  // 원두
  //중배전
  // (주)랑케 써니비치
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '써니비치',
    brand: '(주)랑케',
    imageUrl: images.mediumRoast15,
    description: images.mediumRoastDetail15,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#감귤 #오렌지 #캐러멜',
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸다크
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '솔룸다크',
    brand: '솔룸커피로스터스',
    imageUrl: images.mediumRoast28,
    description: images.mediumRoastDetail28,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#견과류 #카라멜 #초콜렛',
  },
  // 원두
  //중배전
  // (주)랑케 킵고잉
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '킵고잉',
    brand: '(주)랑케',
    imageUrl: images.mediumRoast16,
    description: images.mediumRoastDetail16,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운아몬드 #누룽지 #비스킷',
  },
  // 원두
  //중배전
  // GSHCOFFEE  H블랜딩
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: 'H블랜딩',
    brand: 'GSHCOFFEE',
    imageUrl: images.mediumRoast19,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#황설탕 #사탕 #초콜렛',
  },
  // 원두
  //중배전
  // 로스팅코리아  쉐이드트리 원두
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '쉐이드트리',
    brand: '로스팅코리아',
    imageUrl: images.mediumRoast23,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#밀크초콜릿 #너트류 #군고구마',
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 딥레드
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '하이엔드 블렌드 딥레드',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast10,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#블루베리 #복숭아 #아몬드',
  },
  // 원두
  //중배전
  // 뤼미에르커피스탠드  오프블랜드
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '오프블랜드',
    brand: '뤼미에르커피스탠드',
    imageUrl: images.mediumRoast24,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#건과일 #밀크초콜릿',
  },
  // 원두
  //중배전
  // 넥타홀딩스 하이엔드 블렌드 블랙바카라
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '하이엔드 블렌드 블랙바카라',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast11,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#흑설탕 #군고구마 #호두',
  },
  // 원두
  //중배전
  // 커피가이 스윗가이
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스윗가이',
    brand: '커피가이',
    imageUrl: images.mediumRoast33,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#잘 익은 오렌지 #갈색설탕 #바닐라',
  },
  // 원두
  //중배전
  // 미임커피  디카페인슈가케인
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '디카페인슈가케인',
    brand: '미임커피',
    imageUrl: images.mediumRoast25,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#디카페인',
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸 브라운
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '솔룸 브라운',
    brand: '솔룸커피로스터스',
    imageUrl: images.mediumRoast27,
    description: images.mediumRoastDetail27,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#오렌지 #밀크초콜렛 #견과류',
  },
  // 원두
  //중배전
  // (주)랑케 세븐레이크
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '세븐레이크',
    brand: '(주)랑케',
    imageUrl: images.mediumRoast14,
    description: images.mediumRoastDetail14,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#밀크초콜릿 #바닐라 #미디엄바디',
  },

  // 원두
  //중배전
  // 커피가이 블랙가이
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '블랙가이',
    brand: '커피가이',
    imageUrl: images.mediumRoast32,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '다크초코, 피넛버터, 구운견과류',
  },
  // 원두
  //중배전
  // 솔룸커피로스터스  솔룸브라이트
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '솔룸브라이트',
    brand: '솔룸커피로스터스',
    imageUrl: images.mediumRoast29,
    description: images.mediumRoastDetail29,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#블루베리 #시트러스 #갈설탕',
  },
  // 원두
  //중배전
  // 커피가이 조이가이
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '조이가이',
    brand: '커피가이',
    imageUrl: images.mediumRoast35,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '피넛버터, 구운아몬드, 구운땅콩, 초콜릿',
  },
  // 원두
  //중배전
  // GSHCOFFEE  콜롬비아 슈가케인 디카페인
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '콜롬비아 슈가케인 디카페인',
    brand: 'GSHCOFFEE',
    imageUrl: images.mediumRoast21,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '',
  },
  // 원두
  //중배전
  // (주)랑케 밤의유영
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '밤의유영',
    brand: '(주)랑케',
    imageUrl: images.mediumRoast13,
    description: images.mediumRoastDetail13,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#군밤 #군고구마 #조청',
  },
  // 원두
  //중배전
  // 넥타홀딩스 스페셜티 코스타리카 린다
  {
    category: 'bean',
    subCategory: 'mediumRoast',
    name: '스페셜티 코스타리카 린다',
    brand: '(주)넥타홀딩스',
    imageUrl: images.mediumRoast07,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '중배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#조청 #카라멜 #다크초콜릿',
  },

  //---------------- 250729강배전원두추가 시작---------------------

  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '카메오',
    brand: '올인커피',
    imageUrl: images.darkRoast24,
    description: images.darkRoastDetail24,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#브라운슈가 #피칸 #카카오',
  },
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '페이버 샬롬',
    brand: '페이버 커피 로스터스',
    imageUrl: images.darkRoast23,
    description: images.darkRoastDetail23,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#브라운슈가 #다크초콜렛',
  },
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '페이버 브라질 디카페인',
    brand: '페이버 커피 로스터스',
    imageUrl: images.darkRoast22,
    description: images.darkRoastDetail22,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#마카다미아 #코코아',
  },
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '그레이블랜딩',
    brand: '큐로스터',
    imageUrl: images.darkRoast21,
    description: images.darkRoastDetail21,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: true,
    newItemBg: images.darkRoastNewBg21,
    hashtag: '#다크초콜렛 #아몬드 #얼그레이',
  },

  // 강배전 원두 컵오브레거시
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: 'Classicol',
    brand: '컵오브레거시',
    imageUrl: images.darkRoast20,
    description: images.darkRoastDetail20,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜렛 #카카오닙스 #땅콩',
  },

  // 강배전 원두 레이크커피
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '레이크커피 블랙',
    brand: '레이크커피',
    imageUrl: images.darkRoast19,
    description: images.darkRoastDetail19,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: true,
    newItemBg: images.darkRoastNewBg19,
    hashtag: '#다크초콜렛 #자몽',
  },

  //---------------- 250729강배전원두추가 끝---------------------

  // 원두
  //강배전
  // woodscoffee 디카페인
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '디카페인',
    brand: 'woodscoffee',
    imageUrl: images.darkRoast17,
    description: images.darkRoastDetail17,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#견과류 #다크초콜릿 #구운밤',
  },
  // 원두
  //강배전
  // 로스터리220 디카페인
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '220 시그니처 블렌드',
    brand: '로스터리220',
    imageUrl: images.darkRoast18,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#견과류 #밀크초콜릿 #카카오',
  },
  // 원두
  //강배전
  // (주)랑케 랑케블랙
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '랑케블랙',
    brand: '(주)랑케',
    imageUrl: images.darkRoast01,
    description: images.darkRoastDetail01,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #구운견과류 #풀바디',
  },

  // 원두
  //강배전
  // (주)랑케 샷인더다크
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '샷인더다크',
    brand: '(주)랑케',
    imageUrl: images.darkRoast02,
    description: images.darkRoastDetail02,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #카카오 #흑설탕',
  },
  // 원두
  //강배전
  // 디와이아이워크샵 I Blend
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: 'I Blend',
    brand: '디와이아이워크샵',
    imageUrl: images.darkRoast03,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#초콜리티 #바디감',
  },
  // 원두
  //강배전
  // 로스팅코리아 멜리플루어스
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '멜리플루어스',
    brand: '로스팅코리아',
    imageUrl: images.darkRoast04,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #호두 #갈설탕',
  },
  // 원두
  //강배전
  // 로스팅코리아 엔프리미엄
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '엔프리미엄',
    brand: '로스팅코리아',
    imageUrl: images.darkRoast05,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #카카오 #견과류',
  },
  // 원두
  //강배전
  // 미임커피로스터스 데일리 블랜딩
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '데일리 블랜딩',
    brand: '미임커피로스터스',
    imageUrl: images.darkRoast06,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#견과류 #초콜릿',
  },
  // 원두
  //강배전
  // 브라더스커피로스팅컴퍼니 알파치노블랜드
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '알파치노블랜드',
    brand: '브라더스커피로스팅컴퍼니',
    imageUrl: images.darkRoast07,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#묵직한바디 #다크초콜릿',
  },
  // 원두
  //강배전
  // 솔룸커피로스터스 솔룸 다크브라운
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '솔룸 다크브라운',
    brand: '솔룸커피로스터스',
    imageUrl: images.darkRoast08,
    description: images.darkRoastDetail08,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#고구마 #카카오닙스 #초콜렛',
  },
  // 원두
  //강배전
  // 스카이랩커피 더클래식
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '더클래식',
    brand: '스카이랩커피',
    imageUrl: images.darkRoast09,
    description: images.darkRoastDetail09,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#바디감 #흑설탕',
  },
  // 원두
  //강배전
  // 원두마을 1번원두
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '1번원두',
    brand: '원두마을',
    imageUrl: images.darkRoast10,
    description: images.defaultImage,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#카카오 #견과류',
  },
  // 원두
  //강배전
  // 전광수커피 콜롬비아 디카페인
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '콜롬비아 디카페인',
    brand: '전광수커피',
    imageUrl: images.darkRoast11,
    description: images.darkRoastDetail11,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#구운견과류 #브라운슈가 #미디움바디감',
  },

  // 원두
  //강배전
  // 전광수커피 클래식골드
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '클래식골드',
    brand: '전광수커피',
    imageUrl: images.darkRoast13,
    description: images.darkRoastDetail13,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#다크초콜릿 #바닐라 #무거운바디감',
  },
  // 원두
  //강배전
  // 청휘와 커피공장 청휘디카페인
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '청휘디카페인',
    brand: '청휘와 커피공장',
    imageUrl: images.darkRoast14,
    description: images.darkRoastDetail14,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: '#카라멜 #바디감',
  },
  // 원두
  //강배전
  // 청휘와 커피공장 청휘커피
  {
    category: 'bean',
    subCategory: 'darkRoast',
    name: '청휘커피',
    brand: '청휘와 커피공장',
    imageUrl: images.darkRoast15,
    description: images.darkRoastDetail15,
    categoryKo: '원두',
    categoryDetail: '강배전',
    url: '',
    best: false,
    new: false,
    newItemBg: images.darkRoastNewBg15,
    hashtag: '#다크초콜릿 #꽃향 #밸런스',
  },
];
