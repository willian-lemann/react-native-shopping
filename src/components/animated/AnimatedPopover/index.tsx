import React, { useState } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import useMessages from "../../../hooks/useMessages";

interface AnimatedPopoverProps {
  animatedValue: Animated.Value;
}

const AnimatedPopover = ({ animatedValue }: AnimatedPopoverProps) => {
  const theme = useTheme();
  const { addNewMessage } = useMessages();
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(
    false
  );
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function requestCameraPermission() {
    const { status } = await Camera.requestPermissionsAsync();
    setIsCameraPermissionGranted(status === "granted");
  }

  async function requestLibraryPermission() {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar galeria é necessaria");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) {
      return;
    }

    addNewMessage({
      id: Math.random().toString(),
      sender: "Willian Leman Rocha",
      media: pickerResult,
      time: "16:40",
      token: "123456789",
    });
  }

  if (isCameraPermissionGranted) {
    return (
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
  return (
    <Animated.View
      style={[
        styles.popoverContainer,
        {
          backgroundColor: theme.colors.primary,
          width: animatedValue,
          overflow: "hidden",
        },
      ]}
    >
      <View style={styles.popoverContent}>
        <RectButton style={styles.button} onPress={requestLibraryPermission}>
          <MaterialIcons name="perm-media" size={30} color="#fff" />
          <Text style={styles.buttonText}>Galeria</Text>
        </RectButton>

        <RectButton style={styles.button}>
          <MaterialIcons name="perm-camera-mic" size={30} color="#fff" />
          <Text style={styles.buttonText}>Áudio</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={requestCameraPermission}>
          <MaterialIcons name="camera-enhance" size={30} color="#fff" />
          <Text style={styles.buttonText}>Câmera</Text>
        </RectButton>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  popoverContainer: {
    width: 310,
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  popoverContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  button: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
  },

  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },

  text: {
    fontSize: 18,
    color: "white",
  },
});

export default AnimatedPopover;
