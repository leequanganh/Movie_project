import axios from "axios";
import { TokenCybersoft, URL } from "../../Utils/config";

export const filmService = {
  getBanner: () => {
    return axios({
      url: `${URL}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  setListPhim: () => {
    return axios({
      url: `${URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  setThongTinLichChieuheThongRap: () => {
    return axios({
      url: `${URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  setDetailFilm: (id) => {
    return axios({
      url: `${URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
  getLichChieuPhimHTR: (maPhim) => {
    return axios({
      url: `${URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft: TokenCybersoft,
      },
    });
  },
};
