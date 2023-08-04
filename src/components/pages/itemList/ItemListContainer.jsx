import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let productsCollection = collection(dataBase, "products");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let arrayProducts = res.docs.map((element) => {
        return { ...element.data(), id: element.id };
      });
      setItems(arrayProducts);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
