import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button, Icon, Divider } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class Basket extends React.Component {
  render() {
    let orderTotal = 0;
    const discount = 30;
    let deliveryCharge = 2;
    let totalPrice = deliveryCharge;
    let discountProcent = 0;
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
            if (orderTotal <= 40) {
              discountProcent = 0;
            }
            if (orderTotal > 40 && orderTotal <= 60) {
              discountProcent = 5;
            }
            if (orderTotal > 60) {
              discountProcent = 10;
            }

            if (discountProcent === 0) {
              totalPrice = orderTotal + deliveryCharge;
            } else {
              totalPrice =
                (orderTotal + deliveryCharge) * ((100 - discountProcent) / 100);
            }

            return (
              <View
                key={dish.name}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ flex: 0.85 }}>
                  {dish.quantity} x {dish.name}
                </Text>
                <Text style={{ flex: 0.25 }}>£{dishFullPrice.toFixed(2)}</Text>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10
            }}
          >
            <Text style={{ flex: 0.85 }}>Subtotal:</Text>
            <Text style={{ flex: 0.25 }}>£{orderTotal.toFixed(2)}</Text>
          </View>
          <Divider style={{ backgroundColor: "grey" }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 0.85 }}>
              <Text>Delivery fee:</Text>
              <Text>(free delivery for orders over £30)</Text>
            </View>
            <Text style={{ flex: 0.25, alignSelf: "center" }}>
              £{deliveryCharge.toFixed(2)}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ flex: 0.85 }}>Discount(5% > £40 or 10% > £60):</Text>
            <Text style={{ flex: 0.25 }}>{discountProcent}%</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ flex: 0.85, fontSize: 25 }}>Order total:</Text>
            <Text
              style={{ flex: 0.25, fontWeight: "bold", alignSelf: "center" }}
            >
              £{totalPrice.toFixed(2)}
            </Text>
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
