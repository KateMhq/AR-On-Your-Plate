import ARContainer from "../containers/ARContainer";
import React from "react";
import { Text, View, Modal, ScrollView } from "react-native";
import MenuItemContainer from "../containers/MenuItemContainer";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";
import { CheckBox } from "react-native-elements";
import { Button, Footer, FooterTab, Icon, Badge } from "native-base";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: false,
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
    });
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1,
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2,
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3,
    });
  }

  render() {
    const Buttontext = styled(Text)`
      margin-left: 30%;
    `;

    const buttons = ["Starters", "Mains", "Desserts"];
    return (
      <View
        style={{
          backgroundColor: "#fffffff",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            style={{ width: "100%", padding: 0, margin: 0 }}
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#fffffff" }}
            center
            title="Starter"
            checked={this.props.starter}
            onPress={() => this.props.filterStarter()}
          />
          <CheckBox
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#fff" }}
            center
            title="Main"
            checked={this.props.main}
            onPress={() => this.props.filterMain()}
          />
          <CheckBox
            checkedColor="#00FFF5"
            containerStyle={{ backgroundColor: "#fffffff" }}
            center
            title="Dessert"
            checked={this.props.dessert}
            onPress={() => this.props.filterDessert()}
          />
        </View>

        <ScrollView>
          <MenuItemContainer />
        </ScrollView>

        <Footer>
          <FooterTab>
            <Button
              vertical
              active={this.state.tab1}
              onPress={() => {
                this.toggleTab1(), Actions.welcome();
              }}
            >
              <Icon active={this.state.tab1} />
              <Icon type="FontAwesome" name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              badge
              vertical
              active={this.state.tab2}
              onPress={() => {
                this.toggleTab2(), Actions.basket();
              }}
            >
              <Badge>
                <Text>{this.props.basketQuantity}</Text>
              </Badge>
              <Icon active={this.state.tab2} />
              <Icon type="FontAwesome" name="shopping-cart" />
              <Text>Basket</Text>
            </Button>
          </FooterTab>
        </Footer>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <Footer>
            <FooterTab>
              <Button
                vertical
                active={this.state.tab1}
                onPress={() => {
                  this.props.hideModal();
                }}
              >
                <Icon active={this.state.tab1} />
                <Icon type="FontAwesome" name="home" />
                <Text>Home</Text>
              </Button>
            </FooterTab>
          </Footer>

          <ARContainer />
        </Modal>
      </View>
    );
  }
}

export default Wrapper;
