import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import HomeRoutes from "../home.routes";
import CheckoutRoutes from "../checkout.routes";
import ChatRoutesStack from "../chat.routes";
import BonusesRoutes from "../bonuses.routes";
import SettingsStackRoutes from "../settings.routes";

import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import useCart from "../../hooks/useCart";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const TabNavigator = () => {
  const theme = useTheme();
  const { cart } = useCart();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 14 },
        adaptive: true,
        style: {
          height: 55,
        },
        showLabel: false,
        labelPosition: "below-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        listeners={({ navigation }: any) => {
          return {
            tabPress: () => {
              navigation.navigate("Home", {
                screen: "Home",
              });
            },
          };
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <RectButton
              style={styles.iconButton}
              rippleColor="#f0f0f0"
              onPress={() => {}}
            >
              <MaterialIcons
                name="loop"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.text}
              />
            </RectButton>
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutRoutes}
        listeners={{
          tabPress: (event) => {
            if (cart.length === 0) {
              event.preventDefault();
            }
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <RectButton style={styles.iconButton} rippleColor="#f0f0f0">
              <MaterialIcons
                name="shopping-cart"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.text}
              />
            </RectButton>
          ),

          tabBarBadge: cart.length === 0 ? "" : cart.length,
          tabBarBadgeStyle: {
            backgroundColor:
              cart.length === 0 ? "transparent" : theme.colors.primary,
          },
        }}
      />

      <Tab.Screen
        name="Bonuses"
        component={BonusesRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <RectButton
              style={styles.iconButton}
              rippleColor="#f0f0f0"
              onPress={() => {}}
            >
              <MaterialCommunityIcons
                name="gift-outline"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.text}
              />
            </RectButton>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatRoutesStack}
        options={{
          title: "Chat",
          tabBarVisible: false,
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIcon: ({ focused }) => (
            <RectButton
              style={styles.iconButton}
              rippleColor="#f0f0f0"
              onPress={() => {}}
            >
              <MaterialIcons
                name="chat"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.text}
              />
            </RectButton>
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={SettingsStackRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <RectButton
              style={styles.iconButton}
              rippleColor="#f0f0f0"
              onPress={() => {}}
            >
              <MaterialIcons
                name="person"
                size={24}
                color={focused ? theme.colors.primary : theme.colors.text}
              />
            </RectButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
});

export default TabNavigator;
