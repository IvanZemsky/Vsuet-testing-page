import React from 'react'
import styles from "./Tag.module.css"

const Tag = ({emoji, title}) => {
  return (
    <div className={styles.tag}>
      <span className={styles.emoji}>{emoji}</span>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Tag
