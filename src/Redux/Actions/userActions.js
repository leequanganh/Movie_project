import { message } from "antd";
import { localServices } from "../../Services/LocalServices/localServices";
import { userService } from "../../Services/UserService/userService";
import { SET_INFOR } from "../Constants/user";

const error = (content) => {
  message.error(content);
};
const success = (content) => {
  message.success(content);
};
export const userActions = (values) => {
  return (dispatch) => {
    userService
      .gettUser(values)
      .then((res) => {
        success("Bạn đã đăng nhập");
        window.location.href = "/";
        localServices.setUser(res.data.content);
        dispatch({
          type: SET_INFOR,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        error(err.response.data.content);
      });
  };
};
export const removeUserAction = () => {
  return (dispatch) => {
    localServices.removeUser();
    dispatch({
      type: SET_INFOR,
      payload: null,
    });
  };
};
