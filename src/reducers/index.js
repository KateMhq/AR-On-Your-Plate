import { combineReducers } from "redux";
import ar from "./ar";
import wrapper from "./wrapper";
import item from "./item";
import orderHistory from "./orderHistory";
import landing from "./landing";

export default combineReducers({
  ar,
  wrapper,
  item,
  orderHistory,
  landing,
});
