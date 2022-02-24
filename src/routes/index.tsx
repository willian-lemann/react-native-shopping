import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigation";

const Routes = () => {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: "#00bc68",
          background: "#ffffff",
          border: "white",
          card: "white",
          notification: "#7159c1",
          text: "#000",
        },
      }}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Routes;
