import React from "react";
import styles from "./ThemeBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import SunIcon from "./../icons/SunIcon";
import MoonIcon from "./../icons/MoonIcon";

const ThemeBtn = () => {
   const dispatch = useDispatch();
   const theme = useSelector((state) => state.theme.theme);

   return (
      <button
         className={styles.themeBtn}
         onClick={() => dispatch(toggleTheme())}
      >
         {theme === "light" ? <MoonIcon /> : <SunIcon /> }
      </button>
   );
};

export default ThemeBtn;
