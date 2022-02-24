import React from "react";
import { createContext, ReactNode, useState } from "react";
import { Animated } from "react-native";

interface InitialState {
  isSearching: boolean;
  textValue: string;
  animatedWidth: Animated.Value;
  opacityAnimation: Animated.Value;
  heightAnimation: Animated.Value;
  activeSearch: () => void;
  handleTextValueChange: (value: string) => void;
}

export const UIContext = createContext({} as InitialState);

interface UIProviderProps {
  children?: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [animatedWidth] = useState(new Animated.Value(-300));
  const [opacityAnimation] = useState(new Animated.Value(1));
  const [heightAnimation] = useState(new Animated.Value(0));

  function slideWidthEffect() {
    Animated.timing(animatedWidth, {
      toValue: isSearching ? -300 : 20,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(heightAnimation, {
      toValue: isSearching ? 0 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  function opacityEffect() {
    Animated.timing(opacityAnimation, {
      toValue: isSearching ? 1 : 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }

  function activeSearch() {
    setIsSearching(!isSearching);
    opacityEffect();
    slideWidthEffect();
  }

  function handleTextValueChange(value: string) {
    setTextValue(value);
  }

  return (
    <UIContext.Provider
      value={{
        isSearching,
        textValue,
        animatedWidth,
        opacityAnimation,
        heightAnimation,
        activeSearch,
        handleTextValueChange,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
