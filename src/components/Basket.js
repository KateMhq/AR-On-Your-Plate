import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";

export default class Basket extends React.Component {
  render() {
    let orderTotal = 0;

    const Title = styled(Text)`
      font-size: 30px;
      text-align: center;
      padding: 10px;
    `;
    return (
      <View style={{}}>
        <Title style={{ fontSize: 30 }}>Your Order</Title>
        <ScrollView>
          {Object.values(this.props.currentOrder).map(dish => {
            console.log(dish.price);
            let dishPrice = Number(dish.price);
            let dishFullPrice = dish.quantity * dishPrice;
            orderTotal += dishFullPrice;
            return (
              <Text>
                {dish.name} x {dish.quantity} = £{dishFullPrice.toFixed(2)}
              </Text>
            );
          })}
        </ScrollView>
        <Title style={{ fontSize: 30 }}>
          Order total: £{orderTotal.toFixed(2)}
        </Title>
      </View>
    );
  }
}
