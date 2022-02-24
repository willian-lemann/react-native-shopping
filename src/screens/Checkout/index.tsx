import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { RectButton, ScrollView } from "react-native-gesture-handler";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import useCart from "../../hooks/useCart";

const Checkout = () => {
  const { cart, total, increment, decrement, calculateTotalPrice } = useCart();

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      title: "Payment Apple Pay",
      isSelected: false,
    },
  ]);

  function selectPaymentMethod(id: number) {
    const newPaymentMethodsArray = [...paymentMethods];

    newPaymentMethodsArray.forEach(
      (paymentMethods) => (paymentMethods.isSelected = false)
    );

    newPaymentMethodsArray.forEach((paymentMethod) => {
      if (paymentMethod.id === id) {
        paymentMethod.isSelected = !paymentMethod.isSelected;
      }

      return paymentMethod;
    });

    setPaymentMethods(newPaymentMethodsArray);
  }

  function addNewPaymentMethod() {
    setPaymentMethods([
      ...paymentMethods,
      {
        id: 2,
        title: "Credit card",
        isSelected: false,
      },
    ]);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [increment, decrement]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator
    >
      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>The content of the order</Text>
      </View>
      {cart.map((cartItem) => (
        <View key={cartItem.id} style={styles.listTile}>
          <View style={styles.leading}>
            <Image style={styles.image} source={{ uri: cartItem.image }} />
          </View>

          <View style={styles.actions}>
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>{cartItem.name}</Text>
                <Text style={styles.subTitle}>{cartItem.name}</Text>
              </View>

              <View style={styles.buttons}>
                <RectButton
                  style={styles.plusButton}
                  onPress={() => increment(cartItem.id)}
                >
                  <Text style={styles.plusText}>+</Text>
                </RectButton>

                <View style={styles.quantityContainer}>
                  <Text style={styles.quantityText}>{cartItem.quantity}</Text>
                </View>

                <RectButton
                  style={styles.minusButton}
                  onPress={() => decrement(cartItem.id)}
                >
                  <Text style={styles.minusText}>-</Text>
                </RectButton>
              </View>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{cartItem.price.toFixed(2)}$</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.paymentMethodHeader}>
        <Text style={styles.paymentMethodHeaderText}>Payment method</Text>
      </View>

      <View style={styles.paymentMethodRadios}>
        {paymentMethods.map((paymentMethod) => (
          <View key={paymentMethod.id} style={styles.paymentMethodRadioItem}>
            <View style={styles.paymentMethodRadioItemLeading}>
              <MaterialIcons name="credit-card" size={30} />
              <Text style={styles.paymentMethodRadioItemText}>
                {paymentMethod.title}
              </Text>
            </View>

            <View style={styles.paymentMethodRadioItemActions}>
              <RectButton onPress={() => selectPaymentMethod(paymentMethod.id)}>
                <MaterialIcons
                  name={
                    paymentMethod.isSelected
                      ? "radio-button-checked"
                      : "radio-button-unchecked"
                  }
                  size={20}
                />
              </RectButton>
            </View>
          </View>
        ))}

        <View style={styles.paymentMethodRadioItem}>
          <View style={styles.paymentMethodRadioItemLeading}>
            <MaterialIcons name="credit-card" size={30} />
            <Text style={styles.paymentMethodRadioItemText}>
              Add new payment method
            </Text>
          </View>

          <View style={styles.paymentMethodRadioItemActions}>
            <RectButton onPress={addNewPaymentMethod}>
              <MaterialIcons name="add-circle-outline" size={20} />
            </RectButton>
          </View>
        </View>
      </View>

      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Valor:</Text>
        <Text style={styles.totalPriceText}>{total.toFixed(2)}</Text>
      </View>

      <RectButton style={styles.paymentButtonContainer}>
        <View style={styles.paymentButtonTextContainer}>
          <Text style={styles.paymentButtonText}>Pay with</Text>
          <FontAwesome5 name="apple-pay" size={38} color="#fff" />
        </View>
      </RectButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },

  subheader: {
    backgroundColor: "#f0f0f0",
    height: 60,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 33,
    marginTop: 10,
  },

  subheaderText: {
    color: "#444",
    textTransform: "uppercase",
    opacity: 0.6,
  },

  cartList: {
    width: "100%",
  },

  listTile: {
    height: 230,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  leading: {
    width: "40%",
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  actions: {
    height: "100%",
    width: "60%",
    flexDirection: "row",
  },

  titleContainer: {
    height: "100%",
    width: "70%",
    justifyContent: "space-around",
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.6,
    paddingHorizontal: 10,
  },

  buttons: {
    flexDirection: "row",
    marginBottom: 50,
    paddingHorizontal: 10,
  },

  minusButton: {
    backgroundColor: "#f0f0f0",
    width: 50,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  minusText: { fontSize: 28, fontWeight: "bold" },

  plusButton: {
    backgroundColor: "#f0f0f0",
    width: 50,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  plusText: { fontSize: 20, fontWeight: "bold" },

  quantityContainer: {
    width: 50,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  priceContainer: {
    width: "30%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  priceText: {
    marginBottom: 80,
    fontSize: 18,
    fontWeight: "bold",
  },

  paymentMethodHeader: {
    backgroundColor: "#f0f0f0",
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 33,
  },

  paymentMethodHeaderText: {
    color: "#444",
    textTransform: "uppercase",
    opacity: 0.6,
  },

  paymentMethodRadios: {
    width: "100%",
    height: "auto",
  },

  paymentMethodRadioItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  paymentMethodRadioItemLeading: {
    width: "80%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  paymentMethodRadioItemText: {
    fontSize: 18,
    paddingHorizontal: 30,
  },

  paymentMethodRadioItemActions: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  totalPriceContainer: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalPriceText: {
    paddingHorizontal: 33,
    textTransform: "uppercase",
    fontSize: 16,
    opacity: 0.5,
  },

  paymentButtonContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentButtonTextContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentButtonText: {
    color: "#ffffff",
    fontSize: 18,
    marginRight: 10,
  },
});

export default Checkout;
