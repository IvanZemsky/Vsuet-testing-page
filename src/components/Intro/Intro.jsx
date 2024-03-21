import styles from './Intro.module.css'
import Tag from './../UI/Tag/Tag';

const Intro = () => {
  return (
    <section className={[styles.intro, "wrapper"].join(" ")}>
      <div className={styles.content}>
         <h1 className={styles.title}>
            Добро пожаловать! 👋
         </h1>
         <p className={styles.desc}>
            Наш университет предлагает Вам пройти простой тест на ваши навыки, увлечения и интересы и узнать, подходит ли вам обучение по специальности #09.02.07:
         </p>
         <p className={styles.name}>
         «Информационные системы и программирование»
         </p>
         <div className={styles.tagsWrap}>
            <div className={styles.tags}>
              <Tag emoji="💻" title="Компьютерное моделирование"/>
              <Tag emoji="💻" title="Компьютерное моделирование"/>
              <Tag emoji="💻" title="Компьютерное моделирование"/>
              <Tag emoji="💻" title="Компьютерное моделирование"/>
            </div>
            <p className={styles.tagtext}></p>
         </div>
      </div>
    </section>
  )
}

export default Intro
