import React, { useEffect, useState } from "react";
import styles from "./Test.module.css";
import Question from "../../components/Question/Question";
import { useDispatch, useSelector } from "react-redux";
import ProgressLine from "../../components/UI/ProgressLine/ProgressLine";
import {clearCurrentTestState, setCurrentTest} from "../../store/slices/testSlice";

import { test } from "../../data/test";
import Intro from "../../components/Intro/Intro";

const Test = () => {
   const dispatch = useDispatch();

   const [isLoading, setIsLoading] = useState(true);
   const [isStarted, setIsStarded] = useState(false);
   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   useEffect(() => {
      dispatch(clearCurrentTestState())
      dispatch(setCurrentTest(test));
      setIsLoading(false);
   }, [test]);

   if (!isStarted) {
      return <Intro desc={test.desc} setIsStarted={setIsStarded}/>
   }

   return (
      isLoading ? (<p>Загрузка...</p>) :
      <main className={styles.testPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <h1 className={styles.testName}>{test.name}</h1>

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
