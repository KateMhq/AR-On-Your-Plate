const initialState = {
  modalVisible: false,
  course: "",
  starter: false,
  main: false,
  dessert: false,

};

function wrapper(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      return Object.assign({}, state, { modalVisible: true });
    case "HIDE_MODAL":
      return Object.assign({}, state, { modalVisible: false });
    case "RECEIVE_COURSE":
      return Object.assign({}, state, { course: action.course });
    case "FILTER_STARTER":
      return Object.assign({}, state, { starter: !state.starter });
    case "FILTER_MAIN":
      return Object.assign({}, state, { main: !state.main });
    case "FILTER_DESSERT":
      return Object.assign({}, state, { dessert: !state.dessert });
      
    default:
      return state;
  }
}

export default wrapper;
