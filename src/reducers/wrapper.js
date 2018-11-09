const initialState = {

  modalVisible: false,

};

function wrapper(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      return Object.assign({}, state, { modalVisible: true });
    case "HIDE_MODAL":
      return Object.assign({}, state, { modalVisible: false });
    default:
      return state;
  }
}

export default wrapper;
