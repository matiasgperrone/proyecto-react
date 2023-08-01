import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = cart.some((element) => element.id === product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (product.id === element.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    Swal.fire({
      title: "Estás seguro que querés eliminar el articulo?",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        let newArray = cart.filter((element) => element.id !== id);
        setCart(newArray), Swal.fire("El articulo se elminó", "", "success");
      } else if (result.isDenied) {
        setCart(cart), Swal.fire("El producto sigue en el carrito", "", "info");
      }
    });
    // let newArray = cart.filter((element) => element.id !== id);
    // setCart(newArray);
  };

  const getQuantityById = (id) => {
    let producto = cart.find((element) => element.id === id);

    return producto?.quantity;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
