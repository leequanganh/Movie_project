import { localServices } from "../../Services/LocalServices/localServices";
import { SET_INFOR } from "../Constants/user";
let InforInitial = localServices.getUser() ? localServices.getUser() : {};
let initialState = {
  userInfor: InforInitial,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFOR:
      state.userInfor = action.payload;
      return { ...state };
    default:
      return state;
  }
};
