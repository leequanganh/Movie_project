import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Lazy, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/lazy";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getListFilm } from "../../../Redux/Actions/filmAction";
import {
  SET_LIST_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../../Redux/Constants/film";
import { filmService } from "../../../Services/FlimService/filmService";
import "../../../Style/swiper.css";
import ITemPhim from "./ItemPhim/ITemPhim";

export default function ListPhim() {
  const dispatch = useDispatch();
  let { listPhim } = useSelector((state) => state.filmReducer);
  useEffect(() => {
    dispatch(getListFilm());
  }, []);
  let { dangChieu, sapChieu } = useSelector((state) => state.filmReducer);
  return (
    <div id="list_Film" className=" max-w-7xl mx-auto py-12">
      <div className=" rounded-t-xl overflow-hidden w-fit shadow-2xl">
        <button
          // style={{ boxShadow: "52px 0px 31px -5px rgba(0,0,0,0.1)" }}
          onClick={() => {
            dispatch({ type: SET_PHIM_DANG_CHIEU });
          }}
          className={`${
            dangChieu === true
              ? "bg-red-500 text-white"
              : "bg-white text-red-500"
          }  px-4 py-2   text-2xl font-semibold hover:bg-red-500 hover:text-white `}
        >
          Đang chiếu
        </button>
        <button
          onClick={() => {
            dispatch({ type: SET_PHIM_SAP_CHIEU });
          }}
          className={`${
            sapChieu === true
              ? "bg-red-500 text-white"
              : "bg-white text-red-500"
          }  px-4 py-2   text-2xl font-semibold hover:bg-red-500 hover:text-white `}
        >
          Sắp chiếu
        </button>
      </div>
      <Swiper
        className=" w-full h-full mx-auto "
        allowTouchMove={false}
        slidesPerView={4}
        slidesPerGroup={4}
        grid={{
          fill: "row",
          rows: 2,
        }}
        lazy={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        modules={[Grid, Pagination, Lazy]}
      >
        {listPhim?.map((phim, index) => {
          return (
            <SwiperSlide key={index} className="h-1/2">
              <ITemPhim data={phim} />
            </SwiperSlide>
          );
        })}
        ;
      </Swiper>
    </div>
  );
}
