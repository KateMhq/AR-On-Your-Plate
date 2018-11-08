const initialState={
  dishes:{
      sushi:{
      id:1,
      obj:'https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/model.obj',
      mtl:'https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut/materials.mtl',
      image:'https://lh3.googleusercontent.com/pmGBEfwi1b2jwL6lb29uE_pmGIlBy9Mt8Dsz-_wwZSk_N16JRCLbqRxOlAr1JS-v',
      name: "sushi",
      description: "Taste good",
  },
    tacos:{
      id:2,
      obj:'https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9/model.obj',
      mtl:'https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9/materials.mtl',
      image:'https://lh3.googleusercontent.com/GewMgUIDU24-ViwS2osK4SF2GUGZkJdyKdXN8fYuAYx0Xu-WPbxfRwcLwH2k9IY',
      name: "tacos",
      description: "Taste good",

    },
    ramen:{
      id:3,
      obj:'https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL/model.obj',
      mtl:'https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL/materials.mtl',
      image:'https://lh3.googleusercontent.com/0TgTKfvtpJ0pc0TAmQKGhoQWFvUvjDQA5Yae_DHdC3NHTTxeBpHquMqivRoJO6Cj',
      name: "ramen",
      description: "Taste good",

    },
    highTea:{
      id:4,
      obj:'https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi/model.obj',
      mtl:'https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi/materials.mtl',
      image:'https://lh3.googleusercontent.com/CZ6ZmNxWH6XDb98Uy52Wpg0YBWTZQVIvzQcPBCVxeLYFVtDKHjWug5lMet86Jwwa4A',
      name: "highTea",
      description: "Taste good",

    }
  },
  currentDish:{}
  }

  function item(state = initialState, action) {
    switch (action.type) {

      default:
        return state;
    }
  }

  export default item;
