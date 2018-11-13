import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";

import {
  setModalVisible,
  updateDish,
  addQuantity,
  decreaseQuantity,
  addToBasket,
  addToQuantity,
} from "../actions";

function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentDish: state.item.currentDish,
    currentOrder: state.item.currentOrder,
    starter: state.wrapper.starter,
    main: state.wrapper.main,
    dessert: state.wrapper.dessert,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisible: () => dispatch(setModalVisible()),

    updateDish: url => dispatch(updateDish(url)),
    addQuantity: (quantity, dish) => dispatch(addQuantity(quantity, dish)),
    decreaseQuantity: (quantity, dish) =>
      dispatch(decreaseQuantity(quantity, dish)),
    addToBasket: (id, quantity, name) =>
      dispatch(addToBasket(id, quantity, name)),
    addToQuantity: (id, quantity) => dispatch(addToQuantity(id, quantity)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
