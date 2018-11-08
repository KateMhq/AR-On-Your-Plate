import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        flex: 0.3,
    },
    description: {
        flex: 0.7,
    }
});

export default class SingleItemMenu extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }
    //   async componentDidMount() {

    //     const { updateCameraPermission } = this.props;
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //     console.log(status);
    //     updateCameraPermission();
    //     THREE.suppressExpoWarnings();
    //   }

    render() {

        // const {
        //   searchModalVisible,
        //   hasCameraPermission,
        //   type,
        //   turkeyObj,
        //   turkeyMtl,
        //   updateCameraPermission,
        //   updateTurkeyObj,
        //   updateTurkeyMtl,
        // } = this.props;


        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.singleItemMenu.img }}   
                />
                <View style={styles.description}>
                    <Text>{this.props.singleItemMenu.name}</Text>
                    <Text>{this.props.singleItemMenu.description}</Text>
                </View>

            </View>
        );
    }
}
