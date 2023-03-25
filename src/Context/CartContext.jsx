import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState(["testando contexto"]);
  return (
    <CartContext.Provider value={{ product, setProduct }}>
      {children}
    </CartContext.Provider>
  );
};
