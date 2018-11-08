import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SingleItemMenu from './SingleItemMenu'




const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default class MenuItem extends React.Component {

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
                {this.props.arrayWithMenuItems.map(singleItemMenu => {
                    return <SingleItemMenu
                        key={singleItemMenu.name}
                        singleItemMenu={singleItemMenu}
                    />;
                })}
            </View>
        );
    }
}
