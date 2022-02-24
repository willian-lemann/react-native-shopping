import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import useMessages from "../../hooks/useMessages";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

interface Message {
  id: string;
  text?: string;
  media?: ImageInfo | null;
  sender: string;
  time: string;
  isLiked?: boolean;
  unread?: boolean;
  token: string;
}
interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const { favoriteMessage, messages } = useMessages();
  const currentUserToken = "123456789";

  const isMe = message.token === currentUserToken;

  return (
    <View style={[styles.messageItem, isMe && { alignSelf: "flex-end" }]}>
      <View
        style={[
          styles.textContainer,
          isMe && {
            backgroundColor: "#f0f0f0",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          },
          message.media !== null && {
            height: 100,
            flexDirection: "row",
            justifyContent: "flex-start",
          },
        ]}
      >
        <Text style={styles.messageTimeText}>{message.time}</Text>

        {message.media !== null ? (
          <Image style={styles.media} source={{ uri: message.media?.uri }} />
        ) : (
          <Text style={styles.messageText}>{message.text}</Text>
        )}
      </View>
      {!isMe && (
        <RectButton
          style={styles.actionContainer}
          onPress={() => favoriteMessage(message.id)}
          rippleColor="#f0f0f0"
        >
          <MaterialIcons
            name={message.isLiked ? "favorite" : "favorite-border"}
            size={28}
            style={message.isLiked && { color: "#ff1125" }}
          />
        </RectButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    flex: 1,
    marginBottom: 10,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textContainer: {
    backgroundColor: "#00bc68",
    height: "100%",
    width: 330,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  messageTimeText: {
    fontSize: 16,
    opacity: 0.6,
  },

  messageText: {
    fontSize: 16,
  },

  media: {
    borderRadius: 10,
    width: 100,
    resizeMode: "cover",
    margin: 10,
  },

  actionContainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 100,
  },
});

export default MessageItem;
