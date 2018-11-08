import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SingleItemMenu from './SingleItemMenu';



export default class MenuItem extends React.Component {

    render() {
        return (
            <View style={{
                backgroundColor: 'red',
                flexDirection: 'column',
                justifyContent:'space-around',
                height: '100%',
                flex:1
            }}>
                {Object.values(this.props.dishes).map(dish => {
                    return <SingleItemMenu
                        key={dish.name}
                        dish={dish}
                    />;
                })}
            </View>
        );
    }
}
