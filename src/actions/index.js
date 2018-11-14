//example
export function updateCameraPermission() {
  return {
    type: "UPDATE_CAMERA_PERMISSION",
  };
}

export function updateTurkeyObj(object) {
  return {
    type: "UPDATE_TURKEY_OBJ",
    object,
  };
}

export function updateTurkeyMtl(mtl) {
  return {
    type: "UPDATE_TURKEY_MTL",
    mtl,
  };
}

export function updateDish(obj, mtl) {
  return {
    type: "UPDATE_DISH",
    obj,
    mtl,
  };
}

export function setModalVisible() {
  return {
    type: "SET_MODAL_VISIBLE",
  };
}

export function hideModal() {
  return {
    type: "HIDE_MODAL",
  };
}

export function receiveCourse(course) {
  return {
    type: "RECEIVE_COURSE",
    course,
  };
}

export function filterStarter() {
  return {
    type: "FILTER_STARTER",
  };
}

export function filterMain() {
  return {
    type: "FILTER_MAIN",
  };
}

export function filterDessert() {
  return {
    type: "FILTER_DESSERT",
  };
}

export function updateInitialDishesState() {
  return dispatch => {
    return fetch("https://project-ar-on-your-plate.herokuapp.com/dishes")
      .then(data => data.json())
      .then(data => {
        dispatch({
          type: "UPDATE_INITIAL_DISHES_STATE",
          dishesArr: data,
        });
      })
      .catch(error => error.message);
  };
}

//Jamal (Basket)
export function addQuantity(quantity, dish) {
  return {
    type: "ADD_QUANTITY",
    quantity,
    dish,
  };
}
export function decreaseQuantity(quantity, dish) {
  return {
    type: "DECREASE_QUANTITY",
    quantity,
    dish,
  };
}

export function addToBasket(id, quantity, name, price) {
  return { type: "ADD_TO_BASKET", name, quantity, id, price };
}

export function placeOrder(order){
  return {
    type:'PLACE_ORDER',
    order
  }
}
export function postOrder(currentOrder){
  return function(dispatch, getState){
    fetch(`https://project-ar-on-your-plate.herokuapp.com/orders`,{
      method:"POST",
      headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
      body: JSON.stringify(currentOrder)
    })
    .then(response => response.json())
    .then(obj => {
      dispatch(placeOrder(obj))
    })
    .catch(error =>  error.message)

    }
  }
