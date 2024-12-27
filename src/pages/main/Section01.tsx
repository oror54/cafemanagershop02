import styles from "./Main.module.css"
import MainItems from "./MainItems";

export default function Section01() {
    return (
        <section className={styles.section01}>
            <MainItems />
        </section>
    );
}