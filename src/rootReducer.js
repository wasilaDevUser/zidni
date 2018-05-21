import { combineReducers } from 'redux'
import DashReducer from './dash/reducers/dashReducer';
import WebsiteReducer from './website/reducers/websiteReducer'

const rootReducer = combineReducers({
  DashReducer,
  WebsiteReducer
})

export default rootReducer;