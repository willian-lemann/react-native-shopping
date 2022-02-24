import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import useCart from "../../hooks/useCart";

const ShoppingCartAction: React.FC = () => {
  const navigation = useNavigation();
  const { cart } = useCart();

  const handleToShoppingCart = () => {
    navigation.navigate("Checkout");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleToShoppingCart}
      >
        <MaterialIcons name="shopping-cart" size={28} color="#20134b" />
        {cart.length !== 0 && (
          <View style={styles.countCartContainer}>
            <Text style={styles.countCartText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },

  buttonContainer: {
    borderRadius: 100,
    backgroundColor: "transparent",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  countCartContainer: {
    backgroundColor: "#cfcfcf",
    position: "absolute",
    top: 0,
    right: -10,
    borderRadius: 100,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  countCartText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ShoppingCartAction;
