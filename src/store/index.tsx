import React from "react";

import { CartProvider } from "./cart/CartProvider";
import { ChatProvider } from "./chat/ChatProvider";
import { UIProvider } from "./ui/UIProvider";

const Provider: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <ChatProvider>
        <UIProvider>{children}</UIProvider>
      </ChatProvider>
    </CartProvider>
  );
};

export default Provider;
