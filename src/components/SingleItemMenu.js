import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  }
});
const Container = styled(View)`
  margin: 0 5px 5px 5px;
  background-color: lightgray;
  flex-direction: column;
  border-radius: 15px;
`;

const Title = styled(Text)`
  font-size: 30px;
  text-align: center;
  padding: 10px;
`;

const ImageContainer = styled(View)`
  height: 150px;
  width: 100%;
  align-self: center;
  padding: 0 5px;
`;

const Img = styled(Image)`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;
const Description = styled(View)`
  padding: 5px;
`;

const DescriptionText = styled(Text)`
  font-size: 20px;
`;

const PriceWithButtons = styled(View)`
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled(Text)`
  font-size: 20px;
`;
const ButtonsWithQuantity = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const MinusAndQuantityDisplayNone = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const Btn = styled(TouchableOpacity)`
  margin: 0 5px;
  background-color: green;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
`;
const BtnText = styled(Text)`
  font-size: 30px;
  font-weight: 900;
`;
const Quantity = styled(Text)`
  font-size: 40px;
`;

export default class SingleItemMenu extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={event => {
          this.props.updateDish(this.props.dish.url);
          this.props.setModalVisible();
        }}
        style={styles.container}
      >
        <Container>
          <Title>{this.props.dish.name}</Title>
          <ImageContainer>
            <Img source={{ uri: this.props.dish.image }} />
          </ImageContainer>

          <Description>
            <DescriptionText>{this.props.dish.description}</DescriptionText>
          </Description>

          <PriceWithButtons>
            <Price>£11</Price>

            <ButtonsWithQuantity>
              <MinusAndQuantityDisplayNone>
              {this.props.dish.quantity < 1 ? null :
                <Btn onPress={event => {
                  this.props.decreaseQuantity(1, this.props.dish.name)
                }}>
                  <BtnText>-</BtnText>
                </Btn>
              }
                <Quantity>{this.props.dish.quantity}</Quantity>
              </MinusAndQuantityDisplayNone>
              <Btn onPress={event => {
                this.props.addQuantity(1, this.props.dish.name)
              }}>
                <BtnText>+</BtnText>
              </Btn>
            </ButtonsWithQuantity>
          </PriceWithButtons>
          <Button
            raised
            icon={{name: 'add-shopping-cart'}} 
            title='Add to basket'
            onPress={() => alert('Added to cart')}
            />
        </Container>
      </TouchableHighlight>
      
    );
  }
}

