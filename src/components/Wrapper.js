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


  render() {

    return (
      <ScrollView style={{
        backgroundColor: 'green',
        flexDirection: 'column',
        flex: 1
      }}>

        <View
        >
          <MenuItemContainer />
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <ARContainer />
          <TouchableHighlight
            onPress={() => {
              this.props.hideModal();
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
