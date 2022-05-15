import React, { useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";
import "./index.css";
export default function Navbar() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 100) {
        header.style.height = "90px";
        header.style.background = "transparent";
      } else {
        header.style.height = "128px";
        header.style.background = "rgb(51, 1, 43)";
        header.style.background =
          "linear-gradient(90deg, rgba(51,1,43,1) 0%, rgba(75,4,68,1) 50%, rgba(51,1,43,1) 100%)";
      }
    };
  }, []);
  return (
    <div className="header shadow-lg fixed z-10 w-full h-32 ">
      <div className=" flex justify-between mx-auto  items-center max-w-7xl h-full">
        <Logo />
        <Menu />
        <User />
      </div>
    </div>
  );
}
