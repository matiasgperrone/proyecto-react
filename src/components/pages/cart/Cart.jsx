import { Box, Button, Skeleton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

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
      {cart.length > 0 && (
        <>
          <h2>El total del carrito es: ${totalPrice}</h2>
          <Link to={"/checkout"}>
            <Button>Finalizar compra</Button>
          </Link>
          <Button onClick={limpiarCarrito}>Limpiar carrito</Button>
        </>
      )}
      {cart.length === 0 && <h2>Tu carrito está vacío :c</h2>}
    </div>
  );
};

export default Cart;
