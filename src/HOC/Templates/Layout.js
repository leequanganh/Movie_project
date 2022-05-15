import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../../Pages/Home/Navbar/Navbar";
import Footer from "../../Pages/Home/Footer/Footer";
const Layout = ({ Component, ...restRoute }) => {
  console.log({ ...restRoute });
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div className=" overflow-hidden">
            <Navbar />
            <Component {...propsRoute} />
            <Footer />
          </div>
        );
      }}
    />
  );
};
export default Layout;
