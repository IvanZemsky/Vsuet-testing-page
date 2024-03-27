import styles from "./Intro.module.css";
import Tag from "./../UI/Tag/Tag";
import { useDispatch } from "react-redux";
import { setIsStarted } from "../../store/slices/testSlice";
import Preview from "../UI/Preview/Preview";

const Intro = ({ desc }) => {
   const dispatch = useDispatch();

   return (
      <section className={[styles.intro, "wrapper"].join(" ")}>
         <div className={styles.content}>
            <h1 className={styles.title}>Добро пожаловать! 👋</h1>
            <p className={styles.desc}>{desc}</p>
            <a className={styles.name} href="https://vsuet.ru/abitur/specialties/09-02-07" target="_blank">
               «Информационные системы и программирование»
            </a>
            <div className={styles.tagsWrap}>
               <div className={styles.tags}>
                  <Tag emoji="🖱️" title="Компьютерное моделирование" />
                  <Tag emoji="💻" title="Программирование" />
                  <Tag emoji="⚙️" title="Автоматизация" />
                  <Tag emoji="🔬" title="Системное мышление" />
               </div>
               <p className={styles.tagsText}>
                  Если Вас интересуют эти навыки и Вы хотите овладеть ими,
                  пройдите тест и убедитесь в правильности своего выбора!
               </p>
            </div>
            <button
               className={styles.startBtn}
               onClick={() => dispatch(setIsStarted(true))}
            >
               Начать
            </button>
         </div>
         <Preview />
      </section>
   );
};

export default Intro;
