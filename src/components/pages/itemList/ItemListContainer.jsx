import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let filterProducts = products.filter(
      (element) => element.category === categoryName
    );

    const cargarProductos = new Promise((resolve, reject) => {
      resolve(categoryName ? filterProducts : products);
    });

    cargarProductos
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
