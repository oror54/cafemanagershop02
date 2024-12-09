// components/ProductList.tsx
import React from "react";
import { Product } from "@/data/Product.types";  // Import the Product type
import ProductItem from "./ProductItem";
import styles from "./ProductPage.module.css";// Import the ProductItem component

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <section className={styles.productList}>
            {products.length > 0 ? (
                products.map((product) => <ProductItem key={product.id} product={product} />)
            ) : (
                <div className={styles.notYet}><p>제품이 준비중 입니다.</p></div>
            )}
        </section>
    );
};

export default ProductList;
