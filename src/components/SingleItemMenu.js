import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        flex: 0.5,
        height: 50,
        width: 100
    },
    description: {
        flex: 0.5,
        padding:20,
        justifyContent:"space-around"
    }
});

export default class SingleItemMenu extends React.Component {

    render() {
        return (
            <TouchableHighlight style={styles.container} onPress={event => {
              this.props.updateDish(
                this.props.dish.url
              );
              this.props.setModalVisible();
            }}>
            <View style={{
              flex: 1
            }}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.dish.image }}
                />
                <View style={styles.description}>
                    <Text>{this.props.dish.name}</Text>
                    <Text>{this.props.dish.description}</Text>
                </View>
              </View>
            </TouchableHighlight>
        );
    }
}
