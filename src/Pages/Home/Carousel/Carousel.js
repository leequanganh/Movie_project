import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import flilmServ from "../../../NewService/film.service";
import { getBannerAction } from "../../../Redux/Actions/filmAction";
import { SET_BANNER } from "../../../Redux/Constants/film";
import { filmService } from "../../../Services/FlimService/filmService";
import ItemCarousel from "./ItemCarousel";
export default function Carousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerAction());
  }, []);
  let { listBanner } = useSelector((state) => state.filmReducer);

  return (
    <div className="overflow-hidden" style={{ height: "80vh" }}>
      <Swiper
        className="w-screen h-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        speed={700}
        effect={"fade"}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {listBanner.map((banner) => {
          return (
            <SwiperSlide key={banner.maPhim}>
              <ItemCarousel data={banner} key={banner.maPhim} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
