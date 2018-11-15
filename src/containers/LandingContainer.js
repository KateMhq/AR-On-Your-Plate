import Landing from "../components/Landing";
import { connect } from "react-redux";
import { addUser } from "../actions";

function mapStateToProps(state) {
  return {
    currentOrder: state.item.currentOrder,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (name, number) => dispatch(addUser(name, number)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
