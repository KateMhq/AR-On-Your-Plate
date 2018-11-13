import Basket from "../components/Basket";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentOrder: state.item.currentOrder,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
