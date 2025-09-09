import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (producto) => {
    setCart((prevCart) => {
      const existente = prevCart.find((item) => item.id === producto.id);

      if (existente) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  const clearCart = () => setCart([]);


  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.cantidad, 0);


  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, getTotalItems, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
