import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";
import {
  setModalVisible,
  updateDish
} from "../actions";

function mapStateToProps(state) {

  return {
    dishes: state.item.dishes,
    currentDish: state.item.currentDish
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisible: () => dispatch(setModalVisible()),
    updateDish: (url) => dispatch(updateDish(url))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(MenuItem);
