import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import React from "react";
import { createContext, ReactNode, useState } from "react";

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

interface InitialState {
  messages: Array<Message>;
  favoriteMessage: (messageId: string) => void;
  addNewMessage: (message: Message) => void;
}

export const ChatContext = createContext({} as InitialState);

interface ChatProviderProps {
  children?: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Array<Message>>([
    {
      id: "1",
      sender: "Willian Leman Rocha",
      text: "Hello how are you?",
      time: "17:21",
      media: null,
      isLiked: false,
      unread: false,
      token: "123456789",
    },
    {
      id: "2",
      sender: "Harry",
      text: "Good, asd?",
      time: "17:22",
      media: null,
      isLiked: false,
      unread: false,
      token: "1234567890",
    },
    {
      id: "3",
      sender: "Willian Leman Rocha",
      text: "Good.",
      time: "17:21",
      media: null,
      isLiked: false,
      unread: false,
      token: "123456789",
    },
    {
      id: "4",
      sender: "Harry",
      text: "Thats cool!",
      time: "17:21",
      media: null,
      isLiked: false,
      unread: false,
      token: "1234567890",
    },
  ]);

  function addNewMessage(message: Message) {
    setMessages([...messages, message]);
  }

  function favoriteMessage(messageId: string) {
    const newMessagesArray = [...messages];
    const specificIndex = messages.findIndex(
      (message) => message.id === messageId
    );

    newMessagesArray[specificIndex] = {
      ...newMessagesArray[specificIndex],
      isLiked: !newMessagesArray[specificIndex].isLiked,
    };

    setMessages(newMessagesArray);
  }

  return (
    <ChatContext.Provider value={{ messages, favoriteMessage, addNewMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
