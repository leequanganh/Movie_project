import {
  SET_BANNER,
  SET_LIST_PHIM,
  GET_THONG_TIN_HE_THONG_RAP,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
  SET_DETAIL_FILM,
} from "../Constants/film";

let initialState = {
  listBanner: [],
  listPhim: [],
  listPhimHeThongRap: [],
  dangChieu: false,
  sapChieu: false,
  cloneListPhim: [],
  detailFilm: {},
};
const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER:
      state.listBanner = action.payload;

      return { ...state };
    case SET_LIST_PHIM:
      state.listPhim = action.payload;
      state.cloneListPhim = state.listPhim;

      return { ...state };
    case GET_THONG_TIN_HE_THONG_RAP:
      state.listPhimHeThongRap = action.payload;
      return { ...state };
    case SET_PHIM_DANG_CHIEU:
      state.dangChieu = !state.dangChieu;
      if (state.dangChieu) {
        state.sapChieu = false;
        state.listPhim = state.cloneListPhim.filter(
          (phim) => phim.dangChieu === state.dangChieu
        );
        return { ...state };
      } else {
        state.listPhim = state.cloneListPhim;
        return { ...state };
      }
    // return { ...state };
    case SET_PHIM_SAP_CHIEU:
      state.sapChieu = !state.sapChieu;
      if (state.sapChieu) {
        state.dangChieu = false;
        state.listPhim = state.cloneListPhim.filter(
          (phim) => phim.sapChieu === state.sapChieu
        );
        return { ...state };
      } else {
        state.listPhim = state.cloneListPhim;
        return { ...state };
      }
    case SET_DETAIL_FILM:
      let newDetailFilm = { ...state.detailFilm };
      newDetailFilm = action.payload;
      // console.log(action.payload);
      state.detailFilm = newDetailFilm;
      // console.log(state);
      return { ...state };
    default:
      return state;
  }
};
export default filmReducer;
