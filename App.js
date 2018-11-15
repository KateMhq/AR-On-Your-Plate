import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
} from "react-native";
import { AR, Camera, Permissions, Asset } from "expo";
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import GooglePoly from "./api/GooglePoly";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers";
import WrapperContainer from "./src/containers/WrapperContainer";
import Router from "./Router";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider
        store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}
      >
        {/* <View style={styles.container}> */}
        {/* <MenuItems menuItems={this.state.arrayWithMenuItems}/> */}
        <Router />
        {/* </View> */}
      </Provider>
    );
  }
}
