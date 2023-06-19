import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-div">
      <Badge badgeContent={7} color="primary">
        <ShoppingCartIcon color="action" className="cart" />
      </Badge>
    </div>
  );
};

export default Cart;
