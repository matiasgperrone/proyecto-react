import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarrito = getQuantityById(id);

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
    addToCart(data);
  };

  return (
    <ItemDetail
      cantidadEnCarrito={cantidadEnCarrito}
      product={product}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default ItemDetailContainer;
