import axios from "axios";
import { TokenCybersoft, URL } from "../../Utils/config";
import { localServices } from "../LocalServices/localServices";
import { store } from "../../index";
export const QuanLyDatVeService = {
  layChiTietphongVe: (maLichChieu) => {
    store.dispatch({ type: "SET_LOADING", payload: true });

    return axios({
      url: `${URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  datVe: (data) => {
    // store.dispatch({ type: "SET_LOADING", payload: true });
    return axios({
      url: `${URL}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization: `Bearer ${localServices.getUser().accessToken}`,
      },
    });
  },
};
