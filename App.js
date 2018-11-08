import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo, { AR, Camera, Permissions, Asset } from "expo";
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import GooglePoly from "./api/GooglePoly";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers";
import ARContainer from "./src/containers/ARContainer";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayWithMenuItems: [
        {
          name: "chicken",
          description: "Taste good",
          img: 'https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg',
          img3D: 'here url address, can be local one',
        },
        {
          name: "burger",
          description: "Taste not good",
          img: 'https://www.daringgourmet.com/wp-content/uploads/2016/11/Ryan-Scott-Portobello-Burger.jpg',
          img3D: 'here url address, can be local one',
        },
    ]
    };
  }
  

  render() {

      return (
        <Provider
          store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}
        >
          <View style={styles.container}>
            <MenuItems menuItems={this.state.arrayWithMenuItems}/>
            <ARContainer/>
          </View>
        </Provider>
      );
    }
  }
