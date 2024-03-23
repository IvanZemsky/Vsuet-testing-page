import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ResultPage.module.css";
import ResultQuestion from "../../components/ResultQuestion/ResultQuestion";
import ResultsError from "../../components/ResultsError/ResultsError";
import TestTitle from './../../components/TestTitle/TestTitle';

const Result = () => {
   const test = useSelector(state => state.test.currentTest)

   const testResults = useSelector((state) => state.test.results).find(result => result.testId === test.id)
   if (!testResults) {
      return <ResultsError testId={test.id}/>
   }

   const resultCounter = testResults.resultCounter;

   return (
      <main className={styles.resultPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
           <TestTitle testName={test.name}/>

            <ul className={styles.questions}>
               {test.questions.map((question, i) => (
                  <ResultQuestion
                     key={i}
                     question={question}
                     results={testResults.results}
                     index={i}
                  />
               ))}
            </ul>
         </div>
      </main>
   );
};

export default Result;
