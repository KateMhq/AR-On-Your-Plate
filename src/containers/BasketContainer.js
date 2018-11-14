import Basket from "../components/Basket";
import { connect } from "react-redux";
import {postOrder} from '../actions';

function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentOrder: state.item.currentOrder,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postOrder: currentOrder => dispatch(postOrder(currentOrder))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
