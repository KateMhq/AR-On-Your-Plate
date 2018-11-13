import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
});
const Container = styled(View)`
  margin: 0 5px 5px 5px;
  background-color: #e8e9eb;
  flex-direction: column;
  border-radius: 0px;
  color: #464646;
`;

const Title = styled(Text)`
  font-size: 30px;
  text-align: center;
  padding: 10px;
  color: #464646;
  font-weight: 600;
`;

const ImageContainer = styled(View)`
  height: 150px;
  width: 100%;
  align-self: center;
`;

const Img = styled(Image)`
  border-radius: 0px;
  width: 100%;
  height: 100%;
`;
const Description = styled(View)`
  padding: 5px;
  align-self: center;
`;

const DescriptionText = styled(Text)`
  font-size: 20px;
  color: #464646;
  font-weight: 200;
`;

const PriceWithButtons = styled(View)`
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled(Text)`
  font-size: 20px;
  font-weight: 200;
`;
const ButtonsWithQuantity = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const MinusAndQuantityDisplayNone = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const AddBtn = styled(TouchableOpacity)`
  margin: 0 5px;

  border-radius: 20px;
  width: 27px;
  height: 27px;
  align-items: center;
`;
const MinusBtn = styled(TouchableOpacity)`
  margin: 0 5px;

  border-radius: 20px;
  width: 27px;
  height: 27px;
  align-items: center;
`;
const BtnText = styled(Text)`
  font-size: 19px;
  font-weight: 200;
`;
const Quantity = styled(Text)`
  font-size: 30px;
  font-weight: 200;
`;

export default class SingleItemMenu extends React.Component {
  render() {
    return (
      <Container>
        <Title style={{ backgroundColor: this.props.color }}>
          {this.props.dish.dish_name}
        </Title>
        <TouchableHighlight
          onPress={event => {
            this.props.updateDish(this.props.dish.obj, this.props.dish.mtl);
            this.props.setModalVisible();
          }}
          style={styles.container}
        >
          <ImageContainer>
            <Img source={{ uri: this.props.dish.image }} />
          </ImageContainer>
        </TouchableHighlight>
        <Description>
          <DescriptionText>{this.props.dish.description}</DescriptionText>
        </Description>

        <PriceWithButtons>
          <Price>£{this.props.dish.price}</Price>

          <ButtonsWithQuantity>
            <MinusAndQuantityDisplayNone>
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
              <Quantity>{this.props.dish.quantity}</Quantity>
            </MinusAndQuantityDisplayNone>
            <AddBtn
              style={{ backgroundColor: this.props.color }}
              onPress={event => {
                this.props.addQuantity(1, this.props.dish.id);
              }}
            >
              <BtnText>+</BtnText>
            </AddBtn>
          </ButtonsWithQuantity>
        </PriceWithButtons>
        <Button
          raised
          icon={{ name: "add-shopping-cart" }}
          title="Add to basket"
          onPress={() => {
            return this.props.addToBasket(
              this.props.dish.id,
              this.props.dish.quantity,
              this.props.dish.dish_name
            );
          }}
        />
      </Container>
    );
  }
}
