const dishesZero = {
  Sushi: {
    id: 1,
    url: "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut",
    image:
      "https://lh3.googleusercontent.com/pmGBEfwi1b2jwL6lb29uE_pmGIlBy9Mt8Dsz-_wwZSk_N16JRCLbqRxOlAr1JS-v",
    name: "Sushi",
    description:
      "Crispy Soft Shell Crab with a delicate burst of Flying Fish Roe, Avocado and a dash of Mayonnaise",
    course: "starter",
    price: 4.5,
    quantity: 0,
  },
  Tacos: {
    id: 2,
    url: "https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9",
    image:
      "https://lh3.googleusercontent.com/GewMgUIDU24-ViwS2osK4SF2GUGZkJdyKdXN8fYuAYx0Xu-WPbxfRwcLwH2k9IY",
    name: "Tacos",
    description:
      "Tender hand-shredded brisket & flank beef slowly cooked in garlic spiuces & pasilla chile",
    course: "main",
    price: 6.0,

    quantity: 0,
  },
  Ramen: {
    id: 3,
    url: "https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL",
    image:
      "https://lh3.googleusercontent.com/0TgTKfvtpJ0pc0TAmQKGhoQWFvUvjDQA5Yae_DHdC3NHTTxeBpHquMqivRoJO6Cj",
    name: "Ramen",
    description:
      "Shouyu Tonkotsu large size, all the toppings, extra egg and spicy miso pork",
    course: "main",
    price: 5.0,

    quantity: 0,
  },
  HighTea: {
    id: 4,
    url: "https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi",
    image:
      "https://lh3.googleusercontent.com/CZ6ZmNxWH6XDb98Uy52Wpg0YBWTZQVIvzQcPBCVxeLYFVtDKHjWug5lMet86Jwwa4A",
    name: "HighTea",
    description: "I'm not really sure what high tea is...",
    course: "dessert",
    price: 5.55,
    quantity: 0,
  },
};

const initialState = {
  dishes: {
    Sushi: {
      id: 1,
      url: "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut",
      image:
        "https://lh3.googleusercontent.com/pmGBEfwi1b2jwL6lb29uE_pmGIlBy9Mt8Dsz-_wwZSk_N16JRCLbqRxOlAr1JS-v",
      name: "Sushi",
      description:
        "Crispy Soft Shell Crab with a delicate burst of Flying Fish Roe, Avocado and a dash of Mayonnaise",
      course: "starter",
      price: 4.5,
      quantity: 0,
    },
    Tacos: {
      id: 2,
      url: "https://poly.googleapis.com/downloads/33nYH5Sdxqb/1Qr8ITDI3b9",
      image:
        "https://lh3.googleusercontent.com/GewMgUIDU24-ViwS2osK4SF2GUGZkJdyKdXN8fYuAYx0Xu-WPbxfRwcLwH2k9IY",
      name: "Tacos",
      description:
        "Tender hand-shredded brisket & flank beef slowly cooked in garlic spiuces & pasilla chile",
      course: "main",
      price: 6.0,

      quantity: 0,
    },
    Ramen: {
      id: 3,
      url: "https://poly.googleapis.com/downloads/fZ6yUxfPGXI/5UYqS5p8ZRL",
      image:
        "https://lh3.googleusercontent.com/0TgTKfvtpJ0pc0TAmQKGhoQWFvUvjDQA5Yae_DHdC3NHTTxeBpHquMqivRoJO6Cj",
      name: "Ramen",
      description:
        "Shouyu Tonkotsu large size, all the toppings, extra egg and spicy miso pork",
      course: "main",
      price: 5.0,

      quantity: 0,
    },
    HighTea: {
      id: 4,
      url: "https://poly.googleapis.com/downloads/2cX88a40PMz/fqrE8mMo9fi",
      image:
        "https://lh3.googleusercontent.com/CZ6ZmNxWH6XDb98Uy52Wpg0YBWTZQVIvzQcPBCVxeLYFVtDKHjWug5lMet86Jwwa4A",
      name: "HighTea",
      description: "I'm not really sure what high tea is...",
      course: "dessert",
      price: 5.55,
      quantity: 0,
    },
  },
  currentDish: {
    url: "https://poly.googleapis.com/downloads/bWRnM-3pmS5/bbJIjF-59Ut",
  },
  currentOrder: {},
};

function item(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DISH":
      return Object.assign({}, state, { currentDish: action.url });
    case "ADD_QUANTITY":
      const newQuan = state.dishes[action.dish].quantity + 1;
      const newObj = Object.assign({
        dishes: Object.assign({}, state.dishes, {
          [action.dish]: Object.assign({}, state.dishes[action.dish], {
            quantity: newQuan,
          }),
        }),
      });
      const newState = Object.assign({}, state, newObj);
      console.log(newState);
      return newState;

    case "DECREASE_QUANTITY":
      const decQuan = state.dishes[action.dish].quantity - 1;
      const decNewObj = Object.assign({
        dishes: Object.assign({}, state.dishes, {
          [action.dish]: Object.assign({}, state.dishes[action.dish], {
            quantity: decQuan,
          }),
        }),
      });
      const decNewState = Object.assign({}, state, decNewObj);
      return decNewState;

    case "ADD_TO_BASKET":
      const updatedBasket = Object.assign({
        currentOrder: Object.assign({}, state.currentOrder, {
          [action.id]: Object.assign({}, state.currentOrder[action.id], {
            id: action.id,
            quantity: state.currentOrder[action.id]
              ? state.currentOrder[action.id].quantity + action.quantity
              : action.quantity,
            name: action.name,
          }),
        }),
        dishes: dishesZero,
      });
      const updatedBasketState = Object.assign({}, state, updatedBasket);
      return updatedBasketState;
    // case "ADD_TO_QUANTITY":
    // const currentQuantity =
    //   return Object.assign({}, state, {
    //     currentOrder: state.currentOrder.map
    //   });
    default:
      return state;
  }
}

export default item;
