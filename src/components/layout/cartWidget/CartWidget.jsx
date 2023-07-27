import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-div">
      <Link to={"/cart"}>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon color="action" className="cart" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
