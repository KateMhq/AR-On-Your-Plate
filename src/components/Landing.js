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
import styled from "styled-components/native";
function Landing() {
  const burgerPic = {
    uri:
      "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg",
  };
  const MainView = styled(View)`
    height: 100%;
    margin: 0 5px 5px 5px;
    background-color: #eee6dc;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    justify-content: space-evenly;
  `;
  const TextHeader = styled(View)`
    color: #464646;
    font-weight: 600;
    font-size: 30px;
  `;

  const TextDescription = styled(View)``;

  return (
    <MainView>
      <TextHeader>
        <Text>About Us</Text>
      </TextHeader>
      <TextDescription>
        <Text>Click here to view our menu</Text>
      </TextDescription>
      <TouchableHighlight
        onPress={() => {
          Actions.main();
        }}
      >
        <Image source={burgerPic} style={{ height: 200, width: 200 }} />
      </TouchableHighlight>
      <TextDescription />
    </MainView>
  );
}
export default Landing;
