import { useContext } from "react";
import { ChatContext } from "../store/chat/ChatProvider";

const useMessages = () => {
  const context = useContext(ChatContext);
  return context;
};

export default useMessages;
