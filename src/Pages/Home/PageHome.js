import React from "react";
import Carousel from "./Carousel/Carousel";
import ListPhim from "./ListPhim/ListPhim";
import TabMovies from "./TabMovie/TabMovies";
import "./index.css";
export default function PageHome() {
  return (
    <div className="page-home">
      <Carousel />
      <ListPhim />
      <TabMovies />
    </div>
  );
}
