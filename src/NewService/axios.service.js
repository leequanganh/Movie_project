import Axios from "axios";
import { TokenCybersoft, URL } from "../Utils/config";
import { store } from "../index";
class axiosService {
  constructor() {
    this.axios = Axios.create({
      baseURL: URL,
    });
    this.axiosConfig = {
      headers: {
        TokenCyberSoft: TokenCybersoft,
      },
    };
  }

  removeAxiosConfig() {
    this.axiosConfig = {};
  }
  getMethod(uri, loading = true) {
    return this.handleFlow(this.axios.get(uri, this.axiosConfig), loading);
  }
  postMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.post(uri, data, this.axiosConfig),
      loading
    );
  }
  putMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.put(uri, data, this.axiosConfig),
      loading
    );
  }
  patchMethod(uri, data, loading = true) {
    return this.handleFlow(
      this.axios.patch(uri, data, this.axiosConfig),
      loading
    );
  }
  deleteMothod(uri, loading = true) {
    return this.handleFlow(this.axios.delete(uri, this.axiosConfig), loading);
  }
  handleFlow(method, loading = true) {
    loading && store.dispatch({ type: "SET_LOADING", payload: true });
    return new Promise((resolve, reject) => {
      method
        .then((res) => {
          loading && store.dispatch({ type: "SET_LOADING", payload: false });
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          loading && store.dispatch({ type: "SET_LOADING", payload: false });
          this.handleError(err);
          reject({
            err: err,
          });
        });
    });
  }
  handleError(err) {
    const status = err.response?.status;
    switch (status) {
      case 404:
        return alert(err.response.status);

      default:
        return console.log(err);
    }

    // case 401:
    // case 403:
    //   window.location.assign("/lms");
    //   break;
    // default:
    //   break;
  }
  //
  axiosInstance(req) {
    this.axios(req, this.axiosConfig);
  }
}
const axiosSrv = new axiosService();
export default axiosSrv;
