import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <footer className={styles.wrapper}>
            <span className={styles.madeBy}>Minishop, 2024</span>
            <span className={styles.names}>
                <span>Burzec Bartosz</span>
                <span>Marcin Golonka</span>
                <span>Kacper Kijowski</span>
            </span>
        </footer>
    )
}

export default Footer;