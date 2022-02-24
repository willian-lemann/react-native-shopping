import { useContext } from "react";
import { CartContext } from "../store/cart/CartProvider";

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default useCart;
