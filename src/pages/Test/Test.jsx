import React, { useEffect, useState } from "react";
import styles from "./Test.module.css";
import Question from "../../components/Question/Question";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import {
   clearCurrentTestState,
   setCurrentTest,
} from "../../store/slices/testSlice";


import { test } from "../../data/test";
import Intro from "../../components/Intro/Intro";
import TestTitle from "./../../components/TestTitle/TestTitle";
import { useLocation } from "react-router-dom";

const Test = () => {
   const dispatch = useDispatch();

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );
   const isStarted = useSelector((state) => state.test.isStarted);

   const location = useLocation();

   useEffect(() => {
      dispatch(clearCurrentTestState());
      dispatch(setCurrentTest(test));
   }, [location]);

   if (!isStarted) {
      return <Intro desc={test.desc} />;
   }

   return(
      <main className={styles.testPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <TestTitle testName={test.name} />

            <Question test={test} />

            <ProgressLine
               questionNumber={currentQuestionIndex + 1}
               questionAmount={test.questions.length}
            />
         </div>
      </main>
   );
};

export default Test;
