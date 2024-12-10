import styles from "./Main.module.css";
import InstaItems from "./InstaItems";



export default function Section06() {
    return (
        <section className={styles.section06}>
            <div className={styles.tit}>
                <div className={styles.point}>
                    <span>FOLLOW US</span>
                </div>
                <h4>카페매니저의 소식을 확인해 보세요</h4>
                <div className={styles.view}>
                    <button className={styles.viewDetail}
                        onClick={() => window.open('https://www.instagram.com/cafemanager_official/', '_blank')}>
                        <span>SNS 보기</span>
                        <i className={styles.arrowRight}></i>
                    </button>
                </div>
            </div>
            <InstaItems />
        </section >
    );
}