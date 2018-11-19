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
    let discountPercent = 0;
    const Title = styled(Text)`
      font-size: 30px;
      text-align: center;
      padding: 10px;
      background-color: white;
    `;
    // This component maps through the currentOrder.order object, applies the relevent discount, and displays the total price.
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Empty Basket"
          onPress={() => {
            return this.props.emptyBasket();
          }}
          buttonStyle={{
            backgroundColor: "#FF8360",
          }}
          style={{ paddingTop: "5%", paddingBottom: "5%", width: "100%" }}
        />
        <ScrollView
          style={{ paddingLeft: 5, paddingRight: 5, backgroundColor: "white" }}
        >
          {Object.values(this.props.currentOrder.order).map(dish => {
            let dishPrice = Number(dish.price);
            let dishFullPrice = dish.quantity * dishPrice;
            orderTotal += dishFullPrice;
            orderTotal >= discount
              ? (deliveryCharge = 2)
              : (deliveryCharge = 2);
            if (orderTotal <= 40) {
              discountPercent = 0;
            }
            if (orderTotal > 40 && orderTotal <= 60) {
              discountPercent = 5;
            }
            if (orderTotal > 60) {
              discountPercent = 10;
            }

            if (discountPercent === 0) {
              totalPrice = orderTotal + deliveryCharge;
            } else {
              totalPrice =
                (orderTotal + deliveryCharge) * ((100 - discountPercent) / 100);
            }

            return (
              <View
                key={dish.name}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                }}
              >
                <Text style={{ flex: 0.8, fontSize: 16 }}>
                  {dish.quantity} x {dish.name}
                </Text>
                <Text style={{ flex: 0.2, fontSize: 16 }}>
                  £{dishFullPrice.toFixed(2)}
                </Text>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <Text style={{ flex: 0.8, fontSize: 16 }}>Subtotal:</Text>
            <Text style={{ flex: 0.2, fontSize: 16 }}>
              £{orderTotal.toFixed(2)}
            </Text>
          </View>
          <Divider style={{ backgroundColor: "grey" }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 0.8,
                paddingTop: 5,
                flexDirection: "row",

                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                Tip:
              </Text>
            </View>
            <Text
              style={{
                flex: 0.2,
                fontSize: 16,
              }}
            >
              £{deliveryCharge.toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <View style={{ flex: 0.8, fontSize: 16 }}>
              <Text style={{ fontSize: 16 }}>Discount:</Text>
              <Text style={{ fontSize: 12, fontFamily: "AvenirNext-Italic" }}>
                (5% > £40 or 10% > £60)
              </Text>
            </View>
            <Text style={{ flex: 0.2, alignSelf: "center", fontSize: 16 }}>
              {discountPercent}%
            </Text>
          </View>
          <Divider style={{ backgroundColor: "grey" }} />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 5,
              }}
            >
              <Text style={{ flex: 0.8, fontSize: 16 }}>Order total:</Text>
              <Text
                style={{
                  flex: 0.2,
                  fontSize: 16,
                }}
              >
                £{totalPrice.toFixed(2)}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={{}}>
          <Button
            buttonStyle={{
              backgroundColor: "#7DCE82",
            }}
            style={{ width: "100%", paddingBottom: "5%" }}
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
      </View>
    );
  }
}
