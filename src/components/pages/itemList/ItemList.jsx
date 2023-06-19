import "./ItemList.css";
import Box from "@mui/material/Box";

function ItemList({ nombre }) {
  return (
    <Box sx={{ backgroundColor: "#EEEEEE" }}>
      <h1 className="bienvenida">Bienvenido al proyecto de {nombre}</h1>
    </Box>
  );
}

export default ItemList;
