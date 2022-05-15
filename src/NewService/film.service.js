import axiosSrv from "./axios.service";

class flilmService {
  constructor() {}
  getBanner(setLoading = true) {
    const uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return axiosSrv.getMethod(uri, setLoading);
  }
}
const flilmServ = new flilmService();
export default flilmServ;
