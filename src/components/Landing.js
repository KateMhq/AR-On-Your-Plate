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
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import styled from "styled-components/native";
import { Icon } from "native-base";
import { Button} from "react-native-elements";

function Landing() {
  
  const BackgroundView = styled(View)`
    height: 100%;
    margin: 0 5px 5px 5px;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    color: white;
    justify-content: space-around;
    
  `;
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

  const TypeSection = styled(View)`
    width: 60%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 4px white solid;
    border-radius: 25px;
    
  `;
  return (
    <ImageBackground
      source={{
        uri:
          "https://content-eu.drive.amazonaws.com/v2/download/presigned/yxm32nKb4AbO4FJyYXnO2cXGPfYjKYWGulUZMCS3B-oeJxFPc?download=true"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <BackgroundView>
 
        <TextHeader>AR On Your Plate</TextHeader>
       

     <TypeSection>
    <Icon style={{padding: 10}} type='FontAwesome' name='user'/>
    <TextInput style={{flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    }}
        placeholder="Name.."
        // onChangeText={(searchString) => {this.setState({searchString})}}
    />
</TypeSection>


   <TypeSection>
    <Icon style={{padding: 10}} type='FontAwesome' name='phone'/>
    <TextInput style={{flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    }}
        placeholder="Mobile Number.."
        // onChangeText={(searchString) => {this.setState({})}}
    />
</TypeSection>

  <TextDescription>Start your 3D order experience</TextDescription>

        <Button
          icon={{
            name: "home",
            size: 25,
            color: "white"
          }}
          backgroundColor="#ED6A5A"
          title="Enter"
          fontSize="23"
          color="white"
          fontWeight="550"
          borderRadius = '15'
          onPress={() => {
            Actions.main();
          }}
        />
      </BackgroundView>
    </ImageBackground>
  );
}

export default Landing;

