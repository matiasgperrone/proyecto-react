import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let badgeNumber = getTotalQuantity();
  return (
    <div className="cart-div">
      <Link to={"/cart"}>
        <Badge badgeContent={badgeNumber} color="primary">
          <ShoppingCartIcon color="action" className="cart" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
