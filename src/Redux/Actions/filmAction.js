import { QuanLyDatVeService } from "../../Services/DatVeService/DatVeService";
import { filmService } from "../../Services/FlimService/filmService";
import { SET_CHI_TIET_PHONG_VE } from "../Constants/datVe";
import {
  GET_THONG_TIN_HE_THONG_RAP,
  SET_BANNER,
  SET_LIST_PHIM,
} from "../Constants/film";

export const lichChieuHeThongRapAction = () => {
  return (dispatch) => {
    filmService
      .setThongTinLichChieuheThongRap()
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_THONG_TIN_HE_THONG_RAP,
          payload: res.data.content,
        });
      })
      .catch((err) => console.log(err));
  };
};
export const getBannerAction = function () {
  return (dispatch) => {
    filmService
      .getBanner()
      .then((res) => dispatch({ type: SET_BANNER, payload: res.data.content }));
  };
};
export const layChiTietPhongVe = function (data) {
  return (dispatch) => {
    QuanLyDatVeService.layChiTietphongVe(data)
      .then((res) => {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          payload: res.data.content,
        });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => console.log(err));
  };
};
export const getListFilm = function () {
  return (dispatch) => {
    filmService
      .setListPhim()
      .then((res) => {
        dispatch({
          type: SET_LIST_PHIM,
          payload: res.data.content,
        });
      })
      .catch((err) => console.log(err));
  };
};
