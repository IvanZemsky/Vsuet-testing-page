import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Header />
         <Suspense>
            <Outlet />
         </Suspense>
      </>
   );
};

export default Layout;
