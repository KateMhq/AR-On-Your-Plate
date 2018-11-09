import { combineReducers } from "redux";
import ar from "./ar";
import wrapper from "./wrapper";
import item from './item';

export default combineReducers({
  ar,
  wrapper,
  item
});
