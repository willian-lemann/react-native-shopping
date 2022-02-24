import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import Popover from "react-native-popover-view";

const Stack = createStackNavigator();

import Chat from "../screens/Chat";

const ChatRoutesStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Harry",
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.primary,
            height: 150,
            elevation: 0,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerLeft: () => (
            <RectButton style={styles.leading}>
              <MaterialIcons name="group" size={30} color="#fff" />
              <View style={styles.unReadedMessagePopup}>
                <Text>1</Text>
              </View>
            </RectButton>
          ),
          headerRight: () => (
            <Popover
              popoverStyle={styles.popoverContainer}
              from={(sourceRef, showPopover) => (
                <RectButton style={styles.actions} onPress={showPopover}>
                  <MaterialIcons name="more-horiz" size={38} color="#fff" />
                </RectButton>
              )}
            >
              <RectButton style={styles.button}>
                <Text>Perfil</Text>
              </RectButton>
              <RectButton style={styles.button}>
                <Text>Ver foto</Text>
              </RectButton>
            </Popover>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  leading: {
    height: 50,
    width: 100, 
    justifyContent: "center",
    alignItems: "center",
  },

  unReadedMessagePopup: {
    backgroundColor: "#da4444",
    position: "absolute",
    top: 2,
    right: 25,
    borderRadius: 100,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  actions: {
    marginRight: 10,

    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  popoverContainer: {
    backgroundColor: "#f2f2f2",
    height: 100,
    width: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  button: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatRoutesStack;
