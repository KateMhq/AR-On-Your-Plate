import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Image,
} from "react-native";
import { AR, Camera, Permissions, Asset,AppLoading,  Font  } from "expo";
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


  // async _loadAssetsAsync() {
  //   const images = require('./assets/lobster.jpg')
  //   const imageAssets = ([images]) => {
  //     return images.map(image => {
  //       if (typeof image == 'string'){
  //         return Image.prefetch(image)
  //       } else {
  //         return Asset.fromModule(image).downloadAsync();
  //       }
  //     })
  //   }
  //
  //   await Promise.all([...imageAssets]);
  // }


  render() {
    console.log('Render', this.state)
    console.disableYellowBox = true;

    if (!this.state.isLoadingComplete){
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
            {/* <View style={styles.container}> */}
            {/* <MenuItems menuItems={this.state.arrayWithMenuItems}/> */}
            <Router />
            {/* </View> */}
          </Provider>
        );
    }
  }

  _loadResourcesAsync = async () => {
    console.time('Loading assets')
    return Asset.loadAsync([
      require('./assets/lobster.jpg'),
      require('./assets/splash.png')
    ])
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    console.timeEnd('Loading assets')
    this.setState({ isLoadingComplete: true });
  };
}
