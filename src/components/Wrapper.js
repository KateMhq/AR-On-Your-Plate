import ARContainer from "../containers/ARContainer";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import MenuItemContainer from "../containers/MenuItemContainer";
import { Actions } from "react-native-router-flux";
class Wrapper extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "green",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <TouchableHighlight
          onPress={() => {
            Actions.basket();
          }}
          style={{
            backgroundColor: "black",
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              color: "white",
            }}
          >
            View basket
          </Text>
        </TouchableHighlight>
        <MenuItemContainer />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <TouchableHighlight
            style={{
              backgroundColor: "black",
              height: 50,
            }}
            onPress={() => {
              this.props.hideModal();
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 50,
              }}
            >
              Hide Modal
            </Text>
          </TouchableHighlight>
          <ARContainer />
        </Modal>
      </ScrollView>
    );
  }
}

export default Wrapper;
