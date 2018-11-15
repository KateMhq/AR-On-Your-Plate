import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";

import { AppLoading, Asset, Font } from "expo";
import { Icon } from "native-base";
import { Button } from "react-native-elements";

function Landing(props) {
  const BackgroundView = View;

  const TextHeader = styled(Text)`
    color: white;
    font-weight: 500;
    font-size: 40px;
  
    margin: 0;
  `;

  const TextDescription = styled(Text)`
    font-size: 33px;
    color: white;
    font-weight: 400;
    text-align: center;
   
  `;

  const inputStyle = StyleSheet.create({
    input: {
      flexDirection: "row",
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const TypeSection = View;

  return (
    <ImageBackground
      source={require("../../assets/lobster.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <BackgroundView>
        <TextHeader>AR On Your Plate</TextHeader>
       

        <TypeSection style={inputStyle.input}>
          <Icon style={{ padding: 10 }} type="FontAwesome" name="user" />
          <TextInput
            style={{
              flex: 1,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 0,
              color: "black",
            }}
            placeholder="Name.."
            onChangeText={text => {
              props.addUserName(text);
            }}
            value={props.userName}
            blurOnSubmit={false}
            autoCorrect={true}
            // onChangeText={(searchString) => {this.setState({searchString})}}
          />
        </TypeSection>

        <TypeSection style={inputStyle.input}>
          <Icon style={{ padding: 10 }} type="FontAwesome" name="phone" />
          <TextInput
            style={{
              flex: 1,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 0,
            }}
            placeholder="Mobile Number.."
            onChangeText={text => {
              props.addUserNumber(text);
            }}
            keyboardType="phone-pad"
            value={props.userNumber}
            // onChangeText={(searchString) => {this.setState({})}}
          />
        </TypeSection>
        <TextDescription>Start your 3D order experience</TextDescription>
        <Button
          icon={{
            name: "home",
            size: 25,
            color: "white",
          }}
          backgroundColor="#ED6A5A"
          title="Enter"
          fontSize={23}
          color="white"
          fontWeight="550"
          borderRadius={15}
          onPress={() => {
            props.addUser(props.userName, props.userNumber), Actions.main();
          }}
        />
      </BackgroundView>
    </ImageBackground>
  );
}

export default Landing;
