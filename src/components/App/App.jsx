import React from "react";
import "./App.css";
import "../../styles/fonts.css";
import "../../styles/wrapper.css";
import "../../styles/_vars.css";
import { Route, Routes } from "react-router-dom";
import {LazyTest as Test} from "../../pages/Test/LazyTest";
import {LazyResult as Result} from "../../pages/Result/LazyResult";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";

const App = () => {
   const theme = useSelector((state) => state.theme.theme);

   return (
      <div className={`app ${theme}`}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Test />} />
               <Route path="result" element={<Result />} />
            </Route>
         </Routes>
      </div>
   );
};

export default App;
