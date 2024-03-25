import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from './../Footer/Footer';
import Loading from './../Loading/Loading';

const Layout = () => {
   return (
      <>
         <Header />
         <Suspense fallback={<Loading/>}>
            <Outlet />
         </Suspense>
         <Footer />
      </>
   );
};

export default Layout;
