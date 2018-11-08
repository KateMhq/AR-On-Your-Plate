import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AR, Camera, Permissions, Asset } from "expo";
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import GooglePoly from "../../api/GooglePoly";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default class ARDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  async componentDidMount() {
    const { updateCameraPermission } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log(status);
    updateCameraPermission();
    THREE.suppressExpoWarnings();
  }

  render() {
    const {
      searchModalVisible,
      hasCameraPermission,
      type,
      turkeyObj,
      turkeyMtl,
      updateCameraPermission,
      updateTurkeyObj,
      updateTurkeyMtl,
      updateDish,
    } = this.props;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      console.log("Current dish", this.props.currentDish);
      return (
        <View style={{ flex: 1 }}>
          <ExpoGraphics.View
            style={{ flex: 1 }}
            onContextCreate={this.onContextCreate}
            onRender={this.onRender}
            onResize={this.onResize}
            isArEnabled
            arTrackingConfiguration={AR.TrackingConfiguration.World}
            isArRunningStateEnabled
            isArCameraStateEnabled
          />
          {/* <ScrollView horizontal={true} style={{ height: 30 }}>
            <Text>Chicken</Text>
            <Text>Sushi</Text>
            <Text>Salmon</Text>
          </ScrollView> */}
        </View>
      );
    }
  }

  async turkeyObj() {
    const { updateTurkeyObj, currentDish } = this.props;

    return fetch(`${currentDish}/model.obj`)
      .then(data => data.text())
      .then(obj => updateTurkeyObj(obj));
  }

  async turkeyMtl() {
    const { updateTurkeyMtl, currentDish } = this.props;
    return fetch(`${currentDish}/materials.mtl`)
      .then(data => data.text())
      .then(mtl => updateTurkeyMtl(mtl));
  }

  async preloadAssetsAsync() {
    await Promise.all([this.turkeyObj(), this.turkeyMtl()]);
    // .map((module) => Expo.Asset.fromModule(module).downloadAsync()));
  }

  onContextCreate = async props => {
    await this.preloadAssetsAsync();
    const { gl, scale, width, height, arSession } = props;
    // Initialize renderer…
    this.renderer = new ExpoTHREE.Renderer(props);

    // Initialize scene…
    this.scene = new THREE.Scene();
    this.scene.background = new ExpoTHREE.AR.BackgroundTexture(this.renderer);

    // Initialize camera…
    this.camera = new ExpoTHREE.AR.Camera(
      width / scale,
      height / scale,
      0.01,
      1000
    );

    const loader = new THREE.OBJLoader();
    const MTLLoader = new THREE.MTLLoader();
    const materials = MTLLoader.parse(this.props.turkeyMtl);
    loader.setMaterials(materials);
    const model = loader.parse(this.props.turkeyObj);

    ExpoTHREE.utils.scaleLongestSideToSize(model, 0.1);
    ExpoTHREE.utils.alignMesh(model, { y: 1 });

    this.scene.add(model);

    const ambientLight = new THREE.AmbientLight(0xaaaaaa);

    this.scene.add(ambientLight);
  };

  onResize = ({ x, y, scale, width, height }) => {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);
  };

  onRender = delta => {
    this.renderer.render(this.scene, this.camera);
  };
}
