import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AR, Permissions } from "expo";
import ExpoTHREE, { AR as ThreeAR, THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import TouchableView from "./TouchableView";

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
  }

  async componentDidMount() {
    const { updateCameraPermission } = this.props;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
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
      return (
        <TouchableView
          style={{ flex: 1 }}
          shouldCancelWhenOutside={false}
          onTouchesBegan={this.onTouchesBegan}
        >
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
        </TouchableView>
      );
    }
  }

  async turkeyObj() {
    const { updateTurkeyObj, currentDish } = this.props;

    return fetch(`${currentDish.obj}`)
      .then(data => data.text())
      .then(obj => updateTurkeyObj(obj));
  }

  async turkeyMtl() {
    const { updateTurkeyMtl, currentDish } = this.props;
    return fetch(`${currentDish.mtl}`)
      .then(data => data.text())
      .then(mtl => updateTurkeyMtl(mtl));
  }

  async preloadAssetsAsync() {
    await Promise.all([this.turkeyObj(), this.turkeyMtl()]);
  }

  onContextCreate = async props => {
    const { gl, scale, width, height, arSession } = props;

    this.renderer = new ExpoTHREE.Renderer(props);

    this.scene = new THREE.Scene();
    this.scene.background = new ExpoTHREE.AR.BackgroundTexture(this.renderer);

    this.camera = new ExpoTHREE.AR.Camera(
      width / scale,
      height / scale,
      0.01,
      1000
    );
    await this.preloadAssetsAsync();
    const ambientLight = new THREE.AmbientLight(0xaaaaaa);
    this.scene.add(ambientLight);
  };

  onResize = ({ x, y, scale, width, height }) => {
    if (!this.renderer) {
      return;
    }
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);
  };

  onRender = delta => {
    if (this.model) {
      this.model.rotation.y += 0.01;
      this.model.updateMatrix();
    }
    this.renderer.render(this.scene, this.camera);
  };

  onTouchesBegan = async ({ locationX: x, locationY: y }) => {
    if (!this.renderer) {
      return;
    }

    const size = this.renderer.getSize();

    const { hitTest } = await AR.performHitTest(
      {
        x: x / size.width,
        y: y / size.height,
      },
      AR.HitTestResultTypes.HorizontalPlane
    );

    for (let hit of hitTest) {
      const { worldTransform } = hit;
      if (this.model) {
        this.scene.remove(this.model);
      }

      const loader = new THREE.OBJLoader();
      const MTLLoader = new THREE.MTLLoader();
      const materials = MTLLoader.parse(this.props.turkeyMtl);
      loader.setMaterials(materials);
      this.model = loader.parse(this.props.turkeyObj);

      ExpoTHREE.utils.scaleLongestSideToSize(this.model, 0.3);
      ExpoTHREE.utils.alignMesh(this.model, { y: 1 });

      this.scene.add(this.model);

      this.model.matrixAutoUpdate = false;

      const matrix = new THREE.Matrix4();
      matrix.fromArray(worldTransform);

      this.model.applyMatrix(matrix);
      this.model.updateMatrix();
    }
  };
}
