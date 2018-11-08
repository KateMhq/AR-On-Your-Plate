import ARContainer from "../containers/ARContainer";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
  ScrollView
} from "react-native";
import MenuItemContainer from '../containers/MenuItemContainer'

class Wrapper extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {

    return (
      <ScrollView style={{
        backgroundColor: 'green',
        flexDirection: 'column',
        flex: 1
      }}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <MenuItemContainer />
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <ARContainer />
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </Modal>
      </ScrollView>
    );
  }
}

export default Wrapper;
