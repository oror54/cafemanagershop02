import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../ProductPage.module.css";
import ProductList from "../ProductList";
import { menuItems } from "@/data/menuItems";
import Pagination from "@/common/Pagination/Pagination";
import { Product } from "@/data/Product.types";
import { allData } from "@/data/allData";
import Seo from "@/data/Seo";
import { useRouter } from "next/router";

interface SubCategoryPageProps {
  category: string;
  subcategory: string;
  products: Product[];
  currentCategory: {
    imageUrl: string;
    subItems: { name: string; realName: string; icon?: string }[];
    realTitle: string;
    title: string;
  };
  totalPages: number;
  currentPage: number;
}


const SubCategoryPage: React.FC<SubCategoryPageProps> = ({
  category,
  subcategory,
  products,
  currentCategory,
  totalPages,
  currentPage,
}) => {
  const { imageUrl, subItems, title } = currentCategory;
  const router = useRouter();
  const fullUrl = `https://www.cafemanagershop.com${router.asPath}`;

  const handlePageChange = (newPage: number) => {
    router.push(`/products/${category}/${subcategory}?page=${newPage}`);
  };


  return (
    <>
      <Seo
        title={`${title} - ${subcategory} | 카페매니저`}
        description={`카페매니저에서 제공하는 ${title}의 ${subcategory} 제품 리스트를 확인하세요.`}
        url={fullUrl}
      />
      <div>
        {imageUrl && (
          <section className={styles.sec01}>
            <div className={styles.categoryImage}>
              <Image src={imageUrl} alt={`${category} image`} priority={false} />
            </div>
          </section>
        )}

        <section className={styles.sec02}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <p>
              {
                subItems.find((item) => item.realName === subcategory)?.name ||
                subcategory
              }
            </p>
          </div>

          {/* 하위 카테고리 탭 */}
          <div className={styles.subCategoryTabs}>
            {subItems.map(({ name, realName, icon }) => (
              <Link
                key={realName}
                href={`/products/${category}/${realName}`}
                passHref
                className={`${styles.subCategoryLink} ${subcategory === realName ? styles.active : ""
                  }`}
              >
                <div className={styles.tabInner}>
                  <div className={styles.tabIcon}>
                    <Image
                      src={icon || "/default-icon.png"}
                      alt={`${name} icon`}
                    />
                  </div>
                  <p>{name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 제품 리스트 */}
        {products.length === 0 ? (
          <div className={styles.noProducts}><p>해당 카테고리에 제품이 없습니다.</p></div>
        ) : (
          <ProductList products={products} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const { category, subcategory } = params as { category: string; subcategory: string };
  const page = parseInt(query.page as string, 10) || 1; // 기본적으로 첫 페이지

  const currentCategory = menuItems.find(
    (item) => item.realTitle === category
  );

  if (!currentCategory) {
    return { notFound: true };
  }

  const filteredProducts = allData.filter(
    (item) =>
      item.category === currentCategory.realTitle &&
      item.subCategory === subcategory
  );

  const productsPerPage = 12; // 페이지당 제품 수
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentPageProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return {
    props: {
      category,
      subcategory,
      currentCategory,
      products: currentPageProducts,
      totalPages,
      currentPage: page,
    },
  };
};

export default SubCategoryPage;