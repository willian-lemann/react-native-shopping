import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../screens/Settings";
import HeaderLeading from "../components/HeaderLeading";
import HeaderAction from "../components/HeaderAction";
import SettingsLeading from "../components/SettingsLeading";

const Stack = createStackNavigator();

const SettingsStackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        title: "",
        headerStyle: {
          height: 120,
          elevation: 0,
        },
        headerLeft: () => <SettingsLeading title="Profile" />,
        headerRight: () => <HeaderAction isProfile />,
      }}
    />
  </Stack.Navigator>
);

export default SettingsStackRoutes;
