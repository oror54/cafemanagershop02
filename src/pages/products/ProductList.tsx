import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "@/data/Product.types";
import styles from "./ProductPage.module.css";

interface ProductListProps {
    products: Product[] | undefined; // Optional products array
}

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
    const reversedProducts = [...products].reverse();

    if (!reversedProducts || products.length === 0) {
        return <div className={styles.notYet}><p>제품이 준비중 입니다.</p></div>;
    }

    return (
        <div className={styles.productList}>
            {reversedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
