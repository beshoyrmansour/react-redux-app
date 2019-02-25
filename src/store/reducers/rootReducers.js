import { combineReducers } from "redux";
import AuthReducer from "./authReducers";
import ProjectReducer from "./projectReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer
});

export default rootReducer