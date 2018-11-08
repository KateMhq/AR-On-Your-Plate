import MenuItem from "../components/MenuItem";
import { connect } from "react-redux";
// import {
//   updateCameraPermission,
//   updateTurkeyObj,
//   updateTurkeyMtl,
// } from "../actions";

function mapStateToProps(state) {

  return {
    dishes: state.item.dishes,
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateCameraPermission: () => dispatch(updateCameraPermission()),
//     updateTurkeyObj: obj => dispatch(updateTurkeyObj(obj)),
//     updateTurkeyMtl: obj => dispatch(updateTurkeyMtl(obj)),
//   };
// };

export default connect(
  mapStateToProps
)(MenuItem);
