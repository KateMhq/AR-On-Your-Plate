import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";
import { setModalVisible, updateDish } from "../actions";

function mapStateToProps(state) {
  return {
    dishes: state.item.dishes,
    currentDish: state.item.currentDish,
    starter: state.wrapper.starter,
    main: state.wrapper.main,
    dessert: state.wrapper.dessert,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisible: () => dispatch(setModalVisible()),
    updateDish: (obj, mtl) => dispatch(updateDish(obj, mtl)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
