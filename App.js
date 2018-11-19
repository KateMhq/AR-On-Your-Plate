import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
} from "react-native";
import { AR, Camera, Permissions, Asset, AppLoading, Font } from "expo";
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import GooglePoly from "./api/GooglePoly";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/reducers";
import WrapperContainer from "./src/containers/WrapperContainer";
import Router from "./Router";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    console.disableYellowBox = true;

    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
          onError={this._handleLoadingError}
        />
      );
    } else {
      return (
        <Provider
          store={createStore(rootReducer, applyMiddleware(thunkMiddleware))}
        >
          <Router />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    console.time("Loading assets");
    return Asset.loadAsync([
      require("./assets/lobster.jpg"),
      require("./assets/splash.png"),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    console.timeEnd("Loading assets");
    this.setState({ isLoadingComplete: true });
  };
}
