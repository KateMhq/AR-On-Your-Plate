function orderHistory(state={}, action){
  switch (action.type) {
    case "PLACE_ORDER":
      alert(`Thanks for your order. Your order ID is ${action.order.order_id}. We are preparing your food.`);
      const newOrder = {[action.order.order_id]: action.order};
      return Object.assign({}, state, newOrder);
    default:
      return state;
  }
}


export default orderHistory;
