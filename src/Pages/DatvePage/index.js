import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DAT_VE } from "../../Redux/Constants/datVe";
import { QuanLyDatVeService } from "../../Services/DatVeService/DatVeService";
import styles from "./datVe.module.css";
import "./ghe.css";
import { message, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { userService } from "../../Services/UserService/userService";
import moment from "moment";
import { localServices } from "../../Services/LocalServices/localServices";
import { NavLink } from "react-router-dom";
import { layChiTietPhongVe } from "../../Redux/Actions/filmAction";
import HomeBtn from "../../Components/HomeBtn/HomeBtn";

const { TabPane } = Tabs;
function ChonGhe(props) {
  const dispatch = useDispatch();
  const { userInfor } = useSelector((state) => state.userReducer);
  let { chiTietPghongVe, danhSachGheDangDat, gheKhachDat } = useSelector(
    (state) => state.datVeReducer
  );
  let { thongTinPhim, danhSachGhe } = chiTietPghongVe;
  useEffect(() => {
    dispatch(layChiTietPhongVe(props.match.params.id));
  }, [danhSachGheDangDat]);
  // useEffect(( )=>{},[danhSachGheDangDat])

  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheDD = "";
      let classGheDuocDat = "";
      let classGheKhachDangDat = "";
      let GheKhachDangDat = gheKhachDat.findIndex(
        (item) => item.maGhe === ghe.maGhe
      );
      // console.log({ GheKhachDangDat });
      let gheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (GheKhachDangDat !== -1) {
        classGheKhachDangDat = "gheKhachDangDat";
      }
      if (gheDD !== -1) {
        classGheDD = "gheDangDat";
      }
      if (ghe.taiKhoanNguoiDat === userInfor.taiKhoan) {
        classGheDuocDat = "gheDuocDat";
      }
      return (
        <Fragment key={index}>
          {ghe.loaiGhe === "Thuong" ? (
            <button
              disabled={ghe.daDat || classGheKhachDangDat !== ""}
              onClick={() => {
                dispatch({
                  type: DAT_VE,
                  payload: ghe,
                });
              }}
              className={`ghe ${classGheKhachDangDat} ${classGheDD}   ${
                ghe.daDat ? "gheDat" : ""
              } ${
                ghe.taiKhoanNguoiDat === userInfor.taiKhoan ? "gheDuocDat" : ""
              } `}
            >
              {ghe.daDat ? (
                classGheDuocDat ? (
                  <UserOutlined />
                ) : (
                  "x"
                )
              ) : (
                ghe.tenGhe
              )}
            </button>
          ) : (
            <button
              disabled={ghe.daDat || classGheKhachDangDat !== ""}
              onClick={() => {
                dispatch({
                  type: DAT_VE,
                  payload: ghe,
                });
              }}
              className={`gheVip ${classGheKhachDangDat} ${classGheDD} ${
                ghe.daDat ? "gheDat" : ""
              } ${
                ghe.taiKhoanNguoiDat === userInfor.taiKhoan ? "gheDuocDat" : ""
              }`}
            >
              {ghe.daDat ? (
                classGheDuocDat ? (
                  <UserOutlined />
                ) : (
                  "x"
                )
              ) : (
                ghe.tenGhe
              )}
            </button>
          )}
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className=" container mx-auto ">
      <div className="grid grid-cols-12 gap-x-12">
        <div className=" col-span-9 flex  flex-col items-center">
          <div className={styles.trapezoid}></div>
          <div>{renderGhe()}</div>
          <div className=" mt-5 w-full">
            <table className="table-auto w-full">
              <thead>
                <tr className="">
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế đã được đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <button className="ghe">x</button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheDangDat">x</button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheVip">x</button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheDat">x</button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheKhachDangDat">x</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" col-span-3">
          <h3 className=" text-green-400 ftext-center text-2xl">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <h3 className=" text-xl">{thongTinPhim?.tenPhim}</h3>
          <p className=" text-lg font-normal">
            Địa điểm: {thongTinPhim?.tenCumRap}
          </p>
          <p className=" text-lg font-normal">
            Ngày Chiếu: {thongTinPhim?.ngayChieu}
          </p>
          <hr />
          <div className="grid grid-cols-2">
            <div>
              <span className=" text-red-400">Ghế</span>
            </div>
            <div>
              <span className=" text-lg font-normal text-green-400 ">
                {danhSachGheDangDat.map((ghe) => ghe.tenGhe).join(" ")}
              </span>
            </div>
          </div>
          <hr />
          <div>
            <i>email</i>
            <br />
            {userInfor.email}
          </div>
          <hr />

          <button
            disabled={danhSachGheDangDat.length === 0}
            onClick={() => {
              let data = {
                maLichChieu: props.match.params.id,
                danhSachVe: danhSachGheDangDat,
                taiKhoanNguoiDung: userInfor.taiKhoan,
              };
              QuanLyDatVeService.datVe(data)
                .then((res) => {
                  dispatch({ type: "SET_LOADING", payload: false });
                  dispatch({
                    type: DAT_VE,
                    payload: false,
                  });
                  message.success("Đặt vé tành công");
                })
                .catch((err) => console.log(err));
            }}
            className={`w-full  mt-5 px-4 text-xl bg-red-500 text-white font-medium py-2 rounded-lg ${
              danhSachGheDangDat.length === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  );
}
// const
function LichSuDatVe() {
  const dispatch = useDispatch();

  let [thongTindatVe, setThongTinDatVe] = useState([]);
  useEffect(() => {
    userService
      .getThongTinNguoiDung()
      .then((res) => {
        console.log(res.data.content.thongTinDatVe);
        setThongTinDatVe(res.data.content.thongTinDatVe);
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, []);
  let renderContent = () => {
    return (
      <div>
        {thongTindatVe?.map((item, i) => {
          return (
            <div key={i} className="flex space-x-10">
              <img src={item.hinhAnh} alt="" />
              <div>
                <p>Mã vé : {item.thoiLuongPhim}</p>
                <p>{item.tenPhim}</p>
                <p>Thời lượng phim : {item.thoiLuongPhim}</p>
                <p>số lượng ghế : {item.danhSachGhe.length}</p>
                <div className=" w-full h-fit">
                  <p>Ghế số :</p>
                  <div className=" space-y-3">
                    {item.danhSachGhe.map((item, i) => {
                      return (
                        <>
                          <button
                            className=" p-3 bg-yellow-400 rounded-md mr-1 "
                            key={i}
                          >
                            {item.tenGhe}
                          </button>
                          {(i + 1) % 10 === 0 ? <br /> : ""}
                        </>
                      );
                    })}
                  </div>
                </div>
                <p>Tên rạp:{item.danhSachGhe[0].tenHeThongRap}</p>
                <p>
                  ngày đặt :{" "}
                  {moment(item.ngayDat).format("h:mm:ss a , MMMM Do YYYY")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold ">Lịch sử đặt vé</h1>
      {renderContent()}
    </div>
  );
}

export default function index(props) {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="container mx-auto ">
      <HomeBtn />

      {localServices.getUser() ? (
        <>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<span>Chọn ghế & Thanh toán </span>} key="1">
              <ChonGhe {...props} />
            </TabPane>
            <TabPane tab={<span>Lịch sử đặt vé </span>} key="2">
              <LichSuDatVe {...props} />
            </TabPane>
          </Tabs>
        </>
      ) : (
        <div className="text-center">
          <p className="  text-red-500 italic text-2xl">
            Bạn chưa đăng nhập !!! <br />
          </p>
          <NavLink className=" text-red-400 hover:text-red-500  " to="/sign-in">
            Nhấn vào đây để đăng nhập
          </NavLink>
        </div>
      )}
    </div>
  );
}
