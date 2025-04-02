import { images } from "./imageAssets";
import { ProductData } from "./types";

export const freshProducts: Omit<ProductData, "id">[] = [
  {
    category: "fresh",
    subCategory: "milk",
    brand: "서울우유신림5동",
    name: "서울 흰우유(1,000mL)",
    imageUrl: images.milk01,
    description: images.defaultImage,
    categoryKo: "신선식품",
    categoryDetail: "우유",
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: "#서울우유 #고소함",
  },
];
