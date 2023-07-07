import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        disabled={counter <= 1}
        variant="contained"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </Button>
      <Button>
        <h4>{counter}</h4>
      </Button>
      <Button
        disabled={counter >= stock}
        variant="contained"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>

      <Button onClick={() => agregarAlCarrito(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
