import { combineReducers } from "redux";
import AuthReducer from "./authReducers";
import ProjectReducer from "./projectReducer";

export default rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer
});

