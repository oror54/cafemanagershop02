import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { instagramPosts } from "@/data/instagramPosts";
import styles from "./InstaItems.module.css"

const InstaItems = () => {
    const [isMobile, setIsMobile] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    // Handle resize for mobile/non-mobile view
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        setIsMobile(windowWidth <= 1280);
    };

    // Initialize swiper on component mount and handle window resizing
    useEffect(() => {
        handleResize(); // Check window size on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.instaSwiperContainer}>
                {!isMobile ? (
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        grabCursor={true}
                        speed={500}
                        modules={[Navigation, Autoplay]}
                    >
                        {instagramPosts.map((post) => (
                            <SwiperSlide key={post.id} className={styles.instaItem}>
                                <a href={post.link} className={`${styles.inner} ${styles.hov}`}>
                                    <div className={styles.instaImg}>
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.alt}
                                            className={styles.img}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={styles.instaHov}>
                                        <i className={styles.iconInsta}></i>
                                        <span className={styles.instaSub}>{post.username}</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className={styles.instaitems}>
                        {instagramPosts.map((post) => (
                            <div key={post.id} className={styles.instaItem}>
                                <a href={post.link} className={`${styles.inner} ${styles.hov}`}>
                                    <div className={styles.instaImg}>
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.alt}
                                            className={styles.img}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={styles.instaHov}>
                                        <i className={styles.iconInsta}></i>
                                        <span className={styles.instaSub}>{post.username}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Controls for non-mobile */}
            {!isMobile && (
                <div className={`${styles.instaControls} ${styles.skip}`}>
                    <button
                        type="button"
                        className={`${styles.control} ${styles.instaPrev} ${styles.left}`}
                        aria-label="Previous Instagram Post"
                    ></button>
                    <button
                        type="button"
                        className={`${styles.control} ${styles.instaNext} ${styles.right}`}
                        aria-label="Next Instagram Post"
                    ></button>
                </div>
            )}
        </div>
    )
}

export default InstaItems;