import styles from "./NewItems.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import Link from "next/link";
import { allData } from "src/data/allData";

const newItems = allData.filter(item => item.new); // 'new' 속성이 true인 항목 필터링

const NewItems = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={styles.NewItemsContainer}>
            <div className={styles.swiperContainer}>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    observer={true}
                    observeParents={true}
                    slidesPerView={1}
                    centeredSlides={true}
                    speed={1500}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: `.newNext`,
                        prevEl: `.newPrev`,
                    }}
                    pagination={{
                        el: ".newPagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    breakpoints={{
                        800: {
                            slidesPerView: 1.1,
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {newItems.map((product) => (
                        <SwiperSlide key={product.id} className={styles.newItem}>
                            {/* Product Image */}
                            <div className={styles.pdtImg}>
                                <Image
                                    src={product.newItemBg}
                                    alt={`${product.brand} ${product.name}`}
                                    className={styles.img}
                                    priority
                                />
                                <div className={styles.controls}>
                                    <button
                                        type="button"
                                        className={`${styles.control} ${styles.newPrev} ${styles.left}`}
                                        aria-label="Previous Product"
                                    ></button>
                                    <button
                                        type="button"
                                        className={`${styles.control} ${styles.newNext} ${styles.right}`}
                                        aria-label="Next Product"
                                    ></button>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className={styles.ptdInfo}>
                                <div className={styles.infoTxt}>
                                    <div className={styles.txt}>
                                        <span className={styles.pCate}>{product.categoryKo}</span>
                                        <p className={styles.pSubs}></p>
                                        <strong className={styles.pName}>{product.name}</strong>
                                        <span className={styles.pBrand}>{product.brand}</span>
                                    </div>
                                    <Link
                                        href={`/products/${product.category}/${product.subCategory}/${product.id}`}
                                        className={styles.viewDetail}
                                    >
                                        <span>자세히 보기</span> <i className={styles.arrowRight}></i>
                                    </Link>
                                </div>
                                {/* Product Pack */}
                                <div className={styles.pPack}>
                                    <Image
                                        src={product.imageUrl}
                                        alt={`${product.brand} ${product.name}`}
                                        width={200}
                                        height={200}
                                        className={styles.packImg}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`${styles['swiper-pagination']} newPagination`}></div>
            </div>
        </div>
    );
};

export default NewItems;
