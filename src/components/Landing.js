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
import { Actions } from "react-native-router-flux";
function Landing() {
  return (
    <TouchableHighlight
      onPress={() => {
        Actions.main();
      }}
    >
      <Text>Click here to view our menu</Text>
    </TouchableHighlight>
  );
}
export default Landing;
