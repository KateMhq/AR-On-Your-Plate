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
      width: "80%",
      alignSelf: "center",
      color: "white",
      borderColor: "white",
    },
    inputText: {
      flex: 1,
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 5,
      marginBottom: 5,
      fontSize: 25,
      paddingLeft: 10,
      borderColor: "white",
      borderWidth: 1,
      color: "white",
      borderRadius: 15,
    },
  });
  const TypeSection = View;

  return (
    <ImageBackground
      source={require("../../assets/lobster.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <BackgroundView>
        <TextHeader
          style={{ alignSelf: "center", marginBottom: 30, marginTop: 30 }}
        >
          AR On Your Plate
        </TextHeader>

        <View style={inputStyle.input}>
          <Icon
            style={{ padding: 10, color: "white" }}
            type="FontAwesome"
            name="user"
          />
          <TextInput
            style={inputStyle.inputText}
            placeholderTextColor="white"
            placeholder="Name.."
            onChangeText={text => {
              props.addUserName(text);
            }}
            value={props.userName}
            blurOnSubmit={false}
            autoCorrect={true}
            autoCapitalize="words"
            returnKeyType="done"
            textContentType="name"
            // onChangeText={(searchString) => {this.setState({searchString})}}
          />
        </View>

        <View style={inputStyle.input}>
          <Icon
            style={{ padding: 10, color: "white" }}
            type="FontAwesome"
            name="phone"
          />
          <TextInput
            style={inputStyle.inputText}
            placeholderTextColor="white"
            placeholder="Mobile Number.."
            onChangeText={text => {
              props.addUserNumber(text);
            }}
            keyboardType="phone-pad"
            value={props.userNumber}
            dataDetectorTypes="phoneNumber"
            maxLength={13}
          />
        </View>
        <TextDescription>Start your 3D order experience</TextDescription>
        <Button
          icon={{
            name: "home",
            size: 25,
            color: "white",
          }}
          backgroundColor="#ED6A5A"
          title="Enter"
          // fontSize={23}
          // color="white"
          // fontWeight="550"
          // borderRadius={15}
          onPress={() => {
            props.addUser(props.userName, props.userNumber), Actions.main();
          }}
        />
      </BackgroundView>
    </ImageBackground>
  );
}

export default Landing;
