import "../../../index.css";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

function ItemList({ items }) {
  return (
    <section className="product-card-container">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}

export default ItemList;
