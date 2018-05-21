import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";

const rootAuthReducer = combineReducers({
  dialogReducer
});

export default rootAuthReducer;
