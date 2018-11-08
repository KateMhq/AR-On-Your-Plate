const initialState = {
  currentDish: "https://poly.googleapis.com/downloads/6_2gGwLWWHN/2fjlcvDtM61",
};

function wrapper(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DISH":
      return Object.assign({}, state, { currentDish: action.url });
    default:
      return state;
  }
}

export default wrapper;
