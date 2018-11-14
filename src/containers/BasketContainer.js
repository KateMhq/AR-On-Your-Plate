import Basket from "../components/Basket";
import { connect } from "react-redux";
import { emptyBasket } from "../actions";
function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentOrder: state.item.currentOrder,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    emptyBasket: () => dispatch(emptyBasket()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
