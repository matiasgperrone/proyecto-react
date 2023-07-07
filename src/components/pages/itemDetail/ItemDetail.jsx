import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, stock }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <CounterContainer agregarAlCarrito={agregarAlCarrito} stock={stock} />
    </div>
  );
};

export default ItemDetail;
