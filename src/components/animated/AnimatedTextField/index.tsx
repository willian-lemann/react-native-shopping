import React from "react";
import { Animated, TextInput } from "react-native";

import styled from "styled-components/native";

import useSearch from "../../../hooks/useSearch";

const { createAnimatedComponent } = Animated;

const AnimatedTextInput = createAnimatedComponent(TextInput);

const AnimatedTextField = () => {
  const {
    textValue,
    animatedWidth,
    heightAnimation,
    handleTextValueChange,
  } = useSearch();

  return (
    <AnimatedContainer
      style={{
        left: animatedWidth,
      }}
    >
      <TextField
        value={textValue}
        onChangeText={handleTextValueChange}
        placeholder="Type a category"
        style={{ height: heightAnimation }}
      />
    </AnimatedContainer>
  );
};

const AnimatedContainer = styled(Animated.View)`
  width: 300px;
  height: 50px;
  position: absolute;
  top: 37px;
  left: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const TextField = styled(AnimatedTextInput)`
  background-color: #f0f0f0;
  width: 300px;
  height: 50px;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
`;

export default AnimatedTextField;
