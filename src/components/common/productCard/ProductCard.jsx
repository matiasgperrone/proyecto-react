import { Widgets } from "@mui/icons-material";
import React from "react";
import css from "./ProductCard.css";
import { Button } from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img" src={item.img} alt="" />
      </div>
      <h1 style={{ textAlign: "center" }}>{item.title}</h1>
      <h2 style={{ textAlign: "center" }}>${item.price}</h2>
      <Button>Ver producto</Button>
    </div>
  );
};

export default ProductCard;
