import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
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
      <TouchableHighlight
        onPress={event => {
          this.props.updateDish(this.props.dish.url);
          this.props.setModalVisible();
        }}
        style={styles.container}
      >
        <Container>
          <Title style={{ backgroundColor: this.props.dish.color }}>
            {this.props.dish.name}
          </Title>
          <ImageContainer>
            <Img source={{ uri: this.props.dish.image }} />
          </ImageContainer>

          <Description>
            <DescriptionText>{this.props.dish.description}</DescriptionText>
          </Description>

          <PriceWithButtons>
            <Price>£{this.props.dish.price.toFixed(2)}</Price>

            <ButtonsWithQuantity>
              <MinusAndQuantityDisplayNone>
                <MinusBtn style={{ backgroundColor: this.props.dish.color }}>
                  <BtnText>-</BtnText>
                </MinusBtn>
                <Quantity>0</Quantity>
              </MinusAndQuantityDisplayNone>

              <AddBtn style={{ backgroundColor: this.props.dish.color }}>
                <BtnText>+</BtnText>
              </AddBtn>
            </ButtonsWithQuantity>
          </PriceWithButtons>
        </Container>
      </TouchableHighlight>
    );
  }
}
