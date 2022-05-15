import moment from "moment";
import { Rate, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_DETAIL_FILM } from "../../../../../Redux/Constants/film";
import { filmService } from "../../../../../Services/FlimService/filmService";
import "./detailFilm.css";
import "../../../../../assets/circle.css";
import { NavLink } from "react-router-dom";
export default function DetailFilm(props) {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  const [cumRapChieu, setCumRapChieu] = useState([]);
  // let cumRapChieu = [];
  useEffect(() => {
    filmService.setDetailFilm(props.match.params.id).then((res) => {
      dispatch({ type: SET_DETAIL_FILM, payload: res.data.content });
    });
    filmService
      .getLichChieuPhimHTR(props.match.params.id)
      .then((res) => {
        console.log({ res });
        setCumRapChieu(res.data.content.heThongRapChieu);
      })
      .catch((err) => console.error(err));
  }, []);
  let { detailFilm } = useSelector((state) => state.filmReducer);
  const renderTab = () => {
    console.log({ cumRapChieu });
    return cumRapChieu?.map((item, index) => {
      return (
        <TabPane
          tab={
            <div className=" flex flex-col items-center">
              <img src={item.logo} className=" w-20" alt="" />
              <span className=" text-white text-xl font-semibold">
                {item.tenHeThongRap}
              </span>
            </div>
          }
          key={index}
        >
          <Tabs className=" bg-neutral-50">
            {item.cumRapChieu.map((item, index) => {
              console.log({ item });
              return (
                <TabPane
                  key={index}
                  tab={
                    <span className=" text-black  text-lg font-medium">
                      {item.tenCumRap}
                    </span>
                  }
                >
                  <div className="p-4 flex flex-col space-y-8">
                    <img
                      src={item.hinhAnh}
                      className=" object-cover w-full h-40"
                      alt=""
                    />
                    <div className=" grid grid-cols-5 gap-3 ">
                      {item.lichChieuPhim.slice(0, 10).map((lichChieu, i) => {
                        return (
                          <NavLink
                            key={i}
                            to={`/datVe/${lichChieu.maLichChieu}`}
                          >
                            <p className="space-x-2 bg-yellow-400 rounded-md text-lg text-black font-medium px-2 flex flex-col items-center">
                              <span>{lichChieu.tenRap}</span>
                              <span className="text-center">
                                {moment(lichChieu.ngayChieuGioChieu).format(
                                  "MMMM-Do-YYYY  h:mm:ss a"
                                )}
                              </span>
                            </p>
                          </NavLink>
                        );
                      })}
                    </div>
                    <p className="text-black">Địa chỉ : {item.diaChi}</p>
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className=" w-screen min-h-screen bg-gray-800 ">
      <div
        className=" max-w-7xl h-full   mx-auto  "
        style={{
          backgroundImage: `url(${detailFilm.hinhAnh})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="detail-film h-full p-8">
          <div className="flex">
            <div className=" mt-40 grid grid-cols-12 space-x-14">
              <img className=" col-span-3" src={detailFilm.hinhAnh} alt="" />
              <div className=" text-white text-xl space-y-5 col-span-6">
                <p className=" font-semibold text-3xl">{detailFilm.tenPhim}</p>
                <p>{detailFilm.moTa}</p>
                <p>
                  <span className=" font-semibold">Ngày khởi chiếu : </span>
                  {moment(detailFilm.ngayKhoiChieu).format("MMMM Do YYYY")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-10  col-span-3">
                <Rate
                  style={{ display: "flex" }}
                  allowHalf
                  value={detailFilm.danhGia / 2}
                />
                <div className={`c100 p${detailFilm.danhGia * 10} big `}>
                  <span>{detailFilm.danhGia * 10}%</span>
                  <div className="slice ">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs tabPosition={"left"}>{renderTab()}</Tabs>
        </div>
      </div>
    </div>
  );
}
