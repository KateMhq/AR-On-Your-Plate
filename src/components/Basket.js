import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default class Order extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          flex: 1,
        }}
      >
        <Text>Your Order</Text>

        <Text>Delivery charge: £5.00</Text>
        {/* JUST HERE FOR EXAMPLE
              
              {Object.keys(this.props.order).map(item => {
            return (
                <ScrollView key={this.props.order[item]} className='order'>
                  <h3>{this.props.order[item].item}</h3>
                  <h3>Quantity: {this.props.order[item].quantity} 
                  <div>
                    <input type="button" value="+"  />
                    <input type="button" value="-" />
                  </div>
                  </h3>
                  <h3>£ {this.props.order[item].price}</h3>
                  <h2 type="submit" onClick={this.handleDeleted}>x</h2>
                </ScrollView>
            )
          })} */}
      </View>
    );
  }
}
