import React from "react";
import moment from "moment";
import "./tabDetail.css";
export default function DetailTap({ data }) {
  return (
    <div className="h-screen overflow-y-scroll">
      {data.danhSachPhim.map((phim) => {
        return (
          <div
            key={phim.maPhim}
            className="flex space-x-7 p-1 overflow-hidden   items-center  border-2 border-gray-200"
            style={{ height: "20vh" }}
          >
            <img
              className=" h-full w-1/4 object-cover"
              src={phim.hinhAnh}
              alt=""
            />
            <div className="flex flex-col  font-semibold  flex-grow space-y-5 h-full">
              <div className=" flex  items-center">
                <span className="bg-red-600 px-4 py-2 rounded-lg text-white mr-3 w-fit">
                  c18
                </span>
                <p className="text-white uppercase ">{phim.tenPhim}</p>
              </div>
              <div className=" overflow-y-scroll space-y-1 grid grid-cols-3 h-full">
                {phim.lstLichChieuTheoPhim.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex border-white border-2  rounded-lg text-white  w-fit h-fit items-center leading-10"
                    >
                      <span>
                        {moment(item.ngayChieuGioChieu).format("DD-MM")}
                      </span>
                      ~
                      <span>
                        {moment(item.ngayChieuGioChieu).format("HH:MM")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
