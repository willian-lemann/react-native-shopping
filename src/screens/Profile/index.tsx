import { useRoute } from "@react-navigation/core";
import React, { useEffect, useMemo, useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import useCart from "../../hooks/useCart";
import { ActivityIndicator } from "react-native";

interface Item {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const Profile = () => {
  const { cart, increment, decrement } = useCart();
  const params = useRoute<any>();
  const [item, setItem] = useState<Item | null | undefined>(null);

  const id = params.params.id as string;

  const quantity = useMemo(() => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item?.quantity;
  }, [cart]);

  useEffect(() => {
    const item = cart.find((cartItem) => cartItem.id === id);
    setItem(item);
  }, []);

  if (!item) {
    return <ActivityIndicator size="large" />;
  }

  console.log("renderizou");
  return (
    <Container>
      <Image style={{ resizeMode: "contain" }} source={{ uri: item.image }} />

      <TitleContainer>
        <Title>{item.name}</Title>
        <SubTitle>Foundraux</SubTitle>
        <Size>110 grams</Size>
      </TitleContainer>

      <InfoContainer>
        <Leading>
          <IconButton onPress={() => increment(item.id)}>
            <MaterialIcons name="add" size={20} />
          </IconButton>
          <Quantity>{quantity}</Quantity>
          <IconButton onPress={() => decrement(item.id)}>
            <MaterialIcons name="remove" size={20} />
          </IconButton>
        </Leading>
        <Action>
          <Price>R${item.price.toFixed(2)}/pcs.</Price>
        </Action>
      </InfoContainer>

      <DescriptionContainer>
        <DescriptionTitle>About the product</DescriptionTitle>
        <Description>{item.description}</Description>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const TitleContainer = styled.View`
  height: 120px;
  margin-bottom: 35px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding-left: 20px;
`;

const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const Size = styled.Text`
  padding-left: 20px;
  font-weight: bold;
  opacity: 0.5;
`;

const InfoContainer = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

const Leading = styled.View`
  margin-left: 20px;
  height: 100%;
  width: 170px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.TouchableOpacity`
  background-color: #f0f0f0;
  width: 50px;
  height: 100%;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const Quantity = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Action = styled.View`
  width: 130px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const DescriptionContainer = styled.View`
  flex: 1;
`;

const DescriptionTitle = styled.Text`
  margin-top: 30px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const Description = styled.Text`
  margin-top: 10px;
  line-height: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
`;

export default Profile;
