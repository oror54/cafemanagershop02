// ✅ src/data/subMaterialProducts.ts
import { images } from "./imageAssets";
import { ProductData } from "./types";

export const subMaterialProducts: Omit<ProductData, "id">[] = [
 // 부자재
  //기타
  // 이해랩 버클에이프런브라운
  {
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
    hashtag: "#버클 #편안함 #간편함",
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런블랙
  {
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런블랙",
    brand: "이해랩",
    imageUrl: images.subMaterial02,
    description: images.subMaterialDetail02,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: "#버클 #편안함 #간편함",
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런블루
  {
    category: "subMaterial",
    subCategory: "other",
    name: "버클에이프런블루",
    brand: "이해랩",
    imageUrl: images.subMaterial03,
    description: images.subMaterialDetail03,
    categoryKo: '부자재',
    categoryDetail: '기타',
    url: "",
    best: true,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: "#버클 #편안함 #간편함",
  },
  // 부자재
  //기타
  // 이해랩 버클에이프런핑크
  {
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
    hashtag: "#버클 #편안함 #간편함",
  },
];
