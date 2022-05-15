import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
export default function Footer() {
  const { listPhimHeThongRap } = useSelector((state) => state.filmReducer);
  const arrHeThongRap = _.map(listPhimHeThongRap, (heThongRap) =>
    _.pick(heThongRap, "logo")
  );
  return (
    <div className=" h-[30vh]  bg-black text-white flex justify-center items-center ">
      <div className=" flex space-x-4 ">
        {arrHeThongRap.map((item, i) => {
          return (
            <img
              src={item.logo}
              key={i}
              alt=""
              className=" w-24 h-24 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}
