import { ProductData } from "./types";
import { freshProducts } from "./freshProducts";
import { beanProducts } from "./beanProducts";
import { ingredientProducts } from "./ingredientProducts";
import { subMaterialProducts }  from "./subMaterialProducts";

const allRawData: Omit<ProductData, "id">[] = [
  ...freshProducts,
  ...beanProducts,
  ...ingredientProducts,
  ...subMaterialProducts,
];

export const allData: ProductData[] = allRawData.map((item, index) => ({
  id: index,
  ...item,
}));
