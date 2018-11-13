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
import { Button, Icon, CheckBox } from "react-native-elements";

class Wrapper extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#F9FFEB",
          flexDirection: "column",
          flex: 1,
        }}
      >

          <Button
            raised
            icon={{name: 'shopping-cart'}}
            title='(1)' 
            onPress={() => {
              Actions.basket();
            }}
            />
        <Text style={{ fontSize: 30 }}>Filter By: </Text>

        <View style={{ flexDirection: "row" }}>
          <CheckBox
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#7DCE82" }}
            center
            title="Starter"
            checked={this.props.starter}
            onPress={() => this.props.filterStarter()}
          />
          <CheckBox
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#FF8360" }}
            center
            title="Main"
            checked={this.props.main}
            onPress={() => this.props.filterMain()}
          />
          <CheckBox
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#E8E288" }}
            center
            title="Dessert"
            checked={this.props.dessert}
            onPress={() => this.props.filterDessert()}
          />
        </View>
        <ScrollView style={{ width: "98%", marginLeft: 3.5 }}>
          <MenuItemContainer />
        </ScrollView>

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
        <TouchableHighlight
          onPress={() => {
            Actions.basket();
          }}
          style={{
            height: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
            }}
          >
            View basket
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Wrapper;
