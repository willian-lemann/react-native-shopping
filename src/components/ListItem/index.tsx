import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import useCart from "../../hooks/useCart";
import { useNavigation, useTheme } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

interface Product {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface ListItemProps {
  item: Product;
}

const ListItem = ({ item }: ListItemProps) => {
  const { navigate } = useNavigation();
  const { cart, addItem } = useCart();
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<Product | null>();

  function handleAddItem(item: Product) {
    const alreadyExist = cart.find(
      (cartItem) => cartItem.id === item.idCategory
    );

    if (alreadyExist) {
      return;
    }

    addItem({
      id: item.idCategory,
      image: item.strCategoryThumb,
      name: item.strCategory,
      description: item.strCategoryDescription,
      price: 10.0,
      quantity: 1,
    });

    setSelectedItem(item);
  }

  function handleNavigateProfile(item: Product) {
    const alreadyExist = cart.find(
      (cartItem) => cartItem.id === item.idCategory
    );

    if (alreadyExist) {
      return;
    }

    const newItem = {
      id: item.idCategory,
      image: item.strCategoryThumb,
      name: item.strCategory,
      description: item.strCategoryDescription,
      price: 10.0,
      quantity: 1,
    };

    addItem(newItem);

    navigate("Profile", { id: newItem.id });

    setSelectedItem(item);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={() => handleNavigateProfile(item)}>
        <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
      </RectButton>

      <View style={[styles.infoContainer]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.strCategory}</Text>
          <Text style={styles.subtitle}>{item.strCategory}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>0.6$/pcs</Text>
          <RectButton
            rippleColor="transparent"
            onPress={() => handleAddItem(item)}
          >
            <MaterialIcons
              name={
                item === selectedItem ? "shopping-cart" : "add-shopping-cart"
              }
              color={theme.colors.primary}
              size={28}
            />
          </RectButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    margin: 1,
    marginBottom: 40,
  },

  image: {
    height: "70%",
    resizeMode: "contain",
  },

  infoContainer: {
    justifyContent: "space-between",
    height: "30%",
  },

  titleContainer: {
    justifyContent: "space-evenly",
    height: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.5,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.5,
  },

  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },

  addCartButton: {
    borderRadius: 100,
  },
});

export default ListItem;
