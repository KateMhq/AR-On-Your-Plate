import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class Basket extends React.Component {
  render() {
    let orderTotal = 0;
    const discount = 30;
    let deliveryCharge = 2;
    let totalPrice = deliveryCharge;
    const Title = styled(Text)`
      font-size: 30px;
      text-align: center;
      padding: 10px;
    `;

    return (
      <View style={{}}>
        <Title style={{ fontSize: 30 }}>Your Order</Title>
        <ScrollView style={{ paddingLeft: 5, paddingRight: 5 }}>
          {Object.values(this.props.currentOrder).map(dish => {
            let dishPrice = Number(dish.price);
            let dishFullPrice = dish.quantity * dishPrice;
            orderTotal += dishFullPrice;
            orderTotal >= discount
              ? (deliveryCharge = 0)
              : (deliveryCharge = 2);
            totalPrice = orderTotal + deliveryCharge;
            return (
              <View
                key={dish.name}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>
                  {dish.quantity} x {dish.name}
                </Text>
                <Text>£{dishFullPrice.toFixed(2)}</Text>
              </View>
            );
          })}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Subtotal:</Text>
            <Text>£{orderTotal.toFixed(2)}</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Delivery fee:</Text>
            <Text>£{deliveryCharge.toFixed(2)}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>Order total:</Text>
            <Text>£{totalPrice.toFixed(2)}</Text>
          </View>
        </ScrollView>

        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Empty Basket"
          onPress={() => {
            return this.props.emptyBasket();
          }}
          buttonStyle={{
            backgroundColor: "red"
          }}
        />

        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Complete Order"
          onPress={() => {
            return (
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
