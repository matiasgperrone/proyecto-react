import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    name: "Celu",
    price: 100,
    stock: 5,
  });

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      stock={product.stock}
    />
  );
};

export default ItemDetailContainer;
