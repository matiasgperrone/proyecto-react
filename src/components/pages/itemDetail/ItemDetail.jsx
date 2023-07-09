import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, stock }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>

      <CounterContainer
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
      />
    </div>
  );
};

export default ItemDetail;
