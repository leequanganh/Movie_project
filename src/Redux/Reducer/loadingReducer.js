let initialState = { status: false };
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      let cloneState = { ...state };
      cloneState.status = action.payload;
      return cloneState;
    default:
      return state;
  }
};
