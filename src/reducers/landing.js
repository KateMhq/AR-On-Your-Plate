const initialState = {
  userName: "",
  userNumber: "",
};
function landing(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER_NAME":
      return Object.assign({}, state, { userName: action.name });
    case "ADD_USER_NUMBER":
      return Object.assign({}, state, { userNumber: action.number });
    default:
      return state;
  }
}

export default landing;
