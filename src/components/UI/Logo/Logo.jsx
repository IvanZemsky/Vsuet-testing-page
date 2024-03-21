import React from "react";
import styles from './Logo.module.css'

const Logo = () => {
   return (
      <a href="https://vsuet.ru/" className={styles.logo}>
         {/* <img
            src="https://vsuet.ru/templates/main/images/icons/header/header-logo.svg"
            alt="Логотип ВГУИТ"
         /> */}
         <span className={styles.text}>Воронежский государственный университет инженерных технологий</span>
      </a>
   );
};

export default Logo;
