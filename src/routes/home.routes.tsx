import React from "react";
import { useNavigation } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderAction from "../components/HeaderAction";
import HeaderLeading from "../components/HeaderLeading";
import ProfileScreenLeading from "../components/ProfileScreenLeading";
import ProfileScreenAction from "../components/ProfileScreenAction";

const Stack = createStackNavigator();

import Home from "../screens/Home";
import Checkout from "../screens/Checkout";
import Profile from "../screens/Profile";

const HomeRoutes = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerStyle: {
            height: 120,
            elevation: 0,
          },
          headerLeft: () => <HeaderLeading title="Picnic." />,
          headerRight: () => <HeaderAction />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Continuar comprando",
          headerStyle: {
            height: 130,
            elevation: 0,
          },
          headerLeft: () => <ProfileScreenLeading />,
          headerRight: () => <ProfileScreenAction />,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: "Carrinho de compras",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
