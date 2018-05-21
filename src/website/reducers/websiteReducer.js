import { combineReducers } from "redux";
import rootAuthReducer from './auth/rootAuthReducer'

const WebsiteReducer = combineReducers({
  rootAuthReducer
});

export default WebsiteReducer;
