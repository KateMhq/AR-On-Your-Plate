import Basket from "../components/Basket";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
