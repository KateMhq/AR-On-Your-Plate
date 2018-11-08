const initialState = {
  searchModalVisible: false,
  hasCameraPermission: null,
  type: null,
  turkeyObj: "",
  turkeyMtl: "",
  dishes: {
    sushi: [
      "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/model.obj",
      "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/materials.mtl",
      "https://lh3.googleusercontent.com/pmGBEfwi1b2jwL6lb29uE_pmGIlBy9Mt8Dsz-_wwZSk_N16JRCLbqRxOlAr1JS-v",
    ],
    tacos: [
      "https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9/model.obj",
      "https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9/materials.mtl",
      "https://lh3.googleusercontent.com/GewMgUIDU24-ViwS2osK4SF2GUGZkJdyKdXN8fYuAYx0Xu-WPbxfRwcLwH2k9IY",
    ],
    ramen: [
      "https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL/model.obj",
      "https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL/materials.mtl",
      "https://lh3.googleusercontent.com/0TgTKfvtpJ0pc0TAmQKGhoQWFvUvjDQA5Yae_DHdC3NHTTxeBpHquMqivRoJO6Cj",
    ],
    highTea: [
      "https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi/model.obj",
      "https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi/materials.mtl",
      "https://lh3.googleusercontent.com/CZ6ZmNxWH6XDb98Uy52Wpg0YBWTZQVIvzQcPBCVxeLYFVtDKHjWug5lMet86Jwwa4A",
    ],
  },
};

function ar(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CAMERA_PERMISSION":
      return Object.assign({}, state, { hasCameraPermission: "granted" });

    case "UPDATE_TURKEY_OBJ":
      return Object.assign({}, state, { turkeyObj: action.object });

    case "UPDATE_TURKEY_MTL":
      return Object.assign({}, state, { turkeyMtl: action.mtl });

    default:
      return state;
  }
}

export default ar;
