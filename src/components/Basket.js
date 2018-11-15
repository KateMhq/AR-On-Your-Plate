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

        <ScrollView style={{ paddingLeft: 5 }}>
          {Object.values(this.props.currentOrder.order).map(dish => {
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
                <Text style={{ flex: 0.85, fontSize: 16 }}>
                  {dish.quantity} x {dish.name}
                </Text>
                <Text style={{ flex: 0.25, fontSize: 16 }}>
                  £{dishFullPrice.toFixed(2)}
                </Text>
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
            <Text style={{ flex: 0.85, fontSize: 16 }}>Subtotal:</Text>
            <Text style={{ flex: 0.25, fontSize: 16 }}>
              £{orderTotal.toFixed(2)}
            </Text>
          </View>
          <Divider style={{ backgroundColor: "grey" }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 0.85, paddingTop: 5 }}>
              <Text style={{ fontSize: 16 }}>Delivery fee:</Text>
              <Text style={{ fontSize: 12, fontFamily: "AvenirNext-Italic" }}>
                (free delivery for orders over £30)
              </Text>
            </View>
            <Text style={{ flex: 0.25, alignSelf: "center", fontSize: 16 }}>
              £{deliveryCharge.toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            <View style={{ flex: 0.85, fontSize: 16 }}>
              <Text style={{ fontSize: 16 }}>Discount:</Text>
              <Text style={{ fontSize: 12, fontFamily: "AvenirNext-Italic" }}>
                (5% > £40 or 10% > £60)
              </Text>
            </View>
            <Text style={{ flex: 0.25, alignSelf: "center", fontSize: 16 }}>
              {discountProcent}%
            </Text>
          </View>
          <View>
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
          </View>
        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
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
            style={{ width: "100%" }}
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
      </View>
    );
  }
}
