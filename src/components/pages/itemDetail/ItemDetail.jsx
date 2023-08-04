import CounterContainer from "../../common/counter/CounterContainer";
import css from "./itemDetail.css";

const ItemDetail = ({
  product,
  agregarAlCarrito,
  stock,
  cantidadEnCarrito,
}) => {
  return (
    <div className="itemDetailContainer">
      <img src={product.img} style={{ width: "400px" }} />
      <div className="itemDetailInfo">
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        <CounterContainer
          cantidadEnCarrito={cantidadEnCarrito}
          agregarAlCarrito={agregarAlCarrito}
          stock={product.stock}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
