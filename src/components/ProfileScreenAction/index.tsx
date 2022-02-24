import React from "react";
import { useNavigation } from "@react-navigation/core";

import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";
import useCart from "../../hooks/useCart";
import { useTheme } from "@react-navigation/native";

const ProfileScreenAction = () => {
  const theme = useTheme();
  const { cart, isCartEmpty } = useCart();

  return (
    <ActionContainer>
      <IconButton onPress={() => {}} activeOpacity={1}>
        <MaterialIcons name="shopping-cart" size={30} />
        {!isCartEmpty && (
          <CartIndicator color={theme.colors.primary}>
            <CartIndicatorText>{cart.length}</CartIndicatorText>
          </CartIndicator>
        )}
      </IconButton>
    </ActionContainer>
  );
};

const ActionContainer = styled.View`
  height: 100%;
  width: 70px;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CartIndicator = styled.View`
  background-color: ${({ color }) => color};
  border-radius: 100px;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 26px;
  right: 16px;
`;

const CartIndicatorText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export default ProfileScreenAction;
