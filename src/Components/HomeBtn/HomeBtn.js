import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeBtn() {
  return (
    <NavLink
      to="/"
      className="fixed  top-0  shadow-2xl shadow-black bg-yellow-500 left-0  z-[9] text-white  hover:bg-white hover:text-yellow-400 text-center flex items-center"
    >
      <HomeOutlined className="text-3xl p-4 text-white" />
    </NavLink>
  );
}
