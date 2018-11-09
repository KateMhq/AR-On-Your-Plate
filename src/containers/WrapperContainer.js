import Wrapper from "../components/Wrapper";
import { connect } from "react-redux";
import { updateDish , hideModal} from "../actions";

function mapStateToProps(state) {
  console.log(state.wrapper);
  return {

    modalVisible: state.wrapper.modalVisible
  };
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: ()=> dispatch(hideModal()),
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps

)(Wrapper);
