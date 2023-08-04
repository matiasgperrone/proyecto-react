import { useState, useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../index.css";
import { dataBase } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(dataBase, "products");
    let document = doc(refCollection, id);
    getDoc(document).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ItemDetail
        cantidadEnCarrito={cantidadEnCarrito}
        product={product}
        agregarAlCarrito={agregarAlCarrito}
      />
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;
