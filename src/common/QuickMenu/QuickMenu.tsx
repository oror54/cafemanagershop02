import styles from "./QuickMenu.module.css"; // 스타일 파일 임포트
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const QuickMenu = () => {
    return (
        <div className={styles.quickwrap}>
            <div className={`${styles.quick} ${styles.applebtn}`}>
                <Link href="https://apps.apple.com/kr/app/%EC%B9%B4%ED%8E%98%EB%A7%A4%EB%8B%88%EC%A0%80/id6504548363" target="_blank">
                <FaApple size={30} color="#000"/>
                </Link>
            </div>
            <div className={`${styles.quick} ${styles.googlebtn}`}>
                <Link href="https://play.google.com/store/apps/details?id=com.cuport.cafemanager&pli=1" target="_blank">
                <FaGooglePlay size={20} color="#fff"/>
                </Link>
            </div>
            <div className={`${styles.quick} ${styles.blogbtn}`}>
                <Link href="https://blog.naver.com/cafemanager_app" target="_blank">
                <SiNaver size={20} color="#000"/>
                </Link>
            </div>
            <div className={`${styles.quick} ${styles.kakaobtn}`}>
                <Link href="https://pf.kakao.com/_jcVsG" target="_blank">
                <RiKakaoTalkFill size={30} color="#000" />
                </Link>
            </div>
            <div className={`${styles.quick} ${styles.callbtn}`}>
                <a href="tel:010-4684-4790">
                <IoCall size={25} color="#000"/>
                </a>
                <ul className={styles.inq_balloon}>
                    <li>무엇이든 물어보세요</li>
                    <li>010·4684·4790</li>
                </ul>
            </div>
        </div>
    );
};

export default QuickMenu;
