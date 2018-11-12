import Basket from "../components/Basket";
import { connect } from "react-redux";
import { filterFood } from "../actions";

function mapStateToProps(state) {
  return {
    course: state.basket.course,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    filterFood,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
