import { Animated } from "react-native";

const useAnimation = () => {
  function animate(animatedValue: Animated.Value, targetValue: number) {
    Animated.timing(animatedValue, {
      toValue: targetValue,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }

  return {
    animate,
  };
};

export default useAnimation;
