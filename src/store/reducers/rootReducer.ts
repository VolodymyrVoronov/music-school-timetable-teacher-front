import { combineReducers } from "redux";

import globalReducer from "./globalReducer/globalReducer";
import authReducer from "./authReducer/authReducer";
import studentsEditorReducer from "./studentsEditorReducer/studentsEditorReducer";

const rootReducer = combineReducers({
  globalReducer,
  authReducer,
  studentsEditorReducer,
});

export default rootReducer;
