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
  const burgerPic = {
    uri:
      "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg",
  };
  return (
    <TouchableHighlight
      onPress={() => {
        Actions.main();
      }}
    >
      <View>
        <Text>Click here to view our menu</Text>
        <Image source={burgerPic} style={{ height: 200, width: 200 }} />
      </View>
    </TouchableHighlight>
  );
}
export default Landing;
