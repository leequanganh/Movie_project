import axios from "axios";
import { TokenCybersoft, URL } from "../../Utils/config";
import { localServices } from "../LocalServices/localServices";
import { store } from "../../index";
export const userService = {
  setUser: (data, ...a) => {
    return axios({
      url: `${URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  gettUser: (data, ...a) => {
    return axios({
      url: `${URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: data,
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  getThongTinNguoiDung: () => {
    store.dispatch({ type: "SET_LOADING", payload: true });
    return axios({
      url: `${URL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      headers: {
        TokenCybersoft: TokenCybersoft,
        Authorization: `Bearer ${localServices.getUser().accessToken}`,
      },
    });
  },
};
