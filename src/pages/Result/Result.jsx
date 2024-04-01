import { useSelector } from "react-redux";
import styles from "./Result.module.css";
import ResultsError from "../../components/ResultsError/ResultsError";
import TestTitle from "./../../components/TestTitle/TestTitle";
import ResultCounter from "./../../components/UI/ResultCounter/ResultCounter";
import TextResult from "../../components/UI/TextResult/TextResult";

const Result = () => {
   const test = useSelector((state) => state.test.currentTest);
   const testResults = useSelector((state) => state.test.results).find(
      (result) => result.testId === test.id
   );

   if (!testResults) {
      return <ResultsError testId={test.id} />;
   }

   let percentResult = Math.round(
      (testResults.resultCounter / test.maxResult) * 100
   );

   return (
      <main className={styles.resultPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <TestTitle testName={test.name} />

            <div className={styles.resultInfo}>
               <ResultCounter percentResult={percentResult} />
               <TextResult percentResult={percentResult}/>
               <div className={styles.links}>
                  <a
                     className={styles.link}
                     target="_blank"
                     href="https://vsuet.ru/abitur/specialties/09-02-07"
                  >
                     🎓 Узнать больше
                  </a>
                  <a
                     className={styles.communityLink}
                     href="https://vk.com/vsuet_official"
                     target="_blank"
                  >
                     👉 Присоединяйтесь к нам в ВК!
                  </a>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Result;
