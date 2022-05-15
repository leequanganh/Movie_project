import React, { useState } from "react";
// import ModalVideo from "react-modal-video";
export default function ItemCarousel({ data }) {
  return (
    <div className="w-full relative">
      <img
        src={data.hinhAnh}
        className=" w-full h-full object-cover object-center"
        alt="banner"
      />
      <div className=" absolute"></div>
    </div>
  );
}
