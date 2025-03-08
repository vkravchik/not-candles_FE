"use client";

import styles from "./spinner.module.css";

const Spinner = () => {
    return (
        <section>
            <div className={styles.container}>
                <div className={`${styles.corpus} ${styles.diamond}`}>
                    <div
                        className={`${styles.diamond} ${styles["diamond-inner"]} ${styles["diamond-right"]}`}
                    ></div>
                    <div
                        className={`${styles.diamond} ${styles["diamond-inner"]} ${styles["diamond-left"]}`}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Spinner;
