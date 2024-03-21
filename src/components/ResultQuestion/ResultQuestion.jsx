import React from "react";
import styles from "./ResultQuestion.module.css";

const ResultQuestion = ({ question, results, index }) => {

   console.log(question, results, index)

   return (
      <li className={styles.question}>
         <header className={styles.questionHeader}>
            <p className={styles.questionNumber}>
               {index + 1}
            </p>
            <p className={styles.questionName}>{question.title}</p>
         </header>

         <div className={styles.answerWrap}>
            <p className={styles.userAnswer}>
               Ваш ответ:{" "}
               {question.answers[results[index].selectedAnswerIndex].title}
            </p>
         </div>
      </li>
   );
};

export default ResultQuestion;
