import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, rejected) => {
      let productSelected = products.find((product) => product.id === id);
      resolve(productSelected);
    });

    promesa.then((res) => setProduct(res)).catch((err) => console.log("error"));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
  };

  return <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
