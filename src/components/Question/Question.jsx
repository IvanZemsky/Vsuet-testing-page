import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AnswerList from "../AnswerList/AnswerList";
import styles from "./Question.module.css";

const Question = ({ test }) => {
   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   useEffect(() => {
      window.scrollTo({top: 0})
   }, [])

   const currentQuestion = test.questions[currentQuestionIndex];

   return (
      <section className={styles.question}>
         <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>

         <AnswerList
            testId={test.id}
            answers={currentQuestion.answers}
            questionAmount={test.questions.length}
            currentQuestionIndex={currentQuestionIndex}
         />
      </section>
   );
};

export default Question;
