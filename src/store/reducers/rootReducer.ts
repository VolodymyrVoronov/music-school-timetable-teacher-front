import { combineReducers } from "redux";

import globalReducer, { GlobalReducerStateType } from "./globalReducer/globalReducer";

const rootReducer = combineReducers({
  globalReducer,
});

export default rootReducer;
