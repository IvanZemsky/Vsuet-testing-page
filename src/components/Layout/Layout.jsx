import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from './../Footer/Footer';

const Layout = () => {
   return (
      <>
         <Header />
         <Suspense>
            <Outlet />
         </Suspense>
         <Footer />
      </>
   );
};

export default Layout;
