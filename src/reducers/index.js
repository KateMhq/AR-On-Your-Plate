import { combineReducers } from "redux";
import ar from "./ar";
import wrapper from "./wrapper";
import item from './item';
import orderHistory from './orderHistory';



export default combineReducers({
 ar,
 wrapper,
 item,
 orderHistory

});
