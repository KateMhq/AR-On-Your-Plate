const initialState = {
  modalVisible: false,
  course: "",
};

function wrapper(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      return Object.assign({}, state, { modalVisible: true });
    case "HIDE_MODAL":
      return Object.assign({}, state, { modalVisible: false });
    case "FILTER_FOOD":
      return Object.assign({}, state, { course: action.course });
    default:
      return state;
  }
}

export default wrapper;
