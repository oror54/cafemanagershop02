import { StaticImageData } from "next/image";

export type ProductData = {
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
  best: boolean;
  new: boolean;
  newItemBg: string | StaticImageData;
  hashtag: string;
};
