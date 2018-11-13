import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";

import {
  setModalVisible,
  updateDish,
  addQuantity,
  decreaseQuantity,
  updateInitialDishesState
} from "../actions";


function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentDish: state.item.currentDish,
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
    addQuantity: (quantity,dish) => dispatch(addQuantity(quantity,dish)),
    decreaseQuantity: (quantity,dish) => dispatch(decreaseQuantity(quantity,dish))


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
