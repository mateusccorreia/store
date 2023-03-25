import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Cart = () => {
  const {setProduct} = useContext(CartContext);
  console.log('Verificar', setProduct)
  return <div>Teste</div>;
};
