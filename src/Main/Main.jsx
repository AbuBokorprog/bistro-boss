import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isHeaderFooter = location.pathname.includes("login");
  const isFooter = location.pathname.includes("register");
  return (
    <div>
      {isHeaderFooter || isFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isHeaderFooter || isFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
