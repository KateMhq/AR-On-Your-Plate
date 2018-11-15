import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class Basket extends React.Component {
  render() {
    let orderTotal = 0;
    const discount = 30;
    const deliveryCharge = 2;
    const Title = styled(Text)`
      font-size: 30px;
      text-align: center;
      padding: 10px;
    `;
    return (
      <View style={{}}>
        <Title style={{ fontSize: 30 }}>Your Order</Title>
        <ScrollView>
          {Object.values(this.props.currentOrder.order).map(dish => {
            let dishPrice = Number(dish.price);
            let dishFullPrice = dish.quantity * dishPrice;
            orderTotal += dishFullPrice;
            if (orderTotal > discount) {
              orderTotal = (orderTotal / 10) * 9;
              return (
                <Text key={dish.name}>
                  {dish.name} x {dish.quantity} = £{dishFullPrice.toFixed(2)}
                </Text>
              );
            } else {
              orderTotal = orderTotal + deliveryCharge;
              let spendMore = discount - orderTotal;
              return (
                <View>
                  <Text>
                    {dish.name} x {dish.quantity} = £{dishFullPrice.toFixed(2)}
                  </Text>
                  <Text>
                    Spend £{spendMore.toFixed(2)} more to get 10% off and free
                    delivery!
                  </Text>
                </View>
              );
            }
          })}
        </ScrollView>

        <Title style={{ fontSize: 30 }}>
          Order total: £{orderTotal.toFixed(2)}
        </Title>
        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Empty Basket"
          onPress={() => {
            return this.props.emptyBasket();
          }}
          buttonStyle={{
            backgroundColor: "red",
          }}
        />

        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Complete Order"
          onPress={() => {
            return (
              console.log(this.props.currentOrder),
              this.props.postOrder(this.props.currentOrder),
              this.props.emptyBasket(),
              Actions.main()
            );
          }}
        />
      </View>
    );
  }
}
