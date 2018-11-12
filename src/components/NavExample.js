import React from "react";
import { StyleSheet, Text, View, ScrollView, Picker } from "react-native";

class NavExample extends React.Component {
  constructor() {
    super();
    this.state = {
      picked: "",
    };
  }
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Picker
          selectedValue={this.state.picked}
          onValueChange={value => {
            this.setState({
              picked: value,
            });
          }}
        >
          <Picker.Item label="Mr" value="Mr" />
          <Picker.Item label="Mrs" />
          <Picker.Item label="Ms" />
          <Picker.Item label="Lord" />
          <Picker.Item label="Dame" value="Dame" />
        </Picker>
        <ScrollView style={{ height: 100 }}>
          <Text>First Name: ...</Text>
          <Text>Last Name: ...</Text>
          <Text>First Line of Address: ...</Text>
          <Text>Second Line of Address: ...</Text>
          <Text>Postcode: ...</Text>
          <Text>County: ...</Text>
        </ScrollView>
      </View>
    );
  }
}

export default NavExample;
