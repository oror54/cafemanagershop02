import styles from "./Main.module.css";



export default function Section03() {
    return (
        <section className={styles.section03}>
            <div className={styles.wrap}>
                <div className={styles.brandBox}>
                    <div className={styles.tit}>
                        <div className={styles.titPoint}>
                            <span>CSFEMANAGER</span>
                        </div>
                        <h3>카페매니저의 다양한 서비스를 통해<br />
                            카페 운영의 어려움을 해결해 보세요!</h3>
                    </div>
                    <div className={styles.linkWrap}>
                        <button className={styles.link}
                            onClick={() => window.location.href = 'https://apps.apple.com/kr/app/%EC%B9%B4%ED%8E%98%EB%A7%A4%EB%8B%88%EC%A0%80/id6504548363'}>
                            <i className={`${styles.logo} ${styles.apple}`}></i>
                        </button>
                        <button className={styles.link}
                            onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.cuport.cafemanager&pli=1'}>
                            <i className={`${styles.logo} ${styles.google}`}></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}