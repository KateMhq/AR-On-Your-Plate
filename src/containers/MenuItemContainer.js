import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";
import {
  setModalVisible,
  updateDish,
  addQuantity,
  decreaseQuantity
} from "../actions";

function mapStateToProps(state) {

  return {
    dishes: state.item.dishes,
    currentDish: state.item.currentDish,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisible: () => dispatch(setModalVisible()),
    updateDish: (url) => dispatch(updateDish(url)),
    addQuantity: (quantity,dish) => dispatch(addQuantity(quantity,dish)),
    decreaseQuantity: (quantity,dish) => dispatch(decreaseQuantity(quantity,dish))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(MenuItem);
