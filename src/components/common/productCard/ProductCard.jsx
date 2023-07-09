import "./ProductCard.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img" src={item.img} alt="" />
      </div>
      <h1 style={{ textAlign: "center" }}>{item.title}</h1>
      <h2 style={{ textAlign: "center" }}>${item.price}</h2>
      <Link to={`/itemDetail/${item.id}`}>
        <Button>Ver producto</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
