import React from "react";
import {
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from "native-base";
import styled from "styled-components/native";

export default class SingleItemMenu extends React.Component {
  render() {
    let dishPrice = Number(this.props.dish.price);
    let fullQuantityPrice = this.props.dish.quantity * dishPrice;
    const AddBtn = styled(TouchableOpacity)`
      margin: 0 5px;
      border-radius: 20px;
      width: 33px;
      height: 33px;
      align-items: center;
    `;
    const MinusBtn = styled(TouchableOpacity)`
      margin: 0 5px;
      border-radius: 20px;
      width: 33px;
      height: 33px;
      align-items: center;
    `;
    const BtnText = styled(Text)`
      font-size: 25px;
      font-weight: 200;
    `;

    return (
      <Container style={{ height: "100%" }}>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: this.props.dish.image }} />
                <Body>
                  <Text>
                    {Object.values(this.props.currentOrder.order).map(dish => {
                      if (this.props.dish.dish_name === dish.name) {
                        return (
                          <Text key={dish.name} style={{ fontSize: 15 }}>
                            {dish.quantity} x{" "}
                          </Text>
                        );
                      }
                    })}
                    {this.props.dish.dish_name}
                  </Text>
                  <Text note>£{this.props.dish.price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableHighlight
                  style={{ height: 200, width: "100%" }}
                  onPress={event => {
                    this.props.updateDish(
                      this.props.dish.obj,
                      this.props.dish.mtl
                    );
                    this.props.setModalVisible();
                  }}
                >
                  <Image
                    source={{ uri: this.props.dish.image }}
                    style={{ height: "100%", width: "100%" }}
                  />
                </TouchableHighlight>
                <Text style={{ paddingTop: 15 }}>
                  {"   "}
                  {this.props.dish.description}
                </Text>
              </Body>
            </CardItem>

            <CardItem
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                height: 60,
              }}
            >
              <Left>
                {this.props.dish.quantity < 1 ? null : (
                  <Button
                    style={{
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                    iconCenter
                    light
                    onPress={() => {
                      return this.props.addToBasket(
                        this.props.dish.id,
                        this.props.dish.quantity,
                        this.props.dish.dish_name,
                        this.props.dish.price
                      );
                    }}
                  >
                    <Icon type="FontAwesome" name="cart-plus" />
                    <Text>{"Add for £" + fullQuantityPrice.toFixed(2)}</Text>
                  </Button>
                )}
              </Left>

              <Right
                style={{
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                {this.props.dish.quantity < 1 ? null : (
                  <MinusBtn
                    style={{ backgroundColor: this.props.color }}
                    onPress={event => {
                      this.props.decreaseQuantity(1, this.props.dish.id);
                    }}
                  >
                    <BtnText>-</BtnText>
                  </MinusBtn>
                )}
                {this.props.dish.quantity < 1 ? null : (
                  <Text
                    style={{ fontSize: 25, paddingLeft: 5, paddingRight: 5 }}
                  >
                    {this.props.dish.quantity}
                  </Text>
                )}
                <AddBtn
                  style={{ backgroundColor: this.props.color }}
                  onPress={event => {
                    this.props.addQuantity(1, this.props.dish.id);
                  }}
                >
                  <BtnText>+</BtnText>
                </AddBtn>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
