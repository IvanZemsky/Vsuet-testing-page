import { useState } from "react"
import styles from './BurgerMenu.module.css'

const BurgerMenu = ({setOpenedStyle}) => {
  
  return (
    <button className={styles.burger} onClick={setOpenedStyle}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default BurgerMenu
