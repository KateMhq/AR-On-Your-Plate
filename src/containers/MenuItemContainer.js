import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";

import {
  setModalVisible,
  updateDish,
  addQuantity,
  decreaseQuantity,
  addToBasket,
  addToQuantity,
  updateInitialDishesState
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
    updateInitialDishesState: () => dispatch(updateInitialDishesState()),
    setModalVisible: () => dispatch(setModalVisible()),

      updateDish: (obj, mtl) => dispatch(updateDish(obj, mtl)),
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
