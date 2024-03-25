import { useNavigate } from "react-router-dom";
import styles from "./TestTitle.module.css";
import { useDispatch } from "react-redux";
import { setIsStarted, clearCurrentTestState } from "../../store/slices/testSlice";
import { memo } from "react";

const TestTitle = memo(({ testName }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleBackBtnCLick = () => {
      dispatch(setIsStarted(false));
      navigate("/");
   };

   return (
      <div className={styles.testTitleWrap}>
         <h1 className={styles.testName}>{testName}</h1>
         <button className={styles.backBtn} onClick={handleBackBtnCLick}>
            {"<"}
         </button>
      </div>
   );
});

export default TestTitle;
