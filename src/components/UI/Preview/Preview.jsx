import React from "react";
import styles from "./Preview.module.css"
import building from "../../../assets/img/building.webp";

const Preview = () => {
   return (
      <div className={styles.preview}>
         <div className={styles.imgWrap}>
            <img
               src={building}
               alt="Учебный корпус ВГУИТ, проспект Революции, 19"
            />
         </div>
         <p className={styles.imgTitle}>
            ВГУИТ — стань инженером своего будущего!
         </p>
      </div>
   );
};

export default Preview;
