import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

import Bonuses from "../screens/Bonuses";

const BonusesRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Bonuses}
      options={{
        title: "",
        headerStyle: {
          height: 120,
          elevation: 0,
        },
        headerLeft: () => <Leading />,
        headerRight: () => <Actions />,
      }}
    />
  </Stack.Navigator>
);

const Leading = () => {
  return (
    <View style={styles.leading}>
      <Text style={styles.leadingText}>Bonuses.</Text>
    </View>
  );
};

const Actions = () => {
  return (
    <View style={styles.actions}>
      <RectButton style={styles.actionButton}>
        <MaterialIcons name="search" size={30} />
      </RectButton>

      <RectButton style={styles.actionButton}>
        <MaterialIcons name="filter-list" size={30} />
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  leading: {
    flex: 1,
    width: 150,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  leadingText: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: 10,
  },

  actions: {
    width: 130,
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },

  actionButton: {},
});

export default BonusesRoutes;
