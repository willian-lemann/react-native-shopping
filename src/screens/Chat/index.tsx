import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputSubmitEditingEventData,
  View,
  Animated,
  Text,
  Image,
} from "react-native";
import { FlatList, RectButton, TextInput } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import MessageItem from "../../components/MessageItem";
import EmojiBoard, { Categories } from "react-native-emoji-selector";
import useMessages from "../../hooks/useMessages";
import useAnimation from "../../hooks/useAnimation";
import AnimatedPopover from "../../components/animated/AnimatedPopover";

const Chat: React.FC = () => {
  const theme = useTheme();
  const { messages, addNewMessage } = useMessages();
  const flatlistRef = useRef<any>(null);
  const [textMessage, setTextMessage] = useState("");
  const [isEmojiBoardOpen, setIsEmojiBoardOpen] = useState(false);
  const [animatedValue] = useState(new Animated.Value(-0));
  const [isAnimationActived, setIsAnimationActived] = useState(false);
  const { animate } = useAnimation();

  function handleShowPopover() {
    setIsAnimationActived(!isAnimationActived);

    animate(animatedValue, isAnimationActived ? 0 : 300);
  }

  function handleSubmitMessage(
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) {
    const text = event.nativeEvent.text;

    if (text === "") {
      return;
    }

    addNewMessage({
      id: "5",
      sender: "Willian Leman Rocha",
      text,
      time: "16:40",
      token: "123456789",
      isLiked: false,
      media: null,
      unread: false,
    });

    setTextMessage("");
  }

  return (
    <View
      style={[styles.chatContainer, { backgroundColor: theme.colors.primary }]}
    >
      <View style={styles.chatContent}>
        <FlatList
          ref={flatlistRef}
          keyExtractor={(item) => item.id}
          data={messages}
          renderItem={({ item: message }) => <MessageItem message={message} />}
          onContentSizeChange={() => {
            flatlistRef.current.scrollToEnd({ animated: true });
          }}
        />
      </View>

      <View style={styles.textInputContainer}>
        <View style={styles.textInputContent}>
          <View style={styles.leadingAction}>
            <RectButton
              style={styles.leadingButton}
              onPress={() => setIsEmojiBoardOpen(!isEmojiBoardOpen)}
            >
              <MaterialIcons
                name="insert-emoticon"
                size={30}
                color={theme.colors.primary}
              />
            </RectButton>
            <TextInput
              placeholder="Type your message..."
              placeholderTextColor="#444"
              style={styles.textInput}
              value={textMessage}
              onChangeText={(event: any) => setTextMessage(event.target)}
              onSubmitEditing={handleSubmitMessage}
            />
          </View>

          <RectButton style={styles.actions} onPress={handleShowPopover}>
            <MaterialIcons
              name="attachment"
              size={30}
              style={styles.attachmentIcon}
              color={theme.colors.primary}
            />
          </RectButton>

          <AnimatedPopover animatedValue={animatedValue} />
        </View>
      </View>

      {isEmojiBoardOpen && (
        <EmojiBoard
          showSearchBar={false}
          theme={theme.colors.primary}
          category={Categories.all}
          onEmojiSelected={(emoji) => {
            setTextMessage(emoji);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },

  chatContent: {
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  textInputContainer: {
    backgroundColor: "#fff",
  },

  textInputContent: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    margin: 20,
    height: 60,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leadingAction: {
    flexDirection: "row",
  },

  leadingButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  attachmentIcon: {
    transform: [{ rotate: "-45deg" }],
  },

  textInput: {
    height: 70,
    width: 250,
    fontSize: 17,
  },

  actions: {
    marginRight: 80,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
