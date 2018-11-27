function orderHistory(state={}, action){
  switch (action.type) {
    case "PLACE_ORDER":
    
      const newOrder = {[action.order.order_id]: action.order};
      return Object.assign({}, state, newOrder);
    default:
      return state;
  }
}


export default orderHistory;
