const initialState = {
  dishes: {},
  currentDish: {
    obj:
      "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/model.obj",
    mtl:
      "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/materials.mtl",
  },

  currentOrder: {},
  basketQuantity: 0,
};

function item(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_INITIAL_DISHES_STATE":
      let i = 0;
      let dishesArr = action.dishesArr;

      const dishesObj = Object.assign(
        {},
        ...dishesArr.map(item => ({ [item.id]: item }))
      );

      return Object.assign({}, state, { dishes: dishesObj });

    case "UPDATE_DISH":
      return Object.assign({}, state, {
        currentDish: {
          obj: action.obj,
          mtl: action.mtl,
        },
      });
    case "ADD_QUANTITY":
      const newQuan = state.dishes[action.dish].quantity + 1;
      const newObj = Object.assign({
        dishes: Object.assign({}, state.dishes, {
          [action.dish]: Object.assign({}, state.dishes[action.dish], {
            quantity: newQuan,
          }),
        }),
      });
      const newState = Object.assign({}, state, newObj);

      return newState;

    case "DECREASE_QUANTITY":
      const decQuan = state.dishes[action.dish].quantity - 1;
      const decNewObj = Object.assign({
        dishes: Object.assign({}, state.dishes, {
          [action.dish]: Object.assign({}, state.dishes[action.dish], {
            quantity: decQuan,
          }),
        }),
      });
      const decNewState = Object.assign({}, state, decNewObj);
      return decNewState;

    case "ADD_TO_BASKET":
      const updatedBasket = Object.assign({
        currentOrder: Object.assign({}, state.currentOrder, {
          [action.id]: Object.assign({}, state.currentOrder[action.id], {
            dish_id: action.id,
            quantity: state.currentOrder[action.id]
              ? state.currentOrder[action.id].quantity + action.quantity
              : action.quantity,
            name: action.name,
            price: action.price,
          }),
        }),
        dishes: Object.assign({}, state.dishes, {
          [action.id]: Object.assign({}, state.dishes[action.id], {
            quantity: 0,
          }),
        }),
        basketQuantity: state.basketQuantity + action.quantity,
      });
      const updatedBasketState = Object.assign({}, state, updatedBasket);

      return updatedBasketState;
    case "EMPTY_BASKET":
      return Object.assign({}, state, { currentOrder: {}, basketQuantity: 0 });

    default:
      return state;
  }
}

export default item;
