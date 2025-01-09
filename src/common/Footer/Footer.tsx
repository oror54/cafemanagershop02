import React from "react";
import Image from "next/image";
import FooterLogo from "$/assets/images/common/white-logo.svg";
import styles from './Footer.module.css';


const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.wrap}>
                    <div className={styles.inner}>
                        <div className={styles.ftLogo}>
                            <a href="https://www.cafemanagershop.com/" className={styles.img}>
                                <Image src={FooterLogo} alt="카페매니저" />
                            </a>
                        </div>
                        <div className={styles.ftCutomer}>
                            <div className={styles.tellBox}>
                                <div className={styles.tit}>
                                    <p>카페매니저문의하기</p>
                                </div>
                                <div className={styles.num}>
                                    <strong>010-4684-4790</strong>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ftInfo}>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.inf}>주식회사 커포트</p>
                                </div>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>사업자등록번호</p>
                                    <p className={styles.inf}>491-88-02804</p>
                                </div>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>대표자</p>
                                    <p className={styles.inf}>김동우</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>주소</p>
                                    <p className={styles.inf}>대구광역시 서구 국채보상로 6길 11, 1층 107호</p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.txt}>
                                    <p className={styles.tit}>COPYRIGHT CUPPORT.ALL RIGHTS RESERVED.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Schema.org Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "주식회사 커포트",
                        "url": "https://www.cafemanagershop.com/",
                        "logo": "https://www.cafemanagershop.com/assets/images/common/white-logo.svg",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+82-10-4684-4790",
                            "contactType": "customer service",
                            "areaServed": "KR",
                            "availableLanguage": ["Korean"]
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "국채보상로 6길 11, 1층 107호",
                            "addressLocality": "대구광역시 서구",
                            "addressCountry": "KR"
                        }
                    })
                }}
            />
        </footer>
    )
}

export default Footer;