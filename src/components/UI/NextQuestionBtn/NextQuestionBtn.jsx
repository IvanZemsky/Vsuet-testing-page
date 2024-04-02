import React from "react";
import styles from './NextQuestionBtn.module.css'

const NextQuestionBtn = ({onNextQuestionClick, selectedAnswerIndex}) => {
   const isAnswerSelected = !selectedAnswerIndex;
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
         disabled={isAnswerSelected}
      >
         ☑️
      </button>
   );
};

export default NextQuestionBtn;