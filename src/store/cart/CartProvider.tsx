import React, { useEffect } from "react";
import { createContext, useState } from "react";

interface Cart {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface InitialState {
  cart: Array<Cart>;
  total: number;
  isCartEmpty: boolean;
  addItem: (item: Cart) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  calculateTotalPrice: () => void;
}

const CartContext = createContext({} as InitialState);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [totalPrice, setTotalPrice] = useState<Cart[]>([]);
  const [total, setTotal] = useState(0);

  function addItem(item: Cart) {
    setCart([...cart, item]);
    setTotalPrice([...cart, item]);
    calculateTotalPrice();
  }

  function removeItem(id: string) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function increment(id: string) {
    const newCartArray = [...cart];
    const newTotalPriceArray = [...totalPrice];

    const index = cart.findIndex((item) => item.id === id);

    newCartArray[index] = {
      ...newCartArray[index],
      quantity: newCartArray[index].quantity + 1,
    };

    setCart(newCartArray);

    newTotalPriceArray[index] = {
      ...newTotalPriceArray[index],
      price: newCartArray[index].quantity * newCartArray[index].price,
    };

    setTotalPrice(newTotalPriceArray);
  }

  function decrement(id: string) {
    const newCartArray = [...cart];
    const newTotalPriceArray = [...totalPrice];
    const index = cart.findIndex((item) => item.id === id);

    newCartArray[index] = {
      ...newCartArray[index],
      quantity:
        newCartArray[index].quantity <= 1
          ? 1
          : newCartArray[index].quantity - 1,
    };

    setCart(newCartArray);

    newTotalPriceArray[index] = {
      ...newTotalPriceArray[index],
      price: newCartArray[index].quantity * newCartArray[index].price,
    };

    setTotalPrice(newTotalPriceArray);
  }

  function calculateTotalPrice() {
    const prices = totalPrice.map((item) => item.price);

    const totalPrices = prices.reduce((previous, current) => {
      return previous + current;
    }, 0);

    setTotal(totalPrices);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        isCartEmpty: cart.length === 0,
        addItem,
        removeItem,
        increment,
        decrement,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
