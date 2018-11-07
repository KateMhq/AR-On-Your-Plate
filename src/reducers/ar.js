const initialState = {
  searchModalVisible: false,
  hasCameraPermission: null,
  type: null,
  turkeyObj: "",
  turkeyMtl: ""
}

function ar(state = initialState, action){
  switch (action.type) {
    case 'UPDATE_CAMERA_PERMISSION':
    return Object.assign({}, state, {hasCameraPermission: "granted"});

    case 'UPDATE_TURKEY_OBJ':
    return Object.assign({}, state, {turkeyObj: action.object});

    case 'UPDATE_TURKEY_MTL':
    return Object.assign({}, state, {turkeyMtl: action.mtl});

    default:
      return state
  }
}

export default ar;
