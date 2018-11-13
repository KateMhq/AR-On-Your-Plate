import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";

export default class Basket extends React.Component {
  render() {
    const Title = styled(Text)`
      font-size: 30px;
      text-align: center;
      padding: 10px;
    `;
    return (
      <View style={{}}>
        <Title style={{ fontSize: 30 }}>Your Order</Title>
        <ScrollView>
          {Object.values(this.props.dishes).map(dish => {
            dishPrice = dish.quantity * dish.price;
            if (dish.quantity > 0) {
              return (
                <Text>
                  {dish.name} x {dish.quantity} = £{dishPrice.toFixed(2)}
                </Text>
              );
            }
          })}
        </ScrollView>
        <Title style={{ fontSize: 30 }}>Delivery charge: £5.00</Title>
      </View>
    );
  }
}
