import { SET_CHI_TIET_PHONG_VE, DAT_VE } from "../Constants/datVe";

let initialState = {
  chiTietPghongVe: {},
  danhSachGheDangDat: [],
  gheKhachDat: [{ maGhe: 81321 }, { maGhe: 81322 }],
};
const datVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE:
      state.chiTietPghongVe = action.payload;
      return { ...state };
    case DAT_VE:
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else if (action.payload === false) {
        danhSachGheCapNhat = [];
      } else {
        danhSachGheCapNhat.push(action.payload);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    default:
      return state;
  }
};
export default datVeReducer;
