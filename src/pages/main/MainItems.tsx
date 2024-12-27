// MainItems.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import styles from "./Main.module.css";
import { mainItems } from "@/data/MainItems";

export default function MainItems() {
    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // 필요한 모듈 추가
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                navigation={{
                    nextEl: ".mainNext",
                    prevEl: ".mainPrev",
                }}
                pagination={{
                    el: ".mainPagination",
                    type: "bullets",
                    clickable: true,
                }}
            >
                {/* 슬라이드 데이터를 맵핑하여 슬라이드 생성 */}
                {mainItems.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={styles.slide}
                            style={{ backgroundColor: slide.backgroundColor }} // 배경색 적용
                        >
                            <div className={styles.main}>
                                <div className={styles.image}>
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.imageAlt}
                                        className={styles.img}
                                        priority
                                    />
                                </div>
                                <div className={styles.text}>
                                    <Image
                                        src={slide.textSrc}
                                        alt={slide.textAlt}
                                        className={styles.txt}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`${styles.controlWrapp} ${styles.controlWrap}`}>
                <div className={styles.mainContr}>
                    <div className={`${styles['swiper-pagination']} mainPagination`}></div>
                </div>
            </div>
        </div>
    );
}
