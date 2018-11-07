//Google Poly API
//AIzaSyDUfRuGIzD5AjPV_Nx0ixO4LWP9hwNVqF8


import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo, { AR, Camera, Permissions, Asset } from "expo";
// Let's alias ExpoTHREE.AR as ThreeAR so it doesn't collide with Expo.AR.
import ExpoTHREE, { THREE } from "expo-three";
import ExpoGraphics from "expo-graphics";
import GooglePoly from './api/GooglePoly';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {


  state = {
    searchModalVisible: false,

    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    turkeyObj:'',
    turkeyMtl:''
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
    THREE.suppressExpoWarnings()
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
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
        </View>
      );
    }
  };

  async turkeyObj(){
    return fetch('https://poly.googleapis.com/downloads/6_2gGwLWWHN/2fjlcvDtM61/model.obj')
    .then(data => data.text())
    .then(obj => this.setState({turkeyObj:obj}))
  }

  async turkeyMtl(){
    return fetch('https://poly.googleapis.com/downloads/6_2gGwLWWHN/2fjlcvDtM61/materials.mtl')
    .then(data => data.text())
    .then(mtl => this.setState({turkeyMtl:mtl}))
  }

  async preloadAssetsAsync() {
    await Promise.all([
      this.turkeyObj(),
      this.turkeyMtl(),
    ])
    // .map((module) => Expo.Asset.fromModule(module).downloadAsync()));

  }

  onContextCreate = async (props) => {
    await this.preloadAssetsAsync()
    const { gl, scale, width, height, arSession } = props;
    // Initialize renderer…
    this.renderer = new ExpoTHREE.Renderer(props);

    // Initialize scene…
    this.scene = new THREE.Scene();
    this.scene.background = new ExpoTHREE.AR.BackgroundTexture(
      this.renderer
    );

    // Initialize camera…
    this.camera = new ExpoTHREE.AR.Camera(
      width / scale,
      height / scale,
      0.01,
      1000
    );

    // const model = {
    //   'turkey.obj': require(`./turkey`),
    //   'turkey.mtl': turkeyMtl,
    // };

       const loader = new THREE.OBJLoader();
       const MTLLoader = new THREE.MTLLoader();
       const materials=MTLLoader.parse(this.state.turkeyMtl);
       loader.setMaterials(materials)
       const model = loader.parse(this.state.turkeyObj);


      //  const materialLoader = new THREE.MTLLoader();
      //  const modelMaterial = materialLoader.load(this.state.turkeyMtl, function(materials){
      //    const loader = new THREE.OBJLoader();
      //     materials.preload();
       //
      //    loader.setMaterials(materials);
      //    loader.load(this.state.turkeyObj, function(object){
      //      object.position.y -=60;
      //      this.scene.add(object)
      //    })
       //
      //  });

    /// Load model!


    /// Update size and position
    ExpoTHREE.utils.scaleLongestSideToSize(model, 0.1);
    ExpoTHREE.utils.alignMesh(model, { y: 1 });

    this.scene.add(model);


    // Initialize lighting...
       const ambientLight = new THREE.AmbientLight(0xaaaaaa);

       this.scene.add(ambientLight);




  };
  // const constrols = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;
  // controls.campingFactor = 0.25;
  // controls.enableZoom = true;

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
