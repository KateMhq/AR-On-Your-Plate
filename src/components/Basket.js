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
      <View
        style={{
            
        }}
      >
        <Title style={{ fontSize: 30 }}>Your Order</Title>
        <Title style={{ fontSize: 30 }}>Delivery charge: £5.00</Title>
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
