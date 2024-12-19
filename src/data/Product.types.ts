import { StaticImageData } from "next/image";

// types/Product.types.ts
export interface Product {
    id: number;
    name: string;
    brand: string;
    imageUrl: string | StaticImageData;
    category: string;
    subCategory: string;
    categoryDetail: string;
    description: string | StaticImageData;
    categoryKo: string;
    best: boolean,
    new: boolean,
    url: string;
    hashtag: string;// Optional field
}

export interface Category {
    name: string;
    subCategories: string[];
}