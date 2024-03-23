import React from "react";
import styles from "./ResultsError.module.css";
import { Link } from "react-router-dom";

const ResultsError = ({ testId }) => {
   return (
      <div className={[styles.emptyResult, "wrapper"].join(" ")}>
         <div className={styles.content}>
            <h1 className={styles.title}>Вы ещё не прошли этот тест</h1>
               <Link to={`/`} className={styles.link}>
                  Перейти к тесту
               </Link>
         </div>
      </div>
   );
};

export default ResultsError;
