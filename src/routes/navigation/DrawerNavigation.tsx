import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, View } from "react-native";

import profile from "../../../assets/profile.jpg";

import TabNavigator from "./BottomTabNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => (
        <SafeAreaView style={styles.drawerContentContainer}>
          <View style={styles.userContainer}>
            <Image source={profile} style={styles.userImage} />
            <Text style={styles.userName}>Willian Leman Rocha</Text>
          </View>
        </SafeAreaView>
      )}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
  },
  userContainer: {
    marginTop: 50,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 100,
    height: "100%",
    borderRadius: 100,
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DrawerNavigator;
