import React from "react";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" className=" h-full">
      <div
        className=" bg-contain bg-center bg-no-repeat w-80 h-full"
        style={{
          backgroundImage:
            "url(https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png)",
        }}
      ></div>
    </NavLink>
  );
}
