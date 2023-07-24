import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Acá va la vista del carrito</h1>
      <Link to={"/checkout"}>
        <Button>Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
