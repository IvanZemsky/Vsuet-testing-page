import { useSelector } from "react-redux";
import styles from "./Result.module.css";
import ResultsError from "../../components/ResultsError/ResultsError";
import TestTitle from "./../../components/TestTitle/TestTitle";
import ResultCounter from "./../../components/UI/ResultCounter/ResultCounter";

const textResults = [
   "Возможно, Вы чего-то не знаете или в чём-то не уверены, но у Вас явно есть хорошие шансы успешно пройти обучение и стать классным специалистом!",
   "Кажется, Вы интересуетесь сферой информационных технологий или уже имеете некоторый опыт. В таком случае, специальность \"Информационные системы и программирование\" отлично Вам подойдёт!",
   "Вы уверенно чувствуете себя в сфере информационных технологий и, возможно, уже имеете хорошие знания и навыки в этой области. Тогда вам стоит пройти обучение в нашем университете по специальноти \"Информационные системы и программирование\"! Вы найдёте много единомышленников и сможете прокачать свои навыки."
]

const Result = () => {
   const test = useSelector((state) => state.test.currentTest);
   const testResults = useSelector((state) => state.test.results).find(
      (result) => result.testId === test.id
   );

   let percentResult = Math.round((testResults.resultCounter / test.maxResult) * 100);
   let text;

   if (percentResult <= 35) {
      text = textResults[0];
   } else if (percentResult <= 75) {
      text = textResults[1];
   } else {
      text = textResults[2];
   }

   if (!testResults) {
      return <ResultsError testId={test.id} />;
   }

   return (
      <main className={styles.resultPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <TestTitle testName={test.name} />

            <div className={styles.resultInfo}>
               <ResultCounter
                  percentResult={percentResult}
               />
               <p className={styles.resultText}>
                  {text}
               </p>
               <a className={styles.link} target="_blank" href="https://vsuet.ru/abitur/specialties/09-02-07">
                  Узнать больше
               </a>
            </div>

         </div>
      </main>
   );
};

export default Result;
