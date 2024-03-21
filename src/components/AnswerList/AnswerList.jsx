import React  from "react";
import Answer from "../Answer/Answer";
import styles from "./AnswerList.module.css";
import NextQuestionBtn from "../UI/NextQuestionBtn/NextQuestionBtn";
import useNextQuestion from "./../../hooks/useNextQuestion";

const AnswerList = (props) => {
   const { answers, questionAmount, currentQuestionIndex } = props;

   const { selectedAnswerIndex, setSelectedAnswerIndex, onNextQuestionClick } =
      useNextQuestion(currentQuestionIndex, questionAmount);

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer, i) => (
               <Answer
                  key={answer + i + currentQuestionIndex}
                  answer={answer}
                  id={i + currentQuestionIndex}
                  value={i}
                  setSelectedAnswerIndex={setSelectedAnswerIndex}
               />
            ))}
         </div>
         <NextQuestionBtn
            onNextQuestionClick={onNextQuestionClick}
            selectedAnswerIndex={selectedAnswerIndex}
         />
      </form>
   );
};

export default AnswerList;
