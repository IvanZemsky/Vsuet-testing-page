import React from "react";
import styles from "./ResultsError.module.css";
import { Link } from "react-router-dom";

const ResultsError = ({ testId }) => {
   return (
      <div className={[styles.content, "wrapper"].join(" ")}>
         <h1 className={styles.title}>Вы ещё не прошли этот тест</h1>
         <div className={styles.links}>
            <Link to={`/tests/${testId}`} className={styles.link}>
               Перейти к тесту
            </Link>
            <Link to="/tests" className={styles.link}>
               На страницу тестов
            </Link>
         </div>
      </div>
   );
};

export default ResultsError;
