import React from "react";
import { Image, StyleSheet, View } from "react-native";

import bonuses from "../../../assets/bonuses.png";

const Bonuses = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bonuses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 300,
    width: 300,
  },
});

export default Bonuses;
