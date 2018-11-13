import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SingleItemMenu from "./SingleItemMenu";

export default class MenuItem extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          flex: 1,
        }}
      >
        {Object.values(this.props.dishes).map(dish => {
          if (this.props.starter == true) {
            if (dish.course == "starter") {
              return (
                <SingleItemMenu
                  currentDish={this.props.currentDish}
                  setModalVisible={this.props.setModalVisible}
                  updateDish={this.props.updateDish}
                  addQuantity={this.props.addQuantity}
                  decreaseQuantity={this.props.decreaseQuantity}
                  key={dish.name}
                  dish={dish}
                />
              );
            }
          } else if (this.props.main == true) {
            if (dish.course == "main") {
              return (
                <SingleItemMenu
                  currentDish={this.props.currentDish}
                  setModalVisible={this.props.setModalVisible}
                  updateDish={this.props.updateDish}
                  addQuantity={this.props.addQuantity}
                  decreaseQuantity={this.props.decreaseQuantity}
                  key={dish.name}
                  dish={dish}
                />
              );
            }
          } else if (this.props.dessert == true) {
            if (dish.course == "dessert") {
              return (
                <SingleItemMenu
                  currentDish={this.props.currentDish}
                  setModalVisible={this.props.setModalVisible}
                  updateDish={this.props.updateDish}
                  addQuantity={this.props.addQuantity}
                  decreaseQuantity={this.props.decreaseQuantity}
                  key={dish.name}
                  dish={dish}
                />
              );
            }
          } else {
            return (
              <SingleItemMenu
                currentDish={this.props.currentDish}
                setModalVisible={this.props.setModalVisible}
                updateDish={this.props.updateDish}
                addQuantity={this.props.addQuantity}
                decreaseQuantity={this.props.decreaseQuantity}
                key={dish.name}
                dish={dish}
              />
            );
          }
        })}
      </View>
    );
  }
}
