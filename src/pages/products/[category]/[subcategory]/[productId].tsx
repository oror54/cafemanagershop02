import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'; // Next.js 라우터 import
import { allData } from '@/data/allData';
import { Product } from '@/data/Product.types';
import Image from 'next/image';
import styles from './ItemDetail.module.css';
import Seo from '@/data/Seo';

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter(); // useRouter 훅 사용

  if (!product) {
    return <p>제품을 찾지 못했습니다.</p>;
  }

  const handleBackToList = () => {
    router.push(`/products/${product.category}/${product.subCategory}`); // useRouter로 페이지 이동
  };

  const siteUrl = 'https://www.cafemanagershop.kr';
  const productUrl = `${siteUrl}/products/${product.category}/${product.subCategory}/${product.id}`;

  return (
    <>
      <Seo
        title={`${product.name} - 카페매니저`}
        description={product.description}
        url={productUrl}
        image={product.imageUrl}
        type="product"
      />
      <main>
        <section className={styles.ViewDetails}>
          <div className={styles.DetailTitle}>
            <div className={styles.TitleImage}>
              <Image src={product.imageUrl} alt={product.name} width={500} height={500} />
            </div>
            <div className={styles.TitleText}>
              <div className={styles.TextWrap}>
                <div className={styles.CategoytyWrap}>
                  <p className={styles.cate}>{product.categoryKo}</p>
                  <p className={styles.subcate}>{product.categoryDetail}</p>
                </div>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.brand}> {product.brand}</p>
              </div>
              <div className={styles.buttonWrap}>
                <button className={`${styles.btn} ${styles.purchase}`}>
                  <p>구매하러가기</p>
                  <i className={`${styles.logo} ${styles.apple}`}></i>
                </button>
                <button className={`${styles.btn} ${styles.purchase}`}>
                  <p>구매하러가기</p>
                  <i className={`${styles.logo} ${styles.google}`}></i>
                </button>
                <button className={`${styles.btn} ${styles.kakao}`}>
                  <p>문의하기</p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.Details}>
          <div className={styles.description}>
            <Image src={product.description} alt={product.name} width={1000} height={500} />
          </div>
        </section>
        <section className={styles.BackButtonSection}>
          <button className={styles.backButton} onClick={handleBackToList}>
            목록으로
          </button>
        </section>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allData.map((product) => ({
    params: {
      category: product.category,
      subcategory: product.subCategory,
      productId: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false, // 모든 경로를 정적으로 생성
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category, subcategory, productId } = context.params!;

  const product = allData.find(
    (p) =>
      p.category === category && p.subCategory === subcategory && p.id.toString() === productId,
  );

  return {
    props: {
      product: product || null, // 제품 정보가 없을 경우 null 반환
    },
  };
};

export default ProductDetails;
