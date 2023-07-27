import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  return (
    <div>
      <h1>Acá va la vista del carrito</h1>

      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h1>{element.title}</h1>
            <h1>{element.price}</h1>
            <h2>{element.quantity}</h2>
            <Button onClick={() => deleteById(element.id)}>Eliminar</Button>
          </div>
        );
      })}
      <Link to={"/checkout"}>
        <Button>Finalizar compra</Button>
      </Link>

      <Button onClick={clearCart}>Limpiar carrito</Button>
    </div>
  );
};

export default Cart;
