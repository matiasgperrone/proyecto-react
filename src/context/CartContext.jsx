import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = cart.some((element) => element.id === product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (product.id === element.id) {
          return { ...element, quantity: element.quantity + product.quantity };
        } else {
          return element;
        }
      });

      setCart(newArray);
      console.log(cart);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
