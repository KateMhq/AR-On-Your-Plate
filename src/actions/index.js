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

export function updateDish(obj,mtl) {
  return {
    type: "UPDATE_DISH",
    obj,
    mtl
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

export function updateInitialDishesState(){
  return {
    type: "UPDATE_INITIAL_DISHES_STATE",
  }
}
