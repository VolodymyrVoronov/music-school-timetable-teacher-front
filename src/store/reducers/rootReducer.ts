import { combineReducers } from "redux";

import globalReducer from "./globalReducer/globalReducer";
import authReducer from "./authReducer/authReducer";

const rootReducer = combineReducers({
  globalReducer,
  authReducer,
});

export default rootReducer;
