import React from "react";
import styles from './NextQuestionBtn.module.css'
import RightArrowIcon from "../icons/RightArrowIcon";

const NextQuestionBtn = ({onNextQuestionClick, selectedAnswerIndex}) => {
   const isAnswerSelected = !selectedAnswerIndex;
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
         disabled={isAnswerSelected}
      >
         <RightArrowIcon />
      </button>
   );
};

export default NextQuestionBtn;
