import { combineReducers } from "redux";
import datVeReducer from "./Reducer/datveReducer";
import filmReducer from "./Reducer/filmReducer";
import { loadingReducer } from "./Reducer/loadingReducer";
import { userReducer } from "./Reducer/userReducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
  filmReducer: filmReducer,
  datVeReducer: datVeReducer,
  loadingReducer: loadingReducer,
});
export default rootReducer;
