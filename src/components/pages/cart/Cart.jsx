import { Box, Button, Skeleton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import css from "./cart.css";

const Cart = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();
  let limpiarCarrito = () =>
    Swal.fire({
      title: "Estás seguro que querés vaciar tu carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí, vaciar.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(), Swal.fire("El carrito fue vaciado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tus productos siguen en el carrito", "", "info");
      }
    });
  return (
    <div>
      {cart.map((element) => {
        return (
          <div className="cart-container" key={element.id}>
            <img src={element.img} style={{ width: "150px" }} />
            <div className="cart-grid">
              <small>Producto</small>
              <p>{element.title}</p>
            </div>
            <div className="cart-grid">
              <small>Precio</small>
              <p>{element.price}</p>
            </div>
            <div className="cart-grid">
              <small>Cantidad</small>
              <p>{element.quantity}</p>
            </div>
            <Button onClick={() => deleteById(element.id)}>Eliminar</Button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div className="cart-menu">
          <p
            style={{
              border: "2px, solid, black",
              color: "red",
            }}
          >
            Total: ${totalPrice}
          </p>
          <div className="cart-options">
            <Link to={"/checkout"}>
              <Button>Finalizar compra</Button>
            </Link>
            <Button onClick={limpiarCarrito}>Limpiar carrito</Button>
          </div>
        </div>
      )}
      {cart.length === 0 && <p className="emptyCart">Tu carrito está vacío</p>}
    </div>
  );
};

export default Cart;
