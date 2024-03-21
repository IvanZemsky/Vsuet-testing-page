import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import ThemeBtn from './../UI/ThemeBtn/ThemeBtn';
import Logo from "../UI/Logo/Logo";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <Logo />

            <nav className={styles.links}>
               <a href="https://vsuet.ru/dod" className={styles.link} target="_blank">
                  Приём 2024
               </a>
               <a href="https://vsuet.ru/abitur" className={styles.link} target="_blank">
                  Абитуриенту
               </a>
            </nav>

            <ThemeBtn />
         </div>
      </header>
   );
};

export default Header;
