import Wrapper from "../components/Wrapper";
import { connect } from "react-redux";
import { updateDish } from "../actions";

function mapStateToProps(state) {
  console.log(state.wrapper);
  return {
    currentDish: state.wrapper.currentDish,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateDish: url => dispatch(updateDish(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
