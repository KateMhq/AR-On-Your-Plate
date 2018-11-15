import Landing from "../components/Landing";
import { connect } from "react-redux";
import { addUser, addUserNumber, addUserName } from "../actions";

function mapStateToProps(state) {
  return {
    currentOrder: state.item.currentOrder,
    userName: state.landing.userName,
    userNumber: state.landing.userNumber,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (name, number) => dispatch(addUser(name, number)),
    addUserNumber: number => dispatch(addUserNumber(number)),
    addUserName: name => dispatch(addUserName(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
