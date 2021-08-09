import { combineReducers } from "redux";

import globalReducer from "./globalReducer/globalReducer";
import authReducer from "./authReducer/authReducer";
import studentsEditorReducer from "./studentsEditorReducer/studentsEditorReducer";
import timeTableEditorReducer from "./timeTableEditorReducer/timeTableEditorReducer";

const rootReducer = combineReducers({
  globalReducer,
  authReducer,
  studentsEditorReducer,
  timeTableEditorReducer,
});

export default rootReducer;
