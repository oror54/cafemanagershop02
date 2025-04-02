// src/data/ingredientProducts.ts
import { images } from "./imageAssets";
import { ProductData } from "./types";

export const ingredientProducts: Omit<ProductData, "id">[] = [
  {
    category: "ingredient",
    subCategory: "syrup",
    name: "바닐라시럽",
    brand: "(주)빈커스텀컴퍼니",
    imageUrl: images.defaultImage,
    description: images.defaultImage,
    categoryKo: "식재료",
    categoryDetail: "시럽",
    url: "",
    best: false,
    new: false,
    newItemBg: images.defaultImage,
    hashtag: "#바닐라빈 #풍부한향미",
  },
];
