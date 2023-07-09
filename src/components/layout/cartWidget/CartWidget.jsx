import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="cart-div">
      <Link to={"/cart"}>
        <Badge badgeContent={7} color="primary">
          <ShoppingCartIcon color="action" className="cart" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
