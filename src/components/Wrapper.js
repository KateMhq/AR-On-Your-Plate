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
import { CheckBox } from "react-native-elements";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Body,
  Left,
  Right,
  Icon,
  Badge
} from "native-base";
import { filterStarter } from "../actions";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true
    });
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
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
          icon={{ name: "shopping-cart" }}
          title={this.props.basketQuantity}
          onPress={() => {
            Actions.basket();
          }}
        />

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
        <Content/>

        <Footer>
          <FooterTab>
            <Button vertical active={this.state.tab1} onPress={() => {
              this.toggleTab1()
            }}>
              <Icon active={this.state.tab1}/>
              <Icon type='FontAwesome' name='home'/>
              <Text>Home</Text>
            </Button>
            <Button badge vertical  active={this.state.tab2} onPress={() => {this.toggleTab2(), Actions.basket()}}>
            <Badge>
              <Text>
                {this.props.basketQuantity}
              </Text>
            </Badge>
              <Icon active={this.state.tab2} />
              <Icon type='FontAwesome' name='shopping-cart'/>
              <Text>Basket</Text>
            </Button>
          </FooterTab>
        </Footer>

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
      </View>
    );
  }
}

export default Wrapper;
