import React from 'react'
import SquaresIcon from './../icons/SquaresIcon';
import styles from './AllCategoriesBtn.module.css';

const AllCategoriesBtn = () => {
  return (
    <button className={styles.categoriesBtn}>
      <SquaresIcon />
    </button>
  )
}

export default AllCategoriesBtn
